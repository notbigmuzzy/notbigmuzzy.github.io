$(document).ready(
function(){
    	$(".list-about").click(function () {
    		$('html, body').animate({
        		scrollTop: $("#page2-scrollhere").offset().top
    		}, 600);
        });
});

$(document).ready(
function(){
    	$(".list-work").click(function () {
    		$('html, body').animate({
        		scrollTop: $(".page6").offset().top
    		}, 1000);
        });
});


$(document).ready(
function(){
    	$(".foot-button").click(function () {
    		$('html, body').animate({
        		scrollTop: $(".page8").offset().top
    		}, 1400);
        });
});

$(document).ready(
function(){
    	$(".navbar-menu").click(function () {
    		$('.main-menu').css('display','block');
        });
});

$(document).ready(
function(){
    	$(".navbar-menuclose").click(function () {
    		$('.main-menu').css('display','none');
        });
});




$(document).ready(
function(){
    	$("#accord-2").click(function () {
    		$('.accordion2').css('display','block');
    		$('.accordion1').css('display','none');
    		$('.accordion3').css('display','none');

        });
});

$(document).ready(
function(){
    	$("#accord-1").click(function () {
    		$('.accordion1').css('display','block');
    		$('.accordion2').css('display','none');
    		$('.accordion3').css('display','none');

        });
});

$(document).ready(
function(){
    	$("#accord-3").click(function () {
    		$('.accordion3').css('display','block');
    		$('.accordion1').css('display','none');
    		$('.accordion2').css('display','none');

        });
});




// PAGE 7
$(document).ready(
	function(){

		$('.pg7-picleft').click(function() {

			$('.pg7-picleft').css('opacity','1');
			$('.pg7-picmiddle').css('opacity','.2');
			$('.pg7-picright').css('opacity','.2');

			$('.pg7-triangleleft').css('opacity','1');
			$('.pg7-trianglemiddle').css('opacity','0');
			$('.pg7-triangleright').css('opacity','0');

		});
});

$(document).ready(
	function(){

		$('.pg7-picmiddle').click(function() {

			$('.pg7-picleft').css('opacity','.2');
			$('.pg7-picmiddle').css('opacity','1');
			$('.pg7-picright').css('opacity','.2');

			$('.pg7-triangleleft').css('opacity','0');
			$('.pg7-trianglemiddle').css('opacity','1');
			$('.pg7-triangleright').css('opacity','0');

		});
});

$(document).ready(
	function(){

		$('.pg7-picright').click(function() {

			$('.pg7-picleft').css('opacity','.2');
			$('.pg7-picmiddle').css('opacity','.2');
			$('.pg7-picright').css('opacity','1');

			$('.pg7-triangleleft').css('opacity','0');
			$('.pg7-trianglemiddle').css('opacity','0');
			$('.pg7-triangleright').css('opacity','1');

		});
});










// PAGE8
$(document).ready(
	function (){
		$('.switch1').click(function() {
			$('.switch1').css('color','#E74C3C');
			$('.switch2').css('color','black');
			$('.switch3').css('color','black');
			$('.switch4').css('color','black');
			$('.switch5').css('color','black');
		});
});

$(document).ready(
	function (){
		$('.switch2').click(function() {
			$('.switch2').css('color','#E74C3C');
			$('.switch1').css('color','black');
			$('.switch3').css('color','black');
			$('.switch4').css('color','black');
			$('.switch5').css('color','black');
		});
});

$(document).ready(
	function (){
		$('.switch3').click(function() {
			$('.switch3').css('color','#E74C3C');
			$('.switch2').css('color','black');
			$('.switch1').css('color','black');
			$('.switch4').css('color','black');
			$('.switch5').css('color','black');
		});
});

$(document).ready(
	function (){
		$('.switch4').click(function() {
			$('.switch4').css('color','#E74C3C');
			$('.switch2').css('color','black');
			$('.switch3').css('color','black');
			$('.switch1').css('color','black');
			$('.switch5').css('color','black');
		});
});

$(document).ready(
	function (){
		$('.switch5').click(function() {
			$('.switch5').css('color','#E74C3C');
			$('.switch2').css('color','black');
			$('.switch3').css('color','black');
			$('.switch4').css('color','black');
			$('.switch1').css('color','black');
		});
});



















// PARALAX STUFF

$(window).scroll( function() {

	var wScroll = $(this).scrollTop();



// PAGE2 PARALAX
	if (wScroll > $('.page2').offset().top - ($(window).height() / 1.3)) {
			$('.pg2-boxleft').addClass('slidein-left');
			$('.page2-comp').addClass('slidein-right');
	};

	if(wScroll > $('.list-about').offset().top + 100) {
			$('.page2-desc').css('opacity','1');
	};

	if(wScroll > $('.landing-footer').offset().top) {
			$('.accord-ul').addClass('slidein-bottom');
			$('.page2-fag').addClass('slidein-bottom');
	};


// PAGE3 PARALAX
	if (wScroll > $('.page2-desc').offset().top - 100) {
			$('.pg3-txtleft').addClass('page3-leftovertxt');
			$('.pg3-txtright').addClass('page3-rightovertxt');
	};


// PAGE4 PARALAX
	if (wScroll > $('.page3').offset().top - 100) {
			$('.pg4-card1').addClass('page4-cardscroll');
			$('.pg4-card2').addClass('page4-cardscroll');
			$('.pg4-card3').addClass('page4-cardscroll');
	};

	if (wScroll > $('.page4').offset().top - 100) {
			$('.pg4-card4').addClass('page4-cardscroll');
			$('.pg4-card5').addClass('page4-cardscroll');
			$('.pg4-card6').addClass('page4-cardscroll');
	};

	if (wScroll > $('.pg4-card4').offset().top) {
			$('.graph1').addClass('prog-graphcomplete');
			$('.graph2').addClass('prog-graphcomplete2');
			$('.graph3').addClass('prog-graphcomplete3');
			$('.graph4').addClass('prog-graphcomplete4');
	};

	if (wScroll > $('.page5').offset().top) {
			setTimeout(function(){$('.pic1').addClass('pic1-para');}, 400);
			setTimeout(function(){$('.pic2').addClass('pic2-para');}, 100);
			setTimeout(function(){$('.pic3').addClass('pic3-para');}, 500);
			setTimeout(function(){$('.pic4').addClass('pic4-para');}, 300);
	} 1000;

// PAGE10 PARALAX
	if (wScroll > $('.page8-client').offset().top) {
			$('.pg10-twit').addClass('pg10-twitpara');
			$('.pg10-desc').addClass('pg10-descpara');
	};



// PAGE11 PARALAX
	if (wScroll > $('.pg9-title').offset().top) {
			$('.pg11-circle').addClass('pg11-circlepara');
	};

	if (wScroll > $('.page10').offset().top) {
			$('.pg11-icon').addClass('pg11-iconpara');
			$('.page11-futer').addClass('pg11-iconpara');
	};



// PAGE12 PARALAX
	if (wScroll > $('.page10').offset().top) { 
			$('.page12-logo').addClass('page12-logopara');
			$('.page12-desc').addClass('page12-descpara');
	};

});