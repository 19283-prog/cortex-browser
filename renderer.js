window.onload = () => {

const browser = document.getElementById("browserView");
const urlInput = document.getElementById("urlInput");

document.getElementById("goBtn").onclick = () => {

let url = urlInput.value;

if (!url.startsWith("http")) {
url = "https://" + url;
}

browser.src = url;

};

document.getElementById("backBtn").onclick = () => {
if (browser.canGoBack()) browser.goBack();
};

document.getElementById("forwardBtn").onclick = () => {
if (browser.canGoForward()) browser.goForward();
};

document.getElementById("refreshBtn").onclick = () => {
browser.reload();
};

};