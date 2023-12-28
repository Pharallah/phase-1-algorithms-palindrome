function isPalindrome(word) {
  let length = word.length;
  let firstHalf = word.substring(0, Math.floor(length/2)).toLowerCase();
  let secondHalf = word.substring(length - Math.floor(length/2)).toLowerCase();
  let flip = secondHalf.split('').reverse().join('');
  if (firstHalf === flip) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  Get the length of the string
  
  Split the string into two parts:
  1. The first half
  2. The second half

  Reverse the second half and compare the two halves
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
