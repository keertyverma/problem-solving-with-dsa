/**
 * Problem Statement:
 * Given an integer array `nums` sorted in non-decreasing order, remove some duplicates in-place
 * such that each unique element appears at most twice. The relative order of the elements should
 * be kept the same.
 *
 * Modify the input array `nums` such that the first `k` elements hold the result. Return `k`, the
 * number of elements in the modified array.
 *
 * Constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - nums is sorted in non-decreasing order.
 *
 * Requirements:
 * - O(1) extra space.
 * - Time complexity: O(n)
 *
 * Example 1:
 * Input: nums = [1,1,1,2,2,3]
 * Output: k = 5, nums = [1,1,2,2,3,_]
 *
 * Example 2:
 * Input: nums = [0,0,1,1,1,1,2,3,3]
 * Output: k = 7, nums = [0,0,1,1,2,3,3,_,_]
 */
// ======================================================================

// Time complexity -> O(n)
// Space complexity -> O(1)
function removeDuplicates(nums: number[]): number {
  // Edge case: handle array of length 0-2, it's already valid as each element can appear at most twice.
  if (nums.length <= 2) return nums.length;

  // Pointer to track the next valid element
  // Start at 2 because the first two elements are always valid.
  let k = 2;

  for (let i = 2; i < nums.length; i++) {
    // Check if the current element is the same as the element at `k - 2`.
    // If true, it means adding this element would result in more than two duplicates,
    // so we skip it.
    if (nums[i] === nums[k - 2]) continue;

    // Otherwise, place the current element at the `k` position and increment `k`.
    nums[k] = nums[i];
    k++;
  }

  return k;
}

// example usage
console.log(removeDuplicates([1, 1])); // k = 2 -> [1,1]
console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // k = 5 -> [1,1,2,2,3]
