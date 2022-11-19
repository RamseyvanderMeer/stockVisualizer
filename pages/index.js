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
      console.log(data);
    } catch (err) {
      console.log('err');
    }
  }, []);

  const handleSubmit = async () => {
    alert(`submit`)
  };

  return (
    <div>
      <h1>{`stock: ${data.Symbol}`}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
