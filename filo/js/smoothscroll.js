var destination = 0;
var speed = 10;
var scroller = null;
var marginY = 0;

function initScroll(elemntId){

	
	destination = document.getElementById(elemntId).offsetTop;
	
	scroller = setTimeout(function(){
			initScroll(elemntId);
		}, 1);

	if(destination > marginY)
	{

		marginY = marginY + speed;

		if(marginY >= destination){
			clearTimeout(scroller);
		}

		window.scroll(0, marginY-60);
	}	
	else
	{
		marginY = marginY - speed;

		if(marginY <= destination){
			clearTimeout(scroller);
		}

		window.scroll(0, marginY-50);
	}
	
}

function toTop(){

	scroller = setTimeout(function(){
		toTop();
	}, 1);

	marginY = marginY - speed;

	if(marginY <= 0){
		clearTimeout(scroller);
	}

	window.scroll(0, marginY);

}

function calcVH() {
    $('#chrome').innerHeight( $(this).innerHeight() );
}
(function($) { 
  calcVH();
  $(window).on('orientationchange', function() {
    calcVH();
  });
})(jQuery);