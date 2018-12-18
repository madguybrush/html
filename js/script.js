

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
	
	//>> php
	
	
$(".grid-item").each(function(){ 
  //$(this).css({"background":"blue"});
  var titre = $(this).find('.titre').text();
	console.log( titre );
	var firstletter = titre.slice(0,1).toLowerCase();
	console.log( firstletter );
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