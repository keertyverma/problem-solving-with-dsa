/**
 * Problem Statement:
 * Leetcode -> https://leetcode.com/problems/keyboard-row/description/
 * Given an array of strings `words`, return the words that can be typed
 * using letters of the alphabet on only one row of an American keyboard.
 *
 * The American keyboard has the following rows:
 * - First row: "qwertyuiop"
 * - Second row: "asdfghjkl"
 * - Third row: "zxcvbnm"
 *
 * Note:
 * - Strings are case-insensitive, meaning uppercase and lowercase versions
 *   of the same letter are treated as if they are in the same row.
 *
 * Example:
 * Input: words = ["Hello", "Alaska", "Dad", "Peace"]
 * Output: ["Alaska", "Dad"]
 * Explanation:
 * - "Hello" uses letters from multiple rows.
 * - "Alaska" uses letters only from the second row.
 * - "Dad" uses letters only from the second row.
 * - "Peace" uses letters from multiple rows.
 */

// ===============================================================================
// Solution -> Time - O(n*m) [n = words array length, m = word length]. | Space - O(1)

// precompute a mapping of each letter to its corresponding keyboard row for efficient lookup
const letterToRow: { [key: string]: number } = {};
"qwertyuiop".split("").forEach((char) => (letterToRow[char] = 1));
"asdfghjkl".split("").forEach((char) => (letterToRow[char] = 2));
"zxcvbnm".split("").forEach((char) => (letterToRow[char] = 3));

function findWords(words: string[]): string[] {
  const result: string[] = [];

  for (let word of words) {
    // get the row of the first character in the word
    const row = letterToRow[word[0].toLowerCase()];

    // check if all characters in the word belong to the same row
    if (
      word
        .toLowerCase()
        .split("")
        .every((char) => letterToRow[char] === row)
    ) {
      // add the word to the result if all characters match the row
      result.push(word);
    }
  }

  return result;
}

// example usage
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska","Dad"]
console.log(findWords(["omk"])); // []
console.log(findWords(["sadasd", "mnb"])); // ["sadasd", "mnb"]
