
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

      var chartschartGobierno = {}
      var inViewchartGobierno = false;

      function animarchartGobierno() {
        for (var i = 0; i < 1; i++) {
          var idElement = "chartGobierno";
          if (isScrolledIntoView('#' + idElement)) {
            if (chartschartGobierno[idElement]) { continue }
            chartschartGobierno[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewchartGobierno) { return; }
            inViewchartGobierno = true;
            return new Chart(ctx, {
              type: 'bar',
              data: {
                labels: [['GOB. SEG. EDUC. Y CULTURA'], ['RECURSOS HUMANOS'], ['PREVENC. Y CONV. CIUDADANA'], ['EDUC. Y CULTURA'], ['RELAC. INSTITUCIONALES'], 'TURISMO', 'CHOFERES'],
                datasets: [
                  {
                    label: 'Funcionario/a',
                    data: [2, 1, 1, 2, 1, 0, 0],
                    backgroundColor: 'rgba(105, 190, 190, 1)',
                  },
                  {
                    label: 'Planta Permanente',
                    data: [2, 28, 76, 37, 3, 5, 17],
                    backgroundColor: 'rgba(71, 123, 168, 1)',
                  },
                  {
                    label: 'Adscripto/a',
                    data: [1, 0, 0, 0, 0, 0, 0],
                    backgroundColor: 'rgba(35, 145, 200, 1)',
                  },
                  {
                    label: 'Contratado',
                    data: [2, 0, 0, 1, 0, 0, 0],
                    backgroundColor: 'rgba(153, 070, 135, 1)',
                  },
                  {
                    label: 'SEM',
                    data: [0, 0, 0, 0, 1, 0, 0],
                    backgroundColor: 'rgba(190, 135, 180, 1)',
                  },
                ],

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
            inViewchartGobierno = false;
          }
        }
      }
      $(window).scroll(function () {

        animarchartGobierno();

      });

      $(window).load(function () {


        animarchartGobierno();

      });