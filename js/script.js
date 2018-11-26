( function( $ )
{
var modalState;
var lineState;
modalState = 0; // 0 = closed, 1 = menu opened, 2 = search opened
lineState = "lines";


var window_width;
	var window_height;


	

	
function hidemenumobile(){
	
	//$( ".sidebar" ).slideUp( 1000 ).delay( 800 ); 
		$( '#modalmobile' ).hide();
		$( '.sidebar' ).removeClass("on");
		//$( ".sidebar" ).addClass("slideInUp"); 
		$( '#modalmobile' ).css( 'opacity', '0' );
		$( '#brandmobile' ).css( 'opacity', '1' );
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