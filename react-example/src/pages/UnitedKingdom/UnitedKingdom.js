import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import './UnitedKingdom.css';
import Header from '../../components/Header/Header'
import BarChart from '../../components/BarChart/BarChart';
import LineChart from '../../components/LineChart/LineChart';
import Statistics from '../../components/Statistics/Statistics';
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart';

const UnitedKingdom = () => {
    const [UKUrl, setUKUrl] = useState('https://api.coronavirus.data.gov.uk/v1/data?' + 
                                               'filters=areaType=overview&' + 
                                               'structure={"date":"date","newCases":"newCasesByPublishDate", "cumCasesByPublishDate": "cumCasesByPublishDate", "cumDeaths28DaysByPublishDate": "cumDeaths28DaysByPublishDate"}');

    return(
        <div className='container'>
            <Header />

            <div className='rowDiv'>
                <LineChart url={UKUrl} name={"the U.K."}/>
                <Statistics url={UKUrl}/>
            </div>

            {/* <DoughnutChart urls={{englandUrl, scotlandUrl, walesUrl, NIUrl}}/> */}

        </div>
    )
}

export default UnitedKingdom