//Slider
$(document).ready(function () {
 
  //Cambio de tema
  var theme = $("#theme");

  $("#to-green").click(function () {
    theme.attr("href", "css/styleGreen.css");//Cambiamos el atributo href, asignandole otra hoja de estilo
  });
  $("#to-pink").click(function () {
    theme.attr("href", "css/stylePink.css");
  });
  $("#to-red").click(function () {
    theme.attr("href", "css/styleRed.css");
  });
 
  //Scrooll footer

  $(".subir").click(function (e) {
    //Le pasamos como parametro el evento
    console.log("entra en funcion");
    e.preventDefault(); // Para que el link no nos lleve a otro lugar como esta destinado por defecto
    $("html ,body").animate({//Seleccionamios el html y body para generar una aniamción
        scrollTop: 0, //Método scrrolltop nos posicionará en  el pixel 0
      }, 500);
    return false;
  });

});
