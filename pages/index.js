import Head from 'next/head';
import { useState } from 'react';
import { Hint } from 'react-autocomplete-hint';
import tickerList from '../tickers.json';
var gen = require('random-seed');

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
  const [dataLoaded, setDataLoaded] = useState(false);
  const [ticker, setTicker] = useState('');
  const [options, setOptions] = useState({});

  const [freeCashFlow, setfreeCashFlow] = useState({});
  const [inventory, setInventory] = useState({});
  const [revenueSegments, setRevenueSegments] = useState({});

  const [hintData, setHintData] = useState(tickerList);

  const fetchData = async () => {
    const response = await fetch(`api/getSummary?ticker=${ticker}`);
    const tickerData = await response.json();

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
      labels: tickerData.cashFlow.map(({ fillingDate }) => fillingDate).reverse(),
      datasets: [
        {
          label: 'Free Cash Flow',
          data: tickerData.cashFlow.map(({ freeCashFlow }) => freeCashFlow).reverse(),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    });

    console.log(tickerData.cashFlow)

    setInventory({
      labels: tickerData.cashFlow.map(({ fillingDate }) => fillingDate).reverse(),
      datasets: [
        {
          label: 'Inventory',
          data: tickerData.cashFlow.map(({ inventory }) => inventory).reverse(),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    });

    let dictKeys = {};

    for (let i in tickerData.revenueSegments.reverse()) {
      for (let j in Object.keys(tickerData.revenueSegments[i])) {
        let name = Object.keys(tickerData.revenueSegments[i])[j].toLowerCase();
        if (dictKeys[name]) {
          for (let x = 0; x < i - dictKeys[name].length - 1; x++) {
            dictKeys[name].push(0);
          }
          dictKeys[name].push(
            tickerData.revenueSegments[i][Object.keys(tickerData.revenueSegments[i])[j]]
          );
        } else {
          dictKeys[name] = [];
          for (let x = 0; x < i; x++) {
            dictKeys[name].push(0);
          }
          dictKeys[name].push(
            tickerData.revenueSegments[i][Object.keys(tickerData.revenueSegments[i])[j]]
          );
        }
      }
    }
    let revSegSet = [];
    let rand;
    Object.keys(dictKeys).map((item) => {
      (rand = require('random-seed').create(`${item}`)),
        revSegSet.push({
          label: item,
          data: dictKeys[item],
          backgroundColor: `rgba(${rand(0, 100)}, ${rand(200, 255)}, ${rand(
            200,
            255
          )}, 0.5)`,
        });
    });


    setRevenueSegments({
      labels: dictKeys.date,
      datasets: revSegSet,
    });

    setDataLoaded(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData();
  };

  const optionsStacked = {
    plugins: {
      title: {
        display: true,
        text: 'Revenue by Segment',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min) - 1;
  }

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
          <Bar options={optionsStacked} data={revenueSegments} />
        </div>
      ) : (
        <h1> chart will show up once ticker is inputed </h1>
      )}
    </div>
  );
}
