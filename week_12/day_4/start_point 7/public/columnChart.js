var ColumnChart = function() { 
  var container = document.querySelector('#bar-graph');

  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title: {
      text: "Quiche Varieties"
    },
    series: [{
      name: "Cohort G1",
      data: [1, 8, 1, 1, 5]
    }],
    xAxis: {
      categories: ['Ke$ha', 'Lorraine', 'Cheese & Onion', 'Cheese & Tomato', 'Hatred for quiche']
    },
    plotOptions: {
      series: {
        colorByPoint: true
      }
    }
  });
};