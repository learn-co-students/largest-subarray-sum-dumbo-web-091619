function largestSubarraySum(array){
    let currentSum = 0
    let largestSum = 0

    for(let number of array){
        currentSum = Math.max((currentSum + number), 0)
        largestSum = Math.max(currentSum, largestSum)
    }
    
    return largestSum
}