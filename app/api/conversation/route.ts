export async function POST(request: Request) {
  const body = await request.text();

  try {
    const upstream = await fetch(`${process.env.AI_SEARCH_API_URL}/api/conversation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
    return Response.json({ error: 'Upstream conversation service unreachable' }, { status: 502 });
  }
}
