$(document).ready(function () {
	//INDEX
	setClock()
    window.onhashchange = urlEventListeners;

    //ON HASH CHANGE
    function urlEventListeners() {
        if (document.getElementById('portfolio')) {
            var e = location.hash;

            switch (e) {
                case "#show-shell":
                    $('body').addClass('show-shell')
                    break;
                case "#show-menu":
                    $('.start-wrapper').addClass('show-menu')
                    break;
                case "#popup-menu":
					$('.popup-menu').addClass('show-menu')
					break;
                default:
					$('.start-wrapper').removeClass('show-menu')
                    $('body').removeClass('show-shell')
                    $('.popup-menu').removeClass('show-menu')
                    break;
            }
        }
    }

	//SET STUFF TO BE DRAGGABLE
	$( ".desktop .icons .icon" ).draggable();

	//TASKBAR LOGIC
	$(".start-button").click(function() {
		var $action = $(this).attr('data-action')
		window.location.hash = $action;
	})

	//SET CLOCK
	function setClock() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		m = checkTime(m);
		document.getElementById('clock').innerHTML = h + ":" + m;
		var t = setTimeout(setClock, 30000);
	}
	function checkTime(i) {
		if (i < 10) {i = "0" + i};
		return i;
	}

	//RIGHT CLICK MENU
	$(document).bind("contextmenu", function (e) {
		e.preventDefault();
	    
	    $(".popup-menu").addClass('show').css({
	        top: event.pageY + "px",
	        left: event.pageX + "px"
	    });

	});

	// // If the document is clicked somewhere
	$(document).bind("mousedown", function (e) {
	    
	    // If the clicked element is not the menu
	    if (!$(e.target).parents(".custom-menu").length > 0) {
	        
	        // Hide it
	        $(".popup-menu").removeClass('show')
	    }
	});


	// // If the menu element is clicked
	// $(".custom-menu li").click(function(){
	    
	//     // This is the triggered action name
	//     switch($(this).attr("data-action")) {
	        
	//         // A case for each action. Your actions here
	//         case "first": alert("first"); break;
	//         case "second": alert("second"); break;
	//         case "third": alert("third"); break;
	//     }
	  
	//     // Hide it AFTER the action was triggered
	//     $(".custom-menu").hide(100);
	//   });
})