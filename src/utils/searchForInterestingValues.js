export const searchForInterestingValues = (data) => {
  const averageVolume = data.data.map(item => {
    return item.sell_usd * 1 + item.buy_usd * 1;
  }).reduce((a, b) => {
    return (a + b / data.data.length);
  });
  
  
  const arrayKeys = [];
  data.data.filter((item, index) => {
    let delta = item.buy_usd - item.sell_usd;
    delta < 0 ? delta = delta * (-1) : "";
    if (delta > averageVolume) {
      arrayKeys.push(index);
      return true;
    }
  });
  return arrayKeys;
};


