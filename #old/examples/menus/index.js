$(document).ready(function(){










	// SCROLLBARS INIT ///////////////////////////////////////
    (function($){
        $(window).load(function(){
            $(".page2-menutop").mCustomScrollbar({
            	theme:"minimal",
          		scrollInertia: 200
            });
            $(".page2-notifbody").mCustomScrollbar({
            	theme:"minimal",
          		scrollInertia: 200
            });
            $(".page1-menu").mCustomScrollbar({
            	theme:"minimal",
          		scrollInertia: 200
            });
            $(".page3-list").mCustomScrollbar({
            	theme:"minimal",
          		scrollInertia: 200
            });
            $(".page3-panel-messages").mCustomScrollbar({
            	theme:"minimal",
          		scrollInertia: 200
            });
            $(".message-body-text").mCustomScrollbar({
            	theme:"minimal",
          		scrollInertia: 200
            });
            $(".page6-menu-wrapper").mCustomScrollbar({
            	theme:"minimal",
          		scrollInertia: 200
            });


          });
    })(jQuery);










	// TOP MENU INTERACTION ////////////////////////////////////////
	$('.top-menu-li').click(function(){
		$(this).addClass('top-menu-picked');
		$(this).siblings().removeClass('top-menu-picked');
	});
	$('.example1').click(function(){
		$('.page1-wrapper').fadeIn(0);
		$('.page2-wrapper').fadeOut(0);
		$('.page3-wrapper').fadeOut(0);
		$('.page4-wrapper').fadeOut(0);
		$('.page5-wrapper').fadeOut(0);
		$('.page6-wrapper').fadeOut(0);
	});
	$('.example2').click(function(){
		$('.page2-wrapper').fadeIn(0);
		$('.page1-wrapper').fadeOut(0);
		$('.page3-wrapper').fadeOut(0);
		$('.page4-wrapper').fadeOut(0);
		$('.page5-wrapper').fadeOut(0);
		$('.page6-wrapper').fadeOut(0);
	});
	$('.example3').click(function(){
		$('.page3-wrapper').fadeIn(0);
		$('.page1-wrapper').fadeOut(0);
		$('.page2-wrapper').fadeOut(0);
		$('.page4-wrapper').fadeOut(0);
		$('.page5-wrapper').fadeOut(0);
		$('.page6-wrapper').fadeOut(0);
	});
	$('.example4').click(function(){
		$('.page4-wrapper').fadeIn(0);
		$('.page1-wrapper').fadeOut(0);
		$('.page2-wrapper').fadeOut(0);
		$('.page3-wrapper').fadeOut(0);
		$('.page5-wrapper').fadeOut(0);
		$('.page6-wrapper').fadeOut(0);
	});
	$('.example5').click(function(){
		$('.page5-wrapper').fadeIn(0);
		$('.page1-wrapper').fadeOut(0);
		$('.page2-wrapper').fadeOut(0);
		$('.page3-wrapper').fadeOut(0);
		$('.page4-wrapper').fadeOut(0);
		$('.page6-wrapper').fadeOut(0);
	});
	$('.example6').click(function(){
		$('.page6-wrapper').fadeIn(0);
		$('.page1-wrapper').fadeOut(0);
		$('.page2-wrapper').fadeOut(0);
		$('.page3-wrapper').fadeOut(0);
		$('.page4-wrapper').fadeOut(0);
		$('.page5-wrapper').fadeOut(0);
	});














	// MENU 1 ///////////////////////////////////////////////////////
	document.querySelector( ".page1-menubutton" )
  		.addEventListener( "click", function() {
    	this.classList.toggle( "active" );
 	 });

	$('.page1-menubutton').click(function(){
		if($('.page1-menubutton').hasClass('menuactiv')) {
			$('.page1-menubutton').removeClass('menuactiv')
			$('.page1-body').css('margin-left','0');
			$('.page1-menu').css('left','-50px');
			$('.page1-menucover').fadeIn();
			$('.page1-bodycover').fadeOut();
		} else {
			$('.page1-menubutton').addClass('menuactiv')
			$('.page1-body').css('margin-left','200px');
			$('.page1-menu').css('left','0px');
			$('.page1-menucover').fadeOut();
			$('.page1-bodycover').fadeIn();
		};
	});
	$('.page1-bodycover').click(function(){
			$('.page1-menubutton').removeClass('menuactiv')
			$('.page1-body').css('margin-left','0');
			$('.page1-menu').css('left','-50px');
			$('.page1-menucover').fadeIn();
			$('.page1-bodycover').fadeOut();
			$('.page1-menubutton').removeClass("active");
	});
	$('.page1-menuitem').click(function(){
			$(this).addClass('page1-menuitem-selected');
			$(this).siblings().removeClass('page1-menuitem-selected');
	});
















	// MENU 2 ///////////////////////////////////////////////////////
	$('.page2-menuclose').click(function(){
		if($('.page2-menuclose').hasClass('menuactiv2')) {
			$('.page2-menuclose').removeClass('menuactiv2')
			$('.page2-body').css('left','0px');
			$('.page2-menu').css('left','-290px');
			$('.page2-menubutton').css('left','20px');
			$('.page2-menubutton').css('transform','rotate(0deg)');
			$('.page2-menuclose').css('left','20px');
			$('.page2-menuclose').css('transform','rotate(0deg)');			
			$('.page2-menuclose').css('opacity','0')
			$('.page2-menubutton').css('box-shadow','2px 2px 2px #4279BD')
			$('.page2-body').css('box-shadow','none')
		} else {
			$('.page2-menuclose').addClass('menuactiv2')
			$('.page2-body').css('left','290px');
			$('.page2-menu').css('left','0px');
			$('.page2-menubutton').css('left','-60px');	
			$('.page2-menubutton').css('transform','rotate(-90deg)');
			$('.page2-menuclose').css('left','-60px');	
			$('.page2-menuclose').css('transform','rotate(-90deg)');			
			$('.page2-menuclose').css('opacity','1')
			$('.page2-menubutton').css('box-shadow','-2px 0px 2px #4279BD')
			$('.page2-body').css('box-shadow','inset 15px 0px 10px -10px rgba(0,0,0,.4)')
		};
	});
	$('.page2-menu-settings').click(function(){
		$('.page2-topmenu').toggle(0);
	});
	$(document).mouseup(function (e) {
    	var container = $(".page2-topmenu");
    	if (!container.is(e.target)
        	&& container.has(e.target).length === 0) {
        container.hide();
    	};
	});

    // NA LOAD STRANICE, NOTIF JE MAO
	$('.notif-messages').click(function(){
		$('.page2-menubottom').css('bottom','0');
		$('.page2-menutop').css('height','70%');
		$('.page-messages').css('display','block');
		$('.page-trends').css('display','none');
		$('.page2-notifications').addClass('notifications-start');
	});
	$('.notif-trends').click(function(){
		$('.page2-menubottom').css('bottom','0');
		$('.page2-menutop').css('height','70%');
		$('.page-messages').css('display','none');
		$('.page-trends').css('display','block');
		$('.page2-notifications').addClass('notifications-start');
	});
    $('.page2-notifications').click(function(){
    	if($('.page2-notifications').hasClass('notifications-start')) {
    		$('.page2-menubottom').css('bottom','calc(-30% + 23px)')
			$('.page2-menutop').css('height','100%')
			$('.page-messages').css('display','none');
			$('.page-trends').css('display','none');
			$('.notifications-start').removeClass('notifications-start');
    	};
    });

    // PREVIEW PORUKA
    $('.page-message').click(function(){
    	$('.page2-menutop').css('height','0');
    	$('.page2-menubottom').css('height','100%');
    	$('.page2-notifications').addClass('notifications-read');
    	$('.page2-menubutton').css('display','none');
    	$('.page2-menuclose').css('display','none');
    	$('.page2-notifications').addClass('notifications-read');
    	$('.notifications-start').removeClass('notifications-start');
    	$('.page2-notifications-close').addClass('page2-notifications-closefull');
    });
    $('.page-trend').click(function(){
    	$('.page2-menutop').css('height','0');
    	$('.page2-menubottom').css('height','100%');
    	$('.page2-notifications').addClass('notifications-read');
    	$('.page2-menubutton').css('display','none');
    	$('.page2-menuclose').css('display','none');
    	$('.page2-notifications').addClass('notifications-read');
    	$('.notifications-start').removeClass('notifications-start');
    	$('.page2-notifications-close').addClass('page2-notifications-closefull');
    });
    $('.page2-notifications').click(function(){
    	if($('.page2-notifications').hasClass('notifications-read')) {
    		$('.page2-menutop').css('height','70%');
    		$('.page2-menubottom').css('height','30%');
    		$('.page2-menubottom').css('bottom','0');
    		$('.page2-menubutton').css('display','block');
    		$('.page2-menuclose').css('display','block');
    		$('.notifications-read').removeClass('notifications-read');
    		$('.page2-notifications').addClass('notifications-start');
    		$('.page2-notifications-close').removeClass('page2-notifications-closefull');
    		$('.page-message').css('height','71px');
    		$('.page-message').removeClass('message1')
    		$('.mess-reply').css('display','none');
    		$('.trend-img2').css('display','none');
    		$('.mess-button').css('display','none');
    		$('.page-trend').css('height','71px');
    		$('.page-trend').removeClass('message1')
    	};
    });

    // NOTIF JE VELIK, ZA ODGOVOR NA PORUGE
    $('.page-message').click(function(){
    	if($('.page2-notifications').hasClass('notifications-read')) {
    		$(this).css('height','250px');
    		$(this).siblings().css('height','71px');
    		$(this).addClass('message1')
    		$(this).siblings().removeClass('message1')
    		$(this).children('.mess-reply').css('display','block')
    		$(this).siblings().children('.mess-reply').css('display','none')
   			$(this).children('.mess-button').css('display','block')
    		$(this).siblings().children('.mess-button').css('display','none')
    	};
    });
    $('.page-trend').click(function(){
    	if($('.page2-notifications').hasClass('notifications-read')) {
    		$(this).css('height','250px');
    		$(this).siblings().css('height','71px');
    		$(this).addClass('message1')
    		$(this).siblings().removeClass('message1')
    		$(this).children('.trend-img2').css('display','block')
    		$(this).siblings().children('.trend-img2').css('display','none')
    	};
    });













	// MENU 3 ////////////////////////////////////////////////////
	$('.page3-menu-button').click(function(){
		$('.page3-menu-button').css('display','none');
		$('.page3-close-menu').css('display','block');
		$('.page3-body').transition({
  			left: '70%',
  			opacity: '.8'
		}, 400, "ease-out");
		$('.page3-body').transition({
  			transform: "rotateY(-45deg)"
		}, 600, "linear");
		$('.page3-menu-wrapper').transition({
  			left: '5%',
			opacity: '1'
		}, 400, "ease-out");
	});
	$('.page3-body').click(function(){
		$('.page3-menu-button').css('display','block');
		$('.page3-close-menu').css('display','none');
		$('.page3-body').transition({
  			transform: "rotateY(0deg)",
  			opacity: '1'  			
		}, 600, "linear");
		$('.page3-body').transition({
  			left: '0'
		}, 400, "ease-in");
		$('.page3-menu-wrapper').delay(600).transition({
  			left: '0%',
			opacity: '0'
		}, 400, "linear");
	});
	$('.page3-close-menu').click(function(){
		$('.page3-menu-button').css('display','block');
		$('.page3-close-menu').css('display','none');
		$('.page3-body').transition({
  			transform: "rotateY(0deg)",
  			opacity: '1'  			
		}, 600, "linear");
		$('.page3-body').transition({
  			left: '0'
		}, 400, "ease-in");
		$('.page3-menu-wrapper').delay(600).transition({
  			left: '0%',
			opacity: '0'
		}, 400, "linear");
	});
	$('.page3-list span').click(function(){
		$('.page3-panel-close').css('left','10px');
		$('.page3-panel-close').css('opacity','1');
		$('.page3-list').transition({ 
			scale: .8,
			opacity: 0
		}, 400, 'linear');
		$('.page3-list').hide(600);
		$('.page3-panel').css('bottom','0');
		$('.page3-panel').css('opacity','1');
		$('.page3-panel').css('display','block')
		$('.page3-panel').css('z-index','9999')
	});
	$('.page3-panel-close').click(function(){
		$('.page3-panel-close').css('left','-50px');
		$('.page3-panel-close').css('opacity','0');
		$('.page3-list').transition({ 
			scale: 1,
			opacity: 1
		}, 0, 'linear');
		$('.page3-list').show(600);
		$('.page3-panel').css('bottom','-50px');
		$('.page3-panel').css('opacity','0');
		$('.page3-panel').css('z-index','-1')
		$('.page3-panel-messages').css('display','none');
	});
	$('.messages-button').click(function(){
		$('.page3-panel-messages').css('display','block');
	});
	// MESSAGE LOGIC
	$('.pg3-reply1').click(function(){
		$('.pg3-img1').css('margin-top','-200px');
		$('.pg3-reply1').css('display','none');
	});
	$('.pg3-cancel1').click(function(){
		$('.pg3-img1').css('margin-top','0px');
		$('.pg3-reply1').css('display','block');
	});
	$('.pg3-reply2').click(function(){
		$('.pg3-img2').css('margin-top','-200px');
		$('.pg3-reply2').css('display','none');
	});
	$('.pg3-cancel2').click(function(){
		$('.pg3-img2').css('margin-top','0px');
		$('.pg3-reply2').css('display','block');
	});
	$('.pg3-reply3').click(function(){
		$('.pg3-img3').css('margin-top','-200px');
		$('.pg3-reply3').css('display','none');
	});
	$('.pg3-cancel3').click(function(){
		$('.pg3-img3').css('margin-top','0px');
		$('.pg3-reply3').css('display','block');
	});	















	// MENU 4 ////////////////////////////////////////////////////
	$('.page4-menu-button').click(function(){
		if ($('.page4-menu-button').hasClass('page4-menu-active')) {
			$('.page4-menu-button').removeClass('page4-menu-active')
			// $('.page4-body').css('width', '100%')
			$('.page4-body').css('margin-left', '0')
			$('.page4-menuwrap').css('left', '-40%')
			$('.page4-menu-button').removeClass('page4-menu-button-clicked')
		} else {
			$('.page4-menu-button').addClass('page4-menu-active')
			// $('.page4-body').css('width', '60%')
			$('.page4-body').css('margin-left', '40%')
			$('.page4-menuwrap').css('left', '0')
			$('.page4-menu-button').addClass('page4-menu-button-clicked')
		}
	});
	$('.page4-menubutton-icon1').click(function(){
		$('.page4-menu-panel1').addClass('pg4-panel-visible')
		$('.page4-menu-panel2').removeClass('pg4-panel-visible')
		$('.page4-menu-panel3').removeClass('pg4-panel-visible')
	});
	$('.page4-menubutton-icon2').click(function(){
		$('.page4-menu-panel2').addClass('pg4-panel-visible')
		$('.page4-menu-panel1').removeClass('pg4-panel-visible')
		$('.page4-menu-panel3').removeClass('pg4-panel-visible')
	});
	$('.page4-menubutton-icon3').click(function(){
		$('.page4-menu-panel3').addClass('pg4-panel-visible')
		$('.page4-menu-panel2').removeClass('pg4-panel-visible')
		$('.page4-menu-panel1').removeClass('pg4-panel-visible')
	});
	$('.page4-menu-leftpick').click(function(){
		$(this).addClass('page4-menu-leftpick-clicked');
		$(this).siblings().removeClass('page4-menu-leftpick-clicked');
	});














	// MENU 5 ////////////////////////////////////////////////////
	$('.page5-item')
		.mouseenter(function(){
			$(this).addClass('page5-item-hovered');
			$(this).next().addClass('page5-item-hovered-siblings')
			$(this).prev().addClass('page5-item-hovered-siblings')
		})
		.click(function(){
			$(this).addClass('page5-item-clicked');
		})
		.mouseleave(function(){
			$(this).removeClass('page5-item-hovered');
			$(this).removeClass('page5-item-clicked');
			$(this).next().removeClass('page5-item-hovered-siblings')
			$(this).prev().removeClass('page5-item-hovered-siblings')
		});











	// MENU 6 ////////////////////////////////////////////////////
	$('.page6-menu-button').click(function(){
		$('.page6-menu-button').addClass('page6-menu-button-clicked')
		$('.page6-body').addClass('page6-body-clicked')
		$('.page6-menu-wrapper').addClass('page6-menu-wrapper-clicked')
	});

	$('.page6-body').click(function(){
		$('.page6-menu-button').removeClass('page6-menu-button-clicked')
		$('.page6-body').removeClass('page6-body-clicked')
		$('.page6-menu-wrapper').removeClass('page6-menu-wrapper-clicked')	
	});
});