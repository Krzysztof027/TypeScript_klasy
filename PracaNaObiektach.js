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
class Pojazd {
    constructor(marka, model) {
        this.marka = marka;
        this.model = model;
    }
    getPojazdInformacje() {
        return `${this.marka} ${this.model}`;
    }
    startSilnik() {
        console.log(`Silnik wystartował: ${this.getPojazdInformacje()}`);
    }
    stopSilnik() {
        console.log(`Silnik zatrzymany: ${this.getPojazdInformacje()}`);
    }
}
//dziedziczanie klas
class Samochod extends Pojazd {
    /*Przy tworzeniu konstruktora wpiew musimy wpisać 2
     zmienne z klasy dziedziczącej i dodać je po super*/
    constructor(marka, model, iloscDrzwi) {
        super(marka, model); //Tutaj dodajemy zmienne z klasy dziedziczącej
        this.iloscDrzwi = iloscDrzwi;
    }
    getSamochodInformacje() {
        return `${this.getPojazdInformacje()}, ${this.iloscDrzwi} drzwi`;
    }
    oglos() {
        console.log(`Wrrr ${this.getSamochodInformacje()}`);
    }
}
//Wywołąne instancji klasy
const Pojazd1 = new Samochod("Volvo", "XC60", 5);
const Pojazd2 = new Samochod("Volkswagen", "Golf", 5);
const Pojazd3 = new Samochod("Volvo", "XC90", 7);
Pojazd2.oglos();
Pojazd2.startSilnik();
Pojazd2.stopSilnik();
