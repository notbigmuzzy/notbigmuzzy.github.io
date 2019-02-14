$(document).ready(function() {

    if ( $('#player').length ) {
        
        var video = document.getElementById('player'),
            videoFloatTogglePoint = document.getElementById('video-js').offsetTop + document.getElementById('video-js').offsetHeight / 2,
            autoplayCheck = document.getElementById('autoplay-check'),
            checkCookie = getCookie('autoplay-enabled');

        //On scroll
        window.onscroll = function() {
            windowScroll = window.pageYOffset;
        
            if ( windowScroll > videoFloatTogglePoint ) {
                document.getElementById('player').classList.add('fixed');
            } else {
                document.getElementById('player').classList.remove('fixed');
            }
        };

        //Autoplay checkbox
        autoplayCheck.addEventListener('click', function() {
            var checkCookie = getCookie('autoplay-enabled');

            if ( checkCookie == 'set' ) {
                setCookie('autoplay-enabled', 'set', 0);
            } else {
                setCookie('autoplay-enabled', 'set', 365);
            }
        }, false);

        //Play video on page load if autoplay true
        if ( checkCookie == 'set' ) {
            console.log('1');
            autoplayCheck.checked = true;
            //flowplayer('#player').play();
            flowplayer.defer('#player').then(function(api) {
                console.log('API loaded', api);
            });
        } else {
            console.log('2');
        }

        // //Play next video if autplay enabled
        // jwplayer().on('complete', function () {
        //     var checkCookie = getCookie('autoplay-enabled'),
        //         isFixed = document.getElementById('player').classList.contains('fixed');

        //     if ( checkCookie == 'set' && isFixed == false ) {
        //         document.getElementById('next-video').click();
        //     } else {
        //         autoplayCheck.closest('label').classList.add('error');
        //     }
        // })

        // //Stuff happens on video play
        // jwplayer(video).on('play', function() {
        //     document.getElementById('player').classList.add('playing');
        //     document.getElementById('player').classList.remove('paused', 'completed');
        // });

        // //Stuff happens on video pause
        // jwplayer(video).on('pause', function() {
        //     document.getElementById('player').classList.add('paused');
        // });

        // //Stuff happens on video complete
        // jwplayer(video).on('complete', function() {
        //     document.getElementById('player').classList.add('completed');
        // });

        // SET, GET, CHECK cookies
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = 'expires='+d.toUTCString();
            document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
        }

        function getCookie(cname) {
            var name = cname + '=';
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return '';
        }

    }

});

