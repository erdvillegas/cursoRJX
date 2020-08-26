import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalAcumulador = (acc?: number, curr?: number) => acc + curr;

// Reduce

from(numbers).pipe(
    reduce(totalAcumulador, 0)
)
    .subscribe(console.log);

// Scan

from(numbers).pipe(
    scan(totalAcumulador, 0)
).subscribe(console.log);

// Redux
interface Usuario {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number
};

const user: Usuario[] = [
    { id: 'erd', autenticado: false, token: null },
    { id: 'erd', autenticado: true, token: 'ABC' },
    { id: 'erd', autenticado: true, token: 'ABC123' }
];

const state$ = from(user).pipe(
    scan<Usuario>((acc, curr) => {
        return { ...acc, ...curr }
    }, { edad: 29 }),
);

const ids$ = state$.pipe(
    map(state => state.id)
);

ids$.subscribe(console.log);