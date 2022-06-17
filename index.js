function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    let difference = target - array[i];
    for( j = 0; j < array.length; j++){
      if(array[j] === difference && i !== j){
        return [i,j]
      }
    }
  }
  return "false";
}

/* 
  Write the Big O time complexity of your function here
  O(n**2)
*/

/* 
  Add your pseudocode here
  ******************************
  Write the function that loops through array
  Loop the first time to start at number at index 0,
  Loop the second time to check the number at index 1
  write a condition to find the number (target - number[1]=diff)
  return an array with the position of the first number and difference
*/

/*
  Add written explanation of your solution here
  ##############################################
  The array is subjected to the first 'for loop'
  Here, the number at index 0 of the array is checked.
  - The second loop then checks the target number in relation
  to this first number, to get the difference.
  - The loop then continues throughout the array to check
  if the numbers matches the difference.
  - If found, the code then returns the position of
  the first number and the difference as an array.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2,34,12,4],6));
}

module.exports = hasTargetSum;
