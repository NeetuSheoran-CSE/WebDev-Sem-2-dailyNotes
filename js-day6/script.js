// let arr=["name","address",3456789] //store multiple values in a single variable

// let user={
//     fullname:"neetu",
//     address:"gurugram",
//     phone:1234567890,
//     favcolors:["red","blue","green"]
// }
// console.log(user.fullname,user.phone,user.address);
// console.log(user.favcolors[1]);


// let users={
//     fullname:"neetu",
//     address:{
//         city:"gurugram",
//         state:"haryana",
//     },
//     phone:1234567890,
//     favcolors:["red","blue","green"],
//     demo:function(){
//         return " demo function";
//  }}
//       console.log(user.fullname,user.phone,user.address,
//         users.demo(),users.address.city);

const car={
    make: "mahindra",
    Model: "thar",
}
//WE can't add a new key and value pair but we can change 
//or modify the existing key value pair
Object.seal(car);

//we can't add new key value pair also can't change or update 
//exisiting values
Object.freeze(car);

car.model="xuv700";
car.color="black";
console.log(car);

