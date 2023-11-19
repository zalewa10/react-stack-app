import React, { useState, useEffect } from "react";
import { Stack } from "./components/Stack";
import { dataArray } from "./parser";

function App() {
  const [stackData, setStackData] = useState([]);

  useEffect(() => {
    const fetchDataFromParser = async () => {
      try {
        const processedDataArray = dataArray.map((data, index) =>
          parseData(data, index + 1)
        );
        setStackData((prevData) => [...prevData, ...processedDataArray]);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };

    fetchDataFromParser();
  }, []);

  const parseData = (data, id) => {
    return {
      id,
      tableData: data.map((item) => item),
    };
  };

  return (
    <div className="App">
      <h1> Dynamiczna wizualizacja tabel</h1>
      <Stack data={stackData} />
      <h2>Wykonane przez K.Z</h2>
    </div>
  );
}

export default App;
