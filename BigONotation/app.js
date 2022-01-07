function addUpTo_method_1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo_method_2(n) {
  return (n * (n + 1)) / 2;
}

/**
 * Time measuring function
 * @param {number} n int to pass to the callback
 * @param {Function} callback
 * Outputs in the console the time passed to execute given function as second argument
 */
function measureFunctionPerformance(n, callback) {
  const ONE_SECOND_IN_MILLISECONDS = 1000;
  const timeStamp_1 = performance.now();
  callback(n);
  const timeStamp_2 = performance.now();
  const executionTimeInSeconds = (timeStamp_2 - timeStamp_1) / ONE_SECOND_IN_MILLISECONDS;
  console.log(`the ${callback.name} took ${executionTimeInSeconds} to finish`);
}

const BIG_NUMBER = 1000000000;

measureFunctionPerformance(BIG_NUMBER, addUpTo_method_1);
measureFunctionPerformance(BIG_NUMBER, addUpTo_method_2);
