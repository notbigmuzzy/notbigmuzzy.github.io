(function($) {
	$.fn.split = function(options) {
		if ( $(this).hasClass('split') ) {
			//Initial setup
			var $theSlider = $(this);
			$theSlider.addClass('split-no-anim');

			var $allSlides = $theSlider.find('.slides');
			$allSlides.each(function() {
				var $initSlide = $(this).find('.slide').first();
				$initSlide.addClass('init current split-no-anim');
			});

			//Setup data-attributes
			$theSlider.find('> .inner-wrapper > .slides-wrapper > .slides').each(function() {
				$(this).find('> .slide').each(function(i) {
					$(this).attr('data-attribute-slide-number', i++);
				});
			});

			//Set deafult values for arguments
			var defaultOptions = {
				delay: 0,
				height: 500,
				theme: 'false',
				infinite: 'false',
				arrows: 'false',
				dots: 'false',
				thumbs: 'false'
			}, options = $.extend(defaultOptions, options);

			//Set animation themes for one or multiple sliders
			if ( options.theme !== 'false' ) {
				if ( options.theme.indexOf(',') > -1 ) {
					var $counter = 0;
					var theme = options.theme.split(',');
					$theSlider.find('> .inner-wrapper > .slides-wrapper > .slides').each(function() {
						$(this).addClass("theme-" + theme[$counter++]);
					});
				} else {
					$theSlider.find('.inner-wrapper > .slides-wrapper > .slides').addClass("theme-" + options.theme);
				}
			}

			//Set height
			if ( options.height !== 'false' ) {
				$theSlider.find('> .inner-wrapper > .slides-wrapper').css('height',options.height == "full" ? '100%' : options.height);
			}

			//Init navigation arrows
			if ( options.arrows == 'true' ) {
				if ( !$theSlider.find('> .inner-wrapper .navigation-wrapper').length ) {
					$theSlider.find('> .inner-wrapper > .slides-wrapper').after('<div class="navigation-wrapper"></div>')
				}
				$theSlider.find('> .inner-wrapper > .navigation-wrapper').append('<a href="#" class="navigation-arrow prev"></a><a href="#" class="navigation-arrow next"></a>');
			}
			if ( options.infinite !== 'true' ) {
				$theSlider.find('> .inner-wrapper > .navigation-wrapper .prev').addClass('disable');
			}

			//Click navigation arrow event
			$theSlider.find('> .inner-wrapper > .navigation-wrapper .navigation-arrow').on( "click", {
				delay: options.delay,
				infinite: options.infinite,
				thumbs: options.thumbs
			}, splitArrows );

			//Init dots
			if ( options.dots == 'true' && options.infinite !== 'true' ) {
				var $navWrap = $theSlider.find('> .inner-wrapper > .slides-wrapper');

				$navWrap.after('<div class="dots-wrapper default">');
			}

			var $slides = $theSlider.find('> .inner-wrapper > .slides-wrapper > .slides');

			$slides.each(function() {
				var $thisSlide = $(this);

				$thisSlide.find('> .slide').each(function(j) {
					var $currentSlide = $(this).parents('.split').first().find('.dots-wrapper');

					if ( options.dots == 'true' ) {
						$currentSlide.append('<a href="#" class="dot" data-attribute-dot-number="' + j++ + '"></span>');
					} else if ( options.dots == 'auto' ) {
						$currentSlide.find('.dot').each(function(i) {
							$(this).attr('data-attribute-dot-number', i++);
						});
					}

					if ( options.thumbs !== 'false' ) {

						setTimeout(function () {
							$currentSlide.find('.dot').each(function() {
								var $this = $(this); 
								$this.addClass('thumb');
								var dot = $this.attr('data-attribute-dot-number');

								if ( dot == 0 ) {

									$this.addClass('active visible');

								} else if ( dot == j ) {

									if ( j <= options.thumbs - 1 ) {
										$this.addClass('visible');
									}
								}

								setTimeout(function() {
									if ( !$this.hasClass('visible') ) {
										$this.addClass('next');
									}
								});
							});							
						});
					}
				});
			});

			//Click dots event
			$theSlider.find('> .inner-wrapper .dots-wrapper .dot').on( "click", splitDots);

			//Last sanity check
			setTimeout(function () {
				$('body').find('.split-no-anim').removeClass('split-no-anim');
				$('body').find('.split').first().attr('id', 'split');
			});
		}
		return this;
	};

	function splitArrows(event) {
		event.preventDefault();
		$buttonClicked = $(this);
		$currentSlide = $(this).parents('.split').first().find('> .inner-wrapper > .slides-wrapper > .slides');
		$currentNav = $(this).parents('.split').first().find('> .inner-wrapper > .navigation-wrapper');
		$currentDots = $(this).parents('.split').first().find('> .inner-wrapper > .dots-wrapper');
		$dotActive = $currentDots.find('.active');
		$dotFirstVisible = $currentDots.find('.visible').first();
		$dotLastVisible = $currentDots.find('.visible').last();

		if ( $buttonClicked.hasClass('prev') ) {
			$currentSlide.each(function() {
				var $currentSlide = $(this);

				$buttonClicked.siblings('.next').removeClass('disable prevent');
				$currentSlide.find('> .slide.init').last().removeClass('current');
				setTimeout(function() {
					$currentSlide.find('> .slide.previous').last().addClass('current').removeClass('previous');
					$currentSlide.find('> .slide.init').last().removeClass('init');
					if ( $currentSlide.find('> .slide.previous').last().length ) {
						$buttonClicked.removeClass('prevent');
					}
				}, event.data.delay);
			});
			$currentNav.find('.dots-wrapper .active').removeClass('active').prev().addClass('active');

			if ( event.data.infinite == 'true' ) {
				$currentSlide.each(function() {
					var $firstElement = $(this).find('> .slide').first();
					var $lastElement = $(this).find('> .slide').last();
					$lastElement.insertBefore($firstElement);
					$lastElement.addClass('previous init');
				});
			} else {
				if ( !$currentSlide.find('> .slide.previous').last().prev().length && $currentSlide.find('> .slide.previous').length ) {
					$buttonClicked.addClass('disable');
				}
			}

			if ( !$dotActive.prev('.visible').length ) {
				$dotActive.prev().addClass('visible').removeClass('prev');
				$dotLastVisible.removeClass('visible').addClass('next');
			}

			$dotActive.removeClass('active').prev().addClass('active');
		} else if ( $buttonClicked.hasClass('next') && $currentSlide.find('> .slide.init').last().next().length ) {
			$currentSlide.each(function() {
				var $currentSlide = $(this);

				$buttonClicked.siblings('.prev').removeClass('disable prevent');
				$currentSlide.find('> .slide.init').last().removeClass('current');
				setTimeout(function() {
					$currentSlide.find('> .slide.init').last().addClass('previous');
					$currentSlide.find('> .slide.previous').last().next().addClass('init current');
					if ( $currentSlide.find('> .slide.init').last().next().length ) {
						$buttonClicked.removeClass('prevent');
					}
				}, event.data.delay);
			});

			if ( !$currentSlide.find('> .slide.init').last().next().next().length ) {
				if ( event.data.infinite == 'true' ) {
					$currentSlide.each(function() {
						var $firstElement = $(this).find('> .slide').first();
						var $lastElement = $(this).find('> .slide').last();
						$firstElement.insertAfter($lastElement);
						$firstElement.removeClass('previous init');
					});
				} else {
					$buttonClicked.addClass('disable');
				}
			}

			if ( !$dotActive.next('.visible').length ) {
				$dotActive.next().addClass('visible').removeClass('next');
				$dotFirstVisible.removeClass('visible').addClass('prev');
			}

			$dotActive.removeClass('active').next().addClass('active');
		}
	};

	function splitDots(event) {
		event.preventDefault();
		var $clickedDot = $(this);
		var $clickedDotNext = $clickedDot.parents('.split').first().find('> .inner-wrapper > .navigation-wrapper .next');
		var $clickedDotPrev = $clickedDot.parents('.split').first().find('> .inner-wrapper > .navigation-wrapper .prev');
		var $clickedDotNumber = $clickedDot.attr('data-attribute-dot-number');
		var $slides = $(this).parents('.split').first().find('> .inner-wrapper > .slides-wrapper > .slides');
		var $slide = $slides.find('> .slide');

		$slides.each(function() {

			$slide.each(function() {
				var $matchedSlider = $(this).attr('data-attribute-slide-number');

				if( $clickedDotNumber == $matchedSlider ) {
					$(this).removeClass('previous').addClass('init');
					$(this).prevAll().removeClass('current').addClass('init previous');
					$(this).nextAll().removeClass('init current previous');

		            if( $(this).next().length == 0 ) {
		                $clickedDotNext.addClass('disable');
		                $clickedDotPrev.removeClass('disable prevent');
		            } else if ( $(this).prev().length == 0 ) {
		                $clickedDotPrev.addClass('disable');
		            	$clickedDotNext.removeClass('disable prevent');
		            } else {
		                $clickedDotNext.removeClass('prevent disable');
		                $clickedDotPrev.removeClass('prevent disable');
		            }
				}
			});
		});

		$clickedDot.addClass('active');
		$clickedDot.siblings().removeClass('active');
	};

	$(document).keyup(function(event) {

		if ( $('.split').length ) {
			if ( event.which == 192 ) {
				$('.split').not('.split .split').addClass('fullscreen');
			} else if ( event.which == 27 ) {
				$('.split').not('.split .split').removeClass('fullscreen');
			} else if ( event.which == 37 && !$('.split').first().find('> .inner-wrapper > .navigation-wrapper .navigation-arrow.prev').hasClass('disable') ) {
				$('.split .navigation-arrow.prev').not('.split .split .navigation-arrow.prev').click();
			} else if ( event.which == 39 && !$('.split').first().find('> .inner-wrapper > .navigation-wrapper .navigation-arrow.next').hasClass('disable') ) {
				$('.split .navigation-arrow.next').not('.split .split .navigation-arrow.next').click();
			}
		}
	});

	$(document).ready(function() {

		if ( $('#split').length ) {
			var element = document.getElementById('split')

			splitSwipe(element, function(swipedirection){
			    if (swipedirection == 'left' && !$('.split').first().find('> .inner-wrapper > .navigation-wrapper .navigation-arrow.next').hasClass('disable')) {
			        $('.split .navigation-arrow.next').not('.split .split .navigation-arrow.next').click();
			    } else if (swipedirection == 'right' && !$('.split').first().find('> .inner-wrapper > .navigation-wrapper .navigation-arrow.prev').hasClass('disable')) {
			    	$('.split .navigation-arrow.prev').not('.split .split .navigation-arrow.prev').click();
			    }
			});

			function splitSwipe(element, callback){
			    var touchsurface = element,
			    swipedirection,
			    startX,
			    startY,
			    distX,
			    distY,
			    threshold = 100,
			    restraint = 100,
			    allowedTime = 300,
			    elapsedTime,
			    startTime,
			    handleswipe = callback || function(swipedirection){}
			  
			    touchsurface.addEventListener('touchstart', function(e){
			        var touchobj = e.changedTouches[0]
			        swipedirection = 'none'
			        dist = 0
			        startX = touchobj.pageX
			        startY = touchobj.pageY
			        startTime = new Date().getTime()
			    }, false)
			  
			    touchsurface.addEventListener('touchend', function(e){
			        var touchobj = e.changedTouches[0]
			        distX = touchobj.pageX - startX
			        distY = touchobj.pageY - startY
			        elapsedTime = new Date().getTime() - startTime 
			        if (elapsedTime <= allowedTime){
			            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
			                swipedirection = (distX < 0)? 'left' : 'right'
			            }
			            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){
			                swipedirection = (distY < 0)? 'up' : 'down'
			            }
			        }
			        handleswipe(swipedirection)
			    }, false)
			}
		}
	});
}(jQuery));