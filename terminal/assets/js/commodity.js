$(document).ready(function() {
	// hides the slickbox as soon as the DOM is ready
	// (a little sooner than page load)
	$('#hiddenbox0').hide();
	// toggles the slickbox on clicking the noted link
	$('a#jqtextcall0').click(function() {
		$('#hiddenbox0').slideToggle(400);
		return false;
	});
});
$(document).ready(function() {
	// hides the slickbox as soon as the DOM is ready
	// (a little sooner than page load)
	$('#hiddenbox1').hide();
	// toggles the slickbox on clicking the noted link
	$('a#jqtextcall1').click(function() {
		$('#hiddenbox1').slideToggle(400);
		return false;
	});
});