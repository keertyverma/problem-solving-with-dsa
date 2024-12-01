/* Using set to track number already seen as we traverse input array
 * Time O(n) | Space O(n)
 */
function findRecurringItem(nums: number[]): number | undefined {
  // Use a Set to track numbers that have been seen.
  const seen = new Set<number>();

  for (const n of nums) {
    // Return the number as soon as a duplicate is found
    if (seen.has(n)) return n;
    seen.add(n); // mark the number as seen
  }

  // if no recurring item is found
  return undefined;
}

console.log(findRecurringItem([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(findRecurringItem([2, 3, 4, 5]));
console.log(findRecurringItem([]));

//--------------------------------------------------------------
/* Brute force approach
 * Compare each item with rest of the items in the array inside a nested loop
 * Time O(n^2) | Space O(1)
 */
