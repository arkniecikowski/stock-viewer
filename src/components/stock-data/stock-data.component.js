import React, { useEffect, useState } from "react";
import { getTodayDate, getStartDate } from "../../helpers.js";

import StockDetails from "../stock-details/stock-details.component";
import StockChart from "../stock-chart.component.js/stock.chart.component";
import PeriodBox from "../period-box/period-box.component.js";

const StockData = ({ ticker }) => {
  const [stockData, setStockData] = useState(null);
  const [stockPrice, setStockPrice] = useState(null);
  const [period, setPeriod] = useState("day");

  const API_URL = "https://api.polygon.io";
  const API_KEY = "lmsToM9r4AFFnQWnlpaI_FJqGR81CBRe";

  const handlePriceValueFromData = (data) =>
    setStockPrice(data.map((item) => item.c));

  const handleStockDetailsFromData = (data) =>
    setStockData(Object.values(data).slice(-1)[0]);

  const handlePeriodChange = (event) => setPeriod(event);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        if (!ticker || ticker.trim() === "") {
          return;
        }

        const stockDataResponse = await fetch(
          `${API_URL}/v2/aggs/ticker/${ticker.toUpperCase()}/range/1/${period.toString()}/${getStartDate()}/${getTodayDate()}?adjusted=true&sort=asc&limit=120&apiKey=${API_KEY}`
        );
        if (!stockDataResponse.ok) {
          throw new Error("Error fetching stock data");
        }
        const data = await stockDataResponse.json();

        if (data) {
          handleStockDetailsFromData(data.results);
          handlePriceValueFromData(data.results);
        } else {
          console.error("Invalid stock data:", data);
        }
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    if (ticker) {
      fetchStockData();
    }
  }, [ticker, period]);

  if (!stockData) {
    return null; // lub inny komunikat ładowania danych
  }

  return (
    <div>
      <StockChart stockPrice={stockPrice} />
      <PeriodBox onButtonClick={handlePeriodChange} />
      <StockDetails stockData={stockData} ticker={ticker} />
    </div>
  );
};

export default StockData;
