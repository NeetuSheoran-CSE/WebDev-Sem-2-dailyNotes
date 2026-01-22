// let array=[5,-3,16,-11,-7,8]
// let res=[]

// while(array.length>0){
//     let val=array.shift();
//     if(val>0){
//         res.push(val);
//     }
// }
// console.log(res);

//check if array is palindrome or not (ex :[1,2,3,2,1] => true , [1,2,3,4] => false)
function Palindrome(){
     let arr=[1,2,3,4,1]

     let original=[];
     let Reverse=[];

     for(let i=0;i<arr.length;i++){
        original.push(arr[i]);
    }
    while(arr.length>0){
        Reverse.push(arr.pop());
    }

    for(i=0;i<original.length;i++){
       if(original[i]!==Reverse[i]){
          return "not a palindrome";
        }
    }
return "its a palindrome";
}
console.log(Palindrome());

//return statement returns only onces
//return statement will break the interier block and comes outside the block
//while the code is executing hits the return statement it will directly eradicate
//the excution if rest of the code
///after return statement no code will be executed
 

