import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalReduccer = (accumulador: number, valorActual: number) => {
    return accumulador + valorActual;
};

const total = numbers.reduce(totalReduccer, 0);

console.log('total :>> ', total);


interval(500).pipe(
    take(4),
    tap(console.log),
    reduce(totalReduccer)
)
    .subscribe({
        next: (val: number) => console.log('next: ', val),
        complete: () => { console.log('Completed') }

    });