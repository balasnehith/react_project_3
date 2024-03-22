import { useEffect, useState, createContext } from "react";
import Card from "./Components/Card";
import "./App.css";

export const notInterested = createContext();

function App() {
  const url = "https://course-api.com/react-tours-project";
  const [isLoading, setIsLoading] = useState(true);
  const [holidayData, setHolidayData] = useState([]);

  const apiCall = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setHolidayData(data);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  if (isLoading) {
    return (
      <>
        <h1 id="singleEle">Loading...</h1>
      </>
    );
  }
  const handleNotInterested = (id) => {
    const new_data = holidayData.filter((data) => id != data.id);
    setHolidayData(new_data);
  };

  if (holidayData.length === 0) {
    return (
      <>
        <h1 id="singleEle">No Tours Left</h1>
        <button className="refreshBtn" onClick={() => apiCall()}>
          Refrest
        </button>
      </>
    );
  }
  return (
    <div className="mainContainer">
      <notInterested.Provider value={handleNotInterested}>
        <h1 id="title">Our Tours</h1>
        <div id="underline"></div>
        {holidayData.map((data) => {
          return <Card CardData={data} key={data.id} />;
        })}
      </notInterested.Provider>
    </div>
  );
}

export default App;
