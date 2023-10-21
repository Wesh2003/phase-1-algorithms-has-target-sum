function hasTargetSum(array, target) {
  // Write your algorithm here

  for(let i=0; i<array.length; i++){

      for(let j=i+1; j<array.length; j++){

        if (array[i]+array[j] === target){
          return true;
        }    
      }
  }

  return false;

}

/* 
  Write the Big O time complexity of your function here

  O(8n)
*/

/* 
  Add your pseudocode here

  Select a starting point of comparison
  Select a second cmparison value. It should not be equal to the starting value 
  Iterate through the array using both the starting and second comparison values
  Add the values through each iteration
  if added values === target, return true 
  else return false
  
*/


/*
  Add written explanation of your solution here
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
  console.log("=>", hasTargetSum([1, 2, 3, 5, 7], 4));
}

module.exports = hasTargetSum;
