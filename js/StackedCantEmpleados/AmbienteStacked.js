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

  var chartschartAmbiente = {}
  var inViewchartAmbiente = false;

  function animarchartAmbiente() {
    for (var i = 0; i < 1; i++) {
      var idElement = "chartAmbiente";
      if (isScrolledIntoView('#' + idElement)) {
        if (chartschartAmbiente[idElement]) { continue }
        chartschartAmbiente[idElement] = true;

        var ctx = document.getElementById(idElement);

        if (inViewchartAmbiente) { return; }
        inViewchartAmbiente = true;
        return new Chart(ctx, {
          type: 'bar',
          data: {
            labels: [['SEC.AMBIENTE Y SERV PUBL.'], ['AMB. Y DES. SUSTENTABLE'], 'DIR. SERVICIOS PUBLICOS', ['ESPACIOS PUBLICOS'], ['DIR. GESTION AMBIENTAL'], 'DIR.ZOONOSIS Y VECTORES'],
            datasets: [
              {
                label: 'Planta Permanente',
                data: [44, 3, 193, 34, 8, 4],
                backgroundColor: 'rgba(71, 123, 168, 1)',
              },
              {
                label: 'Funcionario/a',
                data: [2, 1, 1, 1, 0, 1],
                backgroundColor: 'rgba(105, 190, 190, 1)',
              },
              {
                label: 'Pasante',
                data: [7, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(215, 90, 218, 1)',
              },

            ]

          },
          options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                font: {
                  family: 'Raleway',
                },
                stacked: true
              },
              y: {
                ticks: {
                  maxTicksLimit: 10,
                },
                stacked: true,
                font: {
                  family: 'Raleway'
                },
              }
            },

            plugins: {
              title: {
                display: true,
                text: 'Cantidad de Empleados',
                align: 'start',
                font: {
                  family: 'Titillium Web',
                  size: 20,
                },
              },
              legend: {
                display: true,
                position: 'right',
                align: 'middle',
                labels: { font: { family: 'Raleway' } },
              },
            }
          }
        });
      } else {
        inViewchartAmbiente = false;
      }
    }
  }
  $(window).scroll(function () {

    animarchartAmbiente();

  });

  $(window).load(function () {


    animarchartAmbiente();

  });