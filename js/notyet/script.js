
// init Isotope catalogue
/*
var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
	layoutMode: 'fitRows',
    percentPosition: true,
	 sortAscending: {
    name: true,
	annee: false,
    category: false
  },
	  getSortData: {
    name: '.name',
    annee: '.annee',
    category: '[data-category]'
  },
  masonry: {
    columnWidth: '.grid-sizer'
  }
});*/

  
// init Isotope
var $grid = $('.grid').isotope({
   itemSelector: '.grid-item',
	layoutMode: 'fitRows',
    percentPosition: true,
	fitRows: {
		gutter: '.gutter-sizer'
	},
	sortAscending: {
    name: true,
	annee: false, // (plus récent d’abord)
    category: false
	},
	getSortData: {
    name: '.name',
    annee: '.annee',
    category: '[data-category]'
	},
	masonry: {
    // use element for option
    columnWidth: '.grid-sizer'
  }
});

$( document ).ready( function() {

  $grid.isotope({ sortBy: 'annee' }); // par ordre chronologique (plus récent d’abord)
  
  
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    	$('.blanc').addClass('d-none');
	  $('.noir').removeClass('d-none');
  
  }
  else{
  
  if ($(window).width() < 992) {
   	$('.blanc').addClass('d-none');
	  $('.noir').removeClass('d-none');
}
else{
	$('.form-control').addClass('top');
}
  }
  });
  
  
  window.onresize = function() {
	  
 if ($(window).scrollTop() == 0){	  
  if ($(window).width() < 992) {
   	$('.blanc').addClass('d-none');
	  $('.noir').removeClass('d-none');
	  $('.form-control').removeClass('top');
	  /*$('.form-control').addClass('top');*/
}
   else { 
     	$('.noir').addClass('d-none');
	  $('.blanc').removeClass('d-none');
	  $('.form-control').addClass('top');
	  /*$('.form-control').removeClass('top');*/
  
  }
  
 }
 
  else{	/* not at top */
  	  $('.navbar').addClass('fixed-top');
	  $('.navbar').addClass('fondblanc');
	  	  $('.nav-link').addClass('textenoir');
		   $('.loupe').addClass('textenoir');
		   		   $('.form-control').addClass('bordnoir');
	  $('.blanc').addClass('d-none');
	  $('.noir').removeClass('d-none');
	  $('.form-control').removeClass('top');
  }
  
}
  

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});

// sort items on button click
$('.sort-by-button-group').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});


$(".alpha").click(function(){
    	  $('.alpha').addClass('active');
		   $('.chrono').removeClass('active');
});

$(".chrono").click(function(){
    	  $('.chrono').addClass('active');
		   $('.alpha').removeClass('active');
});


$(window).scroll(function(){
	
	
if(( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) || (($(window).width() < 992))) {
  if ($(window).scrollTop() > 0){	
	  $('.navbar').addClass('fixed-top');
	    }
  else{
	   $('.navbar').removeClass('fixed-top');
	 /* 	$('.blanc').addClass('d-none');
	  $('.noir').removeClass('d-none');*/
  }
}	
 else {	
  if ($(window).scrollTop() > 0){
	  $('.navbar').addClass('fixed-top');
	  $('.navbar').addClass('fondblanc');
	  	  $('.nav-link').addClass('textenoir');
		   $('.loupe').addClass('textenoir');
		   $('.form-control').addClass('bordnoir');
		   $('.form-control').addClass('textenoir');
		   	$('.form-control').removeClass('top');
	  $('.blanc').addClass('d-none');
	  $('.noir').removeClass('d-none');
	   /*$('.navbar').css({ "background-color": "#fff" });*/
  }
  else{
	   $('.navbar').removeClass('fixed-top');
	   	  $('.noir').addClass('d-none');
	  $('.blanc').removeClass('d-none');
	  	  $('.navbar').removeClass('fondblanc');
		    	  $('.nav-link').removeClass('textenoir');
				     $('.loupe').removeClass('textenoir');
					    $('.form-control').removeClass('bordnoir');
						$('.form-control').removeClass('textenoir');
						$('.form-control').addClass('top');
  }
  
 }
});

