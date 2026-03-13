const urlInput = document.getElementById("urlInput");
const goBtn = document.getElementById("goBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const refreshBtn = document.getElementById("refreshBtn");
const quickLinks = document.querySelectorAll(".quick-link");

async function navigateTo(url) {
  const result = await window.cortexBrowser.navigate(url);

  if (!result.ok) {
    alert(`Navigation failed: ${result.error}`);
    return;
  }

  urlInput.value = result.url;
  await updateNavButtons();
}

async function updateNavButtons() {
  const state = await window.cortexBrowser.getState();
  backBtn.disabled = !state.canGoBack;
  forwardBtn.disabled = !state.canGoForward;

  if (state.url) {
    urlInput.value = state.url;
  }
}

goBtn.addEventListener("click", async () => {
  await navigateTo(urlInput.value);
});

urlInput.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    await navigateTo(urlInput.value);
  }
});

backBtn.addEventListener("click", async () => {
  await window.cortexBrowser.back();
  await updateNavButtons();
});

forwardBtn.addEventListener("click", async () => {
  await window.cortexBrowser.forward();
  await updateNavButtons();
});

refreshBtn.addEventListener("click", async () => {
  await window.cortexBrowser.refresh();
  await updateNavButtons();
});

quickLinks.forEach((button) => {
  button.addEventListener("click", async () => {
    const url = button.dataset.url;
    await navigateTo(url);
  });
});

updateNavButtons();