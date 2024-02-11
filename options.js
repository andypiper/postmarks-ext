function isValidUrl(url) {
  try {
    new URL(url);
  } catch (_) {
    return false;
  }

  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // or IP address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

  return pattern.test(url);
}

function handleFormSubmission() {
  const url = document.getElementById('bookmarkManagerURL').value;
  const newUrl = url.trim();
  if (newUrl === '' || !isValidUrl(newUrl)) {
    // If the URL is empty, show an error message
    alert('Please enter a valid address for your Postmarks instance.');
    return;
  }
  chrome.storage.sync.set({
    bookmarkManagerURL: newUrl
  }, () => {
    console.log('URL is set to ' + newUrl);
    // Display an alert message to the user indicating that the address has been saved
    alert(`Postmarks address saved: ${newUrl}`);
  });
}

document.getElementById('options-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting normally
  handleFormSubmission();
});

// Load the saved URL when options page is opened
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get('bookmarkManagerURL', (data) => {
    document.getElementById('bookmarkManagerURL').value = data.bookmarkManagerURL;
  });
});
