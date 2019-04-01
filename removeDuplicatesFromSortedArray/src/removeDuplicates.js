/**
 * @param {number[]} nums sorted array
 * @return {number} new length
 */
function removeDuplicates(nums) {
    if (!nums.length) return 0;

    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
    }
    return i + 1;
};

exports.removeDuplicates = removeDuplicates;