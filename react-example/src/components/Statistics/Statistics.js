import React, { useState, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import Axios from 'axios';
import moment from 'moment';
import './Statistics.css'

const Statistics = (props) => {
    const [totalCases, setTotalCases] = useState({});
    const [totalDeaths, setTotalDeaths] = useState({});
    const getData = () => {
        Axios.get(props.url).then((response) => {
            setTotalCases(response.data.data[0].cumCasesByPublishDate);
            setTotalDeaths(response.data.data[0].cumDeaths28DaysByPublishDate);


        }).catch((error) => {
            console.log(error);
        });
    }

      useEffect(() => {
          getData()
      }, [])

    return (
        <div className='statsContainer'>
            <div className='statsDiv'>
                <p className='statLabel'>Total Number of Cases to Date:</p>
                <p className='statData'>{totalCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <p className='statLabel'>Total Number of Deaths to Date:</p>
                <p className='statData'>{totalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
        </div>
    )
}

export default Statistics
