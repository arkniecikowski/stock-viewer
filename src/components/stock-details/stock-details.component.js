import React from "react";

const StockDetails = ({ stockData, ticker }) => {
  if (!stockData) {
    return <div>Brak danych akcji.</div>;
  }

  const {
    c: closePrice,
    h: highestPrice,
    l: lowestPrice,
    o: openPrice,
  } = stockData;

  return (
    <div>
      <h2>{ticker.toUpperCase()}</h2>
      <p>Open price: {openPrice}</p>
      <p>Close price: {closePrice}</p>
      <p>Highest price: {highestPrice}</p>
      <p>Lowest price: {lowestPrice}</p>
    </div>
  );
};
export default StockDetails;
