import { from, of } from "rxjs";
import { distinct } from "rxjs/operators";


const numeros$ = of<number | string>(1, 2, 3, 3, 1, 2, 3, 1, 2, 2, 1, 3, 5, "1");

numeros$
    .pipe(
        distinct()
    )
    .subscribe(console.log);


interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    { nombre: "Megaman" },
    { nombre: "X" },
    { nombre: "Zero" },
    { nombre: "Amingo" },
    { nombre: "Marco" },
    { nombre: "Venom" },
    { nombre: "X" },
    { nombre: "Megaman" },
];

from<Personaje[]>(personajes)
    .pipe(
        distinct(p=>p.nombre)
    )
    .subscribe(console.log);