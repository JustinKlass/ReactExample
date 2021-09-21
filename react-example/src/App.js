// import Header from "./components/Header"
import Axios from "axios";

function App() {

  const getStatistics = () => {
    Axios.get("https://api.coronavirus.data.gov.uk/v1/data").then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="container">
      <h1>Hello World
      </h1>
      <button onClick={getStatistics}>TEST</button>

    </div>
  );
}

export default App;
