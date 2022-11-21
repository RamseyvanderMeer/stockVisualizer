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
  const [EPS, setEPS] = useState({});
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
    e.preventDefault()
    fetchData();
    console.log(data);
  };

  return (
    <div>
      {dataLoaded ? (
        <h1>{`stock: ${data.symbol}`}</h1>
      ) : (
        <h1> input stock ticker </h1>
      )}

        <Hint options={hintData} allowTabFill>
          <input
            className="input-with-hint"
            value={ticker}
            onChange={e => setTicker(e.target.value)}
            placeholder="aapl"
            type="text"
            id="ticker"
            required
          />
        </Hint>
        <button onClick={handleSubmit} type="submit">Submit</button>

      {dataLoaded ? (
        <Bar options={options} data={EPS} />
      ) : (
        <h1> chart will show up once ticker is inputed </h1>
      )}
    </div>
  );
}
