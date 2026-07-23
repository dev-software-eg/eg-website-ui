export async function POST(request: Request) {
  const body = await request.text();
  // This server-side fetch to ai-search-api is a new outbound connection, so
  // ai-search-api would otherwise see this function's own IP instead of the
  // real visitor's — forward the visitor's IP explicitly.
  const clientIp = request.headers.get('x-forwarded-for');
  console.log('DEBUG headers', {
    'x-forwarded-for': request.headers.get('x-forwarded-for'),
    'x-real-ip': request.headers.get('x-real-ip'),
    'x-vercel-forwarded-for': request.headers.get('x-vercel-forwarded-for'),
    'x-vercel-ip': request.headers.get('x-vercel-ip'),
  });

  try {
    const upstream = await fetch(`${process.env.AI_SEARCH_API_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(clientIp && { 'x-forwarded-for': clientIp }),
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
