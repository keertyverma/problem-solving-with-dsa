/*
Write a function that takes a string as input and returns the string with its characters in reverse order. 
Input -> string
Output -> reversed string

Note: Do not use built-in `reverse` functions.
*/

//===========================================================================================================
/* 
    Using array and join method [Optimized solution] 
    Time complexity -> O(n)
    Space complexity -> O(n)
*/
const reverseString = (str: string): string => {
  // Check if the string is empty or contains only one character
  if (!str || str.length === 1) return str;

  // Use array to store characters in reverse order
  const reversedCharArr = [];
  // Loop through the string in reverse order
  for (let i = str.length - 1; i >= 0; i--) {
    reversedCharArr.push(str[i]);
  }

  // Join the array and return the reversed string
  return reversedCharArr.join("");

  /* Time Complexity Breakdown:
    1. Looping through the string: O(n)
    2. Appending to the array: O(1) per iteration, but loop runs n times -> O(n)
    3. Joining the array: O(n)
    Therefore, the overall time complexity is O(n + n + n) = O(n)
  */
};

// Example usage
const str1 = "abc def";
console.log(`str = ${str1}, reverse str = ${reverseString(str1)}`);

const str2 = "";
console.log(`str = ${str2}, reverse str = ${reverseString(str2)}`);

const str3 = "a";
console.log(`str = ${str3}, reverse str = ${reverseString(str3)}`);

//===========================================================================================================
/* 
    Using string concatenation [Less efficient solution]
    Time complexity -> O(n^2)  (string is immutable so repeated string concatenation inside string loop results in O(n^2))
    Space complexity -> O(n)
*/
const reverseStringWithConcatenation = (str: string): string => {
  // Check if the string is empty or contains only one character
  if (!str || str.length === 1) return str;

  let reversed = "";
  // Loop through the string in reverse order
  for (let i = str.length - 1; i >= 0; i--) {
    // Add each character to the reversed string (appending at the end)
    reversed += str[i];
  }

  return reversed;

  /* Time Complexity Breakdown:
    1. Looping through the string: O(n)
    2. String concatenation: String is an immutable data type, each time a character is added, a new string is created, copying the previous content, 
    resulting in O(n) time for each concatenation.Since this happens n times, the total cost of string concatenation becomes O(n^2).
    Therefore, the overall time complexity is O(n + n^2) = O(n^2)
  */
};
