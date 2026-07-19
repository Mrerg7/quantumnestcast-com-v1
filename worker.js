export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname.startsWith('www.')) {
      const target = new URL(request.url);
      target.hostname = target.hostname.replace(/^www\./, '');
      return Response.redirect(target.href, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
