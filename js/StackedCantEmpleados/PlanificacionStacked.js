

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

      var chartschartPlanificacionUrbana = {}
      var inViewchartPlanificacionUrbana = false;

      function animarchartPlanificacionUrbana() {
        for (var i = 0; i < 1; i++) {
          var idElement = "chartPlanificacionUrbana";
          if (isScrolledIntoView('#' + idElement)) {
            if (chartschartPlanificacionUrbana[idElement]) { continue }
            chartschartPlanificacionUrbana[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewchartPlanificacionUrbana) { return; }
            inViewchartPlanificacionUrbana = true;
            return new Chart(ctx, {
              type: 'bar',
              data: {
                labels: [['PLANIF. Y GESTION URBANA'], ['ENTE REG. DE SERVICIOS'], ['INFRAEST. Y OBRAS MUN.'], ['OBRAS PARTICULARES'], ['PLANEAM. Y CATASTRO'], ['DISEÑO Y PLANIFIC.']],
                datasets: [
                  {
                    label: 'Funcionario/a',
                    data: [1, 1, 1, 1, 1, 1],
                    backgroundColor: 'rgba(105, 190, 190, 1)',
                  },
                  {
                    label: 'Planta Permanente',
                    data: [1, 1, 14, 17, 2, 2],
                    backgroundColor: 'rgba(71, 123, 168, 1)',
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
            inViewchartPlanificacionUrbana = false;
          }
        }
      }
      $(window).scroll(function () {

        animarchartPlanificacionUrbana();

      });

      $(window).load(function () {


        animarchartPlanificacionUrbana();

      });
