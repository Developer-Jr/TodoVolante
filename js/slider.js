$(document).ready(function () {
//Slider
$(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1300,
    responsive: true,
    speed: 200,
    infiniteLoop: true,
    pager: false, //Quitamos los tres puntos de decoración
    auto: true,
  });
});