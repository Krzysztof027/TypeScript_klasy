"use strict";
/*class Osoba{
    private imie: string;
    private nazwisko: string;


    constructor(imie: string, nazwisko: string){
        this.imie = imie;
        this.nazwisko = nazwisko;
    }

    getPolnaNazwa(): string{
        return `${this.imie} ${this.nazwisko}`;
    }
    powitanie(): void{
        console.log(`Witaj ${this.getPolnaNazwa()}`);//konfiguracja
    }
}
const Osoba1 = new Osoba("Adam", "Kazus");
const Osoba2 = new Osoba("Mateusz", "Kazus");

Osoba1.powitanie();
Osoba2.powitanie();//wywołujemy metody na nowych zmiennych*/
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    nauczanie(przedmiot) {
        console.log(`${this.name} uczy sie ${przedmiot}.`);
    }
}
class Wykladowca {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    wykladanie(przedmiot) {
        console.log(`${this.name} wyklada ${przedmiot}`);
    }
}
//Instancje 
//Wypisanie zmiennych -> (name, age) -> tworzenie instancji
const student1 = new Student("Marek", 400);
const wykladowca1 = new Wykladowca("Judasz", 57);
//Wykladowca1 pobiera z Wykladowca
//Student1 pobiera z Student
student1.nauczanie("Filologia angielska");
wykladowca1.wykladanie("Matematyka Dyskretna");
