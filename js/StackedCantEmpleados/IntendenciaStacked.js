
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

      var chartschartIntendencia = {}
      var inViewchartIntendencia = false;

      function animarchartIntendencia() {
        for (var i = 0; i < 1; i++) {
          var idElement = "chartIntendencia";
          if (isScrolledIntoView('#' + idElement)) {
            if (chartschartIntendencia[idElement]) { continue }
            chartschartIntendencia[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewchartIntendencia) { return; }
            inViewchartIntendencia = true;
            return new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['INTENDENCIA', ['JUZGADO DE', 'FALTAS'], ['ASUNTOS', 'LEGALES'], 'COMUNICACIONES', ['TECNOLOGIA DE', 'LA INFORMACION'], ['CEREMONIAL Y', 'PROTOC. INSTITU.'], ['GESTION Y ADM', 'DE ARTICULACIÓN']],
                datasets: [
                  {
                    label: 'Funcionario/a',
                    data: [2, 3, 1, 2, 1, 0, 1],
                    backgroundColor: 'rgba(105, 190, 190, 1)',
                  },
                  {
                    label: 'Planta Permanente',
                    data: [2, 10, 9, 0, 10, 4, 0],
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
            inViewchartIntendencia = false;
          }
        }
      }
      $(window).scroll(function () {

        animarchartIntendencia();

      });

      $(window).load(function () {


        animarchartIntendencia();

      });


