import React, { useState, useEffect } from "react";
import { Stack } from "./components/Stack";
import { dataArray } from "./parser";
import "./styles.css";

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
    <div className="app-shell">
      <nav>
        <p>Navigation Bar</p>
      </nav>
      <div className="app-body">
        <p className="body-text">
          Es un hecho establecido hace demasiado tiempo que un lector se
          distraerá con el contenido del texto de un sitio mientras que mira su
          diseño. El punto de usar Lorem Ipsum es que tiene una distribución más
          o menos normal de las letras, al contrario de usar textos como por
          ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo
          un español que se puede leer.
        </p>
        <Stack data={stackData} />
        <p className="body-lower-text">
          Muchos paquetes de autoedición y editores de páginas web usan el Lorem
          Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem
          Ipsum" va a dar por
        </p>
      </div>
      <footer>
        <p>&copy; 2023 Your App</p>
      </footer>
    </div>
  );
}

export default App;
