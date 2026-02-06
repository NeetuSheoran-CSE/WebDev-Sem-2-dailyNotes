//q2 // method 1
// function handleClick(){
//     const button = document.getElementById("btn");
//     button.textContent = "Clicked";
//     button.style.backgroundColor = "blue";
//     h1.style.color = "red";
// }
// // method2
//  function handleClick(){
//     document.querySelector("h1").style.color = "red";
//  }

//q3
function handleClick(){
    const subHead = document.createElement("h2").textContent = "Subheading";

    const image = document.createElement("img");

    image.setAttribute("src",)
    image.setAttribute("alt","Image");

    document.getElementById("content").append(subHead);
    document.getElementById("content").append(image);
   

}
