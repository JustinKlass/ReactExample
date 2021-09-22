import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import Axios from 'axios';
import moment from 'moment';
import './LineChart.css'

const LineChart = (props) => {
    const [lineData, setLineData] = useState({});

    // const state = {
    //     labels: ['January', 'February', 'March',
    //              'April', 'May'],
    //     datasets: [
    //       {
    //         label: 'Rainfall',
    //         fill: true,
    //         lineTension: 0.5,
    //         backgroundColor: 'rgba(18,46,78, 0.5)',
    //         borderColor: '#122E4E',
    //         borderWidth: 2,
    //         data: [65, 59, 80, 81, 56]
    //       }
    //     ]
    //   }
    const getData = () => {
        Axios.get(props.url).then((response) => {
            // console.log(response.data)
            let newCases = [];
            let caseDates = [];
            for(let i = 30; i > 0; i--) {
                    newCases.push(response.data.data[i].newCases);
                    caseDates.push(moment(response.data.data[i].date).format("l"))

            }
            // caseDates = caseDates.map(day => moment(day.date).format("l"))
            // console.log(newCases)
            // console.log(caseDates)
            setLineData(
                {
                    labels: caseDates,
                    datasets: [
                      {
                        label: '# of Daily New Cases in ' + props.name,
                        fill: true,
                        lineTension: 0.25,
                        backgroundColor: 'rgba(18,46,78, 0.5)',
                        borderColor: '#122E4E',
                        borderWidth: 2,
                        data: newCases
                      }
                    ]
                  }
            )

        }).catch((error) => {
            console.log(error);
        });
    }

      useEffect(() => {
          getData()
      }, [])

    return (
        <div style={{height: '600px', width: '65%', marginTop: '1em', borderTop: '0.15em solid black'}}>
        <Line
        style={{marginTop: '1em'}}
          // className='test'
          data={lineData}
          options={{
            title:{
              display:true,
              text:'# of Daily New Cases in ' + props.name,
              // font:100
            },
            // font: 20,
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
    )
}

export default LineChart