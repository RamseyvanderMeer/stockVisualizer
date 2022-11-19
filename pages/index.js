import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState({});

  const fetchData = async () => {
    const response = await fetch('/api/hello');
    const tickerData = await response.json();
    setData(tickerData);
  };

  useEffect(() => {
    try {
      fetchData();
      console.log(data)
    } catch (err) {
      console.log('err');
    }
  }, []);

  return (
    <div>
      <h1>{`stock: ${data.Symbol}`}</h1>
    </div>
  );
}
