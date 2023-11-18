// App.js
import React, { useState, useEffect } from "react";
import { Stack } from "./components/Stack";
import { fetchExternalData } from "./parser";

function App() {
  const [stackData, setStackData] = useState([]);

  const fetchDataFromParser = async () => {
    try {
      const parserData = await fetchExternalData();
      const processedData = parseData(parserData);
      setStackData([...stackData, processedData]);
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
    }
  };

  useEffect(() => {
    fetchDataFromParser();
  }, []);

  const parseData = (data) => {
    return {
      id: stackData.length + 1,
      tableData: data.map((item) => createData(item)),
    };
  };

  const createData = (item) => {
    return {
      name: item.name,
      calories: item.calories,
      fat: item.fat,
      carbs: item.carbs,
      protein: item.protein,
    };
  };

  return (
    <div className="App">
      <h1>React Stack App</h1>
      <h2>wizualizacja grafik</h2>
      <Stack data={stackData} />
    </div>
  );
}

export default App;
