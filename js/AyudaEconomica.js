


function isScrolledIntoView(elem) {


  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  if ($(elem).offset()) {

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
  } else {
    return false
  }

}

var chartsayudas = {}
var inViewayudas = false;




function animarAyuda() {
  for (var i = 0; i < 1; i++) {
    var idElement = "ayudaseconomicas";
    if (isScrolledIntoView('#' + idElement)) {
      if (chartsayudas[idElement]) { continue }
      chartsayudas[idElement] = true;

      var ctx = document.getElementById(idElement);

      if (inViewayudas) { return; }
      inViewayudas = true;
      return myChart = new Chart(ctx, {
        type: 'bar',
        data: {

          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio'],
          datasets: [
            {
              label: 'Alquiler',
              tension: 0.2,
              fill: false,

              data: [112000, 291600, 174600, 394700, 432000, 356500],
              borderColor: [

                'rgba(105, 190, 190, 1)'
              ],
              backgroundColor: [

                'rgba(105, 190, 190, 1)'
              ],
            },
            {
              label: 'Enfermedad',
              tension: 0.2,
              fill: false,

              data: [26000, 43500, 42000, 65900, 57000, 82000],
              borderColor: [

                'rgba(71, 123, 168, 1)'
              ],
              backgroundColor: [

                'rgba(71, 123, 168, 1)'
              ],
            },
            {
              label: 'Hogar',
              tension: 0.2,
              fill: false,

              data: [135500, 291900, 306653, 692650, 513000, 363700],
              borderColor: [

                'rgba(215, 90, 218, 1)'
              ],
              backgroundColor: [

                'rgba(215, 90, 218, 1)'
              ],
            },
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: {
                font:{family:'Raleway'}
              },
              stacked: true
            },
            y: {
              ticks: {
                font:{family:'Raleway'},
                maxTicksLimit: 5,
              },
              stacked: true,
              font: {
                family: 'Titillium Web'
              },
            }
          },
          legend: {
            display: true,
            position: 'right',
            align: 'middle',
            labels: { font: { family: 'Raleway' } },
          },
          plugins: {
            legend:{
              labels:{
                font:{
                  family: 'Raleway'
                }
              }
            },
            title: {
              display: true,
              text: 'Subsidios a personas por concepto',
              align: 'start',
              font: {
                family: 'Titillium Web',
                size: 20,
              },
            }
          }
        }
      });

    } else {
      inViewayudas = false;
    }
  }
}

$(window).scroll(function () {

  animarAyuda();

});

$(window).load(function () {


  animarAyuda();

});