
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

      var chartsexamenes = {}
      var inViewexamenes = false;

      function animarexamenes() {
        for (var i = 0; i < 1; i++) {
          var idElement = "examenes";
          if (isScrolledIntoView('#' + idElement)) {
            if (chartsexamenes[idElement]) { continue }
            chartsexamenes[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewexamenes) { return; }
            inViewexamenes = true;
            return new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [

                  {
                    data: [161, 154, 189, 140, 61, 153],
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
                    text: 'Examenes Teoricos Evaluados',
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
            inViewexamenes = false;
          }
        }
      }
      $(window).scroll(function () {

        animarexamenes();

      });

      $(window).load(function () {


        animarexamenes();

      });
