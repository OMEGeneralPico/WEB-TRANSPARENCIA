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

  var chartscordones = {}
  var inViewcordones = false;

  function animarcordones() {
    for (var i = 0; i < 1; i++) {
      var idElement = "cordones";
      if (isScrolledIntoView('#' + idElement)) {
        if (chartscordones[idElement]) { continue }
        chartscordones[idElement] = true;

        var ctx = document.getElementById(idElement);

        if (inViewcordones) { return; }
        inViewcordones = true;
        return new Chart(ctx, {
          type: 'bar',
          data: {

            labels: ['Norte', 'Ranqueles/E.&Prog.', 'Universitario','Federal Bicentenario'],
            datasets: [
              {
                data: [2339.5, 2560, 806,821.5],
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
                text: 'Ejecución de Cordón Cuneta por Barrio',
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

    animarcordones();

  });

  $(window).load(function () {


    animarcordones();

  });