
  var ctx2 = document.getElementById('creditosentregados').getContext('2d');
  var myChart = new Chart(ctx2, {
    type: 'line',
    data: {

      labels: ['Enero', 'Marzo', 'Junio'],
      datasets: [
        {
          label: 'Linea Municipal',
          tension: 0.2,
          fill: true,

          data: [2250000, 1690000, 2570000],
          borderColor: [

            'rgba(105, 190, 190, 0.25)'
          ],
          backgroundColor: [

            'rgba(105, 190, 190, 0.5)'
          ],

          borderWidth: 6
        },
      ]
    },
    options: {
      plugins: {
        //cutoutPercentage: 40,
        title: {
          display: true,
          text: 'Creditos entregados por Linea y Mes',
          align: 'start',
          font: {
            family: 'Titillium Web',
            size: 20,
          },

        },
        legend: {
          display: true,
          labels: { font: { family: 'Raleway' } },
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          font: {
            family: 'Titillium Web'
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
            family: 'Titillium Web'
          },
          ticks: { maxTicksLimit: 5 },
          beginAtZero: true

        }
      }
    }
  });
