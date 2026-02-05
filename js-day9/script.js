 //const para=document.getElementsByTagName("p");

// for (let i=0; i<para.length; i++){
//     para[i].style.color="blue";

//    if (i%2==0){
//     para[i].style.color="red";
// }

//     else{
//     para[i].style.color="green";
//     }
//     para[para.length-1].style.fontWeight="bold";}

 const para=document.querySelectorAll("p");
    para.forEach((para, index) => {
        if (index % 2 == 0) {
            para.style.color = "red";
        } else {
            para.style.color = "green";
        }
    });

    const demo=document.getElementById("demo");
    //console.log(demo.textContent);
    demo.textContent="This is demo paragraph";

    //create n new element and append
    const newpara=document.createElement("p");
    newpara.textContent="This is new paragraph";
    console.log(newpara);

    document.getElementById("content").append(newpara);    

    const image=document.createElement("img");
    