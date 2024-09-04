console.log("Array Rewrite");

console.log("\nExample map function:");
const arr1 = [1, 4, 9, 16, 25];
const mapArr = arr1.map(myMap);
function myMap(value){
    return value * 2;
}
console.log("Array map: " + mapArr);


console.log("\nExample flatMap function:")
const flatMapArr = arr1.flatMap((x) => x * 2);
console.log("Array flatMap: " + flatMapArr);


console.log("\nExample Filer function");
const filterArr = arr1.filter(myFilter);
function myFilter(value){
    return value > 20
}
console.log("Array filter: " + filterArr);


console.log("\nExample reduce function");
const reduceArr = arr1.reduce(myReduce,50);
function myReduce(total, value){
    return total + value;
}
console.log("Array reduce: " + reduceArr);

console.log("\nExample reduceRight function");
const reduceRightArr = arr1.reduceRight(myReduceRight);
function myReduceRight(total,value){
    return total += value;
}
console.log("Total after reduceRight function = " + reduceRightArr);


console.log("\nExample every function");
const everyArr = arr1.every(myEvery);
// Trả về tất cả giá trị có lớn hơn 10 hay không
function myEvery(value){
    return value > 10; // => Return boolean true:false?
}
console.log("Array every over 10 is: " + everyArr);


console.log("\nExample some function");
const someArr = arr1.some(mySome);
//Trả về có giá trị nào trong mảng lớn hơn 10 hay không
function mySome(value){
    return value > 10 // => Return boolean true:false?
}
console.log("Array some over 10 is: " + someArr);

console.log("\nExample forEach function");
let sum = 0;
const sumArr = arr1.forEach(myForEach)
function myForEach(value){
    return sum+=value;
}
console.log("My sum after forEach loop array: " + sum);

console.log("\nExample key function");
const keyArr = arr1.keys();
let i = 0;
for(let x of keyArr){
    console.log("Key " + x + " = " + arr1[i++]);   
}

console.log("\nExample find function");
const withArr = arr1.find(myFind);
function myFind(value){
    return value > 10
}
console.log(withArr);
console.log("Index of value: " + arr1.findIndex(myFind));

