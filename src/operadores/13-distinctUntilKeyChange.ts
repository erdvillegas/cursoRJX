import { from} from "rxjs";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

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
        distinctUntilKeyChanged('nombre')
    )
    .subscribe(console.log);