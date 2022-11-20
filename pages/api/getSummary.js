// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=EARNINGS&symbol=${req.query.ticker}&apikey=5T64BD51IKDOO1MV`,
      { json: true, headers: { 'User-Agent': 'request' } }
    );
    // const response = {"data" : {
    //   "symbol": "IBM",
    //   "annualEarnings": [
    //   {
    //   "fiscalDateEnding": "2022-09-30",
    //   "reportedEPS": "5.52"
    //   },
    //   {
    //   "fiscalDateEnding": "2021-12-31",
    //   "reportedEPS": "9.97"
    //   },
    //   {
    //   "fiscalDateEnding": "2020-12-31",
    //   "reportedEPS": "8.67"
    //   },
    //   {
    //   "fiscalDateEnding": "2019-12-31",
    //   "reportedEPS": "12.81"
    //   },
    //   {
    //   "fiscalDateEnding": "2018-12-31",
    //   "reportedEPS": "13.82"
    //   },
    //   {
    //   "fiscalDateEnding": "2017-12-31",
    //   "reportedEPS": "13.83"
    //   },
    //   {
    //   "fiscalDateEnding": "2016-12-31",
    //   "reportedEPS": "13.6"
    //   },
    //   {
    //   "fiscalDateEnding": "2015-12-31",
    //   "reportedEPS": "14.93"
    //   },
    //   {
    //   "fiscalDateEnding": "2014-12-31",
    //   "reportedEPS": "16.27"
    //   },
    //   {
    //   "fiscalDateEnding": "2013-12-31",
    //   "reportedEPS": "17.03"
    //   },
    //   {
    //   "fiscalDateEnding": "2012-12-31",
    //   "reportedEPS": "15.3"
    //   },
    //   {
    //   "fiscalDateEnding": "2011-12-31",
    //   "reportedEPS": "13.49"
    //   },
    //   {
    //   "fiscalDateEnding": "2010-12-31",
    //   "reportedEPS": "11.58"
    //   },
    //   {
    //   "fiscalDateEnding": "2009-12-31",
    //   "reportedEPS": "10.01"
    //   },
    //   {
    //   "fiscalDateEnding": "2008-12-31",
    //   "reportedEPS": "8.96"
    //   },
    //   {
    //   "fiscalDateEnding": "2007-12-31",
    //   "reportedEPS": "7.19"
    //   },
    //   {
    //   "fiscalDateEnding": "2006-12-31",
    //   "reportedEPS": "6.09"
    //   },
    //   {
    //   "fiscalDateEnding": "2005-12-31",
    //   "reportedEPS": "5.34"
    //   },
    //   {
    //   "fiscalDateEnding": "2004-12-31",
    //   "reportedEPS": "5.07"
    //   },
    //   {
    //   "fiscalDateEnding": "2003-12-31",
    //   "reportedEPS": "4.34"
    //   },
    //   {
    //   "fiscalDateEnding": "2002-12-31",
    //   "reportedEPS": "3.9"
    //   },
    //   {
    //   "fiscalDateEnding": "2001-12-31",
    //   "reportedEPS": "4.44"
    //   },
    //   {
    //   "fiscalDateEnding": "2000-12-31",
    //   "reportedEPS": "4.45"
    //   },
    //   {
    //   "fiscalDateEnding": "1999-12-31",
    //   "reportedEPS": "3.71"
    //   },
    //   {
    //   "fiscalDateEnding": "1998-12-31",
    //   "reportedEPS": "3.32"
    //   },
    //   {
    //   "fiscalDateEnding": "1997-12-31",
    //   "reportedEPS": "3.09"
    //   },
    //   {
    //   "fiscalDateEnding": "1996-12-31",
    //   "reportedEPS": "2.77"
    //   }
    //   ],
    //   "quarterlyEarnings": [
    //   {
    //   "fiscalDateEnding": "2022-09-30",
    //   "reportedDate": "2022-10-19",
    //   "reportedEPS": "1.81",
    //   "estimatedEPS": "1.77",
    //   "surprise": "0.04",
    //   "surprisePercentage": "2.2599"
    //   },
    //   {
    //   "fiscalDateEnding": "2022-06-30",
    //   "reportedDate": "2022-07-18",
    //   "reportedEPS": "2.31",
    //   "estimatedEPS": "2.27",
    //   "surprise": "0.04",
    //   "surprisePercentage": "1.7621"
    //   },
    //   {
    //   "fiscalDateEnding": "2022-03-31",
    //   "reportedDate": "2022-04-19",
    //   "reportedEPS": "1.4",
    //   "estimatedEPS": "1.38",
    //   "surprise": "0.02",
    //   "surprisePercentage": "1.4493"
    //   },
    //   {
    //   "fiscalDateEnding": "2021-12-31",
    //   "reportedDate": "2022-01-24",
    //   "reportedEPS": "3.35",
    //   "estimatedEPS": "3.3",
    //   "surprise": "0.05",
    //   "surprisePercentage": "1.5152"
    //   },
    //   {
    //   "fiscalDateEnding": "2021-09-30",
    //   "reportedDate": "2021-10-20",
    //   "reportedEPS": "2.52",
    //   "estimatedEPS": "2.5",
    //   "surprise": "0.02",
    //   "surprisePercentage": "0.8"
    //   },
    //   {
    //   "fiscalDateEnding": "2021-06-30",
    //   "reportedDate": "2021-07-19",
    //   "reportedEPS": "2.33",
    //   "estimatedEPS": "2.29",
    //   "surprise": "0.04",
    //   "surprisePercentage": "1.7467"
    //   },
    //   {
    //   "fiscalDateEnding": "2021-03-31",
    //   "reportedDate": "2021-04-19",
    //   "reportedEPS": "1.77",
    //   "estimatedEPS": "1.63",
    //   "surprise": "0.14",
    //   "surprisePercentage": "8.589"
    //   },
    //   {
    //   "fiscalDateEnding": "2020-12-31",
    //   "reportedDate": "2021-01-21",
    //   "reportedEPS": "2.07",
    //   "estimatedEPS": "1.79",
    //   "surprise": "0.28",
    //   "surprisePercentage": "15.6425"
    //   },
    //   {
    //   "fiscalDateEnding": "2020-09-30",
    //   "reportedDate": "2020-10-19",
    //   "reportedEPS": "2.58",
    //   "estimatedEPS": "2.58",
    //   "surprise": "0",
    //   "surprisePercentage": "0"
    //   },
    //   {
    //   "fiscalDateEnding": "2020-06-30",
    //   "reportedDate": "2020-07-20",
    //   "reportedEPS": "2.18",
    //   "estimatedEPS": "2.08",
    //   "surprise": "0.1",
    //   "surprisePercentage": "4.8077"
    //   },
    //   {
    //   "fiscalDateEnding": "2020-03-31",
    //   "reportedDate": "2020-04-20",
    //   "reportedEPS": "1.84",
    //   "estimatedEPS": "1.8",
    //   "surprise": "0.04",
    //   "surprisePercentage": "2.2222"
    //   },
    //   {
    //   "fiscalDateEnding": "2019-12-31",
    //   "reportedDate": "2020-01-21",
    //   "reportedEPS": "4.71",
    //   "estimatedEPS": "4.68",
    //   "surprise": "0.03",
    //   "surprisePercentage": "0.641"
    //   },
    //   {
    //   "fiscalDateEnding": "2019-09-30",
    //   "reportedDate": "2019-10-16",
    //   "reportedEPS": "2.68",
    //   "estimatedEPS": "2.67",
    //   "surprise": "0.01",
    //   "surprisePercentage": "0.3745"
    //   },
    //   {
    //   "fiscalDateEnding": "2019-06-30",
    //   "reportedDate": "2019-07-17",
    //   "reportedEPS": "3.17",
    //   "estimatedEPS": "3.07",
    //   "surprise": "0.1",
    //   "surprisePercentage": "3.2573"
    //   },
    //   {
    //   "fiscalDateEnding": "2019-03-31",
    //   "reportedDate": "2019-04-16",
    //   "reportedEPS": "2.25",
    //   "estimatedEPS": "2.22",
    //   "surprise": "0.03",
    //   "surprisePercentage": "1.3514"
    //   },
    //   {
    //   "fiscalDateEnding": "2018-12-31",
    //   "reportedDate": "2019-01-22",
    //   "reportedEPS": "4.87",
    //   "estimatedEPS": "4.82",
    //   "surprise": "0.05",
    //   "surprisePercentage": "1.0373"
    //   },
    //   {
    //   "fiscalDateEnding": "2018-09-30",
    //   "reportedDate": "2018-10-16",
    //   "reportedEPS": "3.42",
    //   "estimatedEPS": "3.4",
    //   "surprise": "0.02",
    //   "surprisePercentage": "0.5882"
    //   },
    //   {
    //   "fiscalDateEnding": "2018-06-30",
    //   "reportedDate": "2018-07-18",
    //   "reportedEPS": "3.08",
    //   "estimatedEPS": "3.04",
    //   "surprise": "0.04",
    //   "surprisePercentage": "1.3158"
    //   },
    //   {
    //   "fiscalDateEnding": "2018-03-31",
    //   "reportedDate": "2018-04-17",
    //   "reportedEPS": "2.45",
    //   "estimatedEPS": "2.42",
    //   "surprise": "0.03",
    //   "surprisePercentage": "1.2397"
    //   },
    //   {
    //   "fiscalDateEnding": "2017-12-31",
    //   "reportedDate": "2018-01-18",
    //   "reportedEPS": "5.18",
    //   "estimatedEPS": "5.17",
    //   "surprise": "0.01",
    //   "surprisePercentage": "0.1934"
    //   },
    //   {
    //   "fiscalDateEnding": "2017-09-30",
    //   "reportedDate": "2017-10-17",
    //   "reportedEPS": "3.3",
    //   "estimatedEPS": "3.28",
    //   "surprise": "0.02",
    //   "surprisePercentage": "0.6098"
    //   },
    //   {
    //   "fiscalDateEnding": "2017-06-30",
    //   "reportedDate": "2017-07-18",
    //   "reportedEPS": "2.97",
    //   "estimatedEPS": "2.74",
    //   "surprise": "0.23",
    //   "surprisePercentage": "8.3942"
    //   },
    //   {
    //   "fiscalDateEnding": "2017-03-31",
    //   "reportedDate": "2017-04-18",
    //   "reportedEPS": "2.38",
    //   "estimatedEPS": "2.35",
    //   "surprise": "0.03",
    //   "surprisePercentage": "1.2766"
    //   },
    //   {
    //   "fiscalDateEnding": "2016-12-31",
    //   "reportedDate": "2017-01-19",
    //   "reportedEPS": "5.01",
    //   "estimatedEPS": "4.88",
    //   "surprise": "0.13",
    //   "surprisePercentage": "2.6639"
    //   },
    //   {
    //   "fiscalDateEnding": "2016-09-30",
    //   "reportedDate": "2016-10-17",
    //   "reportedEPS": "3.29",
    //   "estimatedEPS": "3.23",
    //   "surprise": "0.06",
    //   "surprisePercentage": "1.8576"
    //   },
    //   {
    //   "fiscalDateEnding": "2016-06-30",
    //   "reportedDate": "2016-07-18",
    //   "reportedEPS": "2.95",
    //   "estimatedEPS": "2.89",
    //   "surprise": "0.06",
    //   "surprisePercentage": "2.0761"
    //   },
    //   {
    //   "fiscalDateEnding": "2016-03-31",
    //   "reportedDate": "2016-04-18",
    //   "reportedEPS": "2.35",
    //   "estimatedEPS": "2.09",
    //   "surprise": "0.26",
    //   "surprisePercentage": "12.4402"
    //   },
    //   {
    //   "fiscalDateEnding": "2015-12-31",
    //   "reportedDate": "2016-01-19",
    //   "reportedEPS": "4.84",
    //   "estimatedEPS": "4.81",
    //   "surprise": "0.03",
    //   "surprisePercentage": "0.6237"
    //   },
    //   {
    //   "fiscalDateEnding": "2015-09-30",
    //   "reportedDate": "2015-10-19",
    //   "reportedEPS": "3.34",
    //   "estimatedEPS": "3.3",
    //   "surprise": "0.04",
    //   "surprisePercentage": "1.2121"
    //   },
    //   {
    //   "fiscalDateEnding": "2015-06-30",
    //   "reportedDate": "2015-07-20",
    //   "reportedEPS": "3.84",
    //   "estimatedEPS": "3.78",
    //   "surprise": "0.06",
    //   "surprisePercentage": "1.5873"
    //   },
    //   {
    //   "fiscalDateEnding": "2015-03-31",
    //   "reportedDate": "2015-04-20",
    //   "reportedEPS": "2.91",
    //   "estimatedEPS": "2.8",
    //   "surprise": "0.11",
    //   "surprisePercentage": "3.9286"
    //   },
    //   {
    //   "fiscalDateEnding": "2014-12-31",
    //   "reportedDate": "2015-01-20",
    //   "reportedEPS": "5.81",
    //   "estimatedEPS": "5.41",
    //   "surprise": "0.4",
    //   "surprisePercentage": "7.3937"
    //   },
    //   {
    //   "fiscalDateEnding": "2014-09-30",
    //   "reportedDate": "2014-10-20",
    //   "reportedEPS": "3.68",
    //   "estimatedEPS": "4.32",
    //   "surprise": "-0.64",
    //   "surprisePercentage": "-14.8148"
    //   },
    //   {
    //   "fiscalDateEnding": "2014-06-30",
    //   "reportedDate": "2014-07-17",
    //   "reportedEPS": "4.32",
    //   "estimatedEPS": "4.29",
    //   "surprise": "0.03",
    //   "surprisePercentage": "0.6993"
    //   },
    //   {
    //   "fiscalDateEnding": "2014-03-31",
    //   "reportedDate": "2014-04-16",
    //   "reportedEPS": "2.46",
    //   "estimatedEPS": "2.54",
    //   "surprise": "-0.08",
    //   "surprisePercentage": "-3.1496"
    //   },
    //   {
    //   "fiscalDateEnding": "2013-12-31",
    //   "reportedDate": "2014-01-21",
    //   "reportedEPS": "6.13",
    //   "estimatedEPS": "5.99",
    //   "surprise": "0.14",
    //   "surprisePercentage": "2.3372"
    //   },
    //   {
    //   "fiscalDateEnding": "2013-09-30",
    //   "reportedDate": "2013-10-16",
    //   "reportedEPS": "3.99",
    //   "estimatedEPS": "3.96",
    //   "surprise": "0.03",
    //   "surprisePercentage": "0.7576"
    //   },
    //   {
    //   "fiscalDateEnding": "2013-06-30",
    //   "reportedDate": "2013-07-17",
    //   "reportedEPS": "3.91",
    //   "estimatedEPS": "3.77",
    //   "surprise": "0.14",
    //   "surprisePercentage": "3.7135"
    //   },
    //   {
    //   "fiscalDateEnding": "2013-03-31",
    //   "reportedDate": "2013-04-18",
    //   "reportedEPS": "3",
    //   "estimatedEPS": "3.05",
    //   "surprise": "-0.05",
    //   "surprisePercentage": "-1.6393"
    //   },
    //   {
    //   "fiscalDateEnding": "2012-12-31",
    //   "reportedDate": "2013-01-22",
    //   "reportedEPS": "5.39",
    //   "estimatedEPS": "5.25",
    //   "surprise": "0.14",
    //   "surprisePercentage": "2.6667"
    //   },
    //   {
    //   "fiscalDateEnding": "2012-09-30",
    //   "reportedDate": "2012-10-16",
    //   "reportedEPS": "3.62",
    //   "estimatedEPS": "3.61",
    //   "surprise": "0.01",
    //   "surprisePercentage": "0.277"
    //   },
    //   {
    //   "fiscalDateEnding": "2012-06-30",
    //   "reportedDate": "2012-07-18",
    //   "reportedEPS": "3.51",
    //   "estimatedEPS": "3.42",
    //   "surprise": "0.09",
    //   "surprisePercentage": "2.6316"
    //   },
    //   {
    //   "fiscalDateEnding": "2012-03-31",
    //   "reportedDate": "2012-04-17",
    //   "reportedEPS": "2.78",
    //   "estimatedEPS": "2.65",
    //   "surprise": "0.13",
    //   "surprisePercentage": "4.9057"
    //   },
    //   {
    //   "fiscalDateEnding": "2011-12-31",
    //   "reportedDate": "2012-01-19",
    //   "reportedEPS": "4.71",
    //   "estimatedEPS": "4.62",
    //   "surprise": "0.09",
    //   "surprisePercentage": "1.9481"
    //   },
    //   {
    //   "fiscalDateEnding": "2011-09-30",
    //   "reportedDate": "2011-10-17",
    //   "reportedEPS": "3.28",
    //   "estimatedEPS": "3.22",
    //   "surprise": "0.06",
    //   "surprisePercentage": "1.8634"
    //   },
    //   {
    //   "fiscalDateEnding": "2011-06-30",
    //   "reportedDate": "2011-07-18",
    //   "reportedEPS": "3.09",
    //   "estimatedEPS": "3.03",
    //   "surprise": "0.06",
    //   "surprisePercentage": "1.9802"
    //   },
    //   {
    //   "fiscalDateEnding": "2011-03-31",
    //   "reportedDate": "2011-04-19",
    //   "reportedEPS": "2.41",
    //   "estimatedEPS": "2.3",
    //   "surprise": "0.11",
    //   "surprisePercentage": "4.7826"
    //   },
    //   {
    //   "fiscalDateEnding": "2010-12-31",
    //   "reportedDate": "2011-01-18",
    //   "reportedEPS": "4.18",
    //   "estimatedEPS": "4.08",
    //   "surprise": "0.1",
    //   "surprisePercentage": "2.451"
    //   },
    //   {
    //   "fiscalDateEnding": "2010-09-30",
    //   "reportedDate": "2010-10-18",
    //   "reportedEPS": "2.82",
    //   "estimatedEPS": "2.75",
    //   "surprise": "0.07",
    //   "surprisePercentage": "2.5455"
    //   },
    //   {
    //   "fiscalDateEnding": "2010-06-30",
    //   "reportedDate": "2010-07-19",
    //   "reportedEPS": "2.61",
    //   "estimatedEPS": "2.58",
    //   "surprise": "0.03",
    //   "surprisePercentage": "1.1628"
    //   },
    //   {
    //   "fiscalDateEnding": "2010-03-31",
    //   "reportedDate": "2010-04-19",
    //   "reportedEPS": "1.97",
    //   "estimatedEPS": "1.93",
    //   "surprise": "0.04",
    //   "surprisePercentage": "2.0725"
    //   },
    //   {
    //   "fiscalDateEnding": "2009-12-31",
    //   "reportedDate": "2010-01-19",
    //   "reportedEPS": "3.59",
    //   "estimatedEPS": "3.47",
    //   "surprise": "0.12",
    //   "surprisePercentage": "3.4582"
    //   },
    //   {
    //   "fiscalDateEnding": "2009-09-30",
    //   "reportedDate": "2009-10-15",
    //   "reportedEPS": "2.4",
    //   "estimatedEPS": "2.38",
    //   "surprise": "0.02",
    //   "surprisePercentage": "0.8403"
    //   },
    //   {
    //   "fiscalDateEnding": "2009-06-30",
    //   "reportedDate": "2009-07-16",
    //   "reportedEPS": "2.32",
    //   "estimatedEPS": "2.02",
    //   "surprise": "0.3",
    //   "surprisePercentage": "14.8515"
    //   },
    //   {
    //   "fiscalDateEnding": "2009-03-31",
    //   "reportedDate": "2009-04-20",
    //   "reportedEPS": "1.7",
    //   "estimatedEPS": "1.66",
    //   "surprise": "0.04",
    //   "surprisePercentage": "2.4096"
    //   },
    //   {
    //   "fiscalDateEnding": "2008-12-31",
    //   "reportedDate": "2009-01-20",
    //   "reportedEPS": "3.28",
    //   "estimatedEPS": "3.03",
    //   "surprise": "0.25",
    //   "surprisePercentage": "8.2508"
    //   },
    //   {
    //   "fiscalDateEnding": "2008-09-30",
    //   "reportedDate": "2008-10-16",
    //   "reportedEPS": "2.05",
    //   "estimatedEPS": "2.03",
    //   "surprise": "0.02",
    //   "surprisePercentage": "0.9852"
    //   },
    //   {
    //   "fiscalDateEnding": "2008-06-30",
    //   "reportedDate": "2008-07-17",
    //   "reportedEPS": "1.98",
    //   "estimatedEPS": "1.82",
    //   "surprise": "0.16",
    //   "surprisePercentage": "8.7912"
    //   },
    //   {
    //   "fiscalDateEnding": "2008-03-31",
    //   "reportedDate": "2008-04-16",
    //   "reportedEPS": "1.65",
    //   "estimatedEPS": "1.45",
    //   "surprise": "0.2",
    //   "surprisePercentage": "13.7931"
    //   },
    //   {
    //   "fiscalDateEnding": "2007-12-31",
    //   "reportedDate": "2008-01-17",
    //   "reportedEPS": "2.8",
    //   "estimatedEPS": "2.68",
    //   "surprise": "0.12",
    //   "surprisePercentage": "4.4776"
    //   },
    //   {
    //   "fiscalDateEnding": "2007-09-30",
    //   "reportedDate": "2007-10-16",
    //   "reportedEPS": "1.68",
    //   "estimatedEPS": "1.67",
    //   "surprise": "0.01",
    //   "surprisePercentage": "0.5988"
    //   },
    //   {
    //   "fiscalDateEnding": "2007-06-30",
    //   "reportedDate": "2007-07-18",
    //   "reportedEPS": "1.5",
    //   "estimatedEPS": "1.47",
    //   "surprise": "0.03",
    //   "surprisePercentage": "2.0408"
    //   },
    //   {
    //   "fiscalDateEnding": "2007-03-31",
    //   "reportedDate": "2007-04-17",
    //   "reportedEPS": "1.21",
    //   "estimatedEPS": "1.21",
    //   "surprise": "0",
    //   "surprisePercentage": "0"
    //   },
    //   {
    //   "fiscalDateEnding": "2006-12-31",
    //   "reportedDate": "2007-01-18",
    //   "reportedEPS": "2.26",
    //   "estimatedEPS": "2.19",
    //   "surprise": "0.07",
    //   "surprisePercentage": "3.1963"
    //   },
    //   {
    //   "fiscalDateEnding": "2006-09-30",
    //   "reportedDate": "2006-10-17",
    //   "reportedEPS": "1.45",
    //   "estimatedEPS": "1.35",
    //   "surprise": "0.1",
    //   "surprisePercentage": "7.4074"
    //   },
    //   {
    //   "fiscalDateEnding": "2006-06-30",
    //   "reportedDate": "2006-07-18",
    //   "reportedEPS": "1.3",
    //   "estimatedEPS": "1.29",
    //   "surprise": "0.01",
    //   "surprisePercentage": "0.7752"
    //   },
    //   {
    //   "fiscalDateEnding": "2006-03-31",
    //   "reportedDate": "2006-04-18",
    //   "reportedEPS": "1.08",
    //   "estimatedEPS": "1.05",
    //   "surprise": "0.03",
    //   "surprisePercentage": "2.8571"
    //   },
    //   {
    //   "fiscalDateEnding": "2005-12-31",
    //   "reportedDate": "2006-01-17",
    //   "reportedEPS": "2.11",
    //   "estimatedEPS": "1.94",
    //   "surprise": "0.17",
    //   "surprisePercentage": "8.7629"
    //   },
    //   {
    //   "fiscalDateEnding": "2005-09-30",
    //   "reportedDate": "2005-10-17",
    //   "reportedEPS": "1.26",
    //   "estimatedEPS": "1.13",
    //   "surprise": "0.13",
    //   "surprisePercentage": "11.5044"
    //   },
    //   {
    //   "fiscalDateEnding": "2005-06-30",
    //   "reportedDate": "2005-07-18",
    //   "reportedEPS": "1.12",
    //   "estimatedEPS": "1.03",
    //   "surprise": "0.09",
    //   "surprisePercentage": "8.7379"
    //   },
    //   {
    //   "fiscalDateEnding": "2005-03-31",
    //   "reportedDate": "2005-04-14",
    //   "reportedEPS": "0.85",
    //   "estimatedEPS": "0.9",
    //   "surprise": "-0.05",
    //   "surprisePercentage": "-5.5556"
    //   },
    //   {
    //   "fiscalDateEnding": "2004-12-31",
    //   "reportedDate": "2005-01-18",
    //   "reportedEPS": "1.81",
    //   "estimatedEPS": "1.76",
    //   "surprise": "0.05",
    //   "surprisePercentage": "2.8409"
    //   },
    //   {
    //   "fiscalDateEnding": "2004-09-30",
    //   "reportedDate": "2004-10-18",
    //   "reportedEPS": "1.17",
    //   "estimatedEPS": "1.14",
    //   "surprise": "0.03",
    //   "surprisePercentage": "2.6316"
    //   },
    //   {
    //   "fiscalDateEnding": "2004-06-30",
    //   "reportedDate": "2004-07-15",
    //   "reportedEPS": "1.16",
    //   "estimatedEPS": "1.12",
    //   "surprise": "0.04",
    //   "surprisePercentage": "3.5714"
    //   },
    //   {
    //   "fiscalDateEnding": "2004-03-31",
    //   "reportedDate": "2004-04-15",
    //   "reportedEPS": "0.93",
    //   "estimatedEPS": "0.93",
    //   "surprise": "0",
    //   "surprisePercentage": "0"
    //   },
    //   {
    //   "fiscalDateEnding": "2003-12-31",
    //   "reportedDate": "2004-01-15",
    //   "reportedEPS": "1.56",
    //   "estimatedEPS": "1.5",
    //   "surprise": "0.06",
    //   "surprisePercentage": "4"
    //   },
    //   {
    //   "fiscalDateEnding": "2003-09-30",
    //   "reportedDate": "2003-10-15",
    //   "reportedEPS": "1.02",
    //   "estimatedEPS": "1.02",
    //   "surprise": "0",
    //   "surprisePercentage": "0"
    //   },
    //   {
    //   "fiscalDateEnding": "2003-06-30",
    //   "reportedDate": "2003-07-16",
    //   "reportedEPS": "0.97",
    //   "estimatedEPS": "0.98",
    //   "surprise": "-0.01",
    //   "surprisePercentage": "-1.0204"
    //   },
    //   {
    //   "fiscalDateEnding": "2003-03-31",
    //   "reportedDate": "2003-04-14",
    //   "reportedEPS": "0.79",
    //   "estimatedEPS": "0.8",
    //   "surprise": "-0.01",
    //   "surprisePercentage": "-1.25"
    //   },
    //   {
    //   "fiscalDateEnding": "2002-12-31",
    //   "reportedDate": "2003-01-16",
    //   "reportedEPS": "1.34",
    //   "estimatedEPS": "1.3",
    //   "surprise": "0.04",
    //   "surprisePercentage": "3.0769"
    //   },
    //   {
    //   "fiscalDateEnding": "2002-09-30",
    //   "reportedDate": "2002-10-16",
    //   "reportedEPS": "0.99",
    //   "estimatedEPS": "0.96",
    //   "surprise": "0.03",
    //   "surprisePercentage": "3.125"
    //   },
    //   {
    //   "fiscalDateEnding": "2002-06-30",
    //   "reportedDate": "2002-07-17",
    //   "reportedEPS": "0.89",
    //   "estimatedEPS": "0.83",
    //   "surprise": "0.06",
    //   "surprisePercentage": "7.2289"
    //   },
    //   {
    //   "fiscalDateEnding": "2002-03-31",
    //   "reportedDate": "2002-04-17",
    //   "reportedEPS": "0.68",
    //   "estimatedEPS": "0.68",
    //   "surprise": "0",
    //   "surprisePercentage": "0"
    //   },
    //   {
    //   "fiscalDateEnding": "2001-12-31",
    //   "reportedDate": "2002-01-17",
    //   "reportedEPS": "1.33",
    //   "estimatedEPS": "1.32",
    //   "surprise": "0.01",
    //   "surprisePercentage": "0.7576"
    //   },
    //   {
    //   "fiscalDateEnding": "2001-09-30",
    //   "reportedDate": "2001-10-16",
    //   "reportedEPS": "0.9",
    //   "estimatedEPS": "0.89",
    //   "surprise": "0.01",
    //   "surprisePercentage": "1.1236"
    //   },
    //   {
    //   "fiscalDateEnding": "2001-06-30",
    //   "reportedDate": "2001-07-18",
    //   "reportedEPS": "1.21",
    //   "estimatedEPS": "1.15",
    //   "surprise": "0.06",
    //   "surprisePercentage": "5.2174"
    //   },
    //   {
    //   "fiscalDateEnding": "2001-03-31",
    //   "reportedDate": "2001-04-18",
    //   "reportedEPS": "1",
    //   "estimatedEPS": "0.98",
    //   "surprise": "0.02",
    //   "surprisePercentage": "2.0408"
    //   },
    //   {
    //   "fiscalDateEnding": "2000-12-31",
    //   "reportedDate": "2001-01-17",
    //   "reportedEPS": "1.48",
    //   "estimatedEPS": "1.46",
    //   "surprise": "0.02",
    //   "surprisePercentage": "1.3699"
    //   },
    //   {
    //   "fiscalDateEnding": "2000-09-30",
    //   "reportedDate": "2000-10-17",
    //   "reportedEPS": "1.08",
    //   "estimatedEPS": "1.08",
    //   "surprise": "0",
    //   "surprisePercentage": "0"
    //   },
    //   {
    //   "fiscalDateEnding": "2000-06-30",
    //   "reportedDate": "2000-07-19",
    //   "reportedEPS": "1.06",
    //   "estimatedEPS": "1",
    //   "surprise": "0.06",
    //   "surprisePercentage": "6"
    //   },
    //   {
    //   "fiscalDateEnding": "2000-03-31",
    //   "reportedDate": "2000-04-18",
    //   "reportedEPS": "0.83",
    //   "estimatedEPS": "0.78",
    //   "surprise": "0.05",
    //   "surprisePercentage": "6.4103"
    //   },
    //   {
    //   "fiscalDateEnding": "1999-12-31",
    //   "reportedDate": "2000-01-19",
    //   "reportedEPS": "1.12",
    //   "estimatedEPS": "1.06",
    //   "surprise": "0.06",
    //   "surprisePercentage": "5.6604"
    //   },
    //   {
    //   "fiscalDateEnding": "1999-09-30",
    //   "reportedDate": "1999-10-20",
    //   "reportedEPS": "0.9",
    //   "estimatedEPS": "0.89",
    //   "surprise": "0.01",
    //   "surprisePercentage": "1.1236"
    //   },
    //   {
    //   "fiscalDateEnding": "1999-06-30",
    //   "reportedDate": "1999-07-19",
    //   "reportedEPS": "0.91",
    //   "estimatedEPS": "0.88",
    //   "surprise": "0.03",
    //   "surprisePercentage": "3.4091"
    //   },
    //   {
    //   "fiscalDateEnding": "1999-03-31",
    //   "reportedDate": "1999-04-21",
    //   "reportedEPS": "0.78",
    //   "estimatedEPS": "0.7",
    //   "surprise": "0.08",
    //   "surprisePercentage": "11.4286"
    //   },
    //   {
    //   "fiscalDateEnding": "1998-12-31",
    //   "reportedDate": "1999-01-21",
    //   "reportedEPS": "1.24",
    //   "estimatedEPS": "1.22",
    //   "surprise": "0.02",
    //   "surprisePercentage": "1.6393"
    //   },
    //   {
    //   "fiscalDateEnding": "1998-09-30",
    //   "reportedDate": "1998-10-20",
    //   "reportedEPS": "0.78",
    //   "estimatedEPS": "0.77",
    //   "surprise": "0.01",
    //   "surprisePercentage": "1.2987"
    //   },
    //   {
    //   "fiscalDateEnding": "1998-06-30",
    //   "reportedDate": "1998-07-20",
    //   "reportedEPS": "0.77",
    //   "estimatedEPS": "0.75",
    //   "surprise": "0.02",
    //   "surprisePercentage": "2.6667"
    //   },
    //   {
    //   "fiscalDateEnding": "1998-03-31",
    //   "reportedDate": "1998-04-20",
    //   "reportedEPS": "0.53",
    //   "estimatedEPS": "0.53",
    //   "surprise": "0",
    //   "surprisePercentage": "0"
    //   },
    //   {
    //   "fiscalDateEnding": "1997-12-31",
    //   "reportedDate": "1998-01-20",
    //   "reportedEPS": "1.08",
    //   "estimatedEPS": "1.07",
    //   "surprise": "0.01",
    //   "surprisePercentage": "0.9346"
    //   },
    //   {
    //   "fiscalDateEnding": "1997-09-30",
    //   "reportedDate": "1997-10-20",
    //   "reportedEPS": "0.69",
    //   "estimatedEPS": "0.68",
    //   "surprise": "0.01",
    //   "surprisePercentage": "1.4706"
    //   },
    //   {
    //   "fiscalDateEnding": "1997-06-30",
    //   "reportedDate": "1997-07-21",
    //   "reportedEPS": "0.73",
    //   "estimatedEPS": "0.71",
    //   "surprise": "0.02",
    //   "surprisePercentage": "2.8169"
    //   },
    //   {
    //   "fiscalDateEnding": "1997-03-31",
    //   "reportedDate": "1997-04-23",
    //   "reportedEPS": "0.59",
    //   "estimatedEPS": "0.58",
    //   "surprise": "0.01",
    //   "surprisePercentage": "1.7241"
    //   },
    //   {
    //   "fiscalDateEnding": "1996-12-31",
    //   "reportedDate": "1997-01-21",
    //   "reportedEPS": "0.98",
    //   "estimatedEPS": "0.99",
    //   "surprise": "-0.01",
    //   "surprisePercentage": "-1.0101"
    //   },
    //   {
    //   "fiscalDateEnding": "1996-09-30",
    //   "reportedDate": "1996-10-21",
    //   "reportedEPS": "0.61",
    //   "estimatedEPS": "0.61",
    //   "surprise": "0",
    //   "surprisePercentage": "0"
    //   },
    //   {
    //   "fiscalDateEnding": "1996-06-30",
    //   "reportedDate": "1996-07-25",
    //   "reportedEPS": "0.63",
    //   "estimatedEPS": "0.61",
    //   "surprise": "0.02",
    //   "surprisePercentage": "3.2787"
    //   },
    //   {
    //   "fiscalDateEnding": "1996-03-31",
    //   "reportedDate": "1996-04-17",
    //   "quarterlyEarnings": "0.55",
    //   "estimatedEPS": "0.6",
    //   "surprise": "-0.05",
    //   "surprisePercentage": "-8.3333"
    //   }
    //   ]
    //   }}
    console.log(response.data)
    if(response.data.symbol){
      return res.status(200).json(response.data)
    }
    else{
      throw 'Parameter is not a number!';
    }
  } catch (err) {
    console.log(err);
  }
};
