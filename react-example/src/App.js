import React, { useState, useEffect } from 'react';

// import Axios from 'axios';
import Header from './components/Header'
import BarChart from './components/BarChart';


// const url = 'https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=overview&structure={"date":"date","newCases":"newCasesByPublishDate"}'


function App() {

  // const [labels, setLabels] = useState("");
  // useEffect(() => {
  //   Axios.get(url).then((response) => {
  //     console.log(response);
  //     const week = response.data.data.slice(0, 7);
  //     console.log(week)
  
  //     setLabels(week.map(day => day.date));
  //   })
  // }, [])


  return (
    <div className="container">
      <Header />
      <BarChart />
      {/* <BarChart cases={labels}/> */}
    </div>
  );
}

export default App;
