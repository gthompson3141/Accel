import React from "react";
import GridCell from "./GridCell";
import "./Grid.css";

const Grid = ({ accelerometerData }) => {
  const rows = Array.from({ length: 100 }, (_, rowIndex) => rowIndex);
  const cols = Array.from({ length: 100 }, (_, colIndex) => colIndex);

  const getColour = () => {
    var colData = 10;
  };

  return (
    <div className="grid-container">
      {rows.map((row) => (
        <div className="grid-row" key={row}>
          {cols.map((col) => (
            <GridCell
              key={col}
              color={getColour(accelerometerData[row][col])}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
