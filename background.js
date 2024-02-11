chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "addBookmark",
    title: "Add to Postmarks",
    contexts: ["page", "link"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "addBookmark") {
    addBookmark(tab);
  }
});

chrome.action.onClicked.addListener((tab) => {
  addBookmark(tab);
});

function addBookmark(tab) {
  chrome.storage.sync.get("bookmarkManagerURL", ({
    bookmarkManagerURL
  }) => {
    const url = bookmarkManagerURL || 'https://postmarks.glitch.me';
    const fullURL = `${url}/bookmark/popup?url=${encodeURIComponent(tab.url)}&highlight=${encodeURIComponent('')}`;

    // Open a new tab with the URL
    chrome.tabs.create({
      url: fullURL
    });
  });
}
