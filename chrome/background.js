chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.insertCSS({
    file: 'bootstrap.css'
  });
  chrome.tabs.executeScript({
    file: 'bootstrap.js'
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, respond) {
  fetch(request.url, request.options)
    .then(response => response.json())
    .then(respond);
  return true;
});
