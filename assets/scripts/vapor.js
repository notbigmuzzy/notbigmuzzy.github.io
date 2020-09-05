$(document).ready(function () {

	//SET STUFF TO BE DRAGGABLE
	$( ".icon" ).draggable();

	//SET HASH ON VARIOUS CLICK
	$(".action").click(function() {
		var $action = $(this).attr('data-action')
		window.location.hash = $action;
	})

	//CLEAR HASH ON DESKTOP CLICK
	$(".clear-all-actions").click(function() {
		history.pushState("", document.title, window.location.pathname);
	})
})