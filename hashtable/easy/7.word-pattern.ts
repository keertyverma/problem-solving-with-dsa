/**
 * Problem Statement:
 * Given a pattern and a string s, determine if s follows the same pattern.
 *
 * Follow means a full match, such that there is a bijection between a letter
 * in the pattern and a non-empty word in s. Specifically:
 *
 * - Each letter in the pattern maps to exactly one unique word in s.
 * - Each unique word in s maps to exactly one letter in the pattern.
 * - No two letters map to the same word, and no two words map to the same letter.
 *
 * Example 1:
 * Input: pattern = "abba", s = "dog cat cat dog"
 * Output: true
 * Explanation: 'a' maps to "dog", 'b' maps to "cat".
 *
 * Example 2:
 * Input: pattern = "abba", s = "dog cat cat fish"
 * Output: false
 *
 * Example 3:
 * Input: pattern = "aaaa", s = "dog cat cat dog"
 * Output: false
 *
 * Constraints:
 * 1 <= pattern.length <= 300
 * pattern contains only lowercase English letters.
 * 1 <= s.length <= 3000
 * s contains only lowercase English letters and spaces.
 * s does not contain leading or trailing spaces, and words are separated by a single space.
 */

// Time -> O(n), n is pattern length | Space -> O(k), k is unique word in string and unique character in pattern
function wordPattern(pattern: string, s: string): boolean {
  const words: string[] = s.split(" ");

  // length mismatch check
  if (pattern.length !== words.length) return false;

  // map to store word to character mapping
  const wordToChar = new Map<string, string>();
  // set to track characters in pattern which are already mapped
  const mappedChar = new Set<string>();

  // Iterate over the word and character simuntaneously
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let char = pattern[i];

    // check if word is already mapped to character
    if (wordToChar.has(word)) {
      // Mismatch -> mapped character is not same as current character
      if (wordToChar.get(word) !== char) return false;
    } else {
      // Mismatch -> current character is already mapped to different word
      if (mappedChar.has(char)) return false;

      // Map the current word to the current character
      wordToChar.set(word, char);
      // Mark the character as mapped
      mappedChar.add(char);
    }
  }

  // If no mismatch occurred, the string follows the pattern
  return true;
}

// Example usage
console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false
console.log(wordPattern("abba", "dog dog dog dog")); // Output: false
