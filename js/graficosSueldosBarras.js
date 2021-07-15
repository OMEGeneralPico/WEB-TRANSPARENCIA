function generarchartbarrasueldos(etiquetas, data2, ctx) {
  //Chart.defaults.global.defaultFontFamily = "'Titillium Web'"
  //Chart.defaults.global.defaultFontSize = 5

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: etiquetas,
      datasets: [{
        label: 'Planta Permanente',
        data: [80000, 95000, 40000],
        backgroundColor: [
          'rgba(71, 123, 168, 1)'
        ],

        borderWidth: 1
      },
      {
        label: 'Contrato con aporte',
        data: [50000, 75000, 25000],
        backgroundColor: [

          'rgba(105, 190, 190, 1)'

        ],

        borderWidth: 1
      }]
    },
    options: {
      scales: { x: { stacked: true }, y: { stacked: true } },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        //cutoutPercentage: 40,

        legend: true
      }
    }
  });
}

var chartsSueldos = {}
var inViewSueldos = false;
var sueldos = null;

$.getJSON("./json/personal.json", function (dataorig) {
  sueldos = dataorig;
})

function animarSueldos() {
  for (var i = 0; i < 1; i++) {
    var idElement = "Sueldos" + i;
    if (isScrolledIntoView('#' + idElement)) {
      if (chartsSueldos[idElement]) { continue }
      chartsSueldos[idElement] = true;
      var element = Object.keys(sueldos)[i]
      var ctx = document.getElementById(idElement);
      var etiquetas = Object.keys(sueldos[element])
      var data2 = etiquetas.map(key => sueldos[element][key]);

      if (inViewSueldos) { return; }
      inViewSueldos = true;
      var Presupuesto = generarchartbarrasueldos(etiquetas, data2, ctx)
    } else {
      inViewSueldos = false;
    }
  }

}

$(window).scroll(function () {

  animarSueldos();

});

$(window).load(function () {


  animarSueldos();

});