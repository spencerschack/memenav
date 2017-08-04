(function() {
  var iframe = document.getElementById('memenav');
  if(iframe) {
    iframe.parentNode.removeChild(iframe);
  } else {
    iframe = document.createElement('iframe');
    iframe.id = 'memenav';
    var path = safari.extension.baseURI + 'app/index.html';
    iframe.src = path;
    document.body.appendChild(iframe);
  }
})();
