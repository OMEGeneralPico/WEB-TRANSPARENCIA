
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

      var chartschartEconomia = {}
      var inViewchartEconomia = false;

      function animarchartEconomia() {
        for (var i = 0; i < 1; i++) {
          var idElement = "chartEconomia";
          if (isScrolledIntoView('#' + idElement)) {
            if (chartschartEconomia[idElement]) { continue }
            chartschartEconomia[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewchartEconomia) { return; }
            inViewchartEconomia = true;
            return new Chart(ctx, {
              type: 'bar',
              data: {
                labels: [['SECRETARIA DE ECONOMÍA'], ['CONTADURIA GENERAL'], 'RENTAS', ['HAB. Y CONTROL COMERCIAL'], ['DES. ECONOM. Y PRODUCT.'], 'TESORERIA'],
                datasets: [
                  {
                    label: 'Planta Permanente',
                    data: [4, 18, 26, 24, 6, 13],
                    backgroundColor: 'rgba(71, 123, 168, 1)',
                  },
                  {
                    label: 'Funcionario/a',
                    data: [1, 2, 1, 1, 1, 1],
                    backgroundColor: 'rgba(105, 190, 190, 1)',
                  },
                  {
                    label: 'Pasante',
                    data: [0, 0, 0, 0, 2, 0],
                    backgroundColor: 'rgba(215, 90, 218, 1)',
                  },
                  {
                    label: 'Contratado',
                    data: [0, 0, 2, 0, 0, 0],
                    backgroundColor: 'rgba(153, 070, 135, 1)',
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
            inViewchartEconomia = false;
          }
        }
      }
      $(window).scroll(function () {

        animarchartEconomia();

      });

      $(window).load(function () {


        animarchartEconomia();

      });
