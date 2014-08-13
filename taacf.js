function get_window_height(){
    // var header = $('#headerpt1').outerHeight(true) + $('#headerpt2').outerHeight(true);
    // var footer = $('#footer').outerHeight(true);
    var winDow = $(window).height();
    var height = (winDow - 35 - 79 - 36 + 5);
    $(".ui-content").css('height', height);
}
function get_about_height(){
	var winDow = $(window).height();
    var height = (winDow - 79);
    $(".ui-content").css('height', height);
}
function return_height(){
	var winDow = $(window).height();
    $(".ui-content").css('height', winDow);
}