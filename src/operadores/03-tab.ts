import { range, Observer, from, fromEvent } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

const observer: Observer<number> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('completado [obs]')
};

const numeros$ = range(1, 5);
numeros$.pipe(
    tap(x => {
        console.log('antes', x);
        return 100;
    }),
    map( val => val * 10),
    tap( {
        next: valor=> console.log('despues :>> ', valor),
        complete: ()=> console.log('Se termino')
    })
).subscribe(val => console.log('subs :>> ', val));