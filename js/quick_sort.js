const arr = [0,3,2,4,56,6,8,9,10,1,10,12,16,-1,-2,23,67,65,2,32,35,39]
let count = 0
function quickSort (array) {
    if (array.length <= 1) {
        return array 
    }
    let pivotIndex = Math.floor(array.length/2)
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count+=1
        if(i === pivotIndex)
            continue /*Прерывает выполнение текущей функции
                    поскольку пивот мы сравнивать не будем */
        if (array[i] < pivot) {
            less.push(array[i]) /*Добавление элемента, если он меньше */
        }   else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}
console.log(quickSort(arr))
console.log('count =', count)