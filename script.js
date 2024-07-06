

function generateNumber(){


const min = Math.ceil(document.querySelector(".input-min").value)
console.log(min)

const max = Math.floor(document.querySelector(".input-max").value)
console.log(max)

const result = Math.floor(Math.random()* (max-min + 1))+min;


alert(result)

}