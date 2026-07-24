export async function POST(request: Request) {
  const body = await request.text();

  // User can opt out of IP collection from the chat window; when set, skip
  // forwarding the IP header entirely so ai-search-api never sees it (and
  // its x-forwarded-for fallback only ever contains this function's own
  // connecting IP, not the visitor's, so no leak there either).
  let optOutIp = false;
  try {
    optOutIp = JSON.parse(body)?.optOutIp === true;
  } catch {
    // malformed body — let the upstream call fail/handle it below
  }

  // This server-side fetch to ai-search-api is a new outbound connection, so
  // ai-search-api would otherwise see this function's own IP instead of the
  // real visitor's — forward the visitor's IP explicitly.
  // Vercel overwrites x-forwarded-for on the next hop with this function's
  // own connecting IP, so a custom header name is needed to actually carry
  // the real visitor's IP through to ai-search-api.
  const clientIp = optOutIp ? null : request.headers.get('x-forwarded-for');

  try {
    const upstream = await fetch(`${process.env.AI_SEARCH_API_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(clientIp && { 'x-original-client-ip': clientIp }),
        ...(process.env.AI_SEARCH_API_BYPASS_SECRET && {
          'x-vercel-protection-bypass': process.env.AI_SEARCH_API_BYPASS_SECRET,
        }),
      },
      body,
    });
    const data = await upstream.text();
    return new Response(data, {
      status: upstream.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return Response.json({ error: 'Upstream chat service unreachable' }, { status: 502 });
  }
}
