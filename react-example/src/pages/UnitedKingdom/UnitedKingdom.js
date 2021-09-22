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
    const [englandUrl, setEnglandUrl] = useState('https://api.coronavirus.data.gov.uk/v1/data?' + 
                                               'filters=areaType=nation;areaName=england&' + 
                                               'structure={"date":"date","newCases":"newCasesByPublishDate", "cumCasesByPublishDate": "cumCasesByPublishDate"}');
    const [scotlandUrl, setScotlandUrl] = useState('https://api.coronavirus.data.gov.uk/v1/data?' + 
                                               'filters=areaType=nation;areaName=scotland&' +
                                               'structure={"date":"date","newCases":"newCasesByPublishDate", "cumCasesByPublishDate": "cumCasesByPublishDate"}');
    const [walesUrl, setWalesUrl] = useState('https://api.coronavirus.data.gov.uk/v1/data?' + 
                                               'filters=areaType=nation;areaName=wales&' +
                                               'structure={"date":"date","newCases":"newCasesByPublishDate", "cumCasesByPublishDate": "cumCasesByPublishDate"}');
    const [NIUrl, setNIUrl] = useState('https://api.coronavirus.data.gov.uk/v1/data?' + 
                                               'filters=areaType=nation;areaName=northern Ireland&' +
                                               'structure={"date":"date","newCases":"newCasesByPublishDate", "cumCasesByPublishDate": "cumCasesByPublishDate"}');
    

    return(
        <div className='container'>
            {/* <h1 className='heading'>Covid-19 in the U.K.</h1> */}
            <Header />

            <div className='rowDiv'>
                <LineChart url={UKUrl} name={"the U.K."}/>
                {/* <BarChart url={UKUrl} /> */}
                {/* <div className='statsContainer'>
                    <div>
                        <h1>test</h1>
                    </div>
                </div> */}
                <Statistics url={UKUrl}/>
            </div>

            <DoughnutChart urls={{englandUrl, scotlandUrl, walesUrl, NIUrl}}/>
            {/* <LineChart url={UKUrl}/> */}
        </div>
    )
}

export default UnitedKingdom