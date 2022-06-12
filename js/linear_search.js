const array = [1,4,5,7,9,10,8,5,6]
let count = 0
function linearsearch(array,item) {
    for (let i=0; i < array.length; i++) {
        count +=1
        if (array [i] === item) {
            return i;
        }
    }
    return null; 
}
console.log(linearsearch(array, 1))
console.log('count = ',count)