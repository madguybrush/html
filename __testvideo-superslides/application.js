


$(document).ready(function() {
  $(document).on('init.slides', function() {
	  var vid = document.getElementById("bgvid"); vid.play();
    $('.loading-container').fadeOut(function() {
      $(this).remove();
    });
  });

  $('#slides').superslides({
	  play: 0,
    slide_easing: 'easeInOutCubic',
   slide_speed: 800,
	animation: 'fade',
    pagination: false,
    hashchange: true,
    scrollable: true
  });
  
  $(document).on('init.slides', function() {  });

  
  		$( '.next' ).click( function(e){
			
$('#slides').superslides('animate', 'next');
		} );
  
  
    		$( '.prev' ).click( function(e){
			
$('#slides').superslides('animate', 'prev');
		} );
  
  
  document.ontouchmove = function(e) {
    e.preventDefault();
  };
  $('#slides').hammer().on('swipeleft', function() {
    $(this).superslides('animate', 'next');
  });

  $('#slides').hammer().on('swiperight', function() {
    $(this).superslides('animate', 'prev');
  });

  // Update verion based on github tags
  var url = 'https://api.github.com/repos/nicinabox/superslides/git/refs/tags',
      version;
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(json) {
      var data          = json.data,
          regex_version = /\d\.\d\.\d?/,
          download_link = $('#download').attr('href');

      version = data.pop().ref.split('/').pop();

      $('.version').html(version);
      

    }
  });

  //$(document).on('click', '#download', function(e) {
  //  window.location.hash = "#download-" + version.replace(/\./g, '');
  //  _gauges.push(['track']);
 // });
});
