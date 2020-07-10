import { range, Observer, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observer: Observer<number> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('completado [obs]')
};


// range(20,50).pipe(
//     filter( (val,i) => {
//         console.log('index',i);
//         return val % 2 == 1;
//     } )
// ).subscribe(console.log)

interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Jocker'
    },
];

from<Personaje[]>(personajes).pipe(
    filter(personaje => personaje.tipo !== 'heroe')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
    map( event => event.code),
    filter( key=> key === 'Enter')
);

keyup$.subscribe(console.log);