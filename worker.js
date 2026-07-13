export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname === '/' ? '/index.html' : url.pathname;
    
    // Map content types
    const contentTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.txt': 'text/plain',
    };
    
    const ext = path.substring(path.lastIndexOf('.'));
    const contentType = contentTypes[ext] || 'application/octet-stream';
    
    try {
      const asset = await env.ASSETS.fetch(request);
      return new Response(asset.body, {
        status: asset.status,
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=3600'
        }
      });
    } catch (e) {
      return new Response('Not Found', { status: 404 });
    }
  }
}
