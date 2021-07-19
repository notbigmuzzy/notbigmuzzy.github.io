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

    /////////// TASKBAR INTERACTIONS ///////////

	//STARTBUTTON LOGIC
	$(".start-button").click(function() {
		var $action = $(this).attr('data-action')
		window.location.hash = $action;
	})

	//UNMINIMIZE LOGIC
	$(document).on('click','.taskbar .tasks .minimize', function(e) {
		e.stopPropagation();

		var windowID = '#' + $(this).attr('id');
			matchedWindow = $('.desktop .root').find(windowID),
			allWindows = $('.desktop .root .window');

		$(this).removeClass('minimize');
		matchedWindow.removeClass('minimize');
	});


	/////////// DESKTOP STUF ///////////

	//DESKTOP ICONS + MENU ITEM LAUNCHER
	$('.launch').click(function(e) {
		e.stopPropagation();
		spawnNewWindow($(this))
		closeMenu()
	})

	//RIGHT CLICK MENU
	$(document).bind("contextmenu", function (e) {
		e.preventDefault();
	    
		spawnRightClickMenu();
	});

	// CLICK ON DESKTOP
	$(".wallpaper").click(function () {
		closeMenu()
	});

	//WINDOW BUTTONS CLICK LOGIC
	$(document).on('click', '.window .buttons button', function(e) {
		e.stopPropagation();

		var buttonAction = $(this).attr('id'),
			window = $(this).parents('.window'),
			windowID = '#' + window.attr('id'),
			taskbarTask = $('.taskbar .tasks').find(windowID);

		switch (buttonAction) {
			case "minimize":
				window.addClass(buttonAction);
				taskbarTask.addClass(buttonAction);
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


	//MISC FUNCTIONS
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

	function closeMenu() {
		$(".popup-menu").removeClass('show')
		window.location.hash = 'default';
	}

	function dragElement(element) {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		document.getElementById(element.id + "_titlebar").onmousedown = dragMouseDown;

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
			element.style.top = (element.offsetTop - pos2) + "px";
			element.style.left = (element.offsetLeft - pos1) + "px";
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

	function spawnNewWindow(element) {
		var $url = element.attr('data-url') ? 'assets/templates/partials/vapor/' + element.attr('data-url') : 'assets/templates/partials/vapor/default',
			$name = element.attr('data-name') ? element.attr('data-name') : 'New Window',
			$img = element.attr('src') ? element.attr('src') : element.find('img').attr('src');
			$top = element.attr('data-top') ? element.attr('data-top') : 50,
			$position = element.attr('data-left') ? element.attr('data-left') : element.attr('data-right'),
			$xalign = element.attr('data-left') ? "left" : "right",
			$width = element.attr('data-width') ? element.attr('data-width') : 600,
			$height = element.attr('data-height') ? element.attr('data-height') : 400,
			$desktopRoot = $('.desktop .root'),
			$taskbarList = $('.taskbar .tasks'),
			$windowName = $name;
			$windowTop = $top ? $top : 50,
			$windowLeft = $position ? $position : 100,
			$windowWidth = $width ? $width : 600,
			$windowHeight = $height ? $height : 400,
			$windowID = generateUniqueID(20);

		//ADD NEW WINDOW TO DESKTOP ROOT SURFACE
		$desktopRoot.append('<div class="window" id="' + $windowID + '" tabindex="0" data-url="' + $url + '" style="top:' + $windowTop + 'px;' + $xalign + ':' + $windowLeft + 'px;width:' + $windowWidth + 'px;height:' + $windowHeight + 'px;"><div class="titlebar" id="' + $windowID + '_titlebar"><img class="ico" src="' + $img + '"/><span class="label">' + $windowName + '</span><ul class="buttons"><li><button id="minimize">_</button></li><li><button id="maximize">=</button></li><li><button id="close">x</button></li></ul></div><div class="content"></div></div>');

		//ADD NEW WINDOW TO TASKBAR LIST
		$taskbarList.append('<li id="' + $windowID + '"><img class="ico" src="' + $img + '"/><span>' + $windowName + '</span></li>')

		var newWindow = document.getElementById($windowID)

		//SET NEW WINDOW TO BE DRAGGABLE
		dragElement(newWindow);

		//ADD CONTENT TO WINDOW
		populateWindowContent(newWindow);
	}

	function populateWindowContent(newWindow) {
		var whereToPutContent = $(newWindow).find('.content'),
			fromWhereToGetTheContent = $(newWindow).attr('data-url');

		getShit(whereToPutContent,fromWhereToGetTheContent);
	}

    function getShit(whereToPutContent,fromWhereToGetTheContent) {
        $.ajax({
            url: fromWhereToGetTheContent,
            dataType: "html",
            success: function (content) {
                writeOut(whereToPutContent, content)
            }
        });
    }

	function writeOut(whereToPutContent, content) {
        whereToPutContent.append(content)
    }

    function spawnRightClickMenu() {
    	console.log('123')
    }
})