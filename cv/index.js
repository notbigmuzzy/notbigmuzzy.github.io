$(document).ready(function() {
    $(".cover-close").click(function() {
        if ( $("body").hasClass("active") ) {
            $("body").removeClass("active");
        }
    });
    $(".cover").hide(0);
}), $(".cv-button").click(function() {
	if ( !$("body").hasClass("active") ) {
		$("body").addClass("active");
	}
    $("body").css("background-image", "none"), $(".cover").show(0), $(".cv-wrapper").addClass("cv-wrapper-clicked"), $(".cvheader-rezime").addClass("cvheader-rezime-clicked"), $(".icon-title").removeClass("global-opacity"), $(".cv-button").hide(600), $(".cv-button").off("mouseenter"), $(".cv-button").off("mouseleave"), $(".cvheader").removeClass("global-opacity"), $(".icon-cv-side").removeClass("global-opacity"), $(".icon-cv-side2").removeClass("global-opacity"), $(".cv-description-wrapper").removeClass("global-opacity"), $(".cv-separator").removeClass("global-opacity"), $(".cvtxt").removeClass("global-opacity"), $(".cv-header").css("height", "300px"), $(".cvheader-name").css("font-size", "35px"), $(".cvheader-ocupation").css("font-size", "14px"), $(".icon-wrapper").css("width", "22%"), $(".cv-description-wrapper").css("width", "78%"), $(".cv-description-cover").css("display", "none")
}), $(".cover-close").click(function() {
    setTimeout(function() {
        $("body").css("background-image", "url(images/back.jpg)")
    }, 400), $(".cv-wrapper").removeClass("cv-wrapper-clicked"), $(".cvheader-rezime").removeClass("cvheader-rezime-clicked"), $(".icon-title").addClass("global-opacity"), $(".cv-button").delay(450).show(0), $(".cover").delay(410).hide(0), $(".cvheader").addClass("global-opacity"), $(".icon-cv-side").addClass("global-opacity"), $(".icon-cv-side2").addClass("global-opacity"), $(".cv-description-wrapper").addClass("global-opacity"), $(".cv-separator").addClass("global-opacity"), $(".cvtxt").addClass("global-opacity"), $(".cv-header").css("height", "25%"), $(".cvheader-name").css("font-size", "2vh"), $(".cvheader-ocupation").css("font-size", "1vh"), $(".icon-wrapper").css("width", "28%"), $(".cv-description-wrapper").css("width", "72%"), $(".cv-description-cover").css("display", "block")
}), $(document).keydown(function(e) {
    switch (e.which) {
        case 13:
            $("body").css("background-image", "none"), $(".cover").show(0), $(".cv-wrapper").addClass("cv-wrapper-clicked"), $(".cvheader-rezime").addClass("cvheader-rezime-clicked"), $(".icon-title").removeClass("global-opacity"), $(".cv-button").hide(600), $(".cv-button").off("mouseenter"), $(".cv-button").off("mouseleave"), $(".cvheader").removeClass("global-opacity"), $(".icon-cv-side").removeClass("global-opacity"), $(".icon-cv-side2").removeClass("global-opacity"), $(".cv-description-wrapper").removeClass("global-opacity"), $(".cv-separator").removeClass("global-opacity"), $(".cvtxt").removeClass("global-opacity"), $(".cv-header").css("height", "300px"), $(".cvheader-name").css("font-size", "35px"), $(".cvheader-ocupation").css("font-size", "14px"), $(".icon-wrapper").css("width", "22%"), $(".cv-description-wrapper").css("width", "78%"), $(".cv-description-cover").css("display", "none");
            break;
        case 27:
            setTimeout(function() {
                $("body").css("background-image", "url(images/back.jpg)")
            }, 400), $(".cv-wrapper").removeClass("cv-wrapper-clicked"), $(".cvheader-rezime").removeClass("cvheader-rezime-clicked"), $(".icon-title").addClass("global-opacity"), $(".cv-button").delay(450).show(0), $(".cover").delay(410).hide(0), $(".cvheader").addClass("global-opacity"), $(".icon-cv-side").addClass("global-opacity"), $(".icon-cv-side2").addClass("global-opacity"), $(".cv-description-wrapper").addClass("global-opacity"), $(".cv-separator").addClass("global-opacity"), $(".cvtxt").addClass("global-opacity"), $(".cv-header").css("height", "25%"), $(".cvheader-name").css("font-size", "2vh"), $(".cvheader-ocupation").css("font-size", "1vh"), $(".icon-wrapper").css("width", "28%"), $(".cv-description-wrapper").css("width", "72%"), $(".cv-description-cover").css("display", "block");
            break;
        default:
            return
    }
    e.preventDefault()
});