import React, { useState } from 'react';
import BarChart from './components/BarChart';
import Axios from 'axios';

function App() {
  const [data, setData] = useState("");

  const getStatistics = () => {
    Axios.get(    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=overview&' +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}').then((response) => {
      // setData("50");
      setData(response.data.data);
      console.log(response);
    })
  }

  return (
    <div className="container">
      <div>
        <BarChart cases={data}/>
      </div>
      <button onClick={getStatistics}>TEST</button>

    </div>
  );
}

export default App;
