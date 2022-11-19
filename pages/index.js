import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState({})
  const [dataLoaded, setDataLoaded] = useState(false)
  const [ticker, setTicker] = useState("")

  const fetchData = async () => {
    const response = await fetch(`api/getSummary?ticker=${ticker}`)
    const tickerData = await response.json()
    setData(tickerData);
    setDataLoaded(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`submit`);
    fetchData();
    console.log(data);
  };

  const handleChangeInput = (e) => {
    setTicker(e.target.value)
  }

  return (
    <div>
      {dataLoaded ? (
        <h1>{`stock: ${data.Symbol}`}</h1>
      ) : (
        <h1> input stock ticker </h1>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="ticker">Ticker</label>
        <input onChange={handleChangeInput} placeholder="aapl" type="text" id="ticker" required />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}
