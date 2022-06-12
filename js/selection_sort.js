const arr = [0,3,2,4,56,6,8,9,10,1,10,12,16,-1,-2,23,67,65,2,32,35,39]
let count = 0
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count += 1
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}
console.log(selectionSort(arr)) 
console.log(arr.length)
console.log('count = ', count)