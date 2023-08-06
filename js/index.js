var elTheme = document.getElementById('theme');
var elBody = document.getElementById('body');

elTheme.addEventListener('change', function () {
  if (elTheme.checked === true) {
    elBody.className = 'dark';
  } else {
    elBody.className = '';
  }
});
