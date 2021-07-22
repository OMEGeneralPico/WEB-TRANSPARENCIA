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

  var chartslabradas = {}
  var inViewlabradas = false;

  function animarlabradas() {
    for (var i = 0; i < 1; i++) {
      var idElement = "infraccionesLabradas";
      if (isScrolledIntoView('#' + idElement)) {
        if (chartslabradas[idElement]) { continue }
        chartslabradas[idElement] = true;

        var ctx = document.getElementById(idElement);

        if (inViewlabradas) { return; }
        inViewlabradas = true;
        return new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [

              {
                label: 'Radar',
                data: [156, 228, 390, 606, 411, 618],
                backgroundColor: 'rgba(71, 123, 168, 1)',
              },
              {
                label: 'Domo',
                data: [77, 45, 196, 381, 85, 88],
                backgroundColor: 'rgba(105, 190, 190, 1)',
              },
              {
                label: 'Fotomulta',
                data: [404, 115, 270, 1899, 567, 781],
                backgroundColor: 'rgba(215, 90, 218, 1)',
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
                text: 'Infracciones Labradas',
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
        inViewlabradas = false;
      }
    }
  }
  $(window).scroll(function () {

    animarlabradas();

  });

  $(window).load(function () {


    animarlabradas();

  });



