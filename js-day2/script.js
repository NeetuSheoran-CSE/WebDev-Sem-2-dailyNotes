//map method
// let numbers=[1,2,3];
// let doubled=numbers.map((num)=>num*2);
// console.log(doubled);


//filter method
// let marks=[7,23,34,11,15,29,16,37,4,0];
// let result=marks.filter((mark)=>mark>16);
// console.log(result);

//Q1 take an array with 10 different marks and print the marks and
//message of pass and fail eg 30 "pass" 12 fail
// let scores=[11,23,26,15,27,30,19,9,8,22];
// console.log(scores);
// let result=scores.filter((score)=>{
//     if(score>12){
//     console.log(score,"pass")}
//     else{
//     console.log(score,"fail")}
//     });
// console.log(result);no need of this line pehle hi values print ho gayegi to 
// empty array aayega

//q2 find out the sum of all the numbers inside an array using for loop
// let arr=[1,2,3,4,5,6,7,8,9];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// console.log("sum is",sum);

//reduce method
let arr1=[1,2,3,4,5];
let res=arr1.reduce((accumulator,currentvalue)=>accumulator+currentvalue);
console.log(res);