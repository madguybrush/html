

( function( $ )
{
var modalState;
var lineState;
modalState = 0; // 0 = closed, 1 = menu opened, 2 = search opened
lineState = "lines";


var window_width;
	var window_height;


	function ajouterclasseAlpha(){
//une fonction qui parcourt tout les grid-item et qui ajoute comme classe la première lettre du .titre

	/*var titre = $(this).find('.titre').text();
	console.log( titre );
	var firstletter = titre.slice(0,1);
	$( ".sidebar" ).addClass(firsletter);*/

$(".grid-item").each(function(){ 
  //$(this).css({"background":"blue"});
  var titre = $(this).find('.titre').text();
	//console.log( titre );
	var firstletter = titre.slice(0,1).toLowerCase();
	//console.log( firstletter );
	$(this).addClass(firstletter);
});

	}
	
function hidemenumobile(){
	
	//$( ".sidebar" ).slideUp( 1000 ).delay( 800 ); 
		$( '#modalmobile' ).hide();
		$( '.sidebar' ).removeClass("on");
		//$( ".sidebar" ).addClass("slideInUp"); 
		$( '#modalmobile' ).css( 'opacity', '0' );
		$( '#brandmobile' ).css( 'opacity', '1' );
		$( '.menumobile' ).css( 'background-color', 'rgba(0, 0, 0, 0.3)' );
		modalState = 0;
		//console.log(modalState);
		}
		
function displaymenumobile(){
		
		$( '#modalmobile' ).show();
		//$( "#modalmobile" ).addClass("slideInDown"); 
		//$( '#modalmobile' ).addClass("is-on");
		$( '.sidebar' ).addClass("on");
		//$( ".sidebar" ).slideDown( 1000 ); 
		$( ".sidebar" ).addClass("slideInDown"); 
		$( ".menuBasmobile" ).addClass("slideInUp"); 
		//.delay( 800 ).fadeIn( 800 );
		//$( ".sidebar" ).delay( 800 ).fadeIn( 800 );
		$( '#modalmobile' ).css( 'opacity', '1' );
		$( '#brandmobile' ).css( 'opacity', '0' );
		$( '.menumobile' ).css( 'background-color', 'transparent' );
		modalState = 1;
		//console.log(modalState);
		

	}


	function linestocross() {
	$( '#btnmenumobile' ).addClass("change");
	lineState = "cross";
	}
	
	function crosstolines() {
	$( '#btnmenumobile' ).removeClass("change");
	lineState = "lines";
	}
	
	function loupetocross(){
		$( '.loupe' ).hide();
		/*$( '.searchbutton' ).hide();*/
		$( '.cross1' ).show();
		$( '.cross2' ).show();
	}
	
		function crosstoloupe(){
		$( '.loupe' ).show();
		$( '.cross1' ).hide();
		$( '.cross2' ).hide();
	}
	
	function hidesearchmobile(){
	

		$( '#modalsearch' ).hide();
		$( '.sidebar' ).removeClass("on");
		$( '#modalsearch' ).css( 'opacity', '0' );
		$( '#brandmobile' ).css( 'opacity', '1' );
		modalState = 0;
		}
		
		
	function switchfrommodaltosearch(){
	
	hidemenumobile();
	displaysearchmobile();
	crosstolines();
		
		}
		
		
function displaysearchmobile(){
		console.log(modalState);
		$( '#modalsearch' ).show();
		$( '#modalsearch' ).css( 'opacity', '1' );
		$( '#brandmobile' ).css( 'opacity', '0' );
		modalState = 2;
		//console.log(modalState);
	}
	
	
	
			
	function resized(){
		
		window_width = $( window ).width();
		window_height = $( window ).height();
		
			if( window_width > 768 ){
				hidemenumobile();
				hidesearchmobile();
				crosstoloupe();
				crosstolines();
			}

	}
	
	
	
$( document ).ready( function() {
	
	resized();
	ajouterclasseAlpha();
	
	

// init Isotope
var $grid = $('.grid').isotope({
   itemSelector: '.grid-item',
	layoutMode: 'fitRows',
    percentPosition: true,
	fitRows: {
		gutter: '.gutter-sizer'
	},
	  // filter element with numbers greater than 50
  


	masonry: {
    // use element for option
    columnWidth: '.grid-sizer'
  }
});



/*
  sameTitle: function() {
    var titre = $(this).find('.titre').text();
	console.log( titre );
    return titre.match( );
  }*/
  
  var filterFns = {
   sameTitle: function() {
    // _this_ is the item element. Get text of element's .number
    var titre = $(this).find('.titre').text();
	var selected = $( ".selecttitre option:selected" ).text();
	console.log( titre );
    // return true to show, false to hide
    return titre === selected;
	//return parseInt( number, 10 ) > 50;
  },
     sameAuteur: function() {
    // _this_ is the item element. Get text of element's .number
    var auteur = $(this).find('.auteur').text();
	var selected = $( ".selectauteur option:selected" ).text();
	console.log( auteur );
    // return true to show, false to hide
    return auteur === selected;
	//return parseInt( number, 10 ) > 50;
  },
     sameCategory: function() {
    // _this_ is the item element. Get text of element's .number
    var categorie = $(this).find('.categorie').text();
	var selected = $( ".selectcategory option:selected" ).text();
	//console.log( titre );
    // return true to show, false to hide
    return categorie === selected;
	//return parseInt( number, 10 ) > 50;
  },
       sameCategoryBoutique: function() {
    // _this_ is the item element. Get text of element's .number
    var categorie = $(this).find('.categorieboutique').text();
	var selected = $( ".selectcategoryboutique option:selected" ).text();
	//console.log( titre );
    // return true to show, false to hide
    return categorie === selected;
	//return parseInt( number, 10 ) > 50;
  },
  
  sameCollection: function() {
    // _this_ is the item element. Get text of element's .number
    var collection = $(this).find('.collection').text();
	var selected = $( ".selectcollection option:selected" ).text();
	//console.log( titre );
    // return true to show, false to hide
    return collection === selected;
	//return parseInt( number, 10 ) > 50;
  }
  
   /*    sameAlpha: function() {

	var titre = $(this).find('.titre').text();
	console.log( titre );
	var firstletter = titre.slice(0,1);
	console.log( firstletter );
	var letter = this.value;
	return firstletter === letter;

  }*/
  };


$('.selecttitre').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
  //console.log( filterValue );
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

$('.selectauteur').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
  //console.log( filterValue );
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
  
});

$('.selectcategory').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
//console.log( filterValue );
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
  
});

$('.selectcategoryboutique').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
  //console.log( filterValue );
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
  
});

$('.selectalpha').on( 'click', function() {
  // get filter value from option value
  
    var filterValue = $(this).attr('data-filter');
	console.log( filterValue );
  // use filter function if value matches
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
  
  
 /* var filterValue = "sameAlpha"; 
  var letter = $(this).text();
  console.log( letter);
  filterValue = filterFns[ filterValue ] || filterValue;
 $grid.isotope({ filter: filterValue });*/
  
});


$('.selectcollection').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
  console.log( filterValue );
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
  
});

/*
$( ".selecttitre" ).change(function() {
  
  var str = "";
    $( ".selecttitre option:selected" ).each(function() {
      str += $( this ).text() + " ";
    });

	var filterValue =  $(this).attr('data-filter'); 
	console.log( filterValue );
	filterValue = filterFns[ filterValue ] || filterValue;
	$grid.isotope({ filter: filterValue });
});
*/
	
	
	
		$( '#btnmenumobile' ).click( function(e){
			if (modalState === 0){
				displaymenumobile();
				linestocross();
			}
			else if (modalState === 1){
				hidemenumobile();
				crosstolines();
			}
			else{ // 2
				if (lineState === "cross"){
				hidesearchmobile();
				crosstolines();
			//	console.log("cross");
				}
				else{
				
				hidesearchmobile();
				displaymenumobile();
				linestocross();
				crosstoloupe();
			//	console.log("lines");
				}
			}
	} );
	
		$( '#btnmenusearch' ).click( function(e){
			if (modalState === 0){
				displaysearchmobile();
				loupetocross();
			//	console.log("lol");
			}
			else if (modalState === 1){
			switchfrommodaltosearch();
			loupetocross();
			//console.log("loli");
			}
			else{ // 2
				hidesearchmobile();
				if (lineState === "cross"){ crosstolines(); }
				//else { linestocross(); }
				crosstoloupe();
				//console.log("lolilol");
			}
	} );
	
	
	
});

	$( window ).resize(
		function(){

			resized();

		}
	);
	
	$( window ).on( "orientationchange", function( event ) {
		resized();
	});



   } )( jQuery );