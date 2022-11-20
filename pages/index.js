import Head from 'next/head';
import { useState, useEffect } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [data, setData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [ticker, setTicker] = useState('');
  const [options, setOptions] = useState({});
  const [EPS, setEPS] = useState({});

  const fetchData = async () => {
    const response = await fetch(`api/getSummary?ticker=${ticker}`);
    const tickerData = await response.json();
    setData(tickerData);

    setOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `${tickerData.symbol}`,
        },
      },
    });

    setEPS({
      labels: tickerData.quarterlyEarnings.map(({reportedDate})=>reportedDate).reverse(),
      datasets: [
        {
          label: 'EPS',
          data: tickerData.quarterlyEarnings.map(({reportedEPS})=>reportedEPS).reverse(),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    });
    
    setDataLoaded(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData();
    console.log(data);
  };

  const handleChangeInput = (e) => {
    setTicker(e.target.value);
  };

  return (
    <div>
      {dataLoaded ? (
        <h1>{`stock: ${data.symbol}`}</h1>
      ) : (
        <h1> input stock ticker </h1>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="ticker">Ticker</label>
        <input
          onChange={handleChangeInput}
          placeholder="aapl"
          type="text"
          id="ticker"
          required
        />
        <button type="submit">Submit</button>
      </form>

      {dataLoaded ? (
        <Bar options={options} data={EPS} />
      ) : (
        <h1> chart will show up once ticker is inputed </h1>
      )}
    </div>
  );
}
