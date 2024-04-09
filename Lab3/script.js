//task 2

function task2() {
    alert("Hello World!");
}

//task 3
function task3{
let a =10
let b =20
let c =23.2

alert(a+b+c)

document.getElementById("wynikD").innerHTML = a+b+c + "=" + a + "+" + b + "+" + c;
document.getElementById("wynikO").innerHTML = a-b-c + "=" + a + "-" + b + "-" + c;
document.getElementById("wynikM").innerHTML = a*b*c + "=" + a + "*" + b + "*" + c;
document.getElementById("wynikDz").innerHTML = a/b/c + "=" + a + "/" + b + "/" + c;
}

//task 4
function task4{
for (i=0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}
}

//task 5
function task5{
let a = 7
let b = 10
let c = 5
let triangle_check = (a+b)>c&&(a+c)>b&&(b+c)>a
let p = (a+b+c)/2
let area = Math.sqrt(p*(p-a)*(p-b)*(p-c))
if(triangle_check){
    document.getElementById('t1').innerHTML = "True triangle";
    console.log("True")
}
    else{
        document.getElementById('t1').innerHTML = "False triangle";
        console.log("False")
    }
    document.getElementById('t2').innerHTML = area;

console.log(typeof a)
}

//task 6
function task6{
let imie = prompt("Jak się nazywasz");
alert("Witaj " + imie);
}

//task 7
function task7{
    let x = parseFloat(prompt("Give firts number"))
    let z = parseFloat(prompt("Give second number"))
    alert("Answer: " + (x+z))
    document.getElementById('l3').innerHTML = "Answer: " + (x+z);
}

//task 8
function task8{
let liczba1 = parseFloat(prompt("Podaj pierwszą liczbę:"));
let liczba2 = parseFloat(prompt("Podaj drugą liczbę:"));
let liczba3 = parseFloat(prompt("Podaj trzecią liczbę:"));

let najwieksza = liczba1;

if (liczba2 > najwieksza) {
    najwieksza = liczba2;
}

if (liczba3 > najwieksza) {
    najwieksza = liczba3;
}

console.log("Największa liczba to: " + najwieksza);

document.getElementById('l4').innerHTML = "Największa liczba to: " + najwieksza;

function NWD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
}

//task 9
function task9{
let n1 = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
let n2 = parseInt(prompt("Podaj drugą liczbę całkowitą:"));
let nwd = NWD(n1, n2);
console.log("Największy wspólny dzielnik liczb " + n1 + " i " + n2 + " to: " + nwd);

document.getElementById('l5').innerHTML = "Największy wspólny dzielnik liczb " + n1 + " i " + n2 + " to: " + nwd;
}