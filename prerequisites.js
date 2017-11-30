// Separating sections if javascript is enabled to change background
var myStories = document.getElementsByClassName('myStory');

for(i = 0; i < myStories.length; i++) {
  myStories[i].classList.add('separate');
}

// Changing the background between sections
document.addEventListener('scroll', function (e) {
  var position = window.pageYOffset,
      deviceHeight = window.innerHeight,
      back = document.getElementById('background'),
      filter = document.getElementById('filter'),
      classes = ['original', 'turing', 'code', 'motherboard', 'typing1', 'servers', 'worldWideWeb'],
      index = Math.floor(position / (2 * deviceHeight));

  back.className = classes[index];
  filter.className = position < 2 * deviceHeight ? 'dark' : 'light';
})
