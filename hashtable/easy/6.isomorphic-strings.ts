/**
 * Problem Statement:
 * Given two strings `s` and `t`, determine if they are isomorphic.
 * Two strings are isomorphic if the characters in `s` can be replaced to get `t`.
 * All occurrences of a character must be replaced with another character
 * while preserving the order of characters. No two characters may map to the same
 * character, but a character may map to itself.
 *
 * Example 1:
 * Input: s = "egg", t = "add"
 * Output: true
 * Explanation: 'e' -> 'a', 'g' -> 'd'. The mapping is consistent.
 *
 * Example 2:
 * Input: s = "foo", t = "bar"
 * Output: false
 * Explanation: 'o' cannot map to both 'a' and 'r'.
 *
 * Example 3:
 * Input: s = "paper", t = "title"
 * Output: true
 *
 * Example 4:
 * Input: s = "badc", t = "baba"
 * Output: false
 **/

// Time -> O(n) | Space -> O(n) for hashmap and set
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  // to store character mappings from s to t
  const mapS = new Map<string, string>();
  // to track characters in t that have already been mapped
  const mappedChars = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    // check for consistent mapping from s to t
    if (mapS.has(charS)) {
      if (mapS.get(charS) !== charT) {
        // mapping exists but doesnot match charT
        return false;
      }
    } else {
      // check if charT is already mapped
      if (mappedChars.has(charT)) return false;

      mapS.set(charS, charT);
      mappedChars.add(charT);
    }
  }

  // If we complete the loop without mismatches, the strings are isomorphic
  return true;
}

// Example usagae
console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("badc", "baba")); // false

// Time -> O(n) | Space -> O(n) for two hashmap
function isIsomorphicWithTwoMap(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  // track the character mappings from s to t and t to s
  const mapST = new Map<string, string>();
  const mapTS = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    // check consistent mapping from s->t
    if (mapST.has(charS) && mapST.get(charS) !== charT) return false; // Mismatch mapping
    mapST.set(charS, charT);

    // check consistent mapping from t->s
    if (mapTS.has(charT) && mapTS.get(charT) !== charS) return false; // Mismatch mapping
    mapTS.set(charT, charS);
  }

  // If we complete the loop without mismatches, the strings are isomorphic
  return true;
}

// // Example usagae
// console.log(isIsomorphicWithTwoMap("egg", "add")); // true
// console.log(isIsomorphicWithTwoMap("foo", "bar")); // false
// console.log(isIsomorphicWithTwoMap("paper", "title")); // true
// console.log(isIsomorphicWithTwoMap("badc", "baba")); // false
