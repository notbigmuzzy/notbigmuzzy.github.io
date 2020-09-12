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
})