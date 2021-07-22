
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

      var chartsequipamiento = {}
      var inViewequipamiento = false;

      function animarequipamiento() {
        for (var i = 0; i < 1; i++) {
          var idElement = "equipamiento";
          if (isScrolledIntoView('#' + idElement)) {
            if (chartsequipamiento[idElement]) { continue }
            chartsequipamiento[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewequipamiento) { return; }
            inViewequipamiento = true;
            return new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['PC', 'PC Punto Digital', 'Impresoras', 'Terminales', 'Servidores'],
                datasets: [

                  {
                    data: [270, 17, 122, 38, 10],
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
                    text: 'Adquisicion de Equipamientos Informaticos',
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
            inViewequipamiento = false;
          }
        }
      }
      $(window).scroll(function () {

        animarequipamiento();

      });

      $(window).load(function () {


        animarequipamiento();

      });
