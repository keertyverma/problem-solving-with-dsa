/**
 * Problem Statement:
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Examples:
 * 1. Input: s = "A man, a plan, a canal: Panama"
 *    Output: true
 *    Explanation: After removing non-alphanumeric characters and converting to lowercase,
 *    the string becomes "amanaplanacanalpanama", which reads the same forward and backward.
 */

/* Using two pointer approach.
 * Time complexity -> O(n) | Space complexity -> O(1)

*/
function isPalindrome(s: string): boolean {
  // Edge case: An empty string or a string with only spaces is considered a palindrome
  if (s === "" || s.trim() === "") return true;

  // Use two pointers: one starting from the beginning and the other from the end
  let left = 0;
  let right = s.length - 1;

  // continue until both pointers meet in the middle
  while (left <= right) {
    let currLeftChar = s[left];
    let currRightChar = s[right];

    if (!isAlphaNumeric(currLeftChar))
      left++; // skip non-alphanumeric characters for left pointer
    else if (!isAlphaNumeric(currRightChar))
      right--; // skip non-alphanumeric characters for right pointer
    else {
      // compare character at left and right pointer
      if (currLeftChar.toLowerCase() !== currRightChar.toLowerCase())
        return false;
      // move pointers close to center
      left++;
      right--;
    }
  }
  return true;
}

function isAlphaNumeric(char: string): boolean {
  // Alphanumeric characters include letters and numbers.
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122)
  ); // a-z
}

console.log(isPalindrome(" ")); // true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("a.b,.")); // false
