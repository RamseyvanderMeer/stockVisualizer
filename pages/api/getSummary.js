// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default async function handler(req, res) {
  try {
    // const response = await axios.get(
    //   `https://www.alphavantage.co/query?function=EARNINGS&symbol=${req.query.ticker}&apikey=5T64BD51IKDOO1MV`,
    //   { json: true, headers: { 'User-Agent': 'request' } }
    // );

    const response = await axios.get(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${req.query.ticker.toUpperCase()}?limit=1000&apikey=8be6e8d53defbd12d4ebd94234740ade`,
      { json: true, headers: { 'User-Agent': 'request' } }
    );

    return res.status(200).json(response.data)

    // if(response.data[0].symbol){
    //   return res.status(200).json(response.data)
    // }
    // else{
    //   throw 'timeout - 5 reqs a min';
    // }
  } catch (err) {
    console.log(err);
  }
};
