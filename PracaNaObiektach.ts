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


class Pojazd{
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
    constructor(marka: string, model: string, iloscDrzwi: number){
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
Pojazd2.stopSilnik();
