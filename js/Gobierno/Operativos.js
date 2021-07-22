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

  var chartsoperativos = {}
  var inViewoperativos = false;

  function animaroperativos() {
    for (var i = 0; i < 1; i++) {
      var idElement = "operativos";
      if (isScrolledIntoView('#' + idElement)) {
        if (chartsoperativos[idElement]) { continue }
        chartsoperativos[idElement] = true;

        var ctx = document.getElementById(idElement);

        if (inViewoperativos) { return; }
        inViewoperativos = true;
        return new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [

              {
                label: 'Moviles',
                data: [75, 64, 25, 43, 15, 15],
                backgroundColor: 'rgba(71, 123, 168, 1)',
              },
              {
                label: 'Fijos',
                data: [286, 235, 104, 346, 179, 179],
                backgroundColor: 'rgba(105, 190, 190, 1)',
              },

            ]
          },
          options: {
            plugins: {
              legend: {
                display: true,
                labels: { font: { family: 'Raleway' } },
              },
              title: {
                display: true,
                text: 'Cantidad de Operativos Móviles y Fijos',
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
                },
                stacked: true,
              },
              y: {
                font: {
                  family: 'Raleway'
                },
                ticks: { maxTicksLimit: 5 },
                beginAtZero: true,
                stacked: true,
              }
            }
          }
        });
      } else {
        inViewoperativos = false;
      }
    }
  }
  $(window).scroll(function () {

    animaroperativos();

  });

  $(window).load(function () {


    animaroperativos();

  });
