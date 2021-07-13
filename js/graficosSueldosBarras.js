function generarchartbarrasueldos(etiquetas, data2, ctx) {
    //Chart.defaults.global.defaultFontFamily = "'Titillium Web'"
    //Chart.defaults.global.defaultFontSize = 5

    return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: etiquetas,
        datasets: [{
          label: 'Planta Permanente',
          data: [80000,95000,40000],
          backgroundColor: [
            'rgba(71, 123, 168, 1)'
          ],
         
          borderWidth: 1
        },
        {
          label: 'Contrato con aporte',
          data: [50000,75000,25000],
          backgroundColor: [

            'rgba(105, 190, 190, 1)'

          ],

          borderWidth: 1
        }]
      },
      options: {
        scales:{x:{stacked:true}, y:{stacked:true}},
        responsive: true,
        maintainAspectRatio:false,
        plugins:{
        //cutoutPercentage: 40,
        
        legend: true
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
      var ctx = document.getElementById("Sueldos" + i);
      var etiquetas = Object.keys(dataorig[element])
      var data2 = etiquetas.map(key => dataorig[element][key]);
      var Presupuesto = generarchartbarrasueldos(etiquetas,data2, ctx)

    };

    console.log(dataorig)
    // will generate array with ['Monday', 'Tuesday', 'Wednesday']

    //var labels = dataorig.map(function(e) {
    //      return e.etiquetas_de_fila});
    //  var data2 = dataorig.map(function(e) {
    //      return e.bienes_de_capital; });





  })