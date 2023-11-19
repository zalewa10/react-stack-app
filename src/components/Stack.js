// Stack.js
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Stack = ({ data }) => {
  console.log("Data in Stack:", data);

  // Function to get unique columns from each data item
  const getUniqueColumns = (item) => {
    return Object.keys(item.tableData[0]);
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px" }}>
          <h2>Table ID: {item.id}</h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {getUniqueColumns(item).map((column, index) => (
                    <TableCell key={index}>{column}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {item.tableData.map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {getUniqueColumns(item).map((column, colIndex) => (
                      <TableCell key={colIndex}>{row[column]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  );
};

export { Stack };
