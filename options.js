document.getElementById('save').addEventListener('click', () => {
  const url = document.getElementById('bookmarkManagerURL').value;
  chrome.storage.sync.set({
    bookmarkManagerURL: url
  }, () => {
    console.log('URL is set to ' + url);
  });
});

// Load the saved URL when options page is opened
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get('bookmarkManagerURL', (data) => {
    document.getElementById('bookmarkManagerURL').value = data.bookmarkManagerURL;
  });
});
