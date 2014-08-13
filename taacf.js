function get_window_height(){
    // var header = $('#headerpt1').outerHeight(true) + $('#headerpt2').outerHeight(true);
    // var footer = $('#footer').outerHeight(true);
    var winDow = $(window).height();
    var height = (winDow - 35 - 79 - 36 + 8);
    $("#content_Schedule").css('height', height);
}
function get_about_height(){
	var winDow = $(window).height();
    var height = (winDow - 79);
    $("#content_about").css('height', height);
}
function return_height(){
	var winDow = $(window).height();
    $("#content_home").css('height', winDow);
}
$(window).resize(function(){
		get_window_height();
		get_about_height();
		return_height();
	});