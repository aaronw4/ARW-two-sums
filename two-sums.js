var twoSum = function(nums, target) {
    // for (i = 0; i < nums.length - 1; i++) {
    //     for (j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return ([i, j])
    //         }
    //     }
    // }
    // return ([])

    // Below code is faster

    object = {}
    for (i = 0; i < nums.length; i++) {
        object[nums[i]] = i
    }

    for (i = 0; i < nums.length; i++) {
        let number = target - nums[i]

        if (i === object[number]) {
            continue
        }
        else if (number in object) {
            return ([i, object[number]])
        }
    }
};