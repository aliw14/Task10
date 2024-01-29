function calculateSum() {
  const array = [10, 20, 30, 40];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
  return sum;
}

calculateSum();
console.log("-----------------");

let counter = 0;
while (counter < 5) {
  counter += 1;
  console.log(counter);
}
console.log("-----------------");

let countdown = 5;
do {
  countdown -= 1;
  console.log(countdown);
} while (countdown > 0);

console.log("------------------");

function evaluateGrade(number) {
  if (number > 60) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}
evaluateGrade(40);
evaluateGrade(80);
