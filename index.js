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