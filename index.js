$(document).ready(function () {
    //INDEX
    shellToggle()
    horizontalScrollWithWheel()
    window.onhashchange = urlEventListeners;

    //SANITIZE HASH ON PAGE LOAD - REMOVE ANY HASH ON PAGE LOAD 
    if (window.location.hash) {
        history.replaceState(null, document.title, window.location.pathname);
    }

    //TEMPORARY DARK MODE
    $('.dark-mode').click(function() {
        $('html').addClass('dark-mode')
    })

    // CLOSE MAIN MENU ON CLICK OUTSIDE
    $('.switcher').click(function() {
        closeMainMenu();
    })
    $('.card').click(function(e) {
        e.stopPropagation();
    })

    //FUNCTIONS
    function shellToggle() {
        document.addEventListener('keyup', (e) => {
            if (e.code == "Escape" && window.location.hash == "#show-shell") {
                closeMainMenu();
            }
        });
        $('.shell-off').click(function (e) {
            e.preventDefault();
            closeMainMenu();
        })
    }

    function horizontalScrollWithWheel() {
        const cardWrapper = document.querySelector('.card-wrapper');
        if (cardWrapper) {
            cardWrapper.addEventListener('wheel', function(e) {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    cardWrapper.scrollLeft += e.deltaY;
                }
            });
        }
    }

    function closeMainMenu () {
        window.location.hash = '';
        setTimeout(function() {
            const cardWrapper = document.querySelector('.card-wrapper');
            cardWrapper.scrollLeft = 0; 
        }, 50);
    }

    function urlEventListeners() {
        if (document.getElementById('portfolio')) {
            var e = location.hash;

            switch (e) {
                case "#show-shell":
                    $('body').addClass('show-shell')
                    break;
                default:
                    $('body').removeClass('show-shell')
                    break;
            }
        }
    }

    //SET HASH ON VARIOUS CLICK
    $(".action").click(function() {
        $.each($(this).data(), function(key, value) {
            switch (key) {
                case "action":
                    window.location.hash = value;
                    break;
                case "open":
                    window.open(value)
                    break;
                default:
                    break;
            }
        });
    })
})