const amountCharts = document.querySelectorAll('.sectionBody .chart div div');
const days = document.querySelectorAll('.sectionBody .chart div p')

const url: string = './data.json';

const fetchingData = (url: string) => {
    fetch(url)
        .then(
            (res) => {
                if (!res.ok) {
                    console.log('is not ok')
                } else {
                    return res.json()
                }
            }
        )
        .then(
            (data) => {
                data.forEach((item, index) => {
                    const dayElement = days[index] as HTMLParagraphElement;
                    const chartElement = amountCharts[index] as HTMLDivElement;

                    dayElement.innerHTML = item.day;

                    //calculating height of charts
                    let chartElementHeight: number = (15 * item.amount) / 100;
                    console.log(chartElementHeight);

                    chartElement.style.height = `${chartElementHeight}rem`

                })
            }
        )
}

fetchingData(url);