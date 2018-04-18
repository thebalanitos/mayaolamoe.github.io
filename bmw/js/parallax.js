$(window).scroll(function(){
	parallax();
})
function parallax(){
	
	var wScroll = $(window).scrollTop();

	if($(window).width() > 1024)
		{
			$('.parallax1').css('background-position','center '+(wScroll)*-0.3+'px');
			$('.parallax2').css('background-position','center '+(wScroll)*-0.3+'px');
		}
}