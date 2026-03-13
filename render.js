window.addEventListener("DOMContentLoaded", () => {
  const browserView = document.getElementById("browserView");
  const urlInput = document.getElementById("urlInput");
  const backBtn = document.getElementById("backBtn");
  const forwardBtn = document.getElementById("forwardBtn");
  const refreshBtn = document.getElementById("refreshBtn");
  const goBtn = document.getElementById("goBtn");

  function formatURL(input) {
    let value = input.trim();

    if (value === "") return "https://example.com";

    if (
      value.startsWith("http://") ||
      value.startsWith("https://")
    ) {
      return value;
    }

    return "https://" + value;
  }

  function goToURL() {
    const finalURL = formatURL(urlInput.value);
    console.log("Loading:", finalURL);
    browserView.setAttribute("src", finalURL);
  }

  goBtn.addEventListener("click", goToURL);

  urlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      goToURL();
    }
  });

  backBtn.addEventListener("click", () => {
    if (browserView.canGoBack()) {
      browserView.goBack();
    }
  });

  forwardBtn.addEventListener("click", () => {
    if (browserView.canGoForward()) {
      browserView.goForward();
    }
  });

  refreshBtn.addEventListener("click", () => {
    browserView.reload();
  });

  browserView.addEventListener("did-navigate", (event) => {
    urlInput.value = event.url;
    console.log("Navigated to:", event.url);
  });

  browserView.addEventListener("did-navigate-in-page", (event) => {
    urlInput.value = event.url;
  });

  browserView.addEventListener("did-fail-load", (event) => {
    console.log("Failed to load:", event.errorDescription);
  });
});