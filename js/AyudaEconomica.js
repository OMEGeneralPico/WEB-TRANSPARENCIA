
      var ctx2 = document.getElementById('ayudaseconomicas').getContext('2d');
      var myChart = new Chart(ctx2, {
        type: 'line',
        data: {

          labels: ['Enero', 'Febrero','Marzo','Abril', 'Junio'],
          datasets: [
            {
              label: 'Alquiler',
              tension: 0.2,
              fill: false,

              data: [ 112000, 291600, 174600,394700,432000,356500],
              borderColor: [

                'rgba(105, 190, 190, 0.75)'
              ],
              backgroundColor: [

                'rgba(105, 190, 190, 0.5)'
              ],

              borderWidth: 6
            },
            {
              label: 'Enfermedad',
              tension: 0.2,
              fill: false,

              data: [26000, 43500, 42000,65900,57000,82000],
              borderColor: [

              'rgba(71, 123, 168, 0.75)'
              ],
              backgroundColor: [

              'rgba(71, 123, 168, 0.75)'
              ],

              borderWidth: 6
            },
            {
              label: 'Hogar',
              tension: 0.2,
              fill: false,

              data: [135500, 291900, 306653,692650,513000,363700],
              borderColor: [

              'rgba(215, 90, 218, 0.75)'
              ],
              backgroundColor: [

              'rgba(215, 90, 218, 0.5)'
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
              text: 'Detalle de Ayudas Economicas',
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
      
 