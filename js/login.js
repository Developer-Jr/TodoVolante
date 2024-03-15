//Login falso
$(document).ready(function(){
    $("#login form").submit(function () {
        var for_name = $("#form_name").val();
        localStorage.setItem("for_name", for_name); // key "for_name" valor la variable for_name
      });
     
      var recoge_data_name = localStorage.getItem("for_name"); //Recogemos la información del localStorage
      console.log(recoge_data_name);
      if (recoge_data_name != null && recoge_data_name != undefined) {
        var user = $("#user");
        user.html("<h3 id ='bienvenido'>Bienvenido " + recoge_data_name + " :) </h3>");
        user.append("<a href='#' id='close_session'>cerrar sesión</a>");
    
        $("#login").hide(); //ocultamos el elemento seleccionado
      }
    
      $("#close_session").click(function () {
        localStorage.clear(); //Nos limpia el localStorage
        location.reload(); //Sirve para refrescar la página
      });
});