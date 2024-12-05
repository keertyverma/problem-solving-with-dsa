/**
 * Given two strings `ransomNote` and `magazine`, return true if `ransomNote` can be constructed
 * by using the letters from `magazine` and false otherwise.
 *
 * Each letter in `magazine` can only be used once in `ransomNote`.
 *
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 *
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 *
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 *
 */

// Time - O(n+m) where n and m is length of `ransomNote` and `magazine` string respectively.
// Space - O(k), where k is the number of unique characters in `magazine`

function canConstruct(ransomNote: string, magazine: string): boolean {
  // edge case
  if (magazine.length < ransomNote.length) return false;

  // count frequency of each characters in the magazine
  const charCount: Record<string, number> = {};
  for (const char of magazine) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // check if ransomNote string can be made using magazine characters
  for (const char of ransomNote) {
    if (!charCount[char]) return false;
    charCount[char] -= 1;
  }

  return true;
}

// example usage
console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true
console.log(canConstruct("abc", "a")); // false
