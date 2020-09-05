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
                default:
					$('.start-wrapper').removeClass('show-menu')
                    $('body').removeClass('show-shell')
                    break;
            }
        }
    }

	//SET STUFF TO BE DRAGGABLE
	$( ".desktop .icons .icon" ).draggable();
	
	//DISABLE RIGHT CLICK
	document.addEventListener('contextmenu', event => event.preventDefault());

	//SET HASH ON VARIOUS CLICK
	$(".action").click(function() {
		var $action = $(this).attr('data-action')
		window.location.hash = $action;
	})

	//CLEAR HASH ON DESKTOP CLICK
	// $(".clear-all-actions").click(function() {
	// 	history.pushState("", document.title, window.location.pathname);
	// })

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
})