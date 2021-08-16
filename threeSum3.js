var threeSumClosest = function(nums, target) {
    let closest
    let difference = Infinity
    nums.sort((a, b) => a-b)

    for (i = 0; i < nums.length - 2; i++) {
        let first = i + 1
        let last = nums.length - 1

        while (first < last) {
            let sum = nums[i] + nums[first] + nums[last]

            if (sum === target) {
                return sum
            } else if (sum > target) {
                let currDiff = sum - target
                if (currDiff < difference) {
                    difference = currDiff
                    closest = sum
                }
                last--
            } else {
                let currDiff = target - sum
                if (currDiff < difference) {
                    difference = currDiff
                    closest = sum
                }
                first++
            }
        }
    }

    return closest
}

console.log(threeSumClosest([1,1,1,0], -100))