/*
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])); // should return an object. {status: "OPEN", change: [["QUARTER", 0.5]]}
*/

function checkCashRegister(price, cash, cid) { // price is the price of the item, cash is the amount of cash given, cid is the cash in drawer
  let change = cash - price; // change is the difference between the amount of cash given and the price of the item
  let output = { status: null, change: [] }; // output is the object that will be returned
  let register = cid.reduce(  // register is the cash in drawer
    function (acc, curr) { // acc is the accumulator, curr is the current value
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc; 
    },
    { total: 0 }
  );

  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  let change_arr = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 },
  ];

  let change_given = change_arr.reduce(function (acc, curr) {
    let value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      change = Math.round(change * 100) / 100;
    }

    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);

  if (change_given.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  output.status = "OPEN";
  output.change = change_given;
  return output;
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
