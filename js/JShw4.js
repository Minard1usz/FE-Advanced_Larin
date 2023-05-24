// 1) Знайти суму та кількість позитивних елементів.
// сума всіх елементів
// let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// let res = arr.reduce(function(sum, elem) {
// 	return sum + elem;
// }, 0);
// console.log(res);

// сума позитивних елементів
let arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let res = arr.reduce(function(sum, elem) {
    if (elem >= 0) {
        return sum + elem;
    } else {
        return sum;
    }
});
console.log(res);

//кількість позитивних елементів
let arr2 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let positive = arr2.filter(elem => (elem>0));
console.log(positive.length);


// 2) Знайти мінімальний елемент масиву та його порядковий номер, спосіб "spread" (...arr)
let arr3 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let min = Math.min(...arr3);
console.log(min);
console.log(arr3.indexOf(-63));

// 3) Знайти максимальний елемент масиву та його порядковий номер.
let arr4 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let max = Math.max(...arr4);
console.log(max);
console.log(arr4.indexOf(76));

// 4) Визначити кількість негативних елементів
let arr5 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let negative = arr5.filter(elem =>(elem<0));
console.log(negative.length);

// 5) Знайти кількість непарних позитивних елементів
// вивоидмо всі позитивні елементи
let arr6 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let result = arr6.filter(item => item > 0) .sort((a, b) => a - b);
console.log(result);

// виводимо всі непарні позитивні елементи
let arr6 = [4,  4,  4,  4, 12, 16, 25, 27, 46, 47, 47, 54, 72, 76];
for (let i = 0; i < arr6.length; i++)
if ((arr6[i] % 2) !== 0)
console.log(arr6[i]);

// оголошуємо кількість непарних позитивних елементів
let arr6 = [4,  4,  4,  4, 12, 16, 25, 27, 46, 47, 47, 54, 72, 76];
function countOfOdd(arr6) {
    return arr6.filter(item => item % 2).length;
  }
  console.log(countOfOdd(arr6));

// 6) Знайти кількість парних позитивних елементів
// виводимо всі позитивні елементи
let arr7 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let result = arr7.filter(item => item > 0) .sort((a, b) => a - b);
console.log(result);

// виводимо всі парні позитивні елементи
let arr8 = [ 4,  4,  4,  4, 12, 16, 25, 27, 46, 47, 47, 54, 72, 76];
for (let i = 0; i < arr8.length; i++)
 if ((arr8[i] % 2) === 0)
 console.log(arr8[i]); 

// оголошуємо кількість парних поизтивних елементів
 let arr8 = [ 4,  4,  4,  4, 12, 16, 25, 27, 46, 47, 47, 54, 72, 76];
 console.log(arr8.reduce((sum, el) => el & 1 ? sum : ++sum, 0));

// 7) Знайти суму парних позитивних елементів.
let arr9 = [4, 4, 4, 4, 12, 16, 46, 54, 72, 76];
arraySum(arr9);
function arraySum(array) {
    let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array [i];
}
console.log(sum);
}

 // 8) Знайти суму непарних позитивних елементів.
 let arr10 = [25, 27, 47, 47];
 arraySum(arr10);
function arraySum(array) {
    let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array [i];
}
console.log(sum);
}

// 9) Знайти добуток позитивних елементів.
let arr11 = [ 4,  4,  4,  4, 12, 16, 25, 27, 46, 47, 47, 54, 72, 76];
let result = 1;
for (let i = 0; i < arr11.length; i++) {
    result = result * arr11[i];
}
console.log(result);

// 10) Знайти найбільший серед елементів масиву, решту обнулити.
let arr4 = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let max = Math.max(...arr4);
console.log(max);

if (arr4 != Math.max(...arr4)) {
    arr4 = 0;
}
console.log(arr4);
