$(document).ready(function() {
  $('#slides').superslides({
	  play: 5000,
    slide_easing: 'easeInOutCubic',
    slide_speed: 800,
		animation: 'fade',
    pagination: true,
    hashchange: true,
    scrollable: true
  });
});