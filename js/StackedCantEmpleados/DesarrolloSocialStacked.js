
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

      var chartschartDesarrolloSocial = {}
      var inViewchartDesarrolloSocial = false;

      function animarchartDesarrolloSocial() {
        for (var i = 0; i < 1; i++) {
          var idElement = "chartDesarrolloSocial";
          if (isScrolledIntoView('#' + idElement)) {
            if (chartschartDesarrolloSocial[idElement]) { continue }
            chartschartDesarrolloSocial[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewchartDesarrolloSocial) { return; }
            inViewchartDesarrolloSocial = true;
            return new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['SEC. DESARROLLO SOCIAL', 'DIR. DE FAMILIA', 'CENTRO DES. INFANTIL', 'DIR. NUEVAS ECONOMIAS', 'SERVICIO SOC. DE BASE', 'UNIDAD LOCAL DE NIÑEZ', 'DIRECCION DE JUVENTUD', 'DEP. Y ACT. FISICAS', 'DIR. POLITICAS DE GENERO'],
                datasets: [

                  {
                    label: 'Funcionario/a',
                    data: [3, 1, 1, null, null, 1, 1, 2, 1],
                    backgroundColor: 'rgba(105, 190, 190, 1)',
                  },
                  {
                    label: 'Planta Permanente',
                    data: [11, 33, 35, 5, 48, 1, 11, 14, 1],
                    backgroundColor: 'rgba(71, 123, 168, 1)',
                  },
                  {
                    label: 'Adscripto/a',
                    data: [2, null, 1, 2, null, null, null, 1,],
                    backgroundColor: 'rgba(35, 145, 200, 1)',
                  },
                  {
                    label: 'Contratado',
                    data: [null, null, null, null, null, null, null, 1,],
                    backgroundColor: 'rgba(153, 070, 135, 1)',
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
            inViewchartDesarrolloSocial = false;
          }
        }
      }
      $(window).scroll(function () {

        animarchartDesarrolloSocial();

      });

      $(window).load(function () {


        animarchartDesarrolloSocial();

      });

