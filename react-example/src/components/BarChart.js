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
            console.log(response.data);

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
                    backgroundColor: ['rgba(18,46,78, 0.7)'],
                    borderColor: [
                        '#122e4e'
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
