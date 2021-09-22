import React, { useState, useEffect } from 'react';
import BarChart from '../../components/BarChart';

const Scotland = () => {
    const [scotlandDataUrl, setScotlandDataUrl] = useState('https://api.coronavirus.data.gov.uk/v1/data?' +
                                                   'filters=areaType=nation;areaName=scotland&' +
                                                   'structure={"date":"date","newCases":"newCasesByPublishDate"}');
    return(
        <div className='container'>
            <BarChart url={scotlandDataUrl}/>
        </div>
    )
}

export default Scotland