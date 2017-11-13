$(window).scroll(function(){
	parallax();
})
function parallax(){
	
	var wScroll = $(window).scrollTop();

	if($(window).width() <= 375)
		$('.parallax').css('background-position','center '+(wScroll)*0.126+'px');
	if($(window).width() > 375 && $(window).width() <=480 )
		$('.parallax').css('background-position','center '+(wScroll)*0.148+'px');
	if($(window).width() > 768)
		$('.parallax').css('background-position','center '+(wScroll)*0.43+'px');
	if($(window).width() >480 && $(window).width() <= 768)
		$('.parallax').css('background-position','center '+(wScroll)*0.219+'px');
}
