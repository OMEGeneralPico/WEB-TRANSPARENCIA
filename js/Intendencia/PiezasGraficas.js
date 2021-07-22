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

  var chartsPiezasGraficas = {}
  var inViewPiezasGraficas = false;

  function animarPiezasGraficas() {
    for (var i = 0; i < 1; i++) {
      var idElement = "PiezasGraficas";
      if (isScrolledIntoView('#' + idElement)) {
        if (chartsPiezasGraficas[idElement]) { continue }
        chartsPiezasGraficas[idElement] = true;

        var ctx = document.getElementById(idElement);

        if (inViewPiezasGraficas) { return; }
        inViewPiezasGraficas = true;
        return new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Intendencia', 'Gobierno', 'Economía', 'Ambiente', 'Planificación', 'Desarrollo Social'],
            datasets: [

              {
                data: [47, 56, 17, 19, 5, 23],
                backgroundColor: [
                  'rgba(71, 123, 168, 1)',
                  'rgba(105, 190, 190, 1)',
                  'rgba(215, 90, 218, 1)',
                  'rgba(153, 070, 135,1)',
                  'rgba(240, 150, 145,1)',
                  'rgba(35, 145, 200,1)',]
              },

            ]
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: 'Relevamiento de Piezas Graficas',
                align: 'start',
                font: {
                  family: 'Titillium Web',
                  size: 20,
                }
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                font: {
                  family: 'Raleway'
                },
                grid: {
                  display: false,
                },
                ticks: {
                  maxRotation: 0
                }
              },
              y: {
                font: {
                  family: 'Raleway'
                },
                ticks: { maxTicksLimit: 5 },
                beginAtZero: true

              }
            }
          }
        });
      } else {
        inViewPiezasGraficas = false;
      }
    }
  }
  $(window).scroll(function () {

    animarPiezasGraficas();

  });

  $(window).load(function () {


    animarPiezasGraficas();

  });
