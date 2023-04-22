import { normalizeTime } from "./normalizeTime";

export const fetchData = ({ pair, limit, interval }) => {
  fetch(`https://domv.ada.art/orderbook/aggregate/${pair}/?limit=${limit}&interval=${interval}`)
    .then((response) => {
      if (response.ok) {
        setIsLoading(false);
        return response.json();
      }
      return Promise.reject(response.status);
    })
    .then((info) => {
      setError(false);
      setInfo(info);
      return info;
    })
    .then((info) => {
      const dataY = info.data.map((item) => normalizeTime(item.start_time));
      const dataX = info.data.map((item) => Math.floor(Number(item.buy_usd) - Number(item.sell_usd)));
      const maxDataX = Number(dataX.reduce((a, b) => (a > b ? a : b)));
      const minDataX = Number(dataX.reduce((a, b) => (a < b ? a : b)));
      setDataChart({
        labels: dataY,
        datasets: [
          {
            label: "V",
            data: dataX,
            backgroundColor: "black",
            borderColor: "#1E90FF",
            pointRadius: 1,
            borderWidth: 2
          }
        ]
      });
      setOptions({
        plugins: {
          legend: true
        },
        scales: {
          y: {
            suggestedMin: minDataX,
            suggestedMax: maxDataX
          }
        }
      });
    })
    .catch((error) => {
      console.error(error);
      setError(error.message);
    });
  
};