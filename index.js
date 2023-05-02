const chartProperties = {
    width: 1500,
    height: 600,
    timeScale:{
        timeVisible:true,
        secondVisible:false
    }
}

const domElement = document.getElementById("chart1");
const chart = LightweightCharts.createChart(domElement,chartProperties);
const candleSeries = chart.addCandlestickSeries();

  let url = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=10000';
  fetch(url)
  .then(res=> res.json())
  .then(data=>{
    let dataToSet = data.map((d=>{
      return {time:d[0]/1000, open:parseFloat(d[1]), high:parseFloat(d[2]), low:parseFloat(d[3]), close:parseFloat(d[4])}
    }))
    candleSeries.setData(dataToSet)
  })
  .catch(err=>{
    console.log(err);
  })
