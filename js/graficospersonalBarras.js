function generarchartbarra(etiquetas, data2, ctx) {
    //Chart.defaults.global.defaultFontFamily = "'Titillium Web'"
    //Chart.defaults.global.defaultFontSize = 5

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: etiquetas,
        datasets: [{
          label: 'Presupuesto',
          data: data2,
          backgroundColor: [
            'rgba(71, 123, 168, 1)',
            'rgba(105, 190, 190, 1)',
            'rgba(35, 145, 200, 1)',
            'rgba(153, 070, 135, 1)',
            'rgba(190, 135, 180, 1)',
            'rgba(215, 90, 218, 1)',
            'rgba(240, 150, 145, 1)',
            'rgba(55, 55, 55,1)',
            'rgba(235, 235, 225,1)'
          ],
          borderColor: [
          'rgba(71, 123, 168, 0)',
          'rgba(105, 190, 190, 0)',
          'rgba(35, 145, 200, 0)',
          'rgba(153, 070, 135, 0)',
          'rgba(190, 135, 180, 0)',
          'rgba(215, 90, 218, 0)',
          'rgba(240, 150, 145, 0)',
          'rgba(55, 55, 55,0)',
          'rgba(235, 235, 225,0)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio:false,
        plugins:{
          
        //cutoutPercentage: 40,
        title: {
          display: true,
          text: 'Top 3 Por Rubro',
          font:{
            size: 20,
          },
          padding: {
            top: 10,
            bottom: 30,
        },
      },
        legend: false
      }
      }
    });
  }
  //Intentos de convertir a peso
  /*const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
  const float2dollar(value){
    return "$ "+(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}*/
  $.getJSON("./json/personal.json", function (dataorig) {
    //Chart.defaults.global.defaultFontFamily = "'Titillium Web'"
    
    //Chart.defaults.global.defaultFontSize = 5
    console.log("entro")
    for (var i = 0; i < Object.keys(dataorig).length - 1; i++) {

      var element = Object.keys(dataorig)[i]
      var ctx = document.getElementById("Personal" + i);
      var etiquetas = Object.keys(dataorig[element])
      var data2 = etiquetas.map(key => dataorig[element][key]);
      var Presupuesto = generarchartbarra(etiquetas,data2, ctx)

    };

    console.log(dataorig)
    // will generate array with ['Monday', 'Tuesday', 'Wednesday']

    //var labels = dataorig.map(function(e) {
    //      return e.etiquetas_de_fila});
    //  var data2 = dataorig.map(function(e) {
    //      return e.bienes_de_capital; });





  })