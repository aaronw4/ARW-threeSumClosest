var threeSumClosest = function(nums, target) {
    let positive = []
    let negative = []
    let zeroes = []
    let sum

    nums.forEach(element => {
        if (element > 0) {
            positive.push(element)
        } else if (element < 0) {
            negative.push(element)
        } else {
            zeroes.push(element)
        }
    });
    
    positive.sort((a,b) => a-b)
    negative.sort((a,b) => a-b)
    
    if (target > 0) {
        let smallPos = positive.filter(num => num < target)
        
        if (smallPos.length > 2) {
            let difference = 0
            
            while (difference < target) {            
                for (i = 0; i < smallPos.length - 1; i++) {
                    for (j = 1; j < smallPos.length; j++) {
                        let x = target + difference - smallPos[i] - smallPos[j]
                        let index = search(smallPos, x)
                        if (index < smallPos.length && index !== i && index !== j) {
                            if (difference === 0) {
                                return (x + smallPos[i] + smallPos[j])
                            } else if (target - sum) {
                                sum = x + smallPos[i] + smallPos[j]
                            }                            
                        }
                    }
                }
                difference++    
            }
        }
    }
};

function search (arr, x) {  
    let start = 0
    let end = arr.length-1
         
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        if (arr[mid] === x) {
            return mid
        } else if (arr[mid] < x) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
  
    return arr.length;
}

console.log(threeSumClosest([1,2,3,4,5], 4))