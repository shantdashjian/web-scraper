function normalizeURL(url: string): string {
  if (url.startsWith("https://")) {
    url = url.substring(8);
  }
  if (url.startsWith("http://")) {
    url = url.substring(7);
  }
  if (url.endsWith("/")) {
    url = url.substring(0, url.length - 1);
  }
  return url;
}

export { normalizeURL };
