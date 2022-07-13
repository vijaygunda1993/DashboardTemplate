google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['2XX', 2],
        ['3XX', 2],
        ['4XX', 2],
        ['5XX', 7]
    ]);

    var options = {
       /* title: 'Error Details'*/
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}