// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      'https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=5T64BD51IKDOO1MV',
      { json: true, headers: { 'User-Agent': 'request' } }
    );
    // console.log(response.data)
    return res.status(200).json(response.data)
  } catch (err) {
    // Handle Error Here
    console.log(err);
    
  }
};
