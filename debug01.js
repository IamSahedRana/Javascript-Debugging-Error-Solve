function sumEven(price) {
     let total = 0;
     for (let i = 0; i < price.length; i++) {
          if (price[i] % 2 === 0) {
               total += price[i];
          }
     }
     return total;
}

console.log(sumEven([20,61,15,80]));