// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  let n = [];
    for (let i=0 ; i<array.length ; i++){
      n.push(add5K(array[i]));
    } return n;
}
function add5K (num){
  return num + 5000 ;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

// Using `forEach` function here

newEmployeeSalaries = forEach(employeeSalaries,add5K);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
