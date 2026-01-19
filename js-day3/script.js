//push(element) : adds an element to the end of the array and returns
//  the new length of the array
// let fruits=["apple","banana"]
// let newlength=fruits.push("cherry")
// console.log(newlength)

//Pop(): removes the last element from the array and returns that element 
// let fruit=["apple","banana","cherry"];
// let removed=fruits.pop();
// console.log(removed);
// conaole.log(fruit);

//shift() removes the first element from the array and returns that element
// let fru=["banana","cherry"]
// let remove=fruits.shift();
//console.log(remove)

//unshift(element) adds one or more elements to the beginning of the array and
//  returns the new length
// let fruitss=["cherry","banana"]
// let newLength=fruits.unshift("apple")
// console.log(newLength)

//Q1 reverse the array using push and pop method 
let arr=[1,2,3,4,5]
let reverse=[]
while(arr.length>0){
   reverse.push(arr.pop())
}
console.log(reverse);

//Q2 remove all negative numbers from an array
//let array=[5,-3,16,-11,-7,8]

//Q3 check if array is palindrome or not (by using pop push shift unshift)

