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


/*class Pojazd{
    private marka: string;
    private model: string;

    constructor(marka: string, model: string){
        this.marka = marka;
        this.model = model;
    }

    getPojazdInformacje(): string{
        return `${this.marka} ${this.model}`;
    }
    startSilnik(): void{
        console.log(`Silnik wystartował: ${this.getPojazdInformacje()}`);
    }

    stopSilnik(): void{
        console.log(`Silnik zatrzymany: ${this.getPojazdInformacje()}`);
    }
}

//dziedziczanie klas
class Samochod extends Pojazd{
    private iloscDrzwi: number;

    /*Przy tworzeniu konstruktora wpiew musimy wpisać 2
     zmienne z klasy dziedziczącej i dodać je po super*/
    /*constructor(marka: string, model: string, iloscDrzwi: number){
        super(marka, model);//Tutaj dodajemy zmienne z klasy dziedziczącej
        this.iloscDrzwi = iloscDrzwi;
    }
    
    getSamochodInformacje(): string {
        return `${this.getPojazdInformacje()}, ${this.iloscDrzwi} drzwi`;
    }

    oglos(): void{
        console.log(`Wrrr ${this.getSamochodInformacje()}`);
    }
}


//Wywołąne instancji klasy
const Pojazd1 = new Samochod("Volvo", "XC60", 5);
const Pojazd2 = new Samochod("Volkswagen", "Golf", 5);
const Pojazd3 = new Samochod("Volvo", "XC90", 7);

Pojazd2.oglos();
Pojazd2.startSilnik();
Pojazd2.stopSilnik();*/


/*
interface Shape{
    calculateArea() : number;
    describe() : string;
}

class Circle implements Shape{
    private radius:  number;

    constructor(radius: number){
        this.radius = radius;
    }
    //implementacja funkcji
    calculateArea(): number {
        return Math.PI *  this.radius ** 2;

    }
    describe(): string {
        return `This is a circle with radius ${this.radius} units.`;
    }
}

class Rectangle implements Shape{
    private width: number;
    private height: number;


    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.height = this.width;
    }
    describe(): string {
        return `This is a rectangle width ${this.width} units and height ${this.height} units.`
    }
}

//Instacja ei wypisanie metod


const circle = new Circle(10);
const rectangle = new Rectangle(5,10);

console.log(circle.describe());
console.log(`Circle area: ${circle.calculateArea()} square units`);

console.log(rectangle.describe());
console.log(`Rectangle area: ${rectangle.calculateArea()} square units`);

*/

interface Czlowiek{
    name: String;
    age: number;
}

class Student implements Czlowiek{
    constructor(public name: string, public age: number){}

        nauczanie(przedmiot: string) :void{
            console.log(`${this.name} uczy sie ${przedmiot}.`);
        }
}

class Wykladowca implements Czlowiek{
    constructor(public name: string, public age: number){}
    

    wykladanie(przedmiot: string){
        console.log(`${this.name} wyklada ${przedmiot}`);
    }
}


//Instancje 
//Wypisanie zmiennych -> (name, age) -> tworzenie instancji
const student1: Czlowiek = new Student("Marek", 400);
const wykladowca1: Czlowiek = new Wykladowca("Judasz", 57);


//Wykladowca1 pobiera z Wykladowca
//Student1 pobiera z Student
(student1 as Student).nauczanie("Filologia angielska");
(wykladowca1 as Wykladowca).wykladanie("Matematyka Dyskretna");



