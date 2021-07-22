
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

      var chartsCreditosSector = {}
      var inViewCreditosSector = false;

      function animarCreditosSector() {
        for (var i = 0; i < 1; i++) {
          var idElement = "CreditosSector";
          if (isScrolledIntoView('#' + idElement)) {
            if (chartsCreditosSector[idElement]) { continue }
            chartsCreditosSector[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewCreditosSector) { return; }
            inViewCreditosSector = true;
            return new Chart(ctx, {
              type: 'radar',
              data: {

                labels: ['Comercio', 'Produccion', 'Servicios'],
                datasets: [
                  {
                    tension: 0.1,
                    fill: false,
                    data: [2250000, 1750000, 1790000],
                    fill: true,
                    backgroundColor: ['rgba(71, 123, 168, 0.5)', 'rgba(105, 190, 190, 0.5)', 'rgba(215, 90, 218, 0.5)'
                    ],
                    borderColor: [

                      'rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 1)'
                    ],

                    borderWidth: 2
                  }
                ]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  deferred: { xOffset: 150 },
                  title: {
                    display: true,
                    text: 'Creditos Entregados por Sector',
                    align: 'start',
                    font: {
                      family: 'Titillium Web',
                      size: 20,
                    }
                  },
                  legend: false
                },
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
            inViewCreditosSector = false;
          }
        }
      }
      $(window).scroll(function () {

        animarCreditosSector();

      });

      $(window).load(function () {


        animarCreditosSector();

      });
