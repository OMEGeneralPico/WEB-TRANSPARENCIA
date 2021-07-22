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


                type: 'radar',
                data: {

                    labels: ['C. Deliberante', 'Intendencia', 'Gobierno', 'Planif. Urbana', 'Ambiente','Desarrollo Social', 'Economía', 'Org. Descentralizados', 'No programáticos'],
                    datasets: [
                        {
                            tension: 0.1,
                            fill: false,
                            data: [129372564
                                , 166292243
                                , 403627853
                                ,219516505
                                ,712226604
                                ,473682466
                                ,222447884
                                ,162186415
                                ,108417844

                            ],
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
                    plugins: { deferred: { xOffset: 150 } },
                    scales: {
                        r: {
                            ticks: {
                                maxTicksLimit: 5,
                                beginAtZero: true,
                                min: 0,
                                stepSize: 100000
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    plugins: { legend: true },
                    responsive: true,
                    maintainAspectRatio: false

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