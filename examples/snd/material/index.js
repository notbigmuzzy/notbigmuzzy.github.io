
$(document).ready(
    function(){ 
              $(".main-body").delay(100).fadeIn(0);
              $(".sidebar").delay(100).fadeIn(0);
              $(".button-topright").delay(100).fadeIn(0);
});



	imgNo = 1 + Math.floor(Math.random() * 5);
	$("#pic").attr("src", "images/logos/" + imgNo + ".png");
 


	$(document).ready(
    	function(){
        	$(".button-topleft").click(function () {
        		$( ".outro" ).fadeIn(0);
        		$( ".outro" ).animate  ({ opacity: ".9" }, 200);
        	});
	});



	$(document).ready(
    	function(){
        	$(".outro-close").click(function () {
        		$( ".outro" ).animate  ({ opacity: "0" }, 200);
        		$( ".outro" ).delay(200).fadeOut(0);
        	});
	});




	$(document).bind("contextmenu", function(event) {
    	event.preventDefault();
	});



	$(document).ready(
    	function(){
        	$(".button-topright").click(function () {
        	
        		$(".main-bodycover").css('display','block');
        		$(".progressbar").css('display','none');


        		$("#b1").removeClass( "bp" )
        		$("#b2").removeClass( "bp" )
        		$("#b3").removeClass( "bp" )
        		$("#b4").removeClass( "bp" )
        		$("#b5").removeClass( "bp" )
        		$("#b6").removeClass( "bp" )
        		$("#b7").removeClass( "bp" )
        		$("#b8").removeClass( "bp" )
        		$("#b9").removeClass( "bp" )
        		$("#b10").removeClass( "bp" )
        		$("#b11").removeClass( "bp" )
        		$(".bass").css('opacity','.5')
       			$(".bb").css('box-shadow','none')

				$("#d1").removeClass( "dp" )
        		$("#d2").removeClass( "dp" )
        		$("#d3").removeClass( "dp" )
        		$("#d4").removeClass( "dp" )
        		$("#d5").removeClass( "dp" )
        		$("#d6").removeClass( "dp" )
        		$("#d7").removeClass( "dp" )
        		$("#d8").removeClass( "dp" )
        		$("#d9").removeClass( "dp" )
        		$("#d10").removeClass( "dp" )
        		$("#d11").removeClass( "dp" )
        		$(".drums").css('opacity','.5')
       			$(".db").css('box-shadow','none')

       			$("#v1").removeClass( "vp" )
        		$("#v2").removeClass( "vp" )
        		$("#v3").removeClass( "vp" )
        		$("#v4").removeClass( "vp" )
        		$("#v5").removeClass( "vp" )
        		$("#v6").removeClass( "vp" )
        		$(".voices").css('opacity','.5')
       			$(".vb").css('box-shadow','none')

     			$("#vv1").removeClass( "vvp" )
        		$("#vv2").removeClass( "vvp" )
        		$("#vv3").removeClass( "vvp" )
        		$("#vv4").removeClass( "vvp" )
        		$("#vv5").removeClass( "vvp" )
        		$("#vv6").removeClass( "vvp" )
        		$(".voices2").css('opacity','.5')
       			$(".vvb").css('box-shadow','none')

        	});
	});




	$(document).ready(
    	function(){
        	$(".button-topright").click(function () {
        		$(".sidebar-menubutton").css('display','block');
        		$(".button-topright").animate  ({ opacity: "0" }, 300);
        		$(".button-topright").delay(100).fadeOut(0);
            	$(".main-body").css('left','-250px');

        	});
	});



	$(document).ready(
    	function(){
        	$(".sidebar-menubutton").click(function () {

        		$(".sidebar-menubutton").css('display','none');
        		$(".button-topright").css ('opacity','1');
        		$(".button-topright").css('display','block');
            	$(".main-body").css('left','0px');  
            	$(".main-bodycover").css('display','none');
            	$(".progressbar").css('display','block');


				$( ".item1" ).css('background','none');
	       		$( ".item1" ).css('box-shadow','none');
	       		$( ".item1" ).css('color','hsla(0, 0%, 100%, .5)');

	       		$( ".item2" ).css('background','none');
	       		$( ".item2" ).css('box-shadow','none');
	       		$( ".item2" ).css('color','hsla(0, 0%, 100%, .5)');

				$( ".item3" ).css('background','none');
	       		$( ".item3" ).css('box-shadow','none');
	       		$( ".item3" ).css('color','hsla(0, 0%, 100%, .5)');

				$( ".item4" ).css('background','none');
	       		$( ".item4" ).css('box-shadow','none');
	       		$( ".item4" ).css('color','hsla(0, 0%, 100%, .5)');
	       	
				$( ".item5" ).css('background','none');
	       		$( ".item5" ).css('box-shadow','none');
	       		$( ".item5" ).css('color','hsla(0, 0%, 100%, .5)');
        	});
	});




$(document).ready (
	function() {
       	$(".play-btn").click(function () {
        	
        	$( ".intro" ).animate  ({ opacity: "0" }, 200);
        	$( ".intro" ).delay(200).fadeOut(0);

	});
});



$(document).ready (
	function() {
       	$(".play-btn").click(function () {

		function loopDraw(){
				
			$( ".progressbar").animate  ({ width: "100%" }, 4103);
			$( ".progressbar" ).delay(0).animate  ({ width: "0%" }, 0);

   		setTimeout(loopDraw, 4103);
	}
		loopDraw();
	});

});




$(document).ready (
	function() {
       	$(".item1").click(function () {
    	
	       	$( ".item1" ).css('background','#4d4d4d');
	       	$( ".item1" ).css('box-shadow','inset 0px 0px 5px #333');
	       	$( ".item1" ).css('color','hsla(0, 0%, 100%, .8)');

	       	$( ".item2" ).css('background','none');
	       	$( ".item2" ).css('box-shadow','none');
	       	$( ".item2" ).css('color','hsla(0, 0%, 100%, .5)');

			$( ".item3" ).css('background','none');
	       	$( ".item3" ).css('box-shadow','none');
	       	$( ".item3" ).css('color','hsla(0, 0%, 100%, .5)');

			$( ".item4" ).css('background','none');
	       	$( ".item4" ).css('box-shadow','none');
	       	$( ".item4" ).css('color','hsla(0, 0%, 100%, .5)');
	       	
			$( ".item5" ).css('background','none');
	       	$( ".item5" ).css('box-shadow','none');
	       	$( ".item5" ).css('color','hsla(0, 0%, 100%, .5)');
	});
});



$(document).ready (
	function() {
       	$(".item2").click(function () {
    	
	       	$( ".item2" ).css('background','#4d4d4d');
	       	$( ".item2" ).css('box-shadow','inset 0px 0px 5px #333');
	       	$( ".item2" ).css('color','hsla(0, 0%, 100%, .8)');

	       	$( ".item1" ).css('background','none');
	       	$( ".item1" ).css('box-shadow','none');
	       	$( ".item1" ).css('color','hsla(0, 0%, 100%, .5)');

			$( ".item3" ).css('background','none');
	       	$( ".item3" ).css('box-shadow','none');
	       	$( ".item3" ).css('color','hsla(0, 0%, 100%, .5)');

			$( ".item4" ).css('background','none');
	       	$( ".item4" ).css('box-shadow','none');
	       	$( ".item4" ).css('color','hsla(0, 0%, 100%, .5)');
	       	
			$( ".item5" ).css('background','none');
	       	$( ".item5" ).css('box-shadow','none');
	       	$( ".item5" ).css('color','hsla(0, 0%, 100%, .5)');
	});
});



$(document).ready (
	function() {
       	$(".item3").click(function () {
    	
	       	$( ".item3" ).css('background','#4d4d4d');
	       	$( ".item3" ).css('box-shadow','inset 0px 0px 5px #333');
	       	$( ".item3" ).css('color','hsla(0, 0%, 100%, .8)');

	       	$( ".item2" ).css('background','none');
	       	$( ".item2" ).css('box-shadow','none');
	       	$( ".item2" ).css('color','hsla(0, 0%, 100%, .5)');

			$( ".item1" ).css('background','none');
	       	$( ".item1" ).css('box-shadow','none');
	       	$( ".item1" ).css('color','hsla(0, 0%, 100%, .5)');

			$( ".item4" ).css('background','none');
	       	$( ".item4" ).css('box-shadow','none');
	       	$( ".item4" ).css('color','hsla(0, 0%, 100%, .5)');
	       	
			$( ".item5" ).css('background','none');
	       	$( ".item5" ).css('box-shadow','none');
	       	$( ".item5" ).css('color','hsla(0, 0%, 100%, .5)');
	});
});



$(document).ready (
	function() {
       	$(".item4").click(function () {
    	
	       	$( ".item4" ).css('background','#4d4d4d');
	       	$( ".item4" ).css('box-shadow','inset 0px 0px 5px #333');
	       	$( ".item4" ).css('color','hsla(0, 0%, 100%, .8)');

	       	$( ".item2" ).css('background','none');
	       	$( ".item2" ).css('box-shadow','none');
	       	$( ".item2" ).css('color','hsla(0, 0%, 100%, .5)');

			$( ".item1" ).css('background','none');
	       	$( ".item1" ).css('box-shadow','none');
	       	$( ".item1" ).css('color','hsla(0, 0%, 100%, .5)');

			$( ".item3" ).css('background','none');
	       	$( ".item3" ).css('box-shadow','none');
	       	$( ".item3" ).css('color','hsla(0, 0%, 100%, .5)');
	       	
			$( ".item5" ).css('background','none');
	       	$( ".item5" ).css('box-shadow','none');
	       	$( ".item5" ).css('color','hsla(0, 0%, 100%, .5)');
	});
});



$(document).ready (
	function() {
       	$(".item5").click(function () {
    	
	       	$( ".item5" ).css('background','#4d4d4d');
	       	$( ".item5" ).css('box-shadow','inset 0px 0px 5px #333');
	       	$( ".item5" ).css('color','hsla(0, 0%, 100%, .8)');

	       	$( ".item2" ).css('background','none');
	       	$( ".item2" ).css('box-shadow','none');
	       	$( ".item2" ).css('color','hsla(0, 0%, 100%, .5)');

			$( ".item1" ).css('background','none');
	       	$( ".item1" ).css('box-shadow','none');
	       	$( ".item1" ).css('color','hsla(0, 0%, 100%, .5)');

			$( ".item4" ).css('background','none');
	       	$( ".item4" ).css('box-shadow','none');
	       	$( ".item4" ).css('color','hsla(0, 0%, 100%, .5)');
	       	
			$( ".item3" ).css('background','none');
	       	$( ".item3" ).css('box-shadow','none');
	       	$( ".item3" ).css('color','hsla(0, 0%, 100%, .5)');
	});
});






$(document).ready (
	function() {
       	$(".play-btn").click(function () {

		function loopBass(){

		if ($( "#b1" ).hasClass( "bp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("bass-sound").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}
	    player.play();

		} else if ($( "#b2" ).hasClass( "bp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("bass-sound2").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#b3" ).hasClass( "bp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("bass-sound3").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#b4" ).hasClass( "bp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("bass-sound4").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#b5" ).hasClass( "bp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("bass-sound5").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#b6" ).hasClass( "bp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("bass-sound6").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#b7" ).hasClass( "bp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("bass-sound7").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#b8" ).hasClass( "bp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("bass-sound8").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#b9" ).hasClass( "bp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("bass-sound9").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#b10" ).hasClass( "bp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("bass-sound10").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#b11" ).hasClass( "bp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("bass-sound11").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		}



   		setTimeout(loopBass, 4103);
	}
		loopBass();
	});

});
















$(document).ready (
	function() {
       	$(".play-btn").click(function () {

		function loopDrums(){

		if ($( "#d1" ).hasClass( "dp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("drum-sound").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}
	    player.play();

		} else if ($( "#d2" ).hasClass( "dp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("drum-sound2").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#d3" ).hasClass( "dp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("drum-sound3").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#d4" ).hasClass( "dp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("drum-sound4").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#d5" ).hasClass( "dp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("drum-sound5").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#d6" ).hasClass( "dp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("drum-sound6").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		}  else if ($( "#d7" ).hasClass( "dp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("drum-sound7").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#d8" ).hasClass( "dp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("drum-sound8").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		}  else if ($( "#d9" ).hasClass( "dp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("drum-sound9").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#d10" ).hasClass( "dp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("drum-sound10").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		}  else if ($( "#d11" ).hasClass( "dp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("drum-sound11").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		}

   		setTimeout(loopDrums, 4103);
	}
		loopDrums();
	});

});




























$(document).ready (
	function() {
       	$(".play-btn").click(function () {

		function loopSynths(){

		if ($( "#v1" ).hasClass( "vp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("synth-sound").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}
	    player.play();

		} else if ($( "#v2" ).hasClass( "vp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("synth-sound2").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#v3" ).hasClass( "vp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("synth-sound3").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#v4" ).hasClass( "vp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("synth-sound4").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#v5" ).hasClass( "vp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("synth-sound5").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#v6" ).hasClass( "vp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("synth-sound6").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		}  

   		setTimeout(loopSynths, 4103);
	}
		loopSynths();
	});

});
























$(document).ready (
	function() {
       	$(".play-btn").click(function () {

		function loopSynths2(){

		if ($( "#vv1" ).hasClass( "vvp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("synth2-sound").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}
	    player.play();

		} else if ($( "#vv2" ).hasClass( "vvp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("synth2-sound2").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#vv3" ).hasClass( "vvp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("synth2-sound3").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#vv4" ).hasClass( "vvp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("synth2-sound4").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#vv5" ).hasClass( "vvp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("synth2-sound5").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		} else if ($( "#vv6" ).hasClass( "vvp" )) {

			var current_player = "a";
			var player_a = document.createElement("audio");
			var player_b = document.createElement("audio");
			player_a.src = document.getElementById("synth2-sound6").src;
			player_b.src = player_a.src

    		var player = null;

    		if(current_player == "a"){
        		player = player_b;
        		current_player = "b";
    		}
    		else{
        		player = player_a;
        		current_player = "a";
    		}

	    	player.play();
		}  

   		setTimeout(loopSynths2, 4103);
	}
		loopSynths2();
	});

});

































<!-- BASS BUTTONS -->

$(document).ready (
	function() {
       	$(".bb").click(function () {
       		$(".bass").css('opacity','1')
       		$(".bb").css('box-shadow','0px 0px 20px #000')
       	});
});




$(document).ready (
	function() {
       	$(".b1").click(function () {
       		if (($( "#b1" ).hasClass( "bp" ))) {
       			$("#b1").removeClass( "bp" )
       			$(".bass").css('opacity','.5')
       			$(".bb").css('box-shadow','none')
       		} else {
       			$("#b1").addClass( "bp" )
       			$("#b2").removeClass( "bp" )	
       			$("#b3").removeClass( "bp" )	
       			$("#b4").removeClass( "bp" )	
       			$("#b5").removeClass( "bp" )	
       			$("#b6").removeClass( "bp" )	
       			$("#b7").removeClass( "bp" )	
       			$("#b8").removeClass( "bp" )	
       			$("#b9").removeClass( "bp" )	
       			$("#b10").removeClass( "bp" )	
       			$("#b11").removeClass( "bp" )	
       		}
		});
});





$(document).ready (
	function() {
       	$(".b2").click(function () {
       		if (($( "#b2" ).hasClass( "bp" ))) {
       			$("#b2").removeClass( "bp" )	
       			$(".bass").css('opacity','.5')
       			$(".bb").css('box-shadow','none')
       		} else {
       			$("#b1").removeClass( "bp" )
       			$("#b2").addClass( "bp" )	
       			$("#b3").removeClass( "bp" )	
       			$("#b4").removeClass( "bp" )	
       			$("#b5").removeClass( "bp" )	
       			$("#b6").removeClass( "bp" )	
       			$("#b7").removeClass( "bp" )	
       			$("#b8").removeClass( "bp" )	
       			$("#b9").removeClass( "bp" )	
       			$("#b10").removeClass( "bp" )	
       			$("#b11").removeClass( "bp" )	
       		}
		});

});



$(document).ready (
	function() {
       	$(".b3").click(function () {
       		if (($( "#b3" ).hasClass( "bp" ))) {
       			$("#b3").removeClass( "bp" )	
       			$(".bass").css('opacity','.5')
       			$(".bb").css('box-shadow','none')       			
       		} else {
       			$("#b1").removeClass( "bp" )
       			$("#b2").removeClass( "bp" )	
       			$("#b3").addClass( "bp" )	
       			$("#b4").removeClass( "bp" )	
       			$("#b5").removeClass( "bp" )	
       			$("#b6").removeClass( "bp" )	
       			$("#b7").removeClass( "bp" )	
       			$("#b8").removeClass( "bp" )	
       			$("#b9").removeClass( "bp" )	
       			$("#b10").removeClass( "bp" )	
       			$("#b11").removeClass( "bp" )	
       		}
		});

});



$(document).ready (
	function() {
       	$(".b4").click(function () {
       		if (($( "#b4" ).hasClass( "bp" ))) {
       			$("#b4").removeClass( "bp" )	
       			$(".bass").css('opacity','.5')
       			$(".bb").css('box-shadow','none')       			
       		} else {
       			$("#b1").removeClass( "bp" )
       			$("#b2").removeClass( "bp" )	
       			$("#b3").removeClass( "bp" )	
       			$("#b4").addClass( "bp" )	
       			$("#b5").removeClass( "bp" )	
       			$("#b6").removeClass( "bp" )	
       			$("#b7").removeClass( "bp" )	
       			$("#b8").removeClass( "bp" )	
       			$("#b9").removeClass( "bp" )	
       			$("#b10").removeClass( "bp" )	
       			$("#b11").removeClass( "bp" )	
       		}
		});

});



$(document).ready (
	function() {
       	$(".b5").click(function () {
       		if (($( "#b5" ).hasClass( "bp" ))) {
       			$("#b5").removeClass( "bp" )	
       			$(".bass").css('opacity','.5')
       			$(".bb").css('box-shadow','none')       			
       		} else {
       			$("#b1").removeClass( "bp" )
       			$("#b2").removeClass( "bp" )	
       			$("#b3").removeClass( "bp" )	
       			$("#b4").removeClass( "bp" )	
       			$("#b5").addClass( "bp" )	
       			$("#b6").removeClass( "bp" )	
       			$("#b7").removeClass( "bp" )	
       			$("#b8").removeClass( "bp" )	
       			$("#b9").removeClass( "bp" )	
       			$("#b10").removeClass( "bp" )	
       			$("#b11").removeClass( "bp" )	
       		}

		});

});



$(document).ready (
	function() {
       	$(".b6").click(function () {
       		if (($( "#b6" ).hasClass( "bp" ))) {
       			$("#b6").removeClass( "bp" )	
       			$(".bass").css('opacity','.5')
       			$(".bb").css('box-shadow','none')       			
       		} else {
       			$("#b1").removeClass( "bp" )
       			$("#b2").removeClass( "bp" )	
       			$("#b3").removeClass( "bp" )	
       			$("#b4").removeClass( "bp" )	
       			$("#b5").removeClass( "bp" )	
       			$("#b6").addClass( "bp" )	
       			$("#b7").removeClass( "bp" )	
       			$("#b8").removeClass( "bp" )	
       			$("#b9").removeClass( "bp" )	
       			$("#b10").removeClass( "bp" )	
       			$("#b11").removeClass( "bp" )	
       		}
		});

});




$(document).ready (
	function() {
       	$(".b7").click(function () {
       		if (($( "#b7" ).hasClass( "bp" ))) {
       			$("#b7").removeClass( "bp" )	
       			$(".bass").css('opacity','.5')
       			$(".bb").css('box-shadow','none')       			
       		} else {
       			$("#b1").removeClass( "bp" )
       			$("#b2").removeClass( "bp" )	
       			$("#b3").removeClass( "bp" )	
       			$("#b4").removeClass( "bp" )	
       			$("#b5").removeClass( "bp" )	
       			$("#b6").removeClass( "bp" )	
       			$("#b7").addClass( "bp" )	
       			$("#b8").removeClass( "bp" )	
       			$("#b9").removeClass( "bp" )	
       			$("#b10").removeClass( "bp" )	
       			$("#b11").removeClass( "bp" )	
       		}

		});
	});



$(document).ready (
	function() {
       	$(".b8").click(function () {
       		if (($( "#b8" ).hasClass( "bp" ))) {
       			$("#b8").removeClass( "bp" )	
       			$(".bass").css('opacity','.5')
       			$(".bb").css('box-shadow','none')       			
       		} else {
       			$("#b1").removeClass( "bp" )
       			$("#b2").removeClass( "bp" )	
       			$("#b3").removeClass( "bp" )	
       			$("#b4").removeClass( "bp" )	
       			$("#b5").removeClass( "bp" )	
       			$("#b6").removeClass( "bp" )	
       			$("#b7").removeClass( "bp" )	
       			$("#b8").addClass( "bp" )	
       			$("#b9").removeClass( "bp" )	
       			$("#b10").removeClass( "bp" )	
       			$("#b11").removeClass( "bp" )	
       		}

		});

});




$(document).ready (
	function() {
       	$(".b9").click(function () {
       		if (($( "#b9" ).hasClass( "bp" ))) {
       			$("#b9").removeClass( "bp" )	
       			$(".bass").css('opacity','.5')
       			$(".bb").css('box-shadow','none')       			
       		} else {
       			$("#b1").removeClass( "bp" )
       			$("#b2").removeClass( "bp" )	
       			$("#b3").removeClass( "bp" )	
       			$("#b4").removeClass( "bp" )	
       			$("#b5").removeClass( "bp" )	
       			$("#b6").removeClass( "bp" )	
       			$("#b7").removeClass( "bp" )	
       			$("#b8").removeClass( "bp" )	
       			$("#b9").addClass( "bp" )	
       			$("#b10").removeClass( "bp" )	
       			$("#b11").removeClass( "bp" )	
       		}

		});

});



$(document).ready (
	function() {
       	$(".b10").click(function () {
       		if (($( "#b10" ).hasClass( "bp" ))) {
       			$("#b10").removeClass( "bp" )	
       			$(".bass").css('opacity','.5')
       			$(".bb").css('box-shadow','none')       			
       		} else {
       			$("#b1").removeClass( "bp" )
       			$("#b2").removeClass( "bp" )	
       			$("#b3").removeClass( "bp" )	
       			$("#b4").removeClass( "bp" )	
       			$("#b5").removeClass( "bp" )	
       			$("#b6").removeClass( "bp" )	
       			$("#b7").removeClass( "bp" )	
       			$("#b8").removeClass( "bp" )	
       			$("#b9").removeClass( "bp" )	
       			$("#b10").addClass( "bp" )	
       			$("#b11").removeClass( "bp" )	
       		}

		});

});




$(document).ready (
	function() {
       	$(".b11").click(function () {
       		if (($( "#b11" ).hasClass( "bp" ))) {
       			$("#b11").removeClass( "bp" )	
       			$(".bass").css('opacity','.5')
       			$(".bb").css('box-shadow','none')       			
       		} else {
       			$("#b1").removeClass( "bp" )
       			$("#b2").removeClass( "bp" )	
       			$("#b3").removeClass( "bp" )	
       			$("#b4").removeClass( "bp" )	
       			$("#b5").removeClass( "bp" )	
       			$("#b6").removeClass( "bp" )	
       			$("#b7").removeClass( "bp" )	
       			$("#b8").removeClass( "bp" )	
       			$("#b9").removeClass( "bp" )	
       			$("#b10").removeClass( "bp" )	
       			$("#b11").addClass( "bp" )	
       		}

		});

});











<!-- DRUMS BUTTONS -->

$(document).ready (
	function() {
       	$(".db").click(function () {
       		$(".drums").css('opacity','1')
       		$(".db").css('box-shadow','0px 0px 20px #000')
		});
});




$(document).ready (
	function() {
       	$(".d1").click(function () {
       		if (($( "#d1" ).hasClass( "dp" ))) {
       			$("#d1").removeClass( "dp" )	
       			$(".drums").css('opacity','.5')
       			$(".db").css('box-shadow','none')       			
       		} else {
       			$("#d1").addClass( "dp" )
       			$("#d2").removeClass( "dp" )	
       			$("#d3").removeClass( "dp" )	
       			$("#d4").removeClass( "dp" )	
       			$("#d5").removeClass( "dp" )	
       			$("#d6").removeClass( "dp" )	
       			$("#d7").removeClass( "dp" )	
       			$("#d8").removeClass( "dp" )	
       			$("#d9").removeClass( "dp" )	
       			$("#d10").removeClass( "dp" )	
       			$("#d11").removeClass( "dp" )	
       		}

		});

});




$(document).ready (
	function() {
       	$(".d2").click(function () {
       		if (($( "#d2" ).hasClass( "dp" ))) {
       			$("#d2").removeClass( "dp" )	
       			$(".drums").css('opacity','.5')
       			$(".db").css('box-shadow','none')        			
       		} else {
       			$("#d1").removeClass( "dp" )
       			$("#d2").addClass( "dp" )	
       			$("#d3").removeClass( "dp" )	
       			$("#d4").removeClass( "dp" )	
       			$("#d5").removeClass( "dp" )	
       			$("#d6").removeClass( "dp" )	
       			$("#d7").removeClass( "dp" )	
       			$("#d8").removeClass( "dp" )	
       			$("#d9").removeClass( "dp" )	
       			$("#d10").removeClass( "dp" )	
       			$("#d11").removeClass( "dp" )	
       		}

		});

});



$(document).ready (
	function() {
       	$(".d3").click(function () {
       		if (($( "#d3" ).hasClass( "dp" ))) {
       			$("#d3").removeClass( "dp" )	
       			$(".drums").css('opacity','.5')
       			$(".db").css('box-shadow','none')        			
       		} else {
       			$("#d1").removeClass( "dp" )
       			$("#d2").removeClass( "dp" )	
       			$("#d3").addClass( "dp" )	
       			$("#d4").removeClass( "dp" )	
       			$("#d5").removeClass( "dp" )	
       			$("#d6").removeClass( "dp" )	
       			$("#d7").removeClass( "dp" )	
       			$("#d8").removeClass( "dp" )	
       			$("#d9").removeClass( "dp" )	
       			$("#d10").removeClass( "dp" )	
       			$("#d11").removeClass( "dp" )	
       		}

		});

});



$(document).ready (
	function() {
       	$(".d4").click(function () {
       		if (($( "#d4" ).hasClass( "dp" ))) {
       			$("#d4").removeClass( "dp" )	
       			$(".drums").css('opacity','.5')
       			$(".db").css('box-shadow','none')        			
       		} else {
       			$("#d1").removeClass( "dp" )
       			$("#d2").removeClass( "dp" )	
       			$("#d3").removeClass( "dp" )	
       			$("#d4").addClass( "dp" )	
       			$("#d5").removeClass( "dp" )	
       			$("#d6").removeClass( "dp" )	
       			$("#d7").removeClass( "dp" )	
       			$("#d8").removeClass( "dp" )	
       			$("#d9").removeClass( "dp" )	
       			$("#d10").removeClass( "dp" )	
       			$("#d11").removeClass( "dp" )	
       		}

		});

});



$(document).ready (
	function() {
       	$(".d5").click(function () {
       		if (($( "#d5" ).hasClass( "dp" ))) {
       			$("#d5").removeClass( "dp" )	
       			$(".drums").css('opacity','.5')
       			$(".db").css('box-shadow','none')        			
       		} else {
       			$("#d1").removeClass( "dp" )
       			$("#d2").removeClass( "dp" )	
       			$("#d3").removeClass( "dp" )	
       			$("#d4").removeClass( "dp" )	
       			$("#d5").addClass( "dp" )	
       			$("#d6").removeClass( "dp" )	
       			$("#d7").removeClass( "dp" )	
       			$("#d8").removeClass( "dp" )	
       			$("#d9").removeClass( "dp" )	
       			$("#d10").removeClass( "dp" )	
       			$("#d11").removeClass( "dp" )	
       		}

		});

});



$(document).ready (
	function() {
       	$(".d6").click(function () {
       	    if (($( "#d6" ).hasClass( "dp" ))) {
       			$("#d6").removeClass( "dp" )	
       			$(".drums").css('opacity','.5')
       			$(".db").css('box-shadow','none')        			
       		} else {
       			$("#d1").removeClass( "dp" )
       			$("#d2").removeClass( "dp" )	
       			$("#d3").removeClass( "dp" )	
       			$("#d4").removeClass( "dp" )	
       			$("#d5").removeClass( "dp" )	
       			$("#d6").addClass( "dp" )	
       			$("#d7").removeClass( "dp" )	
       			$("#d8").removeClass( "dp" )	
       			$("#d9").removeClass( "dp" )	
       			$("#d10").removeClass( "dp" )	
       			$("#d11").removeClass( "dp" )	
       		}

		});

});




$(document).ready (
	function() {
       	$(".d7").click(function () {
       		if (($( "#d7" ).hasClass( "dp" ))) {
       			$("#d7").removeClass( "dp" )	
       			$(".drums").css('opacity','.5')
       			$(".db").css('box-shadow','none')        			
       		} else {
       			$("#d1").removeClass( "dp" )
       			$("#d2").removeClass( "dp" )	
       			$("#d3").removeClass( "dp" )	
       			$("#d4").removeClass( "dp" )	
       			$("#d5").removeClass( "dp" )	
       			$("#d6").removeClass( "dp" )	
       			$("#d7").addClass( "dp" )	
       			$("#d8").removeClass( "dp" )	
       			$("#d9").removeClass( "dp" )	
       			$("#d10").removeClass( "dp" )	
       			$("#d11").removeClass( "dp" )	
       		}

		});

});



$(document).ready (
	function() {
       	$(".d8").click(function () {
       		if (($( "#d8" ).hasClass( "dp" ))) {
       			$("#d8").removeClass( "dp" )
       			$(".drums").css('opacity','.5')
       			$(".db").css('box-shadow','none') 
       		} else {
       			$("#d1").removeClass( "dp" )
       			$("#d2").removeClass( "dp" )	
       			$("#d3").removeClass( "dp" )	
       			$("#d4").removeClass( "dp" )	
       			$("#d5").removeClass( "dp" )	
       			$("#d6").removeClass( "dp" )	
       			$("#d7").removeClass( "dp" )	
       			$("#d8").addClass( "dp" )	
       			$("#d9").removeClass( "dp" )	
       			$("#d10").removeClass( "dp" )	
       			$("#d11").removeClass( "dp" )	
       		}

		});

});




$(document).ready (
	function() {
       	$(".d9").click(function () {
       		if (($( "#d9" ).hasClass( "dp" ))) {
       			$("#d9").removeClass( "dp" )	
       			$(".drums").css('opacity','.5')
       			$(".db").css('box-shadow','none')        			
       		} else {
       			$("#d1").removeClass( "dp" )
       			$("#d2").removeClass( "dp" )	
       			$("#d3").removeClass( "dp" )	
       			$("#d4").removeClass( "dp" )	
       			$("#d5").removeClass( "dp" )	
       			$("#d6").removeClass( "dp" )	
       			$("#d7").removeClass( "dp" )	
       			$("#d8").removeClass( "dp" )	
       			$("#d9").addClass( "dp" )	
       			$("#d10").removeClass( "dp" )	
       			$("#d11").removeClass( "dp" )	
       		}

		});

});



$(document).ready (
	function() {
       	$(".d10").click(function () {
       		if (($( "#d10" ).hasClass( "dp" ))) {
       			$("#d10").removeClass( "dp" )	
       			$(".drums").css('opacity','.5')
       			$(".db").css('box-shadow','none')        			
       		} else {
       			$("#d1").removeClass( "dp" )
       			$("#d2").removeClass( "dp" )	
       			$("#d3").removeClass( "dp" )	
       			$("#d4").removeClass( "dp" )	
       			$("#d5").removeClass( "dp" )	
       			$("#d6").removeClass( "dp" )	
       			$("#d7").removeClass( "dp" )	
       			$("#d8").removeClass( "dp" )	
       			$("#d9").removeClass( "dp" )	
       			$("#d10").addClass( "dp" )	
       			$("#d11").removeClass( "dp" )	
       		}

		});

});




$(document).ready (
	function() {
       	$(".d11").click(function () {
       		if (($( "#d11" ).hasClass( "dp" ))) {
       			$("#d11").removeClass( "dp" )	
       			$(".drums").css('opacity','.5')
       			$(".db").css('box-shadow','none')        			
       		} else {
       			$("#d1").removeClass( "dp" )
       			$("#d2").removeClass( "dp" )	
       			$("#d3").removeClass( "dp" )	
       			$("#d4").removeClass( "dp" )	
       			$("#d5").removeClass( "dp" )	
       			$("#d6").removeClass( "dp" )	
       			$("#d7").removeClass( "dp" )	
       			$("#d8").removeClass( "dp" )	
       			$("#d9").removeClass( "dp" )	
       			$("#d10").removeClass( "dp" )	
       			$("#d11").addClass( "dp" )	
       		}

		});

});






























<!-- VOICE BUTTONS -->

$(document).ready (
	function() {
       	$(".vb").click(function () {
       		$(".voices").css('opacity','1')
       		$(".vb").css('box-shadow','0px 0px 20px #000')
		});
});




$(document).ready (
	function() {
       	$(".v1").click(function () {
       		if (($( "#v1" ).hasClass( "vp" ))) {
       			$("#v1").removeClass( "vp" )
       			$(".voices").css('opacity','.5')
       			$(".vb").css('box-shadow','none')
       		} else {
       			$("#v1").addClass( "vp" )
       			$("#v2").removeClass( "vp" )	
       			$("#v3").removeClass( "vp" )	
       			$("#v4").removeClass( "vp" )	
       			$("#v5").removeClass( "vp" )	
       			$("#v6").removeClass( "vp" )	
       		}

		});

});



$(document).ready (
	function() {
       	$(".v2").click(function () {
       		if (($( "#v2" ).hasClass( "vp" ))) {
       			$("#v2").removeClass( "vp" )
       			$(".voices").css('opacity','.5')
       			$(".vb").css('box-shadow','none')
       		} else {
       			$("#v1").removeClass( "vp" )
       			$("#v2").addClass( "vp" )	
       			$("#v3").removeClass( "vp" )	
       			$("#v4").removeClass( "vp" )	
       			$("#v5").removeClass( "vp" )	
       			$("#v6").removeClass( "vp" )	
       		}
		});

});



$(document).ready (
	function() {
       	$(".v3").click(function () {
       		if (($( "#v3" ).hasClass( "vp" ))) {
       			$("#v3").removeClass( "vp" )	
       			$(".voices").css('opacity','.5')
       			$(".vb").css('box-shadow','none')       			
       		} else {
       			$("#v1").removeClass( "vp" )
       			$("#v2").removeClass( "vp" )	
       			$("#v3").addClass( "vp" )	
       			$("#v4").removeClass( "vp" )	
       			$("#v5").removeClass( "vp" )	
       			$("#v6").removeClass( "vp" )	
			}
		});

});



$(document).ready (
	function() {
       	$(".v4").click(function () {
       		if (($( "#v4" ).hasClass( "vp" ))) {
       			$("#v4").removeClass( "vp" )	
       			$(".voices").css('opacity','.5')
       			$(".vb").css('box-shadow','none')       			
       		} else {
       			$("#v1").removeClass( "vp" )
       			$("#v2").removeClass( "vp" )	
       			$("#v3").removeClass( "vp" )	
       			$("#v4").addClass( "vp" )	
       			$("#v5").removeClass( "vp" )	
       			$("#v6").removeClass( "vp" )	
       		}
		});

});



$(document).ready (
	function() {
       	$(".v5").click(function () {
       		if (($( "#v5" ).hasClass( "vp" ))) {
       			$("#v5").removeClass( "vp" )	
       			$(".voices").css('opacity','.5')
       			$(".vb").css('box-shadow','none')       			
       		} else {
       			$("#v1").removeClass( "vp" )
       			$("#v2").removeClass( "vp" )	
       			$("#v3").removeClass( "vp" )	
       			$("#v4").removeClass( "vp" )	
       			$("#v5").addClass( "vp" )	
       			$("#v6").removeClass( "vp" )	
			}
		});

});



$(document).ready (
	function() {
       	$(".v6").click(function () {
       		if (($( "#v6" ).hasClass( "vp" ))) {
       			$("#v6").removeClass( "vp" )	
       			$(".voices").css('opacity','.5')
       			$(".vb").css('box-shadow','none')       			
       		} else {
       			$("#v1").removeClass( "vp" )
       			$("#v2").removeClass( "vp" )	
       			$("#v3").removeClass( "vp" )	
       			$("#v4").removeClass( "vp" )	
       			$("#v5").removeClass( "vp" )	
       			$("#v6").addClass( "vp" )	
			}
		});

});


<!-- ..............VOICE 2 BUTTONS................... -->

$(document).ready (
	function() {
       	$(".vvb").click(function () {
       		$(".voices2").css('opacity','1')
       		$(".vvb").css('box-shadow','0px 0px 20px #000')	       		
		});
});




$(document).ready (
	function() {
       	$(".vv1").click(function () {
       		if (($( "#vv1" ).hasClass( "vvp" ))) {
       			$("#vv1").removeClass( "vvp" )	
       			$(".voices2").css('opacity','.5')
       			$(".vvb").css('box-shadow','none')	        			
       		} else {
       			$("#vv1").addClass( "vvp" )
       			$("#vv2").removeClass( "vvp" )	
       			$("#vv3").removeClass( "vvp" )	
       			$("#vv4").removeClass( "vvp" )	
       			$("#vv5").removeClass( "vvp" )	
       			$("#vv6").removeClass( "vvp" )	
       		}
		});

});



$(document).ready (
	function() {
       	$(".vv2").click(function () {
       		if (($( "#vv2" ).hasClass( "vvp" ))) {
       			$("#vv2").removeClass( "vvp" )
       			$(".voices2").css('opacity','.5')
       			$(".vvb").css('box-shadow','none')
       		} else {
       			$("#vv1").removeClass( "vvp" )
       			$("#vv2").addClass( "vvp" )	
       			$("#vv3").removeClass( "vvp" )	
       			$("#vv4").removeClass( "vvp" )	
       			$("#vv5").removeClass( "vvp" )	
       			$("#vv6").removeClass( "vvp" )	
       		}
		});

});



$(document).ready (
	function() {
       	$(".vv3").click(function () {
       		if (($( "#vv3" ).hasClass( "vvp" ))) {
       			$("#vv3").removeClass( "vvp" )	
       			$(".voices2").css('opacity','.5')
       			$(".vvb").css('box-shadow','none')
       		} else {
       			$("#vv1").removeClass( "vvp" )
       			$("#vv2").removeClass( "vvp" )	
       			$("#vv3").addClass( "vvp" )	
       			$("#vv4").removeClass( "vvp" )	
       			$("#vv5").removeClass( "vvp" )	
       			$("#vv6").removeClass( "vvp" )	
       		}
		});

});



$(document).ready (
	function() {
       	$(".vv4").click(function () {
       		if (($( "#vv4" ).hasClass( "vvp" ))) {
       			$("#vv4").removeClass( "vvp" )
       			$(".voices2").css('opacity','.5')
       			$(".vvb").css('box-shadow','none')       				
       		} else {
       			$("#vv1").removeClass( "vvp" )
       			$("#vv2").removeClass( "vvp" )	
       			$("#vv3").removeClass( "vvp" )	
       			$("#vv4").addClass( "vvp" )	
       			$("#vv5").removeClass( "vvp" )	
       			$("#vv6").removeClass( "vvp" )	
       		}
		});

});



$(document).ready (
	function() {
       	$(".vv5").click(function () {
       		if (($( "#vv5" ).hasClass( "vvp" ))) {
       			$("#vv5").removeClass( "vvp" )	
       			$(".voices2").css('opacity','.5')
       			$(".vvb").css('box-shadow','none')       			
       		} else {
       			$("#vv1").removeClass( "vvp" )
       			$("#vv2").removeClass( "vvp" )	
       			$("#vv3").removeClass( "vvp" )	
       			$("#vv4").removeClass( "vvp" )	
       			$("#vv5").addClass( "vvp" )	
       			$("#vv6").removeClass( "vvp" )	
       		}
		});

});



$(document).ready (
	function() {
       	$(".vv6").click(function () {
       		if (($( "#vv6" ).hasClass( "vvp" ))) {
       			$("#vv6").removeClass( "vvp" )	
       			$(".voices2").css('opacity','.5')
       			$(".vvb").css('box-shadow','none')       			
       		} else {
       			$("#vv1").removeClass( "vvp" )
       			$("#vv2").removeClass( "vvp" )	
       			$("#vv3").removeClass( "vvp" )	
       			$("#vv4").removeClass( "vvp" )	
       			$("#vv5").removeClass( "vvp" )	
       			$("#vv6").addClass( "vvp" )	
       		}
		});

});
