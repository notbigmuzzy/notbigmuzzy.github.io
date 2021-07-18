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
	    
	    // $(".popup-menu").addClass('show').css({
	    //     top: event.pageY + "px",
	    //     left: event.pageX + "px"
	    // });

	});

	// // If the document is clicked somewhere
	$(".desktop").bind("mousedown", function (e) {
	    
	    // If the clicked element is not the menu
	    if (!$(e.target).parents(".custom-menu").length > 0) {
	        
	        // Hide it
	        $(".popup-menu").removeClass('show')
			window.location.hash = 'default';
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

	//WINDOW BUTTONS CLICK LOGIC
	$(document).on('click', '.window .buttons button', function(e) {
		var buttonAction = $(this).attr('id'),
			window = $(this).parents('.window'),
			windowID = '.' + window.attr('id'),
			taskbarTask = $('.taskbar .tasks').find(windowID);

		switch (buttonAction) {
			case "minimize":
				window.addClass(buttonAction);
				taskbarTask.addClass(buttonAction)
				break;
			case "maximize":
				window.toggleClass(buttonAction);
				break;
			default:
				window.remove();
				taskbarTask.remove();
				break;
		}
	});

	//UNMINIMIZE LOGIC
	$(document).on('click','.taskbar .tasks .minimize', function() {
		$(this).removeClass('minimize');

		var windowID = '#' + $(this).attr('class');

		$('.desktop .root').find(windowID).removeClass('minimize').focus();
	});

	function dragElement(elmnt) {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		document.getElementById(elmnt.id + "_titlebar").onmousedown = dragMouseDown;

		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = stopDragElement;
			document.onmousemove = elementDrag;
		}

		function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}

		function stopDragElement() {
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}

	function generateUniqueID(length) {
		var result = '', 
			characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
			charactersLength = characters.length;

		for ( var i = 0; i < length; i++ ) {
			result += characters.charAt(Math.floor(Math.random() * 
			charactersLength));
		}
		return result;
	}

	function spawnNewWindow(name,top,left,width,height) {
		var $desktopRoot = $('.desktop .root'),
			$taskbarList = $('.taskbar .tasks'),
			$windowName = name;
			$windowTop = top ? top : 50,
			$windowLeft = left ? left : 100,
			$windowWidth = width ? width : 600,
			$windowHeight = height ? height : 400,
			$windowID = generateUniqueID(20);

		//ADD NEW WINDOW TO DESKTOP ROOT SURFACE
		$desktopRoot.append('<div class="window" id="' + $windowID + '" tabindex="0" style="top:' + $windowTop + 'px;left:' + $windowLeft + 'px;width:' + $windowWidth + 'px;height:' + $windowHeight + 'px;"><div class="titlebar" id="' + $windowID + '_titlebar"><img class="ico" src="#"/><span class="label">' + $windowName + '</span><ul class="buttons"><li><button id="minimize">_</button></li><li><button id="maximize">=</button></li><li><button id="close">x</button></li></ul></div><div class="content"></div></div>');

		//ADD NEW WINDOW TO TASKBAR LIST
		$taskbarList.append('<li class="' + $windowID + '"><img class="ico" src="#"/><span>' + $windowName + '</span></li>')

		//SET NEW WINDOW TO BE DRAGGABLE
		dragElement(document.getElementById($windowID));

		//FOCUS NEW WINDOW
		document.getElementById($windowID).focus();
	}

	//DESKTOP ICONS LAUNCHER
	$('.launch').click(function() {
		var name = $(this).attr('data-name') ? $(this).attr('data-name') : 'New Window',
			top = $(this).attr('data-top') ? $(this).attr('data-top') : 50,
			left = $(this).attr('data-left') ? $(this).attr('data-left') : 100,
			width = $(this).attr('data-width') ? $(this).attr('data-width') : 600,
			height = $(this).attr('data-height') ? $(this).attr('data-width') : 400;

		spawnNewWindow(name,top,left,width,height)
	})
})