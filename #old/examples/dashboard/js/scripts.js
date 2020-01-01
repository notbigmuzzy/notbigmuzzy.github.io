jQuery.fn.toggleAttr = function (attr) {
	return this.each(function () {
		let $this = $(this);
		$this.attr(attr) ? $this.removeAttr(attr) : $this.attr(attr, attr);
	});
};

jQuery.fn.toggleText = function (before, after) {
	return this.text(this.text() === before ? after : before);
}

$(document).ready(function () {

	// Prevent jump on link click
	$('a[href="#"]').click(function (e) { e.preventDefault(); });

	//Open/close chat offcanvas
	$('.m-chat-button, .o-chat .m-chat-users-head, .m-nav-icons .m-chat-icon').on('click', function (e) {
		e.preventDefault();

		$('body').addClass('b-show-chat');
	});

	$('.m-chat-popup-header .a-ico-close').on('click', function () {
		$('body').removeClass('b-show-chat b-expand-popup');
		// FOR TESTING ONLY - REMOVE WHEN CHAT IMPLEMENTED
		$('.sample-image-small').fadeOut();
		$('.sample-image-big').fadeOut();
	});

	//Open/close contact offcanvas
	$('.m-teacher .m-chat-user, .m-fixed-header-avatar, .m-navigation-list .m-fixed-header-avatar').on('click', function (e) {
		e.preventDefault();

		$('body').addClass('b-show-contact');
	});

	$('.m-contact-popup .a-ico-close').on('click', function () {
		$('body').removeClass('b-show-contact');
	});

	//Toggle header on scroll
	$(document).on('scroll', function () {
		var scrollDistance = $(document).scrollTop();
		var toggle = $('.o-hero').outerHeight(true);
		$('body').toggleClass('b-show-header', (scrollDistance > toggle/2));
	});

	$('#js-switch-benchmark').click(function (e) {
		e.preventDefault();

		$('body').toggleClass('b-switch-stats');
	});

	//Expand chat popup
	$('#expand-popup').on('click', function () {
		if ($('body').hasClass('b-expand-popup')) {
			$('body').removeClass('b-expand-popup');
			// FOR TESTING ONLY - REMOVE WHEN CHAT IMPLEMENTED
			$('.sample-image-small').fadeIn();
			$('.sample-image-big').fadeOut();
		} else {
			$('body').addClass('b-expand-popup');
			// FOR TESTING ONLY - REMOVE WHEN CHAT IMPLEMENTED
			$('.sample-image-big').fadeIn();
			$('.sample-image-small').fadeOut();
		}
	});

	//Open/close notification center
	$('.a-menu-item-notifications').on('click', function (e) {
		e.preventDefault();

		var $body = $('body');
		if ( $body.hasClass('b-show-notification-center') ) {
			$body.removeClass('b-show-notification-center');
			$(this).removeClass('a-menu-item-reveal');
			$('.o-offcanvas-popup-small').removeClass('fade-in');
		} else {
			$body.toggleClass('b-show-notification-center');
			$(this).toggleClass('a-menu-item-reveal');
			setTimeout(function(){ $('.o-offcanvas-popup-small').addClass('fade-in'); }, 10);
		}
	});
	$('.o-main-content').on('click', function (e) {
		if ( $('body').hasClass('b-show-notification-center') ) {
			$('body').removeClass('b-show-notification-center');
			$('.a-menu-item-notifications').removeClass('a-menu-item-reveal');
			$('.o-offcanvas-popup-small').removeClass('fade-in');
		}
	});
	$('.mute').on('click', function (e) {
		e.preventDefault();
			
		$(this).parent().toggleClass('muted');
	});

	//Open menu on mobile
	$('.a-burger-menu').on('click', function () {
		$('body').toggleClass('b-show-menu');
		if ( $('body').hasClass('b-show-notification-center') ) {
			$('body').removeClass('b-show-notification-center');
			$('.m-nav-icons .a-menu-item-notifications').removeClass('a-menu-item-reveal');
			$('.o-offcanvas-popup-small').removeClass('fade-in');
		}
	});

	//Toggle menu
	$(document).on('mouseenter mouseleave', '.o-nav-sidebar-wrapper', function (e) {
		if ($(window).width() > 640) {
			var hoverIn = e.type === 'mouseenter';
			var hoverOut = e.type === 'mouseleave';

			if (hoverIn) {
				$('body').addClass('b-sidebar-expand');
				$('.a-menu-item-active').parent().find('.m-navigation-list-second-level').stop(true).slideDown();
				$('.a-working-hours .bodytext').stop(true).slideDown();
			} else if ( hoverOut && (!$('body').hasClass('b-sidebar-shrink')) && $(window).width() < 1200 ) {
				$('body').removeClass('b-sidebar-expand');
				$('.m-navigation').find('.m-navigation-list-second-level').stop(true).slideUp();
				$('.m-navigation').find('.a-menu-item-has-submenu').removeClass('a-menu-item-reveal');
				$('.a-working-hours .bodytext').stop(true).slideUp();
			} else if ( hoverOut && $('body').hasClass('b-sidebar-shrink') ) {
				$('body').removeClass('b-sidebar-expand');
				$('.m-navigation').find('.m-navigation-list-second-level').stop(true).slideUp();
				$('.m-navigation').find('.a-menu-item-has-submenu').removeClass('a-menu-item-reveal');
				$('.a-working-hours .bodytext').stop(true).slideUp();
			} else {
				$('body').removeClass('b-sidebar-expand');
				$('.a-working-hours .bodytext').stop(true).slideUp();
			}
		}
	});

	//Open submenu if any
	$('.a-menu-item').on('click', function (e) {
		var hasSubmenu = $(this).parent().find('.m-navigation-list-second-level').length;
		var submenu = $(this).parent().find('.m-navigation-list-second-level');

		if (hasSubmenu) {
			submenu.stop(true).slideToggle();
			$(this).toggleClass('a-menu-item-reveal');
			e.preventDefault();
		}
	});

	$('.js-edit-button').click(function () {
		var $this = $(this);
		var dataText = $this.attr('data-text');

		$this.attr('data-text', $this.text());
		$this.prev('input').toggleAttr('readonly').focus();
		$this.toggleText($this.text(), dataText);
	});

	$('.m-profile-fields-box').find('input').focus(function () {
		$(this).parent('.m-profile-fields-box').addClass('focus');
	}).focusout(function () {
		$(this).parent('.m-profile-fields-box').removeClass('focus');
	})

	$('.m-profile-fields-box').find('input').blur(function () {
		if ($(this).val()) {
		    $(this).parent('.m-profile-fields-box').addClass('focus');
		} else {
			$(this).parent('.m-profile-fields-box').removeClass('focus');
		}
	});

	$('#js-upload-image').click(function () {
		$('body').addClass('show-image-upload');
		$('body').css({
			'overflow': 'hidden'
		});
	});

	$('#js-close-popup').click(function () {
		$('body').removeClass('show-image-upload');
		$('body').css({
			'overflow': 'visible'
		});
	});

	$('#js-trigger-upload').click(function () {
		$('#dropzone-form').click();
	});

	$(document).on('click','.m-notification .a-ico-close', function () {
		$(this).parent().fadeOut('450', function() { 
			$(this).remove();
		});
	});

	$(document).on('click','.m-notification .a-button-confirm', function () {
		$(this).parents('.m-notification').fadeOut('450', function() { 
			$(this).remove();
		});
	});

	// Dropzone options
	if ( $('#dropzone-form').length ) {
		Dropzone.autoDiscover = false;
		$('#dropzone-form').dropzone({
			maxFilesize: 2,
			previewTemplate: $('#template-preview').html(),
			drop: function (file) {
				this.removeAllFiles();
			},
			success: function (file, response) {
				$('#js-upload-image').addClass('show-profile-image').css({
					'background-image': 'url(' + file.dataURL + ')'
				});
			}
		});
	}

	//Calendar logic
	function toggleCalendarView() {
		$('.month-view, .week-view').toggle();
		$('.week, .month').toggleClass('active');
		$('.m-calendar-head-date-week, .m-calendar-head-date-month').toggle();
		$('.m-calendar-popup').hide();
	}
	$('.m-calendar-head .week, .m-calendar-head .month').click(function (e) {
		if ( !$(this).hasClass('active') ) {
			e.preventDefault();
			toggleCalendarView();
		}
	});

	$('.month-view .day:not(".other-month"), .week-view .half-hour').click(function () {
		var itemWidth = $(this).width();
		var popupWidth = $('.m-calendar-popup').outerWidth(true);
		var windowWidth = $(window).width();
		var positionTop = $(this).offset().top - 20;
		var positionLeft = $(this).offset().left + itemWidth + 10;
		var positionLeftAlt = $(this).offset().left - popupWidth;

		var positionTopMobile = $(this).offset().top + $(this).outerHeight(true);
		var positionLeftMobile = $(this).offset().left;

		if ( windowWidth < 801 ) {
			$('.m-calendar-popup').css({
				'left': positionLeftMobile, 
				'top': positionTopMobile
			});
			$('.m-calendar-popup').removeClass('offset');
			$(this).toggleClass('show-popup');
			$(this).parents('.m-calendar-body').find('.day').removeClass('show-popup').find('.half-hour').removeClass('show-popup');
			$(this).addClass('show-popup');
		} else {

			if ( (positionLeft + popupWidth) > windowWidth ) {
				$('.m-calendar-popup').css({
					'left': positionLeftAlt, 
					'top': positionTop
				});
				$('.m-calendar-popup').addClass('offset');
				$(this).parents('.m-calendar-body').find('.day').removeClass('show-popup').find('.half-hour').removeClass('show-popup')
				$(this).addClass('show-popup');

			} else {
				$('.m-calendar-popup').css({
					'left': positionLeft, 
					'top': positionTop
				});
				$('.m-calendar-popup').removeClass('offset');
				$(this).toggleClass('show-popup');
				$(this).parents('.m-calendar-body').find('.day').removeClass('show-popup').find('.half-hour').removeClass('show-popup');
				$(this).addClass('show-popup');
			}
		}
		$('.m-calendar-popup').show();
	});

	//Close popup
	$(document).mouseup(function (e) {
		var container = $('.m-calendar-popup');
	    if ( !container.is(e.target) && container.has(e.target).length === 0 ) {
	        container.hide();
	       	$('.m-calendar-body').find('.day').removeClass('show-popup').find('.half-hour').removeClass('show-popup');
	    }
	});

	$('.event').click(function (e) {
		e.stopPropagation();
	});

	$('.clickable').click(function (e) {
		$(this).find('span').toggle();
	});

	$('.day-name').click(function () {
		var windowWidth = $(window).width();
		var $parent = $(this).parent();

		if ( windowWidth < 801 ) {
			$parent.find('.half-hour').fadeIn();
			$parent.find('.hours').fadeIn();
			$parent.siblings().find('.half-hour').hide();
			$parent.siblings().find('.hours').hide();

			if ( windowWidth < 640 ) {
				$('html, body').animate({
				    scrollTop: ( $parent.offset().top - 80 )
				},600);
			} else {
				$('html, body').animate({
				    scrollTop: ( $parent.offset().top )
				},600);
			}
		}
	});

	/*
	################ MOVE AND RESIZE EVENTS

	// Month view
	$(".month-view .draggable").draggable({
		helper: 'clone',
	    revert: false,
		drag: function(event, ui) {
			$(this).addClass('dragging');
			$(this).parent().addClass('dragging');
		},
	    start: function(event, ui) {
			ui.helper.data('dropped', false);
	    },
	    stop: function(event, ui)
	    {
			$(".draggable").removeClass('dragging');
			$('.day').removeClass('dragging');
	    }
	});
	$('.month-view .day:not(".other-month")').droppable({
		accept: '.draggable',
		tolerance: 'pointer',
		drop: function(event, ui) {
			ui.helper.data('dropped', true);
			$(this).append(ui.draggable);
			$(".draggable").removeClass('dragging');
			$('.day').removeClass('dragging');
		}
	});

	//Week view
	$(".week-view .draggable").draggable({
		helper: 'clone',
	    revert: false,
		drag: function(event, ui) {
			$(this).addClass('dragging');
			$(this).parent().addClass('dragging');
		},
	    start: function(event, ui) {
			ui.helper.data('dropped', false);
	    },
	    stop: function(event, ui)
	    {
			$(".draggable").removeClass('dragging');
			$('.day').removeClass('dragging');
	    }
	});
	$('.week-view .half-hour').droppable({
	    accept: '.draggable',
	    tolerance: 'pointer',
		drop: function(event, ui) {
			ui.helper.data('dropped', true);
			$(this).append(ui.draggable);
			$(".draggable").removeClass('dragging');
			$('.day').removeClass('dragging');
		}
	});
	$(".week-view .resizable").resizable({
		handles: 's'
	});

	################
	*/
});