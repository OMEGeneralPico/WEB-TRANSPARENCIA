
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

      var chartsatraques = {}
      var inViewatraques = false;

      function animaratraques() {
        for (var i = 0; i < 1; i++) {
          var idElement = "atraques";
          if (isScrolledIntoView('#' + idElement)) {
            if (chartsatraques[idElement]) { continue }
            chartsatraques[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewatraques) { return; }
            inViewatraques = true;
            return new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [

                  {
                    label: 'Larga Distancia',
                    data: [371, 379, 360, 313, 271, 70],
                    backgroundColor: 'rgba(71, 123, 168, 1)',
                  },
                  {
                    label: 'Corta y Media Distancia',
                    data: [354, 351, 429, 365, 330, 166],
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
                    text: 'Atraques corta - media y larga distancia',
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
            inViewatraques = false;
          }
        }
      }
      $(window).scroll(function () {

        animaratraques();

      });

      $(window).load(function () {


        animaratraques();

      });
