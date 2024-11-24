/**
 * Problem Statement:
 * [Leetcode] Merge two sorted arrays in place -> https://leetcode.com/problems/merge-sorted-array/description/
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * Example 1:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 *
 * Approach:
 * 1. Use three pointers technique:
 *    - `i` points to the last valid element of nums1 (m - 1).
 *    - `j` points to the last element of nums2 (n - 1).
 *    - `k` points to the last index of nums1 (m + n - 1), where we will place the merged elements.
 * 2. Start merging from the end, comparing elements from nums1 and nums2, and place the larger one at position k in nums1.
 * 3. If nums2 has remaining elements after the comparison, copy them into nums1.
 * 4. If nums1 still has remaining elements, they are already in their correct position, no need to copy.
 *
 * Time Complexity:
 * - O(m + n), where m is the number of elements in nums1 and n is the number of elements in nums2.
 *   We iterate through both arrays once to merge them.
 *
 * Space Complexity:
 * - O(1), since we are modifying nums1 in-place and not using any extra space.
 */

const mergeTwoSortedArraysInPlace = (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void => {
  console.log(`num1 = [${nums1}], num2 = [${nums2}]`);

  let i = m - 1; // pointer at the end of valid elements in num1
  let j = n - 1; // pointer at the end of elements in num2
  let k = m + n - 1; // pointer at the end of elements in num1

  // Merge num2 into num1 from the back
  while (i >= 0 && j >= 0) {
    // Compare and move the larger element at k pointer in num1
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // If elements remaining in num2 then move them over to num1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

  // No need to move remaining elements in num1 because it is already in-place

  console.log("merged sorted array -> ", nums1);
  console.log("===============================");
};

// Example usage
mergeTwoSortedArraysInPlace([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
mergeTwoSortedArraysInPlace([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);
mergeTwoSortedArraysInPlace([1], 1, [], 0);
mergeTwoSortedArraysInPlace([0], 0, [1], 1);
