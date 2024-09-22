document.body.querySelector("input").value = 1;

document.body.querySelector(".plus").addEventListener("click", () => {
    let count = parseInt(document.body.querySelector(".count").innerHTML);
    let increment = parseInt(document.body.querySelector("input").value);
    document.body.querySelector(".count").innerHTML = count + increment;
})

document.body.querySelector(".minus").addEventListener("click", () => {
    let count = parseInt(document.body.querySelector(".count").innerHTML);
    let decrement = parseInt(document.body.querySelector("input").value);
    document.body.querySelector(".count").innerHTML = count - decrement;
})

document.body.querySelector(".reset").addEventListener("click",()=>{
    document.body.querySelector(".count").innerHTML = 0;
    document.body.querySelector("input").value = "";
})