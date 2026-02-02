let div=document.querySelector("#myDiv");
console.log(div);

let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);



let paragraph=document.querySelector(".para");
console.log(paragraph.getAttribute("class"));

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);  //add button in last of div
// div.prepend(newBtn); //add button in first of div
// div.before(newBtn);  //add button before div
// div.after(newBtn);   //add button after div

// let p = document.querySelector(".para");
// p.after(newBtn);   //add button after p

let newHeading = document.createElement("h1");
h1.innerHTML="<i>hi, i am new</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

newHeading.remove();


