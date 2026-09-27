const name = "satyandra kurmi";
let age = 24;
const favouriteanimal = "cat";
console.log(name);
console.log(age);
console.log(favouriteanimal);
console.log("my name is "+name);
console.log("i am " +age+ "years old");
console.log("my favourite animal is " +favouriteanimal);
console.log("my name is "+name+ ", My age is "+age+ " years, "+"my favourite animal is "+favouriteanimal);
const username = prompt("what is your name?");
console.log(username);
console.log("Hello "+username + "! Welcome to javascript");
const userage = prompt("How old are you?");
if (userage>=18)  {
    console.log("you are of an adult");
} else{
    console.log("you are under 18");
}
function greetuser(name) {
    console.log("Hello "+ name + "!");
}
greetuser("satyam");
greetuser("annu");
const button = document.getElementById("mybutton");
button.addEventListener("click", function(){alert("Hi sweetheart")
});