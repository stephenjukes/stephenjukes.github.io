document.addEventListener('scroll', function (e) {

  var pos = e.pageY;
  var h = window.innerHeight;
  var back = document.getElementById('background');
  var filter = document.getElementById('filter');

  if (pos > 0 && pos < 2 * h) {
    back.className = '';
    filter.className = '';
    back.classList.add('original');
    filter.classList.add('dark');
  }

  if (pos > 2 * h) {
    filter.className = '';
    filter.classList.add('light');
  }

  if (pos > 2 * h && pos < 4 * h) {
    back.className = '';
    back.classList.add('turing');
  }

  if (pos > 4 * h && pos < 6 * h) {
    back.className = '';
    back.classList.add('code');
  }

  if (pos > 6 * h && pos < 8 * h) {
    back.className = '';
    back.classList.add('motherboard');
  }

  if (pos > 8 * h && pos < 10 * h) {
    back.className = '';
    back.classList.add('typing1');
  }

  if (pos > 10 * h && pos < 12 * h) {
    back.className = '';
    back.classList.add('servers');
  }

  if (pos > 12 * h && pos < 14 * h) {
    back.className = '';
    back.classList.add('worldWideWeb');
  }

})
