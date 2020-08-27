import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";


const numeros$ = of<number | string>(1, 2, 3, 3, 1, 2, 3, 1, 2, 2, 1, 3, 5, "1");

numeros$
    .pipe(
        distinctUntilChanged()
    )
    .subscribe(console.log);


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: "Megaman" },
    { nombre: "Megaman" },
    { nombre: "X" },
    { nombre: "Zero" },
    { nombre: "Amingo" },
    { nombre: "Marco" },
    { nombre: "Venom" },
    { nombre: "X" }
];

from<Personaje[]>(personajes)
    .pipe(
        distinctUntilChanged((anterior,actual) => anterior.nombre === actual.nombre)
    )
    .subscribe(console.log);