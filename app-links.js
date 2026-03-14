// Applies App Store URL to all download buttons/links
document.addEventListener('DOMContentLoaded', function() {
  var url = window.APP_STORE_URL || 'https://apps.apple.com/app/id0';
  document.querySelectorAll('.download-btn, .download-btn-large, .download-link, [data-download-app]').forEach(function(el) {
    if (el.tagName === 'A') {
      el.href = url;
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
