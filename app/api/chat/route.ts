export async function POST(request: Request) {
  const body = await request.text();

  try {
    const upstream = await fetch(`${process.env.AI_SEARCH_API_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
