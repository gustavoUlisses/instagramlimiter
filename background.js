chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes("instagram.com")) {
      setTimeout(() => {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ["content.js"]
        });
      }, 60000); // 1 minute delay
    }
  });
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "closeInstagramTabs") {
      chrome.tabs.query({ url: "*://*.instagram.com/*" }, (tabs) => {
        tabs.forEach((tab) => {
          chrome.tabs.remove(tab.id);
        });
      });
    }
  });