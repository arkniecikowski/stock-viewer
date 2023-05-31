import React from "react";
import { getTodayDate, getStartDate } from "../../helpers.js";
import "./stock-chart.css";

import {
  LineChart,
  Label,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const StockChart = ({ stockPrice }) => {
  const startDate = getStartDate();
  const todayDate = getTodayDate();

  return (
    <div className="container">
      <ResponsiveContainer width="90%" height={400}>
        <LineChart data={stockPrice}>
          <CartesianGrid stroke="#eee" strokeDasharray="2 2" />
          <XAxis strokeWidth={2} stroke="#00C805" tick={null} tickLine={false}>
            <Label
              value={startDate}
              position="insideBottomLeft"
              style={{ fontWeight: "bold" }}
            />
            <Label
              value={todayDate}
              position="insideBottomRight"
              style={{ fontWeight: "bold" }}
            />
          </XAxis>
          <YAxis strokeWidth={2} stroke="#00C805" dataKey={(v) => v} />
          <Tooltip
            formatter={(value) => `${value} USD`}
            labelFormatter={() => ""}
          />
          <Line
            type="monotone"
            dataKey={(v) => v}
            stroke="#00C805"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
