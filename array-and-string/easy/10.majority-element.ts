// Solution-1 -> Using Boyer-Moore Voting Algorithm -> (Time -> O(n) | Space -> O(1))
function majorityElement(nums: number[]): number {
  let candidate = nums[0]; // To track the potential majority element
  let count = 0; // To track net 'votes' for the current candidate

  for (const num of nums) {
    // choose a new candidate if 'count' reaches 0
    if (count === 0) candidate = num;

    // Adjust count:
    // Increment - if current number matches the candidate
    // Decrement - otherwise
    count += num === candidate ? 1 : -1;
  }

  // The last candidate after the loop is guaranteed to be the majority element
  // because the majority element appears more than n / 2 times.
  return candidate;
}

// example usage
console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

/////////////////////////////////////////////////////////////////////////////////
/* Solution-2 -> Using hash-map (Time -> O(n) | Space -> O(k), k is unique elements of array)
 * Create a hash map to store the frequency of each number in the array.
 * Traverse through the array and update the frequency of each element in the hash map.
 * Check for the element that appears more than n / 2 times and return it.
 */

// function majorityElement(nums: number[]): number {
//     const majorityCount = Math.floor(nums.length/2)
//     const countMap: Record<number, number> = {}

//     for(const num of nums) {
//        countMap[num] = (countMap[num] || 0) + 1;
//        if(countMap[num] > majorityCount) return num
//     }

//     throw new Error("Majority element does not exist.");
// };
