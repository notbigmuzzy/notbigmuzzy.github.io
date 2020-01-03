$(document).ready(function () {
    //INDEX
    shellToggle()
    urlEventListeners()
    window.onhashchange = urlEventListeners;
    listCheckboxEventListeners()

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
                case "#work":
                    $('body').removeClass().addClass('show-work')
                    break;
                case "#me":
                    $('body').removeClass().addClass('show-me')
                    break;
                case "#blog":
                    $('body').removeClass().addClass('show-blog')
                    break;
                case "#show-shell":
                    $('body').addClass('show-shell')
                    break;
                default:
                    $('body').removeClass()
                    break;
            }
        }
    }
    function listCheckboxEventListeners() {
        $('.the-list input[type=checkbox]').change(function () {
            if ($(this).is(':checked')) {
                $(this).parents('.page').addClass('fullscreen')
            } else {
                $(this).parents('.page').removeClass('fullscreen')
            }
        });
    }
})