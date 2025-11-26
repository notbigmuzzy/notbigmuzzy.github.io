$(document).ready(function () {
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

    //CHANGE FILENAME FOR PDF PRINT
    window.addEventListener('beforeprint', function() {
        document.title = 'Ivan_Jovanovic_CV';
    });
    
    window.addEventListener('afterprint', function() {
        document.title = 'N B M ~~~ @( * O * )@';
    });
})