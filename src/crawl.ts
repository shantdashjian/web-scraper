function normalizeURL(url: string) {
  const urlObj = new URL(url);
  let fullPath = `${urlObj.host}${urlObj.pathname}`;
  if (fullPath.slice(-1) === "/") {
    fullPath = fullPath.slice(0, -1);
  }
  return fullPath;
}

function getURLsFromHTML(html: string, baseURL: string) {
	
}

export { normalizeURL };
