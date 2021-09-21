import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
import Axios from 'axios';
import moment from 'moment';

const url = 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date","newCases":"newCasesByPublishDate"}'

const BarChart = () => {
    const [barData, setBarData] = useState({})
    const getData = () => {
        let weekDates = [];
        let caseNums = [];
        Axios.get(url).then((response) => {
            // console.log(response.data);

            const week = response.data.data.slice(0, 7);

            weekDates = week.map(day => moment(day.date).format("l"))
            caseNums = week.map(day => day.newCases)
            console.log(weekDates)

            setBarData({
                labels: weekDates,
                datasets: [
                  {
                    label: "# of New Cases in the U.K. in the past week",
                    data: caseNums,
                    borderWidth: 4,
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
                    
                  }
                ]
              }
            )
    
          }).catch((error) => {
            console.log(error);
          })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div style={{height: '1100px', width: '1100px'}}>
            <Bar 
                data={barData} options={{responsive: true}}
            />
        </div>
    )
}

export default BarChart
