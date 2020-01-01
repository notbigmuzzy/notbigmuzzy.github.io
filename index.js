$(document).ready(function() {
    //INDEX
    shellToggle()

    //FUNCTIONS
    function shellToggle() {
        if (document.getElementById('js-the-shell')) {
            document.addEventListener('keydown', (e) => {
                if (e.code == "F1") {
                    e.preventDefault()
                }
            });
            document.addEventListener('keyup', (e) => {
                if (e.code == "F1") {
                    e.preventDefault()

                    $('body').toggleClass('show-shell')
                }
            });
            $('#f1').click(function() {
                $('body').toggleClass('show-shell')
            })
        }
    }
})