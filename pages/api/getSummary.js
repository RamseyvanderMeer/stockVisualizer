// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default async function handler(req, res) {
  try {
    // const response = await axios.get(
    //   `https://www.alphavantage.co/query?function=EARNINGS&symbol=${req.query.ticker}&apikey=5T64BD51IKDOO1MV`,
    //   { json: true, headers: { 'User-Agent': 'request' } }
    // );

    // const cashFlow = {
    //   data: [
    //     {
    //       date: '2022-09-24',
    //       symbol: 'AAPL',
    //       reportedCurrency: 'USD',
    //       cik: '0000320193',
    //       fillingDate: '2022-10-28',
    //       acceptedDate: '2022-10-27 18:01:14',
    //       calendarYear: '2022',
    //       period: 'FY',
    //       netIncome: 99803000000,
    //       depreciationAndAmortization: 11104000000,
    //       deferredIncomeTax: 895000000,
    //       stockBasedCompensation: 9038000000,
    //       changeInWorkingCapital: 1200000000,
    //       accountsReceivables: -1823000000,
    //       inventory: 1484000000,
    //       accountsPayables: 9448000000,
    //       otherWorkingCapital: 478000000,
    //       otherNonCashItems: 111000000,
    //       netCashProvidedByOperatingActivities: 122151000000,
    //       investmentsInPropertyPlantAndEquipment: -10708000000,
    //       acquisitionsNet: -306000000,
    //       purchasesOfInvestments: -76923000000,
    //       salesMaturitiesOfInvestments: 67363000000,
    //       otherInvestingActivites: -1780000000,
    //       netCashUsedForInvestingActivites: -22354000000,
    //       debtRepayment: -9543000000,
    //       commonStockIssued: 0,
    //       commonStockRepurchased: -89402000000,
    //       dividendsPaid: -14841000000,
    //       otherFinancingActivites: 3037000000,
    //       netCashUsedProvidedByFinancingActivities: -110749000000,
    //       effectOfForexChangesOnCash: 0,
    //       netChangeInCash: -10952000000,
    //       cashAtEndOfPeriod: 24977000000,
    //       cashAtBeginningOfPeriod: 35929000000,
    //       operatingCashFlow: 122151000000,
    //       capitalExpenditure: -10708000000,
    //       freeCashFlow: 111443000000,
    //       link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/0000320193-22-000108-index.htm',
    //       finalLink:
    //         'https://www.sec.gov/Archives/edgar/data/320193/000032019322000108/aapl-20220924.htm',
    //     },
    //     {
    //       date: '2021-09-25',
    //       symbol: 'AAPL',
    //       reportedCurrency: 'USD',
    //       cik: '0000320193',
    //       fillingDate: '2021-10-29',
    //       acceptedDate: '2021-10-28 18:04:28',
    //       calendarYear: '2021',
    //       period: 'FY',
    //       netIncome: 94680000000,
    //       depreciationAndAmortization: 11284000000,
    //       deferredIncomeTax: -4774000000,
    //       stockBasedCompensation: 7906000000,
    //       changeInWorkingCapital: -4911000000,
    //       accountsReceivables: -10125000000,
    //       inventory: -2642000000,
    //       accountsPayables: 12326000000,
    //       otherWorkingCapital: 1676000000,
    //       otherNonCashItems: -147000000,
    //       netCashProvidedByOperatingActivities: 104038000000,
    //       investmentsInPropertyPlantAndEquipment: -11085000000,
    //       acquisitionsNet: -33000000,
    //       purchasesOfInvestments: -109689000000,
    //       salesMaturitiesOfInvestments: 106870000000,
    //       otherInvestingActivites: -608000000,
    //       netCashUsedForInvestingActivites: -14545000000,
    //       debtRepayment: -8750000000,
    //       commonStockIssued: 1105000000,
    //       commonStockRepurchased: -85971000000,
    //       dividendsPaid: -14467000000,
    //       otherFinancingActivites: 14730000000,
    //       netCashUsedProvidedByFinancingActivities: -93353000000,
    //       effectOfForexChangesOnCash: 0,
    //       netChangeInCash: -3860000000,
    //       cashAtEndOfPeriod: 35929000000,
    //       cashAtBeginningOfPeriod: 39789000000,
    //       operatingCashFlow: 104038000000,
    //       capitalExpenditure: -11085000000,
    //       freeCashFlow: 92953000000,
    //       link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/0000320193-21-000105-index.htm',
    //       finalLink:
    //         'https://www.sec.gov/Archives/edgar/data/320193/000032019321000105/aapl-20210925.htm',
    //     },
    //     {
    //       date: '2020-09-26',
    //       symbol: 'AAPL',
    //       reportedCurrency: 'USD',
    //       cik: '0000320193',
    //       fillingDate: '2020-10-30',
    //       acceptedDate: '2020-10-29 18:06:25',
    //       calendarYear: '2020',
    //       period: 'FY',
    //       netIncome: 57411000000,
    //       depreciationAndAmortization: 11056000000,
    //       deferredIncomeTax: -215000000,
    //       stockBasedCompensation: 6829000000,
    //       changeInWorkingCapital: 5690000000,
    //       accountsReceivables: 6917000000,
    //       inventory: -127000000,
    //       accountsPayables: -4062000000,
    //       otherWorkingCapital: 2081000000,
    //       otherNonCashItems: -97000000,
    //       netCashProvidedByOperatingActivities: 80674000000,
    //       investmentsInPropertyPlantAndEquipment: -7309000000,
    //       acquisitionsNet: -1524000000,
    //       purchasesOfInvestments: -115148000000,
    //       salesMaturitiesOfInvestments: 120483000000,
    //       otherInvestingActivites: -791000000,
    //       netCashUsedForInvestingActivites: -4289000000,
    //       debtRepayment: -12629000000,
    //       commonStockIssued: 880000000,
    //       commonStockRepurchased: -72358000000,
    //       dividendsPaid: -14081000000,
    //       otherFinancingActivites: 11368000000,
    //       netCashUsedProvidedByFinancingActivities: -86820000000,
    //       effectOfForexChangesOnCash: 0,
    //       netChangeInCash: -10435000000,
    //       cashAtEndOfPeriod: 39789000000,
    //       cashAtBeginningOfPeriod: 50224000000,
    //       operatingCashFlow: 80674000000,
    //       capitalExpenditure: -7309000000,
    //       freeCashFlow: 73365000000,
    //       link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019320000096/0000320193-20-000096-index.htm',
    //       finalLink:
    //         'https://www.sec.gov/Archives/edgar/data/320193/000032019320000096/aapl-20200926.htm',
    //     },
    //     {
    //       date: '2019-09-28',
    //       symbol: 'AAPL',
    //       reportedCurrency: 'USD',
    //       cik: '0000320193',
    //       fillingDate: '2019-10-31',
    //       acceptedDate: '2019-10-30 18:12:36',
    //       calendarYear: '2019',
    //       period: 'FY',
    //       netIncome: 55256000000,
    //       depreciationAndAmortization: 12547000000,
    //       deferredIncomeTax: -340000000,
    //       stockBasedCompensation: 6068000000,
    //       changeInWorkingCapital: -3488000000,
    //       accountsReceivables: 245000000,
    //       inventory: -289000000,
    //       accountsPayables: -1923000000,
    //       otherWorkingCapital: -625000000,
    //       otherNonCashItems: -652000000,
    //       netCashProvidedByOperatingActivities: 69391000000,
    //       investmentsInPropertyPlantAndEquipment: -10495000000,
    //       acquisitionsNet: -624000000,
    //       purchasesOfInvestments: -40631000000,
    //       salesMaturitiesOfInvestments: 98724000000,
    //       otherInvestingActivites: -1078000000,
    //       netCashUsedForInvestingActivites: 45896000000,
    //       debtRepayment: -8805000000,
    //       commonStockIssued: 781000000,
    //       commonStockRepurchased: -66897000000,
    //       dividendsPaid: -14119000000,
    //       otherFinancingActivites: -1936000000,
    //       netCashUsedProvidedByFinancingActivities: -90976000000,
    //       effectOfForexChangesOnCash: 0,
    //       netChangeInCash: 24311000000,
    //       cashAtEndOfPeriod: 50224000000,
    //       cashAtBeginningOfPeriod: 25913000000,
    //       operatingCashFlow: 69391000000,
    //       capitalExpenditure: -10495000000,
    //       freeCashFlow: 58896000000,
    //       link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019319000119/0000320193-19-000119-index.html',
    //       finalLink:
    //         'https://www.sec.gov/Archives/edgar/data/320193/000032019319000119/a10-k20199282019.htm',
    //     },
    //     {
    //       date: '2018-09-29',
    //       symbol: 'AAPL',
    //       reportedCurrency: 'USD',
    //       cik: '0000320193',
    //       fillingDate: '2018-11-05',
    //       acceptedDate: '2018-11-05 08:01:40',
    //       calendarYear: '2018',
    //       period: 'FY',
    //       netIncome: 59531000000,
    //       depreciationAndAmortization: 10903000000,
    //       deferredIncomeTax: -32590000000,
    //       stockBasedCompensation: 5340000000,
    //       changeInWorkingCapital: 34694000000,
    //       accountsReceivables: -5322000000,
    //       inventory: 828000000,
    //       accountsPayables: 9175000000,
    //       otherWorkingCapital: -44000000,
    //       otherNonCashItems: -444000000,
    //       netCashProvidedByOperatingActivities: 77434000000,
    //       investmentsInPropertyPlantAndEquipment: -13313000000,
    //       acquisitionsNet: -721000000,
    //       purchasesOfInvestments: -73227000000,
    //       salesMaturitiesOfInvestments: 104072000000,
    //       otherInvestingActivites: -745000000,
    //       netCashUsedForInvestingActivites: 16066000000,
    //       debtRepayment: -6500000000,
    //       commonStockIssued: 669000000,
    //       commonStockRepurchased: -72738000000,
    //       dividendsPaid: -13712000000,
    //       otherFinancingActivites: 4405000000,
    //       netCashUsedProvidedByFinancingActivities: -87876000000,
    //       effectOfForexChangesOnCash: 0,
    //       netChangeInCash: 5624000000,
    //       cashAtEndOfPeriod: 25913000000,
    //       cashAtBeginningOfPeriod: 20289000000,
    //       operatingCashFlow: 77434000000,
    //       capitalExpenditure: -13313000000,
    //       freeCashFlow: 64121000000,
    //       link: 'https://www.sec.gov/Archives/edgar/data/320193/000032019318000145/0000320193-18-000145-index.html',
    //       finalLink:
    //         'https://www.sec.gov/Archives/edgar/data/320193/000032019318000145/a10-k20189292018.htm',
    //     },
    //   ],
    // };

    const revenueSegments = {
      data: [
        {
          '2022-09-24': {
            Mac: 40177000000,
            Service: 78129000000,
            'Wearables, Home and Accessories': 41241000000,
            iPad: 29292000000,
            iPhone: 205489000000,
          },
        },
        {
          '2021-09-25': {
            Mac: 35190000000,
            Service: 68425000000,
            'Wearables, Home and Accessories': 38367000000,
            iPad: 31862000000,
            iPhone: 191973000000,
          },
        },
        {
          '2020-09-26': {
            Mac: 28622000000,
            Service: 53768000000,
            'Wearables, Home and Accessories': 30620000000,
            iPad: 23724000000,
            iPhone: 137781000000,
          },
        },
        {
          '2019-09-28': {
            Mac: 25740000000,
            Service: 46291000000,
            'Wearables, Home and Accessories': 24482000000,
            iPad: 21280000000,
            iPhone: 142381000000,
          },
        },
        {
          '2018-09-29': {
            Mac: 25484000000,
            'Manufactured Product, Other': 17417000000,
            iPad: 18805000000,
            iPhone: 166699000000,
          },
        },
        {
          '2017-09-30': {
            Mac: 25850000000,
            'Other Products': 12863000000,
            Services: 29980000000,
            iPad: 19222000000,
            iPhone: 141319000000,
          },
        },
        {
          '2016-09-24': {
            'Apple Mac': 22831000000,
            'Apple iPad': 20628000000,
            'Apple iPhone': 136700000000,
            'Other products': 11132000000,
            Services: 24348000000,
          },
        },
        {
          '2015-09-26': {
            'Apple Mac': 25471000000,
            'Apple iPad': 23227000000,
            'Apple iPhone': 155041000000,
            'Other products': 10067000000,
            Services: 19909000000,
          },
        },
        {
          '2014-09-27': {
            'Apple Mac': 24079000000,
            Accessories: 6093000000,
            'Apple iPad': 30283000000,
            'Apple iPhone': 101991000000,
            iPod: 2286000000,
            'iTunes, Software And Service': 18063000000,
          },
        },
        {
          '2013-09-28': {
            Accessories: 5706000000,
            'Apple Ipad': 31980000000,
            'Apple Iphone': 91279000000,
            'Apple Mac': 21483000000,
            Ipod: 4411000000,
            'Itunes Software And Service': 16051000000,
          },
        },
        {
          '2012-09-29': {
            Desktops: 6040000000,
            'Ipad Related Products And Services': 32424000000,
            'Iphone Related Products And Services': 80477000000,
            Ipod: 5615000000,
            'Other Music Related Products And Services': 8534000000,
            'Peripherals And Other Hardware': 2778000000,
            Portables: 17181000000,
            'Software Service And Other Net Sales': 3459000000,
            'Total Macs': 23221000000,
          },
        },
        {
          '2011-09-24': {
            Desktops: 6439000000,
            'Other music related products and services': 6314000000,
            'Peripherals and Other Hardware': 2330000000,
            Portables: 15344000000,
            'Software, service and other net sales': 2954000000,
            'Total Mac net sales': 21783000000,
            'iPad and related products and services': 20358000000,
            'iPhone and related products and services': 47057000000,
            iPod: 7453000000,
          },
        },
      ],
    };

    const cashFlow = await axios.get(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${req.query.ticker.toUpperCase()}?limit=1000&apikey=8be6e8d53defbd12d4ebd94234740ade`,
      { json: true, headers: { 'User-Agent': 'request' } }
    );
    // const revenueSegments = await axios.get(
    //   `https://financialmodelingprep.com/api/v4/revenue-product-segmentation?symbol=${req.query.ticker.toUpperCase()}&structure=flat&apikey=8be6e8d53defbd12d4ebd94234740ade`,
    //   { json: true, headers: { 'User-Agent': 'request' } }
    // );

    let revBySeg = [];
    for (let i in revenueSegments.data) {
      revBySeg.push({
        ...revenueSegments.data[i][Object.keys(revenueSegments.data[i])[0]],
        date: Object.keys(revenueSegments.data[i])[0],
      });
    }

    let data = {
      cashFlow: cashFlow.data,
      revenueSegments: revBySeg,
    };

    return res.status(200).json(data);

    // if(response.data[0].symbol){
    //   return res.status(200).json(response.data)
    // }
    // else{
    //   throw 'timeout - 5 reqs a min';
    // }
  } catch (err) {
    console.log(err);
  }
}
