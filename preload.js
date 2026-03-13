const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("cortex", {
  analyzePage: async (payload) => {
    const res = await fetch("http://localhost:3000/analyze-page", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    return res.json();
  }
});