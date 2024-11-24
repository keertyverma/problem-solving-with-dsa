/**
 * Problem Statement:
 * Given an array of integers `nums` and an integer `target`, return indices of
 * the two numbers such that they add up to `target`.
 *
 * Constraints:
 * - Each input will have exactly one solution.
 * - You may not use the same element twice.
 * - The solution can be returned in any order.
 *
 * Example:
 * Input: nums = [7, 11, 2, 15], target = 9
 * Output: [0, 2]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *  * ============================================================================
 */

/* Using Hashmap approach [optimal solution]
 * Time complexity -> O(n) | Space complexity -> O(n)
 */
function twoSum(nums: number[], target: number): number[] {
  // Create a hashmap to store numbers we've seen so far and their corresponding indices.
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    // If complement exists in map then retrieve its index. Use the non-null assertion operator (!) to assert that the key exists in the map.
    if (map.has(complement)) return [map.get(complement)!, i];
    else map.set(nums[i], i); // otherwise store the current number and its index in the map. This allows us to look up this number later if it becomes someone's complement
  }
  return [];
}

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10)); // pair -> (11,-1), Output -> [4,6]

/* brute force approach
 * Time complexity -> O(n^2) | Space complexity -> O(1)
 */
// function twoSum(nums: number[], target: number): number[] {
//   // Iterate through all pairs of elements and check if their sum matches the target.
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let sum = nums[i] + nums[j];
//       if (sum === target) return [i, j];
//     }
//   }
//   return [];
// }
