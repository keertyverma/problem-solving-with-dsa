/**
 * Problem Statement:
 * Given two strings `s` and `t`, determine if `t` is an anagram of `s`.
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * using all the original letters exactly once.
 *
 * Example:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 10^4
 * Both `s` and `t` consist of lowercase English letters or Unicode characters.
 * Follow up -> What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

// ------ If input contains only lowercase english characters
// Time -> O(n) | Space -> O(1)
function isAnagram(s: string, t: string): boolean {
  // length check
  if (s.length !== t.length) return false;

  // Array to count the frequency of lowercase english letter
  const count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    // increment count for character in `s` string
    count[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    // decrement count for character in `t` string
    count[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  // After processing both string if count array contains all `0` then `t` is anagram of `s`
  return count.every((c) => c === 0);
}

// Example usage
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("cat", "rat")); // false

//--------------------------------------------------------------
// ------ If input contains unicode characters (letter, number, emoji, punctuations)
// Time -> O(n) | Space -> O(k), k is size of unicode character set
function isAnagramWithMap(s: string, t: string): boolean {
  // length check
  if (s.length !== t.length) return false;

  // map to count the frequency of character in `s`
  const count = new Map<string, number>();
  for (let char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  // Iterate through each character in `t` to update the same frequency count map
  for (let char of t) {
    // if character doesn't exists in map or its count is `0` then `t` cannot be anagram of `s`
    if (!count.has(char) || count.get(char)! <= 0) return false;

    // decrement the count for the character
    count.set(char, count.get(char)! - 1);
  }

  // After processing both strings, all count should be zero
  return true;
}

// Example usage
console.log(isAnagramWithMap("anagram", "nagaram")); // true
console.log(isAnagramWithMap("cat", "rat")); // false
