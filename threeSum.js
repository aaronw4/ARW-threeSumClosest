var threeSumClosest = function(nums, target) {
    let condition = false
    let difference = 0

    while (condition !== true) {
        for (i = 0; i < nums.length  - 1; i++) {
            for (j = 1; j < nums.length; j++) {
                let newTarget1 = target + difference - nums[i] - nums[j]
                let newTarget2 = target - difference - nums[i] - nums[j]

                if (i < j) {
                    var newNums = nums.slice()
                    newNums.splice(j, 1)
                    newNums.splice(i, 1)
                } else if (i > j) {
                    var newNums = nums.slice()
                    newNums.splice(i, 1)
                    newNums.splice(j, 1)
                } else {
                    continue
                }
                

                if (newNums.includes(newTarget1)) {
                    return nums[i] + nums[j] + newTarget1
                }
                if (newNums.includes(newTarget2)) {
                    return nums[i] + nums[j] + newTarget2
                }
            }
        }
        difference++
    }
}

console.log(threeSumClosest([1,2,5,10,11], 12))