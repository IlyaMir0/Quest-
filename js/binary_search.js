const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let count = 0
function binarysearch (array,item) {
    let start = 0
    let end = array.length
    let middle;
    let found = false;
    let position = -1
    while (found === false && start <= end) {
        count +=1
        middle = Math.floor( (start + end)/2) /* Math.floor округляет число до нижней границы, в данной операции мы определяем середину массива*/
        if (array [middle] === item) {
            found = true; /*флаг фаунд устанавливаем в тру, если нашли нужное значение массива*/
            position = middle 
            return position;
        }
        if (item < array [middle]) {
            end = middle - 1 /*если элемент массива меньше нужного то мы откидываем правую часть*/
        }   else {
            start  = middle + 1 /*если элемент массива больше нужного то мы откидываем левую часть*/
        }
    }
    return position; 
}
console.log (binarysearch(array, 12))
console.log ('count =', count)
/*Бинарная сортировка рекурсивной функцией*/
function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    count += 1
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1 )
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end )
    }
}

console.log(recursiveBinarySearch(array, 12, 0, array.length))
console.log(count)