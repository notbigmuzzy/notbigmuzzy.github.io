$(document).ready(function () {
    //INDEX
    shellToggle()
    window.onhashchange = urlEventListeners;

    //SANITIZE HASH ON PAGE LOAD - REMOVE ANY HASH ON PAGE LOAD 
    history.pushState("", document.title, window.location.pathname);


    //FUNCTIONS
    function shellToggle() {
        document.addEventListener('keydown', (e) => {
            if (e.code == "F1") {
                e.preventDefault()
                $('#f1').addClass('highlight');
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.code == "F1") {
                e.preventDefault()
                window.location.hash = '#show-shell';
                $('#f1').removeClass('highlight');
            }
            if (e.code == "Escape" && window.location.hash == "#show-shell") {
                window.history.back();
            }
        });
        $('.shell-off').click(function (e) {
            e.preventDefault();
            window.history.back();
        })
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

    //PREVENT CLICK ON CV TO CLOSE
    $('#cv-toggle + label .the-cv').click(function(e) {
        if ( $('#cv-toggle').is(":checked") ) {
            e.preventDefault()
            e.stopPropagation()
        }
    })
    $('.cv-toggle-close, #cv-toggle + label').click(function(e) {
        e.stopPropagation()
        $('.the-cv').scrollTop(0)    
    })
})