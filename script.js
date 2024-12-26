var amountCharts = document.querySelectorAll('.sectionBody .chart div div');
var days = document.querySelectorAll('.sectionBody .chart div p');
var url = './data.json';
var fetchingData = function (url) {
    fetch(url)
        .then(function (res) {
        if (!res.ok) {
            console.log('is not ok');
        }
        else {
            return res.json();
        }
    })
        .then(function (data) {
        data.forEach(function (item, index) {
            var dayElement = days[index];
            var chartElement = amountCharts[index];
            dayElement.innerHTML = item.day;
            //calculating height of charts
            var chartElementHeight = (15 * item.amount) / 100;
            console.log(chartElementHeight);
            chartElement.style.height = "".concat(chartElementHeight, "rem");
        });
    });
};
fetchingData(url);
