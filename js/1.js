
function name() {
    console.log('Дикий')
    console.log('Флекс')
}
name();
let str = 'текст';
console.log(str);
let age = '20';
console.log(age);
let Myage = '20',
    Myname = 'Ilya'
console.log(Myname);
let MyFlex = 'AbsolutelyCRINGE',
    Mynewflex = 'AbsolutelyKEK'
MyFlex = Mynewflex;
console.log(MyFlex);
//Цикл
for (let i = 0; i < 3; i++) {
    console.log(i);
}
//Одна и таже переменная в разных циклах будет жить разной жизнью
for (let i = 10; i < 8; i--) {
    console.log(i);
}
//Объявление константы
const myage = 36;
//Можно складывать строки и числа
let lol = ']|[OPA' + '2';
console.log(lol);
//Распознавание и вывод типа данных
let chislo = "25" - 5; //Преобразование в число происходит только если отнимать, при сложени преобразования не произойдёт и выдаст 255, умножение тоже работает и преобразовывает/
console.log(chislo);
console.log(typeof chislo);
//Унарный оператор позволяет складывать строки, вот пример
let fixik = "10";
let funtik = "15";
console.log(+fixik + +funtik); //Унарный оператор надо применять перед каждой функцией, так же он позволяет преобразовать строку в число на этапе задания переменной
console.log(fixik + funtik);
console.log(Number(fixik) + Number(funtik)); //Намбер является бинарным операторм и делает тоже самое, что и унарный, но приоритет у него ниже, да и писать больше
//Присвоение по цепочке
let tri = dva = odin = 1 + 2;
console.log(tri);
console.log(dva);
console.log(odin);
// Также, поскольку равно является операндом, то можно добавлять отнимать и умножать с помощью =
let prekol = 2;
prekol += 3;
console.log(prekol);
// Инкремент записывается как ++; декремент записывается как -- их можно располагать и до переменно и после ++increment; 
//increment++ это очень важно, так как если написать let increment= increment++; то ничего не произойдёт, правильная форма: let increment= ++increment;
let increment = 228;
increment++;
console.log(increment);
let decrement = 228;
decrement--;
console.log(decrement);
// Сравнение может быть произведено и со строками, для этого джиес использует алфавитный порядок, при сравнении слова, джиес сравнивает все символы. 
// Если символов больше, то строка с большим количеством символов будет больше. Также юникод отдаёт приоритет маленьким буквам, 
//поэтому они будут всегда больше, чем слова начинающиеся с больших
console.log('Б' > 'A');
console.log('ФЛЕКС' > 'ФЛЕКР');
console.log('ФЛЕКС' > 'ФЛЕКСИШЬ');
// Для сравнения числа и строки, джиес умеет переводить вторую в число, если оно там было записано
console.log(10 > '4');
// True является 1, false 0 
// При строгом сравнении ==== преобразовываться ничего не будет
console.log(0 === false);
// || - это или 
console.log(true || true); //вернёт true 
console.log(false || false); //вернёт false
// Сокращённые вычисления с условием 
let flex = 0;
let antiflex = 5;
flex > antiflex || antiflex++; // выведет 6

function splitString(stringToSplit) {
    let arrayOfStrings = stringToSplit.split('-');
    console.log('Оригинальная строка: "' + stringToSplit);
    let res = '';
    arrayOfStrings.map(item=>{ 
        /** => - это сокращённое имя функции, полное будет выглядеть вот так(function(item) {}) 
        /map - это применение функции к каждому итерируемому объекту (здесь это слово), тоесть каждое слово, а не буква*/ 
        let word = '';
        wordArray = item.split('');
        wordArray[0] = wordArray[0].toUpperCase(); //массив букв
        res += wordArray.join(''); //+= сложить
        res += (' ');
    })
    console.log(res);
}
let tempestString = 'fisting-is-three-hundred-bucks';
let space = ' ';
let comma = ',';
splitString(tempestString, space);
splitString(tempestString);
// ФИльтрация массива foreach каждый день!!!
function FilteringMassive (arr, min, max) {
    let res = [];
    arr.forEach(element=> {
        if (element <= max && element >= min) {
            res.push(element); //push добавить элемент
        }
    });
    return res;
}
console.log(FilteringMassive([1,2,3,4,5], 1, 4))

console.log([1, 3, 76, 4, -98, -1].sort((a,b) => a-b)) // сортировка по возрастанию