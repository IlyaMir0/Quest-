const arr = [0,3,2,4,56,6,8,9,10,1,10,12,16,-1,-2,23,67,65,2,32,35,39]
let count = 0
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            count+=1
        }
    }
    return array /* без этой строчки не будет возвращён массив
                следоватекльно и вывод будет undefined*/
}
console.log('length', arr.length)
console.log(bubbleSort(arr)) // O(n*n)
console.log('count = ', count)