function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      let current = array[i];
      let next = array[j];
      if ((current + next) === target){
        return true;
      }
    }
  }
  return false; 
}

/* 
  Write the Big O time complexity of your function here

     for (let i = 0; i < array.length; i++) = n
      for(let j = i + 1; j < array.length; j++) = n
        let current = array[i]; = 1
        let next = array[j]; = 1
        current + next === target; = 1

        time complexity = O(n^2 + 3)
                        = O(n^2);

*/

/* 
  Add your pseudocode here
  create a function wuth argurments array and target
    create variable start and initialize it to zero
    create variable next and initialize it to i + 1
    loop through the array with i and increment till i < array.length
      loop through the array with j and increment till j < array.length
        check if value at array[i] + array[j] = target
        return true if yes
        return false if no
*/

/*
  Add written explanation of your solution here

  Create a function that takes an array and a target number as arguments.
  the function should return true if the sum of any pair if numbers in the array result 
  in the target number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4, 8, 3, 7, 2], 20))

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4, 8, 3, 7, 2], 11));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
