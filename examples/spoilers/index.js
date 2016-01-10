$(document).ready(function(){



	// ABOUT THE GUY POPOUT
	$('.landpage-popoutbutton').click(function(){
		$('.landpage-cover').fadeIn(200);
		$('.head-menu').hide(0);
		$('.thisguy-close').show(0);
	});
	$('.thisguy-close').click(function(){
		$('.landpage-cover').hide(0);
		$('.thisguy-closetrans').show(0);
		$('.thisguy-close').hide(0);		
	});
	$('.thisguy-closetrans').mouseout(function(){
		$('.thisguy-closetrans').hide(0);
		$('.head-menu').fadeIn(200);
	});
	$('.landpage-cover').click(function(){
		$('.landpage-cover').hide(0);
		$('.thisguy-closetrans').hide(0);
		$('.thisguy-close').hide(0);
		$('.head-menu').fadeIn(200);	
	});



	// COPYRIGHT NOTICE
	$('.menufoot-right').click(function(){
		$('.copy-notice').show(200);
	});
	$(document).mouseup(function (e) {
    	var container = $(".copy-notice");
    	if (!container.is(e.target) && container.has(e.target).length === 0) {
        	$('.copy-notice').hide(200);
	     };
	});



	// REVEAL PAGES
	$('.head-close').click(function(){
		$('.landpage').css('display','block');
		$('.landpage').animate({top: 0}, 600 );
		$('.posterpage').delay(600).hide(0);
		$('.head-menu').css('margin-top','0px');
		$('.head-close').css('margin-top','-100px');
		$('.head-close').css('margin-left','40px');		
		$('.head-close').addClass('head-closepg1');
		$('.posterpage').css('background-color','#FFF9F0');
		$('.button-left').css('display','none');
		$('.button-right').css('display','none');
		$('.button-left').css('opacity','0');
		$('.button-right').css('opacity','0');	
		// RESETUJE KLASE SA POSTER STRANA
		$('.head-close').removeClass('head-closeposterpage');
		$('.head-close').removeClass('head-closeposterpage2');
		$('.head-close').removeClass('head-closeposterpage3');
		$('.head-close').removeClass('head-closeposterpage4');
		$('.head-close').removeClass('head-closeposterpage5');
		$('.head-close').removeClass('head-closeposterpage6');
		$('.head-close').removeClass('head-closeposterpage7');		
		$('.button-right').removeClass('button-rightclickedposter1');
		$('.button-right').removeClass('button-rightclickedposter2');
		$('.button-right').removeClass('button-rightclickedposter3');
		$('.button-right').removeClass('button-rightclickedposter4');
		$('.button-right').removeClass('button-rightclickedposter5');
		$('.button-right').removeClass('button-rightclickedposter6');
		$('.button-right').removeClass('button-rightclickedposter7');
		$('.button-left').removeClass('button-leftclickedposter1');
		$('.button-left').removeClass('button-leftclickedposter2');
		$('.button-left').removeClass('button-leftclickedposter3');
		$('.button-left').removeClass('button-leftclickedposter4');
		$('.button-left').removeClass('button-leftclickedposter5');
		$('.button-left').removeClass('button-leftclickedposter6');	
		$('.button-left').removeClass('button-leftclickedposter7');			
		// RESETUJE POSTERE NA 1.
		$('.poster1').delay(600).animate({marginLeft: 0 + '%'}, 0 );
		$('.poster1').delay(600).show(0);
		$('.poster2').animate({marginLeft: 100 + '%'}, 400 );
		$('.poster2').hide(0);
		$('.poster3').animate({marginLeft: 100 + '%'}, 400 );
		$('.poster3-footerwrap').animate({marginLeft: 100 + '%'}, 400 );
		$('.poster3').hide(0);
		$('.poster4').animate({marginLeft: 100 + '%'}, 400 );
		$('.poster4').hide(0);
		$('.poster5').animate({marginLeft: 100 + '%'}, 400 );
		$('.poster5').hide(0);
		$('.poster6').animate({marginLeft: 100 + '%'}, 400 );
		$('.poster6').hide(0);
		$('.poster6-fixmove').css('display','none');
		$('.poster7').animate({marginLeft: 100 + '%'}, 400 );
		$('.poster7').hide(0);		
	});




	// MAIN MENU OPEN AND CLOSE
	$('.head-menu').click(function(){
		if($('.head-menu').hasClass('head-menuclicked')) {
			$('.landpage-wrapper').removeClass('landpage-wrapperclicked');
			$('.head-menu').removeClass('head-menuclicked');
			$('.landpage-menu').removeClass('landpage-menuclicked');
			} else {
			$('.landpage-wrapper').addClass('landpage-wrapperclicked');
			$('.head-menu').addClass('head-menuclicked');
			$('.landpage-menu').addClass('landpage-menuclicked');
			$('.landpage-cover').hide(0);
		};
	});
	$('.landpage-wrapclose').click(function(){
			$('.landpage-wrapper').removeClass('landpage-wrapperclicked');
			$('.head-menu').removeClass('head-menuclicked');
			$('.landpage-menu').removeClass('landpage-menuclicked');
	});
	$('.landpage-scrollbutton').click(function(){
		$('.posterpage').css('display','block');
		$('.poster1').css('display','block');
		$('.landpage').animate({top: -100 + '%'}, 600 );
		$('.landpage').hide(0);
		$('.head-menu').css('margin-top','-100px');
		$('.head-close').css('margin-top','0px');
		$('.head-close').addClass('head-closeposterpage');
		$('.poster3-footerwrap').animate({marginLeft: 0 + '%'}, 0 );
		$('.poster6-fixmove').css('display','block');
		$('.button-right').show(0);
		$('.button-right').animate({opacity: 1}, 200);
		$('.button-right').addClass('button-rightclickedposter1');
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});




// BUTTON RIGHT ----------------------------------------------------------------------------
	$('.button-right').click(function(){

		if($('.button-right').hasClass('button-rightclickedposter1')) {
			$('.poster1').animate({marginLeft: -100 + '%'}, 400 );
			$('.poster1').hide(0);
			$('.poster2').animate({marginLeft: 0 + '%'}, 400 );
			$('.poster2').fadeIn(400);
			$('.head-close').removeClass('head-closeposterpage');
			$('.head-close').addClass('head-closeposterpage2');
			$('.posterpage').css('background-color','#f2f2f2');
			$('.head-close').css('margin-top','15px');
			$('.button-right').removeClass('button-rightclickedposter1');
			$('.button-right').addClass('button-rightclickedposter2');
			$('.button-left').show(0);
			$('.button-left').animate({opacity: 1}, 200);
			$('.button-left').addClass('button-leftclickedposter2');
			$('html, body').animate({scrollTop:$("body").offset().top},400);

		} else if($('.button-right').hasClass('button-rightclickedposter2')) {
			$('.poster2').animate({marginLeft: -100 + '%'}, 400 );
			$('.poster2').hide(0);
			$('.poster3').animate({marginLeft: 0 + '%'}, 400 );
			$('.poster3').fadeIn(400);
			$('.head-close').removeClass('head-closeposterpage2');
			$('.head-close').addClass('head-closeposterpage3');
			$('.posterpage').css('background-color','#f2f2f2');
			$('.head-close').css('margin-top','0');
			$('.button-right').removeClass('button-rightclickedposter2');
			$('.button-right').addClass('button-rightclickedposter3');
			$('.button-left').removeClass('button-leftclickedposter2');
			$('.button-left').addClass('button-leftclickedposter3');
			$('.poster3-footerwrap').animate({marginLeft: 0 + '%'}, 0 );
			$('html, body').animate({scrollTop:$("body").offset().top},400);

		} else if($('.button-right').hasClass('button-rightclickedposter3')) {
			$('.poster3').animate({marginLeft: -100 + '%'}, 400 );
			$('.poster3').hide(0);
			$('.poster4').animate({marginLeft: 0 + '%'}, 400 );
			$('.poster4').fadeIn(400);
			$('.head-close').removeClass('head-closeposterpage3');
			$('.head-close').addClass('head-closeposterpage4');
			$('.head-close').css('margin-top','-11px');
			$('.head-close').css('margin-left','11px');	
			$('.posterpage').css('background-color','#fff');
			$('.button-right').removeClass('button-rightclickedposter3');
			$('.button-right').addClass('button-rightclickedposter4');
			$('.button-left').removeClass('button-leftclickedposter3');
			$('.button-left').addClass('button-leftclickedposter4');
			$('.poster3-footerwrap').animate({marginLeft: -100 + '%'}, 0 );
			$('html, body').animate({scrollTop:$("body").offset().top},400);

		} else if($('.button-right').hasClass('button-rightclickedposter4')) {
			$('.poster4').animate({marginLeft: -100 + '%'}, 400 );
			$('.poster4').hide(0);
			$('.poster5').animate({marginLeft: 0 + '%'}, 400 );
			$('.poster5').fadeIn(400);
			$('.head-close').removeClass('head-closeposterpage4');
			$('.head-close').addClass('head-closeposterpage5');
			$('.posterpage').css('background-color','#F5F4F0');
			$('.head-close').css('margin-top','0');
			$('.head-close').css('margin-left','40px');	
			$('.button-right').removeClass('button-rightclickedposter4');
			$('.button-right').addClass('button-rightclickedposter5');
			$('.button-left').removeClass('button-leftclickedposter4');
			$('.button-left').addClass('button-leftclickedposter5');
			$('html, body').animate({scrollTop:$("body").offset().top},400);

		} else if($('.button-right').hasClass('button-rightclickedposter5')) {
			$('.poster5').animate({marginLeft: -100 + '%'}, 400 );
			$('.poster5').hide(0);
			$('.poster6').animate({marginLeft: 0 + '%'}, 400 );
			$('.poster6').fadeIn(400);
			$('.head-close').removeClass('head-closeposterpage5');
			$('.head-close').addClass('head-closeposterpage6');
			$('.head-close').css('margin-top','20px');			
			$('.posterpage').css('background-color','#000');	
			$('.button-right').removeClass('button-rightclickedposter5');
			$('.button-right').addClass('button-rightclickedposter6');
			$('.button-left').removeClass('button-leftclickedposter5');
			$('.button-left').addClass('button-leftclickedposter6');
			$('.poster6-fixmove').css('display','block');
			$('html, body').animate({scrollTop:$("body").offset().top},400);

		} else if($('.button-right').hasClass('button-rightclickedposter6')) {
			$('.poster6').animate({marginLeft: -100 + '%'}, 400 );
			$('.poster6').hide(0);
			$('.poster7').animate({marginLeft: 0 + '%'}, 400 );
			$('.poster7').fadeIn(400);
			$('.head-close').removeClass('head-closeposterpage6');
			$('.head-close').addClass('head-closeposterpage7');
			$('.head-close').css('margin-top','0px');				
			$('.posterpage').css('background-color','#fff');	
			$('.button-right').removeClass('button-rightclickedposter6');
			$('.button-right').addClass('button-rightclickedposter7');
			$('.button-left').removeClass('button-leftclickedposter6');
			$('.button-left').addClass('button-leftclickedposter7');
			$('.poster6-fixmove').css('display','none');
			$('.button-right').css('display','none');
			$('html, body').animate({scrollTop:$("body").offset().top},400);
		};
	});




// BUTTON LEFT -----------------------------------------------------------------------------
	$('.button-left').click(function(){

		if($('.button-left').hasClass('button-leftclickedposter2')) {
			$('.poster2').animate({marginLeft: 100 + '%'}, 400 );
			$('.poster2').hide(0);
			$('.poster1').animate({marginLeft: 0 + '%'}, 400 );
			$('.poster1').fadeIn(400);
			$('.button-right').removeClass('button-rightclickedposter2');
			$('.button-right').addClass('button-rightclickedposter1');
			$('.head-close').removeClass('head-closeposterpage2');
			$('.head-close').addClass('head-closeposterpage');
			$('.posterpage').css('background-color','#FFF9F0');
			$('.head-close').css('margin-top','0px');
			$('.button-left').css('display','none');
			$('.button-left').removeClass('button-leftclickedposter2');
			$('html, body').animate({scrollTop:$("body").offset().top},400);

		} else if($('.button-left').hasClass('button-leftclickedposter3')) {
			$('.poster3').animate({marginLeft: 100 + '%'}, 400 );
			$('.poster3').hide(0);
			$('.poster2').animate({marginLeft: 0 + '%'}, 400 );
			$('.poster2').fadeIn(400);
			$('.button-right').removeClass('button-rightclickedposter3');
			$('.button-right').addClass('button-rightclickedposter2');
			$('.head-close').removeClass('head-closeposterpage3');
			$('.head-close').addClass('head-closeposterpage2');
			$('.posterpage').css('background-color','#f2f2f2');
			$('.head-close').css('margin-top','15px');
			$('.button-left').removeClass('button-leftclickedposter3');
			$('.button-left').addClass('button-leftclickedposter2');
			$('.poster3-footerwrap').animate({marginLeft: 100 + '%'}, 400 );
			$('html, body').animate({scrollTop:$("body").offset().top},400);

		} else if($('.button-left').hasClass('button-leftclickedposter4')) {
			$('.poster4').animate({marginLeft: 100 + '%'}, 400 );
			$('.poster4').hide(0);
			$('.poster3').animate({marginLeft: 0 + '%'}, 400 );
			$('.poster3').fadeIn(400);
			$('.button-right').removeClass('button-rightclickedposter4');
			$('.button-right').addClass('button-rightclickedposter3');
			$('.head-close').removeClass('head-closeposterpage4');
			$('.head-close').addClass('head-closeposterpage3');
			$('.posterpage').css('background-color','#f2f2f2');
			$('.head-close').css('margin-top','15px');
			$('.head-close').css('margin-left','40px');			
			$('.button-left').removeClass('button-leftclickedposter4');
			$('.button-left').addClass('button-leftclickedposter3');
			$('.poster3-footerwrap').animate({marginLeft: 0 + '%'}, 400 );
			$('html, body').animate({scrollTop:$("body").offset().top},400);

		} else if($('.button-left').hasClass('button-leftclickedposter5')) {
			$('.poster5').animate({marginLeft: 100 + '%'}, 400 );
			$('.poster5').hide(0);
			$('.poster4').animate({marginLeft: 0 + '%'}, 400 );
			$('.poster4').fadeIn(400);
			$('.button-right').removeClass('button-rightclickedposter5');
			$('.button-right').addClass('button-rightclickedposter4');
			$('.head-close').removeClass('head-closeposterpage5');
			$('.head-close').addClass('head-closeposterpage4');
			$('.posterpage').css('background-color','#fff');
			$('.head-close').css('margin-top','-11px');
			$('.head-close').css('margin-left','11px');
			$('.button-left').removeClass('button-leftclickedposter5');
			$('.button-left').addClass('button-leftclickedposter4');
			$('html, body').animate({scrollTop:$("body").offset().top},400);

		} else if($('.button-left').hasClass('button-leftclickedposter6')) {
			$('.poster6').animate({marginLeft: 100 + '%'}, 400 );
			$('.poster6').hide(0);
			$('.poster5').animate({marginLeft: 0 + '%'}, 400 );
			$('.poster5').fadeIn(400);
			$('.button-right').removeClass('button-rightclickedposter6');
			$('.button-right').addClass('button-rightclickedposter5');
			$('.head-close').removeClass('head-closeposterpage6');
			$('.head-close').addClass('head-closeposterpage5');
			$('.head-close').css('margin-top','0px');			
			$('.posterpage').css('background-color','#F5F4F0');		
			$('.button-left').removeClass('button-leftclickedposter6');
			$('.button-left').addClass('button-leftclickedposter5');
			$('.poster6-fixmove').css('display','none');
			$('html, body').animate({scrollTop:$("body").offset().top},400);
			
		} else if($('.button-left').hasClass('button-leftclickedposter7')) {
			$('.poster7').animate({marginLeft: 100 + '%'}, 400 );
			$('.poster7').hide(0);
			$('.poster6').animate({marginLeft: 0 + '%'}, 400 );
			$('.poster6').fadeIn(400);
			$('.button-right').removeClass('button-rightclickedposter7');
			$('.button-right').addClass('button-rightclickedposter6');
			$('.head-close').removeClass('head-closeposterpage7');
			$('.head-close').addClass('head-closeposterpage6');
			$('.head-close').css('margin-top','20px');				
			$('.posterpage').css('background-color','#000');		
			$('.button-left').removeClass('button-leftclickedposter7');
			$('.button-left').addClass('button-leftclickedposter6');
			$('.poster6-fixmove').css('display','block');
			$('.button-right').css('display','block');			
			$('html, body').animate({scrollTop:$("body").offset().top},400);	
		};
	});
	


	// POSTER3
	$('.poster3-footercover').mouseenter(function(){
		$('.poster3-footerimg').css('bottom','-200px');
		$('.poster3-footerimg').css('left','40%');
	})
	.mouseleave(function(){
		$('.poster3-footerimg').css('bottom','0px');
		$('.poster3-footerimg').css('left','50%');
	});



});