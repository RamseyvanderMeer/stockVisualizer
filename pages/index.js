import Head from 'next/head';
import { useState } from 'react';
import { Hint } from 'react-autocomplete-hint';
import tickerList from '../tickers.json';

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

  const [freeCashFlow, setfreeCashFlow] = useState({});
  const [inventory, setInventory] = useState({});

  const [hintData, setHintData] = useState(tickerList);

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
          text: `${ticker}`,
        },
      },
    });

    setfreeCashFlow({
      labels: tickerData.map(({ fillingDate }) => fillingDate).reverse(),
      datasets: [
        {
          label: 'Free Cash Flow',
          data: tickerData.map(({ freeCashFlow }) => freeCashFlow).reverse(),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    });

    setInventory({
      labels: tickerData.map(({ fillingDate }) => fillingDate).reverse(),
      datasets: [
        {
          label: 'Inventory',
          data: tickerData.map(({ inventory }) => inventory).reverse(),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    });

    setDataLoaded(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      {dataLoaded ? (
        <h1>{`stock: ${ticker}`}</h1>
      ) : (
        <h1> input stock ticker </h1>
      )}

      <Hint options={hintData} allowTabFill>
        <input
          className="input-with-hint"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          placeholder="aapl"
          type="text"
          id="ticker"
          required
        />
      </Hint>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>

      {dataLoaded ? (
        <div>
          <Bar options={options} data={freeCashFlow} />
          <Bar options={options} data={inventory} />
        </div>
      ) : (
        <h1> chart will show up once ticker is inputed </h1>
      )}
    </div>
  );
}
