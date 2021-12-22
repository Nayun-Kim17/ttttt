var container = document.getElementById('menu');
var state = 'play';


var animation = bodymovin.loadAnimation({
	container: document.getElementById('menu'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'data.json'
});

animation.goToAndStop(0, true);

container.addEventListener('click', () => {
  if(state === 'play') {
   animation.playSegments([0, 20], true);
    state = 'pause';
  } else {
    animation.playSegments([20, 39], true);
    state = 'play';
  }
});