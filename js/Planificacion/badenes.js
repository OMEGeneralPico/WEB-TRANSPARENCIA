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

  var chartsbadenes = {}
  var inViewbadenes = false;

  function animarbadenes() {
    for (var i = 0; i < 1; i++) {
      var idElement = "badenes";
      if (isScrolledIntoView('#' + idElement)) {
        if (chartsbadenes[idElement]) { continue }
        chartsbadenes[idElement] = true;

        var ctx = document.getElementById(idElement);

        if (inViewbadenes) { return; }
        inViewbadenes = true;
        return new Chart(ctx, {
          type: 'bar',
          data: {

            labels: ['Norte', 'Ranqueles/E.&Prog.', 'Universitario'],
            datasets: [
              {
                data: [150, 175, 25],
                borderColor: [

                  'rgba(105, 190, 190, 1)',
                  'rgba(71, 123, 168, 1)',
                  'rgba(215, 90, 218, 1)',
                  'rgba(240, 150, 145, 1)',
                  'rgba(35, 145, 200, 1)',
                ],
                backgroundColor: [

                  'rgba(105, 190, 190, 1)',
                  'rgba(71, 123, 168, 1)',
                  'rgba(215, 90, 218, 1)',
                  'rgba(240, 150, 145, 1)',
                  'rgba(35, 145, 200, 1)',

                ],
              },

            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                font: {
                  family: 'Raleway',
                },
              },
              y: {
                ticks: {
                  maxTicksLimit: 5,
                },

                font: {
                  family: 'Raleway'
                },
              }
            },
            plugins: {
              title: {
                display: true,
                text: 'Ejecución Badenes de Hormigon Armado por Barrio',
                align: 'start',
                font: {
                  family: 'Titillium Web',
                  size: 20,
                },
              },
               legend: {
                display: false
              },
            }
          }
        });
      } else {
        inViewayudas = false;
      }
    }
  }
  $(window).scroll(function () {

    animarbadenes();

  });

  $(window).load(function () {


    animarbadenes();

  });
