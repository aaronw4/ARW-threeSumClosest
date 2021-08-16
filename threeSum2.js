var threeSumClosest = function(nums, target) {
    let condition = false
    let difference = 0

    while (condition !== true) {
        for (i = 0; i < nums.length  - 2; i++) {
            for (j = i + 1; j < nums.length - 1; j++) {
                for (k = j + 1; k < nums.length; k++) {
                    let sum = nums[i] + nums[j] + nums[k]
                    if (sum - difference === target || sum + difference === target) {
                        if (i !== j && i !== k && j !== k) {
                            return (sum)
                        } else {
                            continue
                        }                        
                    }
                }
            }
        }
        difference++
    }
}

console.log(threeSumClosest([-1,2,1,-4], 1))