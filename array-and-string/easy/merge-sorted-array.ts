/**
 * Problem Statement:
 * Merge two sorted arrays into a single sorted array.
 * The input arrays are sorted in non-decreasing order.
 * The output should also be a sorted array containing all elements from both input arrays.
 *
 * Approach:
 * - Use two pointer technique to traverse both arrays simultaneously.
 * - Compare the elements at the current pointers of both arrays
 * - Push the smaller element to the result array and move the corresponding pointer.
 * - Once one array is fully traversed, append the remaining elements of other array to result.
 *
 * Time Complexity:
 * - O(n + m), where n and m are the lengths of the two input arrays.
 * - Each element from both arrays is visited exactly once.
 *
 * Space Complexity:
 * - O(n + m), as a new array is created to store the merged result.
 */

const mergeTwoSortedArrays = (arr1: number[], arr2: number[]): number[] => {
  const mergedSortedArr: number[] = [];
  let i = 0; // pointer for arr1
  let j = 0; // pointer for arr2

  // traverse both the array and move the smaller element in merged array
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedSortedArr.push(arr1[i]);
      i++;
    } else {
      mergedSortedArr.push(arr2[j]);
      j++;
    }
  }

  // add remaining element from arr 1
  while (i < arr1.length) {
    mergedSortedArr.push(arr1[i]);
    i++;
  }

  // add remaining element from arr 1
  while (j < arr2.length) {
    mergedSortedArr.push(arr2[j]);
    j++;
  }

  return mergedSortedArr;
};

// Example usage
const example1 = () => {
  const arr1 = [0, 3, 4, 31];
  const arr2 = [4, 6, 30];
  console.log(
    `Array-1: [${arr1}] , Array-2: [${arr2}] and merged sorted array -> [${mergeTwoSortedArrays(
      arr1,
      arr2
    )}]`
  );
};

const example2 = () => {
  const arr1 = [5];
  const arr2: number[] | [] = [];
  console.log(
    `Array-1: [${arr1}] , Array-2: [${arr2}] and merged sorted array -> [${mergeTwoSortedArrays(
      arr1,
      arr2
    )}]`
  );
};

example1();
example2();

// TODO:how to solve this in-place for better space complexity ?
