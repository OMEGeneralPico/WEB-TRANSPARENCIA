
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

      var chartstop5infracciones = {}
      var inViewtop5infracciones = false;

      function animartop5infracciones() {
        for (var i = 0; i < 1; i++) {
          var idElement = "top5infracciones";
          if (isScrolledIntoView('#' + idElement)) {
            if (chartstop5infracciones[idElement]) { continue }
            chartstop5infracciones[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewtop5infracciones) { return; }
            inViewtop5infracciones = true;
            return new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['Tarjeta estacionamiento', 'Otros', 'Licencia de conducir', 'Seguro obligatorio', 'Casco'],
                datasets: [

                  {
                    data: [1575, 269, 175, 151, 101],
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
                indexAxis: 'y',
                plugins: {
                  legend: {
                    display: false,
                  },
                  title: {
                    display: true,
                    text: 'Top 5 Infracciones',
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
            inViewtop5infracciones = false;
          }
        }
      }
      $(window).scroll(function () {

        animartop5infracciones();

      });

      $(window).load(function () {


        animartop5infracciones();

      });