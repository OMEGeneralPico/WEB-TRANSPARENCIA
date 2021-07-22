
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

      var chartseconomiacreditos = {}
      var inVieweconomiacreditos = false;

      function animareconomiacreditos() {
        for (var i = 0; i < 1; i++) {
          var idElement = "economiacreditos";
          if (isScrolledIntoView('#' + idElement)) {
            if (chartseconomiacreditos[idElement]) { continue }
            chartseconomiacreditos[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inVieweconomiacreditos) { return; }
            inVieweconomiacreditos = true;
            return new Chart(ctx, {
              type: 'bar',
              data: {

                labels: ['Enero', 'Marzo', 'Junio'],
                datasets: [
                  {
                    data: [1530000, 1690000, 2570000],
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
                legend: {
                  display: false
                },
                plugins: {
                  title: {
                    display: true,
                    text: 'Creditos por Fecha',
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
            inVieweconomiacreditos = false;
          }
        }
      }
      $(window).scroll(function () {

        animareconomiacreditos();

      });

      $(window).load(function () {


        animareconomiacreditos();

      });
