$(document).ready(function() {

	var player = document.createElement("audio");

	$(".bottom-icon").click(function() {
		player.src = "http://";

	    document.getElementById("bottom-title").innerHTML = "Izaberi";
	    document.getElementById("bottom-desc").innerHTML = "Stanicu";
	    $('.bottom-icon').css('width','0');

	    $('#cur-playing2').css('color','transparent');	
		$('#cur-playing3').css('color','transparent');	
		$('#cur-playing1').css('color','transparent');	

	    $('.radio-cover1').css('background','black');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	    $('.radio-cover11').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');	   

	    $('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

		$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	    $('.2play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin')

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	    	

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');	 

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');
	});

$(document).ready(function() {
	$(".full-coverindex").click(function() {
		$('.full-coverindex').css('display','none');
		$('.index-iframe').css('top','-400px');
		$('.index-iframe').css('opacity','0');
    });
});

$(document).ready(function() {
	$(".index-button").click(function() {
		player.src = "http://";

		$('.fa-microphone').css('color','#C198ED');

	    document.getElementById("bottom-title").innerHTML = "Index";
	    document.getElementById("bottom-desc").innerHTML = "Radio";

	    $('.nyanimg').attr('src', 'icons/nyancat.gif')

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$(document).prop('title', 'Radio Index');
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');

	    $('#cur-playing2').css('color','transparent');	
		$('#cur-playing3').css('color','transparent');	
		$('#cur-playing1').css('color','transparent');	

	    $('.radio-cover1').css('background','black');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	    $('.radio-cover11').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');	   

	    $('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

		$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	    $('.2play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin')

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	    	

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');	 

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');

		
		$('.full-coverindex').fadeIn(300);
		$('.index-iframe').fadeIn(0);
		$('.index-iframe').css('top','50px');
		$('.index-iframe').css('opacity','1');
		$('.load-spinner').fadeOut(1000);
		$('.index-frejm').attr('src', 'http://www.indexradio.rs/player#outer')
	});



	$(".b92").click(function() {
		player.src = "http://stream.b92.net:7999/radio-b92.ogg";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "B92";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    $('.nyanimg').attr('src', 'icons/nyancat.gif')

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$('#cur-playing1').css('color','transparent');	
		$('#cur-playing2').css('color','#C198ED');	
		$('#cur-playing3').css('color','transparent');	

		$(document).prop('title', 'B92 Radio');
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="pls/b92.m3u";

	    $('.radio-cover1').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	    $('.radio-cover11').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');

	    $('.1play').removeClass('fa-play');
	    $('.1play').addClass('fa-refresh');
	    $('.1play').addClass('playin')

		$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	    $('.2play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin')

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	  

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');	      	     

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');
    });

	$(".naxi80").click(function() {
    	player.src = "http://naxidigital-80s128.streaming.rs:8040/;stream.nsv/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "80's";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$('#cur-playing2').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');	
		$('#cur-playing3').css('color','transparent');			

		$(document).prop('title', 'NAXI 80s');
		$('.bottombar-wrapper').fadeIn(0);			
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="pls/naxi80.pls";

	    $('.radio-cover2').css('background','#CEA0FF');
	    $('.radio-cover1').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	    $('.radio-cover11').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');

	   	$('.2play').removeClass('fa-play');
	    $('.2play').addClass('fa-refresh');
	   	$('.2play').addClass('playin')

		$('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin')

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin')		   

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	   

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');	 

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');	         	     
    });


	$(".dvestadvojka").click(function() {
    	player.src = "http://rts.ipradio.rs:8006/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "202";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$('#cur-playing1').css('color','transparent');	
		$('#cur-playing2').css('color','#C198ED');	
		$('#cur-playing3').css('color','transparent');	

		$(document).prop('title', 'Radio 202');
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="pls/radio202.asx";

	    $('.radio-cover3').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover1').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	    $('.radio-cover11').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');

	   	$('.3play').removeClass('fa-play');
	    $('.3play').addClass('fa-refresh');
	    $('.3play').addClass('playin')

	   	$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	   	$('.2play').removeClass('playin')

		$('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin')	

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	    

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');	    
    });


	$(".antenabg").click(function() {
    	player.src = "http://live.radioantena.rs:8000/antenabg";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Antena";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$(document).prop('title', 'Antena BG');
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="pls/antenabg.pls";

		$('#cur-playing2').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');	
		$('#cur-playing3').css('color','transparent');	

	    $('.radio-cover4').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover1').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	    $('.radio-cover11').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');

	   	$('.4play').removeClass('fa-play');
	    $('.4play').addClass('fa-refresh');
	    $('.4play').addClass('playin')	

	   	$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	   	$('.2play').removeClass('playin')

		$('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');	  

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	   

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');	      	     

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');	    
    });


	$(".laguna").click(function() {
    	player.src = "http://stream.radiolaguna.rs:8000/;?1431253210195.mp3";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Laguna";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$(document).prop('title', 'Radio Laguna');
		$('.bottombar-wrapper').fadeIn(0);		
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="pls/laguna.pls";

		$('#cur-playing2').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');	
		$('#cur-playing3').css('color','transparent');	

	    $('.radio-cover5').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover1').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	    $('.radio-cover11').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin')	

	   	$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	   	$('.2play').removeClass('playin')

		$('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin');

	   	$('.5play').removeClass('fa-play');
	    $('.5play').addClass('fa-refresh');
	    $('.5play').addClass('playin');	  

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	    

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');	      	    

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');	    
    });


	$(".naxicafe").click(function() {
    	player.src = "http://naxidigital128.kbcnet.rs:8020/;*.mp3";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Caffe";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$(document).prop('title', 'Caffe Radio');
		$('.bottombar-wrapper').fadeIn(0);				
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="pls/caffe.pls";

		$('#cur-playing2').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');	
		$('#cur-playing3').css('color','transparent');	

	    $('.radio-cover6').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover1').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	    $('.radio-cover11').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin')	

	   	$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	   	$('.2play').removeClass('playin')

		$('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');	  

	    $('.6play').removeClass('fa-play');
	    $('.6play').addClass('fa-refresh');
	    $('.6play').addClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	   

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');	      	     

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');	    
    });



	$(".studiob").click(function() {
    	player.src = "http://radio.studiob.rs:8004/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Studio B";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$('#cur-playing1').css('color','transparent');	
		$('#cur-playing2').css('color','#C198ED');	
		$('#cur-playing3').css('color','transparent');	

		$(document).prop('title', 'Studio B');
		$('.bottombar-wrapper').fadeIn(0);				
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="pls/studiob.pls";

	    $('.radio-cover7').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover1').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	    $('.radio-cover11').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin')	

	   	$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	   	$('.2play').removeClass('playin')

		$('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');	  

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').removeClass('fa-play');
	    $('.7play').addClass('fa-refresh');
	    $('.7play').addClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	    

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');	

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');	          	    
    });



	$(".radiotri").click(function() {
    	player.src = "http://radio3-128.streaming.rs:9200/;";
	    player.play();

	   	document.getElementById("bottom-title").innerHTML = "Radio 3";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="pls/radio3.pls";

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$(document).prop('title', 'Radio 3');
		$('.bottombar-wrapper').fadeIn(0);				
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    
		$('#cur-playing2').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');	
		$('#cur-playing3').css('color','transparent');		    

	    $('.radio-cover8').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover1').css('background','black');
	   	$('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	    $('.radio-cover11').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin')	

	   	$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	   	$('.2play').removeClass('playin')

		$('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');	  

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').removeClass('fa-play');
	    $('.8play').addClass('fa-refresh');
	    $('.8play').addClass('playin');	    

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');	

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');	          	    
    });

	$(".radioboom").click(function() {
		player.src = "http://85.202.112.1:8002/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Boom93";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="pls/boom.pls";
		$(document).prop('title', 'Boom93');

		$('#cur-playing2').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');	
		$('#cur-playing3').css('color','transparent');	

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');


	    $('.radio-cover9').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover1').css('background','black');
	    $('.radio-cover10').css('background','black');
	    $('.radio-cover11').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');

	    $('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

		$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	    $('.2play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin')

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	  

	   	$('.9play').removeClass('fa-play');
	    $('.9play').addClass('fa-refresh');
	    $('.9play').addClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');	    
    });

	$(".radioparadaiz").click(function() {
		player.src = "http://stream-tx4.radioparadise.com:80/mp3-128";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Paradise";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="pls/paradaiz.m3u";
		$(document).prop('title', 'Paradise');

		$('#cur-playing2').css('color','transparent');	
		$('#cur-playing3').css('color','#C198ED');	
		$('#cur-playing1').css('color','transparent');	

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');


	    $('.radio-cover10').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover1').css('background','black');
	    $('.radio-cover9').css('background','black');
	    $('.radio-cover11').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');

	    $('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

		$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	    $('.2play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin')

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	  

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').removeClass('fa-play');
	    $('.10play').addClass('fa-refresh');
	    $('.10play').addClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');	    
    });


	$(".radiotesaloniki").click(function() {
		player.src = "http://s10.voscast.com:9878/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Thesaloniki";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="pls/tesaloniki.pls";
		$(document).prop('title', 'Thesaloniki');

		$('#cur-playing2').css('color','transparent');	
		$('#cur-playing3').css('color','#C198ED');	
		$('#cur-playing1').css('color','transparent');	

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');


	    $('.radio-cover11').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover1').css('background','black');
	    $('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	   	$('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');

	    $('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

		$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	    $('.2play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin')

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	  

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').removeClass('fa-play');
	    $('.11play').addClass('fa-refresh');
	    $('.11play').addClass('playin');

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');	    	      	      	    
    });

	$(".radiostojedan").click(function() {
		player.src = "http://87.118.84.56:9300/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "101";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="pls/101.pls";
		$(document).prop('title', 'Radio 101');

		$('#cur-playing2').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');	
		$('#cur-playing3').css('color','transparent');	

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');


	    $('.radio-cover12').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover1').css('background','black');
	    $('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	   	$('.radio-cover11').css('background','black');
	    $('.radio-cover13').css('background','black');
	    $('.radio-cover14').css('background','black');

	    $('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

		$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	    $('.2play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin')

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	  

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');

	    $('.12play').removeClass('fa-play');
	    $('.12play').addClass('fa-refresh');
	    $('.12play').addClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');	    	      	      	    
    });

	$(".radioklasik").click(function() {
		player.src = "http://109.206.96.34:8030/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Classic";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="pls/klasik.pls";
		$(document).prop('title', 'Classic Radio');

		$('#cur-playing1').css('color','transparent');	
		$('#cur-playing2').css('color','#C198ED');	
		$('#cur-playing3').css('color','transparent');	

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');


	    $('.radio-cover13').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover1').css('background','black');
	    $('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	   	$('.radio-cover11').css('background','black');
	    $('.radio-cover12').css('background','black');
	    $('.radio-cover14').css('background','black');

	    $('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

		$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	    $('.2play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin')

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	  

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').removeClass('fa-play');
	    $('.13play').addClass('fa-refresh');
	    $('.13play').addClass('playin');	 

	    $('.14play').addClass('fa-play');
	    $('.14play').removeClass('fa-refresh');
	    $('.14play').removeClass('playin');	    	      	      	    
    });


	$(".radiotopola").click(function() {
		player.src = "http://91.228.254.120:9000/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Topola";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="pls/topola.pls";
		$(document).prop('title', 'Radio Topola');

		$('#cur-playing2').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');	
		$('#cur-playing3').css('color','transparent');	

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');


	    $('.radio-cover14').css('background','#CEA0FF');
	    $('.radio-cover2').css('background','black');
	    $('.radio-cover3').css('background','black');
	    $('.radio-cover4').css('background','black');
	    $('.radio-cover5').css('background','black');
	    $('.radio-cover6').css('background','black');
	    $('.radio-cover7').css('background','black');
	    $('.radio-cover8').css('background','black');
	   	$('.radio-cover1').css('background','black');
	    $('.radio-cover9').css('background','black');
	    $('.radio-cover10').css('background','black');
	   	$('.radio-cover11').css('background','black');
	    $('.radio-cover12').css('background','black');
	    $('.radio-cover13').css('background','black');

	    $('.1play').addClass('fa-play');
	    $('.1play').removeClass('fa-refresh');
	    $('.1play').removeClass('playin')

		$('.2play').addClass('fa-play');
	    $('.2play').removeClass('fa-refresh');
	    $('.2play').removeClass('playin')

	   	$('.3play').addClass('fa-play');
	    $('.3play').removeClass('fa-refresh');
	    $('.3play').removeClass('playin')

	   	$('.4play').addClass('fa-play');
	    $('.4play').removeClass('fa-refresh');
	    $('.4play').removeClass('playin');

	   	$('.5play').addClass('fa-play');
	    $('.5play').removeClass('fa-refresh');
	    $('.5play').removeClass('playin');

	    $('.6play').addClass('fa-play');
	    $('.6play').removeClass('fa-refresh');
	    $('.6play').removeClass('playin');

	    $('.7play').addClass('fa-play');
	    $('.7play').removeClass('fa-refresh');
	    $('.7play').removeClass('playin');

	    $('.8play').addClass('fa-play');
	    $('.8play').removeClass('fa-refresh');
	    $('.8play').removeClass('playin');	  

	   	$('.9play').addClass('fa-play');
	    $('.9play').removeClass('fa-refresh');
	    $('.9play').removeClass('playin');

	    $('.10play').addClass('fa-play');
	    $('.10play').removeClass('fa-refresh');
	    $('.10play').removeClass('playin');

	    $('.11play').addClass('fa-play');
	    $('.11play').removeClass('fa-refresh');
	    $('.11play').removeClass('playin');

	    $('.12play').addClass('fa-play');
	    $('.12play').removeClass('fa-refresh');
	    $('.12play').removeClass('playin');

	    $('.13play').addClass('fa-play');
	    $('.13play').removeClass('fa-refresh');
	    $('.13play').removeClass('playin');	 

	    $('.14play').removeClass('fa-play');
	    $('.14play').addClass('fa-refresh');
	    $('.14play').addClass('playin');	    	      	      	    
    });

});


$(document).ready(function() {
	$("#top-menu").click(function() {
		$('.drop-menu').css('display','block');
		$('#top-menu').css('border-bottom','none');
    });
});


$(document).click(function(event) { 
    if(!$(event.target).closest('#top-menu').length) {
        if($('.drop-menu').is(":visible")) {
            $('.drop-menu').hide()
            $('#top-menu').css('border-bottom','2px solid hsla(0, 0%, 0%, .5)');
        };
    };
});


$(document).ready(function() {
	$("#drop4").click(function() {

		console.log('njao');

    });
});


$(document).ready(function() {

	$(".top-left1").click(function() {
	   	$('.top-left1').addClass('active-region');
	   	$('.top-left2').removeClass('active-region');
		$('.top-left3').removeClass('active-region');
		$('.top-left4').removeClass('active-region');
		$('.b92').css('display','none');
		$('.naxi80').css('display','block');
		$('.dvestadvojka').css('display','none');
		$('.antenabg').css('display','block');
		$('.laguna').css('display','block');
		$('.naxicafe').css('display','block');
		$('.studiob').css('display','none');
		$('.radiotri').css('display','block');		
		$('.radioparadaiz').css('display','none');		
		$('.radioboom').css('display','block');		
		$('.radiotesaloniki').css('display','none');
		$('.radiostojedan').css('display','block');		
		$('.radioklasik').css('display','none');		
		$('.radiotopola').css('display','block');				
    });

	$(".top-left2").click(function() {
	   	$('.top-left2').addClass('active-region');
	   	$('.top-left1').removeClass('active-region');
		$('.top-left3').removeClass('active-region');
		$('.top-left4').removeClass('active-region');
		$('.b92').css('display','block');
		$('.naxi80').css('display','none');
		$('.dvestadvojka').css('display','block');
		$('.antenabg').css('display','none');
		$('.laguna').css('display','none');
		$('.naxicafe').css('display','none');
		$('.studiob').css('display','block');
		$('.radiotri').css('display','none');
		$('.radioparadaiz').css('display','none');		
		$('.radioboom').css('display','none');		
		$('.radiotesaloniki').css('display','none');
		$('.radiostojedan').css('display','none');		
		$('.radioklasik').css('display','block');		
		$('.radiotopola').css('display','none');				
    });

	$(".top-left3").click(function() {
	   	$('.top-left3').addClass('active-region');
	   	$('.top-left2').removeClass('active-region');
		$('.top-left1').removeClass('active-region');
		$('.top-left4').removeClass('active-region');
		$('.b92').css('display','block');
		$('.naxi80').css('display','block');
		$('.dvestadvojka').css('display','block');
		$('.antenabg').css('display','block');
		$('.laguna').css('display','block');
		$('.naxicafe').css('display','block');
		$('.studiob').css('display','block');
		$('.radiotri').css('display','block');
		$('.radioparadaiz').css('display','block');		
		$('.radioboom').css('display','block');		
		$('.radiotesaloniki').css('display','block');
		$('.radiostojedan').css('display','block');		
		$('.radioklasik').css('display','block');		
		$('.radiotopola').css('display','block');
    }); 

	$(".top-left4").click(function() {
	   	$('.top-left3').removeClass('active-region');
	   	$('.top-left2').removeClass('active-region');
		$('.top-left1').removeClass('active-region');
		$('.top-left4').addClass('active-region');
		$('.b92').css('display','none');
		$('.naxi80').css('display','none');
		$('.dvestadvojka').css('display','none');
		$('.antenabg').css('display','none');
		$('.laguna').css('display','none');
		$('.naxicafe').css('display','none');
		$('.studiob').css('display','none');
		$('.radiotri').css('display','none');
		$('.radioparadaiz').css('display','block');		
		$('.radioboom').css('display','none');		
		$('.radiotesaloniki').css('display','block');
		$('.radiostojedan').css('display','none');		
		$('.radioklasik').css('display','none');		
		$('.radiotopola').css('display','none');		
    });     
});

$(document).ready(function() {
	$(".mobile-menuitem1").click(function() {
		$('.mobile-menu').css('display','none');
    });
});

$(document).ready(function() {
	$(".mob-menu").click(function() {
		$('.mobile-menu').css('display','block');
    });
});

$(document).ready(function() {
	mailto.ninja()
});


$(document).ready(function() {
	$(".full-cover").click(function() {
		$('.full-cover').css('display','none');
		$('.plejliste-iframe').css('display','none');
		$('.plejliste-iframe').css('top','20px');
		$('.plejliste-iframe').css('opacity','0');
		$('.plejlista-frejm').attr('src', '');
		$('.koncerti-frejm').attr('src', '');
		$('.plejlista-frejm').attr('src', '');
		$('.shoutbox-frejm').attr('src', '');
		$('.vreme-frejm').attr('src', '');		
		$('.load-spinner').css('display','block');
		$('.onama').css('display','none');
		$('.onama').css('top','20px');
		$('.onama').css('opacity','0');
		$('.predlog').css('display','none');
		$('.predlog').css('top','20px');
		$('.predlog').css('opacity','0');
		$('.shoutbox-iframe').css('display','none');
		$('.shoutbox-iframe').css('top','20px');
		$('.shoutbox-iframe').css('opacity','0');
		$('.vreme-iframe').css('display','none');
		$('.vreme-iframe').css('top','20px');
		$('.vreme-iframe').css('opacity','0');
		$('.koncerti').css('display','none');
		$('.koncerti').css('top','20px');
		$('.koncerti').css('opacity','0');
		$('.growlContainer').css('display','none');
    });
});


$(document).ready(function() {
	$(".plejlista-button").click(function() {
		$('.full-cover').fadeIn(300);
		$('.plejliste-iframe').fadeIn(0);
		$('.plejliste-iframe').css('top','50px');
		$('.plejliste-iframe').css('opacity','1');
		$('.load-spinner').fadeOut(1000);
		$('.plejlista-frejm').attr('src', 'http://www.mjuznews.com#top-10-cnt')
    });
});

$(document).ready(function() {
	$(".mailto-kontakt").click(function() {		
		$('.full-cover').fadeIn(300);
    });
});

$(document).ready(function() {
	$(".onama-button").click(function() {		
		$('.full-cover').fadeIn(300);
		$('.onama').fadeIn(0);
		$('.onama').css('top','50px');
		$('.onama').css('opacity','1');
    });
});

$(document).ready(function() {
	$(".radioadd").click(function() {		
		$('.full-cover').fadeIn(300);
		$('.predlog').fadeIn(0);
		$('.predlog').css('top','50px');
		$('.predlog').css('opacity','1');
    });
});

$(document).ready(function() {
	$(".koncerti-button").click(function() {		
		$('.full-cover').fadeIn(300);
		$('.koncerti').fadeIn(0);
		$('.koncerti').css('top','50px');
		$('.koncerti').css('opacity','1');
		$('.load-spinner').fadeOut(1000);
		$('.koncerti-frejm').attr('src', 'http://www.eventim.rs/rs/muzika/.eventlist-home')
    });
});

$(document).ready(function() {
	$(".radio-item").click(function() {
		$('.nyanimg').attr('src', 'icons/nyancat.gif')
		$('.index-frejm').attr('src', '')
		$('.fa-microphone').css('color','rgba(255, 255, 255, 0.4)');		
    });
});

$(document).ready(function() {
	$(".bottom-icon").click(function() {
		$('.nyanimg').attr('src', 'icons/nyancat.png')
		$('.index-frejm').attr('src', '')
		$('.fa-microphone').css('color','rgba(255, 255, 255, 0.4)');
    });
});

$(document).ready(function() {
	$(".shoutbox-button").click(function() {
		$('.full-cover').fadeIn(300);
		$('.shoutbox-iframe').fadeIn(0);
		$('.shoutbox-iframe').css('top','50px');
		$('.shoutbox-iframe').css('opacity','1');
		$('.load-spinner').fadeOut(1000);
		$('.shoutbox-frejm').attr('src', 'http://notbigmuzzy.freeshoutbox.net/')
    });
});


$(document).ready(function() {
	$(".vreme-button").click(function() {		
		$('.full-cover').fadeIn(300);
		$('.vreme-iframe').fadeIn(0);
		$('.vreme-iframe').css('top','50px');
		$('.vreme-iframe').css('opacity','1');
		$('.load-spinner').fadeOut(1000);
		$('.vreme-frejm').attr('src', 'http://www.naslovi.net/vremenska-prognoza#maincol')
    });
});























});