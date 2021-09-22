import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
import BarChart from '../../components/BarChart';

const England = () => {
    // const englandData = 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date","newCases":"newCasesByPublishDate"}';
    const [englandData, setEnglandData] = useState('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date","newCases":"newCasesByPublishDate"}');
    console.log(englandData)
    // const setURL = () => {
    //     setEnglandData('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date","newCases":"newCasesByPublishDate"}')
    //     console.log(englandData)
    // }

    // useEffect(() => {
    //     setURL();
    // }, [])
    // console.log(englandData)
    return(
        <div className='container'>
            <BarChart url={englandData}/>
            {/* <h1 className='text-center' style={{paddingTop: '30%'}}>England</h1> */}
        </div>
    )
}

export default England