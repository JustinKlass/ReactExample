import {Bar} from 'react-chartjs-2';

const BarChart = (data) => {
    console.log(data.cases[0].newCases)
    return (
        <div>
            <Bar 
                data={{
                    labels: [data.cases[0].date, data.cases[1].date, data.cases[2].date, data.cases[3].date, data.cases[4].date, data.cases[5].date, data.cases[6].date],
                    datasets: [{
                        label: "# of New Cases in the U.K.",
                        data: [data.cases[0].newCases, data.cases[1].newCases, data.cases[2].newCases, data.cases[3].newCases, data.cases[4].newCases, data.cases[5].newCases, data.cases[6].newCases],
                        backgroundColor: ['rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'],

                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1
                      }],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {ticks: {
                                beginAtZero: true
                            }}
                        ]
                    }
                }}
            />
        </div>
    )
}

export default BarChart
