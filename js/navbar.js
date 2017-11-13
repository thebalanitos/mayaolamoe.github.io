$(window).scroll(function(){
	if($(document).scrollTop() < $(window).height()) {
		$('nav').addClass('bye');
	}
	else
	{
		$('nav').removeClass('bye');
	}
});