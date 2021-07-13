function generarchart(etiquetas, data2, ctx) {

  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: etiquetas,
      datasets: [{
        label: 'Presupuesto',
        data: data2,
        backgroundColor: [
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
          'rgba(35, 145, 200, 1)',
          'rgba(153, 070, 135, 1)',
          'rgba(190, 135, 180, 1)',
          'rgba(215, 90, 218, 1)',
          'rgba(240, 150, 145, 1)',
          'rgba(55, 55, 55,1)',
          'rgba(235, 235, 225,1)'
        ],
        borderColor: [
          'rgba(71, 123, 168, 0)',
          'rgba(105, 190, 190, 0)',
          'rgba(35, 145, 200, 0)',
          'rgba(153, 070, 135, 0)',
          'rgba(190, 135, 180, 0)',
          'rgba(215, 90, 218, 0)',
          'rgba(240, 150, 145, 0)',
          'rgba(55, 55, 55,0)',
          'rgba(235, 235, 225,0)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Top 3 Por Rubro',
          font: {
            size: 20,
          },
          padding: {
            top: 10,
            bottom: 30,
          },
        },
        legend: {
          display: true,
          position: 'right',
          align: 'middle'
        }
      }
    }
  });
}

var inView = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));

}

var charts = {
}

$.getJSON("./json/PRESUPUESTO.json", function (dataorig) {
  $(window).scroll(function () {

    for (var i = 0; i < 7; i++) {


      var idElement = "Presupuesto" + i;
      if (isScrolledIntoView('#' + idElement)) {
        if (charts[idElement]) {continue}
        charts[idElement] = true;
        var element = Object.keys(dataorig)[i]
        var ctx = document.getElementById(idElement);
        var etiquetas = Object.keys(dataorig[element])
        var data2 = etiquetas.map(key => dataorig[element][key]);
  
        if (inView) { return; }
        inView = true;

        generarchart(etiquetas, data2, ctx)
      } else {
        inView = false;
      }

    };
  });

})