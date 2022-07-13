google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart1);
function drawChart1() {
    var data = google.visualization.arrayToDataTable([
        ['hours', '4XX', '5XX'],
        ['2', 10, 40],
        ['4', 170, 40],
        ['6', 60, 10],
        ['8', 100, 40]
    ]);

    var options = {
        title: 'Error Count',
        hAxis: { title: 'Year', titleTextStyle: { color: 'red' } }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}

google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawChart2);
function drawChart2() {
    var data = google.visualization.arrayToDataTable([
        ['hours', '4XX', '5XX'],
        ['2', 100, 40],
        ['4', 117, 40],
        ['8', 60, 20],
        ['10', 10, 50]
    ]);

    var options = {
        title: 'Error Count',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
    chart.draw(data, options);
}

$(window).resize(function () {
    drawChart1();
    drawChart2();
});

// Reminder: you need to put https://www.google.com/jsapi in the head of your document or as an external resource on codepen //