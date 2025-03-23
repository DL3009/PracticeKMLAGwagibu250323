let fruits = ["apple", 'orange', 'banana'];
fruits[0] = "coconut";
fruits.push("grape")
console.log(fruits[0])
console.log(fruits[3])
// fruits.pop()
// -1: not exist(index)
fruits.unshift("mango");
fruits.shift()
let numOfFruits = fruits.length;
console.log(numOfFruits)
let index = fruits.indexOf('banana')
for(let i=0;i<fruits.length; i++){
    console.log(fruits[i]);
}
// fruits.sort();