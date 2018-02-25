$(window).scroll(function(){
	
	var wScroll = $(window).scrollTop();

	if($(window).width() > 1024)
		$('.bg-dark').css('opacity',(wScroll)/400)
	else
		$('.bg-dark').css('opacity',(wScroll)/200)
	
});
$(function(){ 
     var navMain = $(".navbar-collapse");
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });
