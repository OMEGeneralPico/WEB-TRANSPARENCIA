var myjson;

$(document).ready(function () {
  $.getJSON("json/mapa1.json", function (json) {
    myjson = JSON.parse(JSON.stringify(json));
  });

  $("#mapitadiv").load("img/mapa_pico.svg", function () {
    $("#mapita").click(function (evt) {
      $("#info").html(
        "Recaudación por servicios <br><br>"+
        "Barrio: " +
          myjson[evt.target.id].nombre +
          "<br> Nivel de recaudación: " +
          myjson[evt.target.id].porcentaje +
          "<br> Cantidad facturada: " +
          myjson[evt.target.id].cantFacturado +
          "<br> Cantidad pagada: " +
          myjson[evt.target.id].cantPagado
      );

      //$("#info").html("<table><tr><td>Barrio</td><td>"+myjson[evt.target.id].nombre + "</td></tr></table>"
  
          
     // );

      console.log(myjson[evt.target.id]);
    });
  });
});
