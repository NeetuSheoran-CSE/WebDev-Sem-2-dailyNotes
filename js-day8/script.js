const profile=document.getElementById("profile")

profile.style.color="white"
profile.style.backgroundColor="black"
profile.style.padding="15px"
profile.style.textAlign="center"

const highlight=document.getElementsByClassName("important")
console.log(highlight.length);
for(i=0;i<highlight.length;i++){
    highlight[i].style.color="red"
    highlight[i].style.fontSize="20px"
}