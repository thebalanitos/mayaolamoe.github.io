function calcVH() {
    $('.background').innerHeight( $(this).innerHeight() );
}
calcVH();
$(window).on('resize orientationchange', function() {
  calcVH();
});