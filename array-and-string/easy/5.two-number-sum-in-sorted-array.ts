/**
 * Problem Statement:
 * Given an array of integers `nums` that is already sorted in non-decreasing order,
 * Find two numbers such that they add up to a specific `target` number.
 * Return indices of both the number.
 *
 * Constraints:
 * - You may not use the same element twice.
 * - The solution can be returned in any order.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * ============================================================================
 */

/* Using two pointer approach
 * Time complexity -> O(n) | Space complexity -> O(1)
 */
function twoSumInSortedArray(nums: number[], target: number): number[] {
  // Use two pointers to find the two numbers that add up to the target
  let start = 0; // pointer at the begining of array
  let end = nums.length; // pointer at the end of array

  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum === target) return [start, end];
    // If the sum is less than the target, move the start pointer forward. This increases the sum because the array is sorted in ascending order
    else if (sum < target) start++;
    // If the sum is greater than the target, move the end pointer backward. This decrease the sum because the array is sorted in ascending order
    else end--;
  }
  return [];
}

console.log(twoSumInSortedArray([-4, -1, 1, 3, 5, 6, 8, 11], 13)); // pair -> (5,8), Output -> [4,6]

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
