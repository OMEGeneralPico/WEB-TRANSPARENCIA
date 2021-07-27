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


var chartpresupuestosecre = {}
var inViewpresupuestosecre = false;

function animarpresupuestosecre() {
    for (var i = 0; i < 1; i++) {
        var idElement = "presupuestosecre";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartpresupuestosecre[idElement]) { continue }
            chartpresupuestosecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewpresupuestosecre) { return; }
            inViewpresupuestosecre = true;
            return new Chart(ctx, {
                type: 'pie',
                data: {

                    labels: ['C.Deliberante', 'Intendencia', 'Gobierno', 'Planif. Urbana', 'Ambiente', 'Desarrollo Social', 'Economia', 'Org. Descentralizados', 'No programaticos'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [4.08, 5.86, 14.05, 9.47, 24.27, 13.58, 7.88, 5.07, 15.74],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 0.5)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],


                            borderWidth: 4,
                            borderColor: [

                                'rgba(114, 114, 114, 0)'
                            ],

                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Presupuesto ejecutado 2021 (%)',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewpresupuestosecre = false;
        }
    }
}
$(window).scroll(function () {

    animarpresupuestosecre();

});

$(window).load(function () {


    animarpresupuestosecre();

});


var chartrecursossecre = {}
var inViewrecursossecre = false;

function animarrecursossecre() {
    for (var i = 0; i < 1; i++) {
        var idElement = "recursossecre";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartrecursossecre[idElement]) { continue }
            chartrecursossecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewrecursossecre) { return; }
            inViewrecursossecre = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    /*labels: ['Jurisd. Comunal', 'Otras Jurisd.', 'Ant. Coparticipación', 'Rec. de capital', 'Aportes no reint.'],*/
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio'],
                    datasets: [
                        {
                            label: 'Jurisd. Comunal',
                            tension: 0.2,
                            fill: false,
                
                            data: [68.83, 81.19, 137.19, 112.42, 86.81, 103.21],
   
                            backgroundColor: [
                
                                'rgba(105, 190, 190, 1)'
                            ],
      
                        },
                        {
                            label: 'Reg. de coparticipación',
                            tension: 0.2,
                            fill: false,
                
                            data: [78.79, 91.28, 120.23, 99.98, 120.19, 97.55],

                            backgroundColor: [
                
                                'rgba(71, 123, 168, 1)'
                            ],

                            
                        },
                        {
                            label: 'Ant. Coparticipación',
                            tension: 0.2,
                            fill: false,
                
                            data: [0, 0, 10.93, 0, 0, 0],

                            backgroundColor: [
                
                                'rgba(35, 145, 200, 1)'
                            ],

                        },
                        {
                            label: 'Rec. de capital',
                            tension: 0.2,
                            fill: false,
                
                            data: [1.33, 1.25, 2.23, 1.61, 1.07, 1.39],

                            backgroundColor: [
                
                                'rgba(35, 145, 200, 1)'
                            ],

                        },
                        {
                            label: 'Aportes no reint.',
                            tension: 0.2,
                            fill: false,
                
                            data: [15.35, 8.70, 0, 4.45, 20.26, 23.6],

                            backgroundColor: [
                
                                'rgba(35, 145, 200, 1)'
                            ],

                        }

                        
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        align: 'middle',
                        labels: { font: { family: 'Raleway' } },
                    },
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    family: 'Raleway'
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Recursos asignados 2021 (en millones $)',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        }
                    }
                }
            });
        } else {
            inViewrecursossecre = false;
        }
    }
}
$(window).scroll(function () {

    animarrecursossecre();

});

$(window).load(function () {


    animarrecursossecre();

});


var chartpersonalsecre = {}
var inViewppersonalsecre = false;

function animarpersonalsecre() {
    for (var i = 0; i < 1; i++) {
        var idElement = "personalsecre";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartpersonalsecre[idElement]) { continue }
            chartpersonalsecre[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewppersonalsecre) { return; }
            inViewppersonalsecre = true;
            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['C.Deliberante', 'Intendencia', 'Gobierno', 'Planif. Urbana', 'Ambiente', 'Desarrollo Social', 'Economia', 'Org. Descentralizados'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [32, 35, 189, 37, 283, 165, 93, 22],
                            fill: true,
                            backgroundColor: ['rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 0.5)',



                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],


                            borderWidth: 4,
                            borderColor: [

                                'rgba(234,238,226,0)'
                            ],

                        }
                    ]
                },
                options: {
                    scales: {y:{ticks:{font:{family:'Raleway'}}},
                    x:{ticks:{font:{family:'Raleway'}}}},
                    indexAxis: 'y',
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {

                        title: {
                            display: true,
                            text: 'Empleados por secretaría',
                            align: 'center',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        },
                        legend: {
                            display: false,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                    },



                }
            });
        } else {
            inViewppersonalsecre = false;
        }
    }
}
$(window).scroll(function () {

    animarpersonalsecre();

});

$(window).load(function () {


    animarpersonalsecre();

});
















var chartsayudas = {}
var inViewayudas = false;






function animarAyuda() {
    for (var i = 0; i < 1; i++) {
        var idElement = "ayudaseconomicas";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsayudas[idElement]) { continue }
            chartsayudas[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (inViewayudas) { return; }
            inViewayudas = true;
            return myChart = new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio'],
                    datasets: [
                        {
                            label: 'Alquiler',
                            tension: 0.2,
                            fill: false,

                            data: [112000, 291600, 174600, 394700, 432000, 356500],
                            borderColor: [

                                'rgba(105, 190, 190, 1)'
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 1)'
                            ],
                        },
                        {
                            label: 'Enfermedad',
                            tension: 0.2,
                            fill: false,

                            data: [26000, 43500, 42000, 65900, 57000, 82000],
                            borderColor: [

                                'rgba(71, 123, 168, 1)'
                            ],
                            backgroundColor: [

                                'rgba(71, 123, 168, 1)'
                            ],
                        },
                        {
                            label: 'Hogar',
                            tension: 0.2,
                            fill: false,

                            data: [135500, 291900, 306653, 692650, 513000, 363700],
                            borderColor: [

                                'rgba(215, 90, 218, 1)'
                            ],
                            backgroundColor: [

                                'rgba(35, 145, 200, 1)'
                            ],
                        },
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            ticks: {
                                font: { family: 'Raleway' }
                            },
                            stacked: true
                        },
                        y: {
                            ticks: {
                                font: { family: 'Raleway' },
                                maxTicksLimit: 5,
                            },
                            stacked: true,
                            font: {
                                family: 'Titillium Web'
                            },
                        }
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        align: 'middle',
                        labels: { font: { family: 'Raleway' } },
                    },
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    family: 'Raleway'
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Subsidios a personas por concepto',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        }
                    }
                }
            });

        } else {
            inViewayudas = false;
        }
    }
}

$(window).scroll(function () {

    animarAyuda();

});

$(window).load(function () {


    animarAyuda();

});







var chartsAmbiente = {}
var InViewAmbiente = false;




function animarAmbiente() {
    for (var i = 0; i < 1; i++) {
        var idElement = "materialesAmbiente";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsAmbiente[idElement]) { continue }
            chartsAmbiente[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewAmbiente) { return; }
            InViewAmbiente = true;

            return new Chart(ctx, {
                type: 'bar',
                data: {

                    labels: ['Carton y Papeles', 'Plastico', 'Vidrio', 'Metales', 'Chatarra'],
                    datasets: [
                        {
                            data: [36800, 22060, 83785, 1850, 32680],
                            borderColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',
                            ],
                            backgroundColor: [

                                'rgba(105, 190, 190, 1)',
                                'rgba(71, 123, 168, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(240, 150, 145, 1)',
                                'rgba(35, 145, 200, 1)',

                            ],
                        },

                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            font: {
                                family: 'Raleway',
                            },
                        },
                        y: {
                            ticks: {
                                maxTicksLimit: 5,
                            },

                            font: {
                                family: 'Raleway'
                            },
                        }
                    },
                    legend: {
                        display: false
                    },
                    plugins: {
                        legend: false,
                        title: {
                            display: true,
                            text: 'Material Recuperado',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                        }
                    }
                }
            });

        } else {
            InViewAmbiente = false;
        }
    }
}

$(window).scroll(function () {

    animarAmbiente();

});

$(window).load(function () {


    animarAmbiente();

});


var chartsGobierno = {}
var InViewGobierno = false;

function animarGobierno() {
    for (var i = 0; i < 1; i++) {
        var idElement = "inspeccionesGobierno";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsGobierno[idElement]) { continue }
            chartsGobierno[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewGobierno) { return; }
            InViewGobierno = true;

            return new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                    datasets: [

                        {
                            label: 'Operativos',
                            data: [9, 8, 5, 29, 37, 37],
                            backgroundColor: 'rgba(71, 123, 168, 1)',
                        },
                        {
                            label: 'Controlados',
                            data: [325, 308, 200, 1562, 2878, 1809],
                            backgroundColor: 'rgba(105, 190, 190, 1)',
                        },
                        {
                            label: 'Infracciones',
                            data: [7, 6, 11, 14, 20, 15],
                            backgroundColor: 'rgba(215, 90, 218, 1)',
                        },
                        {
                            label: 'Retenciones',
                            data: [0, 1, 0, 0, 1, 1],
                            backgroundColor: 'rgba(153, 070, 135,1)',
                        },
                        {
                            label: 'Insp. agencias/vehiculos',
                            data: [182, 13, 27, 27, 58, 89],
                            backgroundColor: 'rgba(240, 150, 145,1)',
                        },

                    ]
                },
                options: {
                    plugins: {
                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } }
                        },
                        title: {
                            display: true,
                            text: 'Actividades área de Inspeccion',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            }
                        }
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
            InViewGobierno = false;
        }
    }
}

$(window).scroll(function () {

    animarGobierno();

});

$(window).load(function () {


    animarGobierno();

});




var chartsIntendencia = {}
var InViewIntendencia = false;

function animarIntendencia() {
    for (var i = 0; i < 1; i++) {
        var idElement = "legalesIntendencia";
        if (isScrolledIntoView('#' + idElement)) {
            if (chartsIntendencia[idElement]) { continue }
            chartsIntendencia[idElement] = true;

            var ctx = document.getElementById(idElement);

            if (InViewIntendencia) { return; }
            InViewIntendencia = true;


            return new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Asesoria Legal', 'Resoluciones', 'Disposiciones', 'Proyectos de Ordenanzas', 'Ordenanzas Promulgadas'],
                    datasets: [

                        {
                            data: [600, 2213, 28, 51, 49],
                            backgroundColor: [
                                'rgba(71, 123, 168, 1)',
                                'rgba(105, 190, 190, 1)',
                                'rgba(215, 90, 218, 1)',
                                'rgba(153, 070, 135,1)',
                                'rgba(240, 150, 145,1)',
                                'rgba(35, 145, 200,1)',],
                            borderWidth: 0
                        },


                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Actividades de Asesoría Legal',
                            align: 'start',
                            font: {
                                family: 'Titillium Web',
                                size: 20,
                            },
                            legend: {
                                display: true,
                                position: 'right',
                                align: 'middle',
                                labels: { font: { family: 'Raleway' } }
                            }
                        },

                        legend: {
                            display: true,
                            position: 'right',
                            align: 'middle',
                            labels: { font: { family: 'Raleway' } },
                        },

                        scales: {
                            xAxes: [{
                                grid: {
                                    display: false,
                                },
                            }]
                        }
                    }
                }
            });

        } else {
            InViewIntendencia = false;
        }
    }
}

$(window).scroll(function () {

    animarIntendencia();

});

$(window).load(function () {


    animarIntendencia();

});

var chartscordones = {}
var inViewcordones = false;

function animarcordones() {
  for (var i = 0; i < 1; i++) {
    var idElement = "cordones";
    if (isScrolledIntoView('#' + idElement)) {
      if (chartscordones[idElement]) { continue }
      chartscordones[idElement] = true;

      var ctx = document.getElementById(idElement);

      if (inViewcordones) { return; }
      inViewcordones = true;
      return new Chart(ctx, {
        type: 'bar',
        data: {

          labels: ['Norte', 'Ranqueles/E.&Prog.', 'Universitario','Federal Bicentenario'],
          datasets: [
            {
              data: [2339.5, 2560, 806,821.5],
              borderColor: [

                'rgba(105, 190, 190, 1)',
                'rgba(71, 123, 168, 1)',
                'rgba(215, 90, 218, 1)',
                'rgba(240, 150, 145, 1)',
                'rgba(35, 145, 200, 1)',
              ],
              backgroundColor: [

                'rgba(105, 190, 190, 1)',
                'rgba(71, 123, 168, 1)',
                'rgba(215, 90, 218, 1)',
                'rgba(240, 150, 145, 1)',
                'rgba(35, 145, 200, 1)',

              ],
            },

          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              font: {
                family: 'Raleway',
              },
            },
            y: {
              ticks: {
                maxTicksLimit: 5,
              },

              font: {
                family: 'Raleway'
              },
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Ejecución de cordón cuneta por barrio (mts.)',
              align: 'start',
              font: {
                family: 'Titillium Web',
                size: 20,
              },
            },
             legend: {
              display: false
            },
          }
        }
      });
    } else {
      inViewayudas = false;
    }
  }
}
$(window).scroll(function () {

  animarcordones();

});

$(window).load(function () {


  animarcordones();

});

var chartseconomiacreditos = {}
var inVieweconomiacreditos = false;

function animareconomiacreditos() {
  for (var i = 0; i < 1; i++) {
    var idElement = "economiacreditos";
    if (isScrolledIntoView('#' + idElement)) {
      if (chartseconomiacreditos[idElement]) { continue }
      chartseconomiacreditos[idElement] = true;

      var ctx = document.getElementById(idElement);

      if (inVieweconomiacreditos) { return; }
      inVieweconomiacreditos = true;
      return new Chart(ctx, {
        type: 'bar',
        data: {

          labels: ['Enero', 'Marzo', 'Junio'],
          datasets: [
            {
              data: [1530000, 1690000, 2570000],
              borderColor: [

                'rgba(105, 190, 190, 1)',
                'rgba(71, 123, 168, 1)',
                'rgba(215, 90, 218, 1)',
                'rgba(240, 150, 145, 1)',
                'rgba(35, 145, 200, 1)',
              ],
              backgroundColor: [

                'rgba(105, 190, 190, 1)',
                'rgba(71, 123, 168, 1)',
                'rgba(215, 90, 218, 1)',
                'rgba(240, 150, 145, 1)',
                'rgba(35, 145, 200, 1)',

              ],
            },

          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              font: {
                family: 'Raleway',
              },
            },
            y: {
              ticks: {
                maxTicksLimit: 5,
              },

              font: {
                family: 'Raleway'
              },
            }
          },
          legend: {
            display: false
          },
          plugins: {
            title: {
              display: true,
              text: 'Créditos entregados por fecha ($)',
              align: 'start',
              font: {
                family: 'Titillium Web',
                size: 20,
              },
            },
            legend: {
              display: false
            },
          }
        }
      });
    } else {
      inVieweconomiacreditos = false;
    }
  }
}
$(window).scroll(function () {

  animareconomiacreditos();

});

$(window).load(function () {


  animareconomiacreditos();

});



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
        type: 'doughnut',
        data: {

          labels: ['Comercio', 'Produccion', 'Servicios'],
          datasets: [
            {
              tension: 0.1,
              fill: false,
              data: [2250000, 1750000, 1790000],
              fill: true,
              backgroundColor: ['rgba(71, 123, 168, 1)', 'rgba(105, 190, 190, 1)', 'rgba(215, 90, 218, 1)'
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

            title: {
              display: true,
              text: 'Créditos entregados por actividad ($)',
              align: 'start',
              font: {
                family: 'Titillium Web',
                size: 20,
              }
            },
            legend: true
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
