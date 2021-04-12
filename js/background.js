function onBeforeRequest(details) {
  const match = /hls\/(.+?)$/gim.exec(details.url);
  if (match !== null && match.length > 1) {
    return {
      redirectUrl: `https://twitch.zibbp.tech/playlist/${encodeURIComponent(
        match[1]
      )}`,
    };
  } else {
    return {
      redirectUrl: details.url,
    };
  }
}

browser.webRequest.onBeforeRequest.addListener(
  onBeforeRequest,
  { urls: ["https://usher.ttvnw.net/api/channel/hls/*"] },
  ["blocking"]
);
