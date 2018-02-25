function calcVH() {
    $('#chrome').innerHeight( $(this).innerHeight() );
}
(function($) { 
  calcVH();
  $(window).on('orientationchange', function() {
    calcVH();
  });
})(jQuery);
function calcV() {
    $('.jumbotron').innerHeight( $(this).innerHeight() );
}
calcV();
$(window).on('resize orientationchange', function() {
  calcV();
});