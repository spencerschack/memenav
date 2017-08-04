(function() {
  var iframe = document.getElementById('memenav');
  if(iframe) {
    iframe.parentNode.removeChild(iframe);
  } else {
    iframe = document.createElement('iframe');
    iframe.id = 'memenav';
    var path = chrome.runtime.getURL('app/index.html');
    iframe.src = path + '?url=' + location.href;
    document.body.appendChild(iframe);
  }
})();
