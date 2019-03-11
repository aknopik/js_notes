var firstName = "Arek ";
var lastName = 'Knopik'; //nie ma różnicy (apostrof czy cudzysłów)

//w js tekst może być zapisany tylko w jednej linijce

var multiline = "Linijka pierwsza\nlinijka druga\n\tlinijka trzecia";   //n - nowa linijka, t -tabulacja

var price = 20.5;

var number1 = 2;
var number2 = 3;

var result = number1 + number2;

var concat = firstName + lastName;

var a = 5;
var b = 3;

var res = a%b;

//kolejność wykonywania działań, można zmienić przy użyciu nawiasów

var num_1 = 0;

console.log(num_1++);

//OBJEKTY

var person = {
    firstName: "Arek",
    lastName: "Knopik",
    age: 27,
    sayHello: function(){
        console.log("Cześć, mam na imię" + " " + this.firstName + " " + this.lastName);
    }
};

person.job="coder"; //dopisywanie właściwości do obiektu
delete person.age; // usuwanie właściwości z obiektu

//porównywanie obiektów

var person_1 = {
    firstName: "Maciej",
    lastName: "Lubicz",
}

var person_2={
    firstName:"Maciej",
    lastName:"Lubicz",
}

var person_2 = person_1;
console.log(person_1 === person_2);

//TABLICE

var arr = [];

arr[0] = "asia";
arr[1] = "Arek";

arr[arr.length] = "Julia";

//dodawanie elementu na koniec tablicy

arr.push("Monika");

//dodwanie elemntu na począku tablicy 

arr.unshift("Natalia");

delete arr[2];

//zwracanie ostatniego elementu

var last = arr.pop();

//pierwszy element

var first = arr.shift();

//"usuwanie elementów"

var splice = arr.splice(1, 2);

//sortowanie tablicy

var arr_sort = [2,1,17,4,2,11,9,3];

arr_sort.sort(function(a,b){
    if(a<b){
        return -1;
}else if (a>b){
    return 1;
} else {return 0;
}});

//funkcje

//zmienna arguments

//funkcje wbudowane 

//isFinite - sprawdza czy liczba jest skończona
//isNaN - sprawdza czy jest liczba
//parseFloat - ze stringu robi liczbę
//alert - wyświetla komunikat  w przeglądarce


//Obiekty

//String
//NUMBER
//BOOLEAN
//ARRAY

//MATH
//Math.round
//Math.ceil
//Math.floor
//Math.min lub Math.max
//Math.abs  - wartość absolutna
//Math.random - liczba losowa od 0 do 1

//DATE
var d = new Date(); // jeżeli wpiszemy bez "new" to parametry podane w nawiasie  zostaną zignorowane
var d2 = new Date(4354345) //liczba milisekdun od 1970 r

//w przypadku daty miesiące są indeksowane od 0

var d3 = new Date(2015, 2);

console.log(d.getTime());

//RegEx  - zamiana wybranych fragmentów
var regex = /a+/gi;

var n = "Analiza";

console.log(n.replace(regex, "w"));

console.log(regex.test("żółw")); //sprawdza czy występuje element podany w regex

//TRY AND CATCH  - 

function searchDb(){
    console.log("Otwieram połączenia");

    db.search();

    console.log("Zamykam połączenie");
}

try{
    searchDb();
} catch(e){
    console.log("Wystąpił błąd:" + e.message);
} finally{
    console.log("Zamykam połączenie");
}

//throw new Error("jakiś tekst") - zwraca komunikat o błędzie