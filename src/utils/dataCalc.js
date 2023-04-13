import { normalizeTime } from "./normalizeTime";


export function dataCalc(info) {
  const setDataY = (info.data.map(item => {
    return normalizeTime(item.start_time);
  }));
  const setDataX = (info.data.map(item => {
    return Math.floor(Number(item.sell_usd) + Number(item.buy_usd));
  }));
  const setMaxDataX = (
    Number(setDataX.reduce((a, b) => {
      return a > b ? a : b;
    }))
  );
  const setDataChart = ({
    labels: setDataY,
    datasets: [{
      labels: "Sales of the Week",
      data: setDataX,
      backgroundColor: "aqua",
      borderColor: "black",
      pointBorderColor: "aqua"
    }]
  });
  const setOptions = (
    {
      plugins: {
        legend: true
      },
      scales: {
        y: {
          min: 0,
          max: setMaxDataX
        }
      }
    }
  );
  return [setDataChart, setOptions];
}