//task1
// let table1 = [];
// function task1(){
// for  ( let i = 0; i < 10; i++) {
//     let number = parseInt(prompt("Podaj liczbę całkowite: " + (i + 1)));
//     table1.push(number);
// }
// console.log(table1);
// }
// function task1_find(){
//     let search = prompt('Give searched number: ')
//     let find=table1.filter(elem => elem == search);
//     console.log(search)

    
// console.log(find);
// console.log(find.lenght)
// }



//task2

// let tab = [1,2,3,4,5,6];
// console.log(tab);
// let numInsert = prompt('Give number to insert: ')
// let numPlace = prompt('Give place to be inserted: ')
// tab.splice(numPlace, 0, parseFloat(numInsert));
// console.log(tab);


//task3
// function task3(str) {
//     let splitString = str.split(""); 
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join("");
//     return joinArray; 
// }

//task4
// function task4(minEl = 0, maxEl = 100) {
//     let randomTable = [];
//     tableLen = parseInt(prompt('Table lenght'));
//     for(let i = 0; i < tableLen; i++) {
//     randomTable.push(Math.floor(Math.random() *(maxEl-minEl+1)) + minEl);
// }
//     return randomTable
// }

//task5

// function task5(numerAlbumu){
//     let liczby = [0, 2, 4, 6, 8, 10];
//     let suma = liczby.reduce((acc, curr) => acc + curr, 0);
//     console.log("Suma wartości: " + suma);
//     let parzyste = liczby.filter((liczba) => liczba % 2 === 0);
//     console.log("Liczby parzyste: " + parzyste);
//     let pomnozone = liczby.map((liczba) => liczba * 3);
//     console.log("Pomnożone wartości: " + pomnozone);
//     liczby.push(numerAlbumu);
//     let indexNumeruAlbumu = liczby.indexOf(numerAlbumu);
//     console.log("Index numeru albumu (" + numerAlbumu + "): " + indexNumeruAlbumu);
//     let srednia = suma / liczby.length;
//     console.log("Średnia arytmetyczna: " + srednia);
//     let najwieksza = Math.max(...liczby);
//     console.log("Największa liczba: " + najwieksza);
//     let szukanaWartosc = 15;
//     let iloscWystapien = liczby.filter((liczba) => liczba === szukanaWartosc).length;
//     console.log("Ilość wystąpień wartości " + szukanaWartosc + ": " + iloscWystapien);
// }

//task6

// function task6(n) {
//     let fib = [0, 1];
//     for (let i = 2; i < n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//     }
//     return fib;
//   }
//   let fibonaccis = task6(10);
//   console.log(fibonaccis);

//task7

// function task7(tablica) {
//     let posortowanaTablica = tablica.sort((a, b) => b - a);
//     let najwieksza = posortowanaTablica[0];
//     let drugaNajwieksza = posortowanaTablica[1];
//     return najwieksza + drugaNajwieksza;
//   }
//   let mojaTablica = [3, 15, 8, 23, 7];
//   let wynik = task7(mojaTablica);
//   console.log("Suma dwóch największych liczb: " + wynik);

//task8

// function task8(tablica) {
//     return Array.from(new Set(tablica));
//   }
//   let tablica = [1, 2, 3, 1, 4, 2, 5, 3];
//   let wynik = task8(tablica);
//   console.log(wynik);