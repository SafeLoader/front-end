chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.emailData) {
    chrome.storage.local.set({ emailData: request.emailData }, () => {
      console.log("Stored email data");
      sendResponse({ status: "success" });
    });
  }
  if (request.storeCurrentTabUrl) {
    chrome.storage.local.set(
      { storeCurrentTabUrl: request.storeCurrentTabUrl },
      () => {
        console.log("Stored current tab URL");
        sendResponse({ status: "success" });
      }
    );
  }
  if (request.storeUrls) {
    chrome.storage.local.set({ storeUrls: request.storeUrls }, () => {
      console.log("Stored URLs");
      sendResponse({ status: "success" });
    });
  }

  return true; // Keeps the message channel open until sendResponse is called
});
