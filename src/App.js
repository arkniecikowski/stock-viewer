import { useState } from "react";
import "./App.css";

import SearchBox from "./components/search-box/search-box.component";
import StockData from "./components/stock-data/stock-data.component";

const App = () => {
  const [ticker, setTicker] = useState("");

  const handleButtonChange = (event) => setTicker(event); 
  
  return (
    <div className="App">
     
      <SearchBox
        className="stock-search-box"
        placeholder="search stock"
        onInputChange={handleButtonChange}
      />
      <StockData ticker={ticker}  />
    </div>
  );
};

export default App;
