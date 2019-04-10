function findOutlier(i) {
  let even = [];
  let odd = [];
  i.forEach(n => (n % 2 === 0 ? even.push(n) : odd.push(n)));
  return even.length === 1 ? +even : +odd;
}

// function findOutlier(int) {
// var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }

findOutlier([0, 1, 2]);
findOutlier([1, 2, 3]);
findOutlier([2, 6, 8, 10, 3]);
findOutlier([0, 0, 3, 0, 0]);
findOutlier([1, 1, 0, 1, 1]);
