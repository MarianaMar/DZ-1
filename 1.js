//Створити n змінних, використовуючи const та let, для опису себе (ім’я, хобі, улюблений фільм,  зріст, улюблений колір тощо);

const name = "Mariana";
let age = 32;
let work = "Leo Ceramika";
const from = "Ivano-Frankivsk";
let liveIn = "Lviv";
let term = 17;
const favouriteColor = "yellow";
console.log(name, age, work, from, liveIn, term, favouriteColor);
console.log("Привіт, мене звати ", name, ". Мені ", age, ". Працюю в ", work, ". Родом з м.", from, ", але проживаю в м.", liveIn, "вже на протязі ", term, " років. Обожнюю",favouriteColor, "колір, все яксраве та сонячне!");

function f1() {
    let a;
    a = document.getElementById('inpa').value;
    a = parseInt(a);
    let h;
    h = document.getElementById('inph').value;
    h = parseInt(h);
    s = a * h / 2;
    document.getElementById('ss').innerHTML = s;
    console.log('Площа трикутника =', s);
}
