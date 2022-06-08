import JsonData from '../data/data.json';

const cumulativeData = (arr, key) => {
  return JsonData.reduce(
    (accumulator, current) => accumulator + Number(current[key]),
    0
  );
};

const cumulativeTotal = cumulativeData(JsonData, 'totalReturn');

const sPIndexData = JsonData.map(v => ({
  ...v,
  cumulativeReturn: cumulativeTotal,
}));

//another non working example adding up cumulative returns

// function sum(obj) {
//   var sum = 0;
//   for (var el in obj) {
//     if (obj.hasOwnProperty(el)) {
//       sum += parseFloat(obj[el]);
//     }
//   }
//   return sum;
// }
// var summed = sum(JsonData);
export default sPIndexData;
