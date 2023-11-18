import React, { useState, useEffect } from "react";
import { Stack } from "./components/Stack";
import { dataArray } from "./parser";

function App() {
  const [stackData, setStackData] = useState([]);

  const fetchDataFromParser = async () => {
    try {
      const processedDataArray = dataArray.map((data, index) =>
        parseData(data, index)
      );
      setStackData([...stackData, ...processedDataArray]);
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  };

  useEffect(() => {
    fetchDataFromParser();
  }, []);

  const parseData = (data, index) => {
    return {
      id: stackData.length + index + 1,
      tableData: data.map((item) => createData(item)),
    };
  };

  const createData = (item) => {
    return {
      Name: item.name,
      Calories: item.calories,
      Fat: item.fat,
      Carbs: item.carbs,
      Protein: item.protein,
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
