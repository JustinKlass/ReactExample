import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import BarChart from '../../components/BarChart';
import DoughnutChart from '../../components/doughnutChart/doughnutChart';

const UnitedKingdom = () => {
    const [UKUrl, setUKUrl] = useState('https://api.coronavirus.data.gov.uk/v1/data?' + 
                                               'filters=areaType=overview&' + 
                                               'structure={"date":"date","newCases":"newCasesByPublishDate", "cumCasesByPublishDate": "cumCasesByPublishDate"}');
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
            <BarChart url={UKUrl}/>
            <DoughnutChart urls={{englandUrl, scotlandUrl, walesUrl, NIUrl}}/>
        </div>
    )
}

export default UnitedKingdom