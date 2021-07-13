

/* Chart de ambiente */
Chart.defaults.font.family = "Titillium Web"
var ctx = document.getElementById('chartAmbiente').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        
        labels: ['CORPICO', 'LINEA', 'FEDEA', 'OTROS'],
        datasets: [{
  
            data: [350000, 120000, 750000, 1000000],
            backgroundColor: [
                'rgba(71, 123, 168, 1)',
                'rgba(105, 190, 190, 1)',
                'rgba(35, 145, 200, 1)',
                'rgba(153, 070, 135, 1)',
                'rgba(190, 135, 180, 1)',
                'rgba(215, 90, 218, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0)',
                'rgba(153, 102, 255, 0)',
                'rgba(255, 159, 64, 0)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins:{legend:false},
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                	display:false,
                },
                ticks: {
                	maxRotation: 0
                }
            },
            y: {
            	ticks: {maxTicksLimit: 5}
            
            }
        }
    }
});

/* chart de desarrollo */
Chart.defaults.font.family = "Titillium Web"
var ctx = document.getElementById('chartDesarrolloSocial').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['CORPICO', 'LINEA', 'FEDEA', 'OTROS'],
        datasets: [{
            label: 'Cantidad de empleados',
            data: [16, 34, 36, 7, 48, 2,12,18],
            backgroundColor: [
                'rgba(71, 123, 168, 1)',
                'rgba(105, 190, 190, 1)',
                'rgba(35, 145, 200, 1)',
                'rgba(153, 070, 135, 1)',
                'rgba(190, 135, 180, 1)',
                'rgba(215, 90, 218, 1)',
                'rgba(240, 150, 145, 1)', 
                'rgba(55, 55, 55, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0)',
                'rgba(153, 102, 255, 0)',
                'rgba(255, 159, 64, 0)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: false,
        
        scales: {
            x: {
                grid: {
                    display:false,
                },
                ticks: {
                    maxRotation: 0
                }
            },
            y: {
                ticks: {maxTicksLimit: 5}
            
            }
        }
    }
});

/* Chart economia */
Chart.defaults.font.family = "Titillium Web"
var ctx = document.getElementById('chartEconomia').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['SECRETARIA DE ECONOMÍA', 'CONTADURIA GENERAL', 'RENTAS', 'HAB. Y CONTROL COMERCIAL', 'DES. ECONOM. Y PRODUCT.', 'TESORERIA'],
        datasets: [{
            label: 'Cantidad de empleados',
            data: [5, 20, 29, 25, 9, 14],
            backgroundColor: [
                'rgba(71, 123, 168, 1)',
                'rgba(105, 190, 190, 1)',
                'rgba(35, 145, 200, 1)',
                'rgba(153, 070, 135, 1)',
                'rgba(190, 135, 180, 1)',
                'rgba(215, 90, 218, 1)',
                'rgba(240, 150, 145, 1)', 
                'rgba(55, 55, 55, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0)',
                'rgba(153, 102, 255, 0)',
                'rgba(255, 159, 64, 0)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display:false,
                },
                ticks: {
                    maxRotation: 0
                }
            },
            y: {
                ticks: {maxTicksLimit: 5}
            
            }
        }
    }
});

/* chart gobierno */
Chart.defaults.font.family = "Titillium Web"
var ctx = document.getElementById('chartGobierno').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['GOBIERNO SEG. EDUC. Y CULTURA', 'RECURSOS HUMANOS', 'PREVENC. Y CONV. CIUDADANA', 'EDUCAC. Y CULTURA', 'RELACIONES INSTITUCIONALES', 'TURISMO','CHOFERES'],
        datasets: [{
            label: 'Cantidad de empleados',
            data: [12, 29, 77, 40, 18, 5,17],
            backgroundColor: [
                'rgba(71, 123, 168, 1)',
                'rgba(105, 190, 190, 1)',
                'rgba(35, 145, 200, 1)',
                'rgba(153, 070, 135, 1)',
                'rgba(190, 135, 180, 1)',
                'rgba(215, 90, 218, 1)',
                'rgba(240, 150, 145, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0)',
                'rgba(153, 102, 255, 0)',
                'rgba(255, 159, 64, 0)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display:false,
                },
                ticks: {
                    maxRotation: 0
                }
            },
            y: {
                ticks: {maxTicksLimit: 5}
            
            }
        }
    }
});

/* chart intendencia */
Chart.defaults.font.family = "Titillium Web"
var ctx = document.getElementById('chartIntendencia').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['INTENDENCIA', 'JUZGADO DE FALTAS', 'ASUNTOS LEGALES', 'COMUNICACIONES', 'TECNOLOGIA DE LA INFORMACION', 'CEREMONIAL Y PROTOC. INSTITU.','GESTION Y ADM DE ARTICULACIÓN'],
        datasets: [{
            label: 'Cantidad de empleados',
            data: [4, 13, 10, 2, 11, 4,1],
            backgroundColor: [
                'rgba(71, 123, 168, 1)',
                'rgba(105, 190, 190, 1)',
                'rgba(35, 145, 200, 1)',
                'rgba(153, 070, 135, 1)',
                'rgba(190, 135, 180, 1)',
                'rgba(215, 90, 218, 1)',
                'rgba(240, 150, 145, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0)',
                'rgba(153, 102, 255, 0)',
                'rgba(255, 159, 64, 0)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display:false,
                },
                ticks: {
                    maxRotation: 0
                }
            },
            y: {
                ticks: {maxTicksLimit: 5}
            
            }
        }
    }
});

/* chart planificacion */
Chart.defaults.font.family = "Titillium Web"
var ctx = document.getElementById('chartPlanificacionUrbana').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['PLANIF. Y GESTION URBANA', 'ENTE REGULADOR DE SERVICIOS', 'INFRAEST. Y OBRAS MUNICIPALES', 'OBRAS PARTICULARES', 'PLANEAM. Y CATASTRO', 'DISEÑO Y PLANIFIC.'],
        datasets: [{
            label: 'Cantidad de empleados',
            data: [2, 2, 15, 18, 3, 3],
            backgroundColor: [
                'rgba(71, 123, 168, 1)',
                'rgba(105, 190, 190, 1)',
                'rgba(35, 145, 200, 1)',
                'rgba(153, 070, 135, 1)',
                'rgba(190, 135, 180, 1)',
                'rgba(215, 90, 218, 1)',
                'rgba(240, 150, 145, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 0)',
                'rgba(54, 162, 235, 0)',
                'rgba(255, 206, 86, 0)',
                'rgba(75, 192, 192, 0)',
                'rgba(153, 102, 255, 0)',
                'rgba(255, 159, 64, 0)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display:false,
                },
                ticks: {
                    maxRotation: 0
                }
            },
            y: {
                ticks: {maxTicksLimit: 5}
            
            }
        }
    }
});








/* Chart de ambiente */
