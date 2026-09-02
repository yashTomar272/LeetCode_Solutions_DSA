/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = new Map()
    let degree = 0
    let min = nums.length

    // Frequency count
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    }

    // Degree
    for (let [key, value] of map) {
        if (value > degree) {
            degree = value
        }
    }

    // Degree wale elements ki minimum length
    for (let i = 0; i < nums.length; i++) {

        if (map.get(nums[i]) === degree) {

            let first = nums.indexOf(nums[i])
            let last = nums.lastIndexOf(nums[i])

            let length = last - first + 1

            min = Math.min(min, length)
        }
    }

    return min
};