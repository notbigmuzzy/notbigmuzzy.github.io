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

	//STARTBUTTON LOGIC
	$(".start-button").click(function() {
		var $action = $(this).attr('data-action')
		window.location.hash = $action;
	})

	//CLICK ON WINDOW
	$(document).on('mousedown','.desktop .root .window', function() {
		focus($(this))
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
			windowElement = $(this).parents('.window'),
			windowID = '#' + windowElement.attr('id'),
			taskbarTask = $('.taskbar .tasks').find(windowID);

		switch (buttonAction) {
			case "minimize":
				windowElement.addClass(buttonAction);
				taskbarTask.addClass(buttonAction);
				break;
			case "maximize":
				windowElement.toggleClass(buttonAction);
				break;
			default:
				windowElement.remove();
				taskbarTask.remove();
				break;
		}
	});

	//ACTION FROM MENU ITEM CLICK
	$(document).on('click', '.menuaction', function(e) {
		var $clickedMenuItem = $(this),
			menuItemLaunch = $clickedMenuItem.attr('data-launch'),
			windowElement = $clickedMenuItem.parents('.window'),
			windowID = '#' + windowElement.attr('id'),
			taskbarTask = $('.taskbar .tasks').find(windowID);

		switch (menuItemLaunch) {
			case "close_window":
				windowElement.remove();
				taskbarTask.remove();
				break;
			default:
				console.log('menuaction not defined - ' + menuItemLaunch)
				break;
		}
	});

	//BROWSER WINDOW CONTROL
	$(document).on('click', '.the-browser .net-toolbar', function(e) {
		e.preventDefault();
		var address = $(this).attr('href'),
			windowElement = $(this).parents('.window'),
			windowID = windowElement.attr('id');

		openNewBrowserWithURL(windowID, address);
	});

	//MISC FUNCTIONS
	function openNewBrowserWithURL(windowID, address) {
		setTimeout(function() {
			$('#' + windowID).find('.the-browser input').attr("value", address);
			$('#' + windowID).find('.the-browser iframe').attr("src", address);	
		},50)

	}

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

	function focus(element) {
		$('.desktop .root .window').removeClass('focus');
		$(element).addClass('focus');
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
			$skin = element.attr('data-skin') ? element.attr('data-skin') : 'default',
			$menu = element.attr('data-menu') ? element.attr('data-menu') : "true",
			$menuType = element.attr('data-menu-type') ? 'assets/templates/partials/vapor/' + element.attr('data-menu-type') + '.json' : "assets/templates/partials/vapor/default-window-menu.json",
			$statusbar = element.attr('data-statusbar') ? element.attr('data-statusbar') : "true",
			$statusbarContent = element.attr('data-statusbar-content') ? '<span class="statusbar-text">' + element.attr('data-statusbar-content') + '</span>' : '<span class="statusbar-text">' + $name + '</span>',
			$desktopRoot = $('.desktop .root'),
			$taskbarList = $('.taskbar .tasks'),
			$address = element.attr('data-address') ? element.attr('data-address') : '',
			$windowName = element.attr('data-url') == "internet" ? $address : $name,
			$windowTop = $top ? $top : 50,
			$windowLeft = $position ? $position : 100,
			$windowWidth = $width ? $width : 600,
			$windowHeight = $height ? $height : 400,
			$windowID = generateUniqueID(20),
			$windowOnDesktop = '<div class="window menu-' + $menu + ' ' + $skin + '" id="' + $windowID + '" tabindex="0" data-url="' + $url + '" style="top:' + $windowTop + 'px;' + $xalign + ':' + $windowLeft + 'px;width:' + $windowWidth + 'px;height:' + $windowHeight + 'px;"><div class="titlebar" id="' + $windowID + '_titlebar"><img class="ico" src="' + $img + '"/><span class="label">' + $windowName + '</span><ul class="buttons"><li><button id="minimize">_</button></li><li><button id="maximize">=</button></li><li><button id="close">x</button></li></ul></div><div class="window-menu"></div><div class="content"></div><div class="window-statusbar"></div></div>';
			$windowInTaskbar = '<li id="' + $windowID + '"><img class="ico" src="' + $img + '"/><span>' + $windowName + '</span></li>';

		//ADD NEW WINDOW TO DESKTOP ROOT SURFACE
		$desktopRoot.append($windowOnDesktop);

		//ADD NEW WINDOW TO TASKBAR LIST
		$taskbarList.append($windowInTaskbar)

		//SELECT NEWLY CREATED WINDOW
		var newWindow = document.getElementById($windowID)

		//SET NEW WINDOW TO BE DRAGGABLE
		dragElement(newWindow);

		//FOCUS NEW WINDOW
		focus(newWindow)

		//ADD MENU TO NEW WINDOW
		spawnWindowMenu(newWindow);

		//ADD STATUSBAR TO NEW WINDOW
		spawnWindowStatusbar(newWindow);

		//ADD CONTENT TO NEW WINDOW
		populateWindowContent(newWindow);

		//OPEN BROWSER IF INTERNET AND ADDRESS
		if (element.attr('data-url') == "internet") {
			openNewBrowserWithURL($windowID, $address);
		}
	}

	function spawnWindowMenu(newWindow) {
		var whereToPutMenu = $(newWindow).find('.window-menu');

		if ($menu == 'true') {
			generateAndWriteMenu($menuType,newWindow);			
		}
	}

	function generateAndWriteMenu(menuType,newWindow) {
		fetch(menuType)
			.then((response) => response.json())
			.then((data) => {
				var menuItems = data.menu,
					whereToPutMenuWrapper = $(newWindow).find('.window-menu'),
					menuWrapper = '<div class="menu-wrapper"></div>';
				writeOut(whereToPutMenuWrapper, menuWrapper);
				for(var menuItem in menuItems) {
					var whereToPutMenuItems = $(whereToPutMenuWrapper).find('.menu-wrapper'),
						menuItemName = menuItems[menuItem].name,
						menuUniqueID = generateUniqueID(10),
						menuItemHTML = '<div id="' + menuUniqueID + '" class="menu-item"><div class="menu-item-label">' + menuItemName + '</div><div class="submenu-wrapper"></div></div>';
					writeOut(whereToPutMenuItems, menuItemHTML);

					var submenuItems = menuItems[menuItem].submenu;
					for(var submenuItem in submenuItems) {
						var whereToPutSubMenuItems = $(whereToPutMenuItems).find('#' + menuUniqueID).find('.submenu-wrapper'),
							subMenuItemName = submenuItems[submenuItem].name,
							subMenuItemAction = submenuItems[submenuItem].action == 'true' ? 'menuaction' : '', 
							subMenuItemLaunch = submenuItems[submenuItem].launch,
							subMenuItemHTML = '<div class="submenu-item ' + subMenuItemAction + '" data-launch="' + subMenuItemLaunch + '">' + subMenuItemName + '</div>';
						writeOut(whereToPutSubMenuItems, subMenuItemHTML);
					}
				}
			});	
	}

	function spawnWindowStatusbar(newWindow) {
		var whereToPutStatusbar = $(newWindow).find('.window-statusbar');

		if ($statusbar == 'true') {
			writeOut(whereToPutStatusbar, $statusbarContent);
		}
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
        whereToPutContent.append(content);
    }

    function spawnRightClickMenu() {
    	console.log('123')
    }
})