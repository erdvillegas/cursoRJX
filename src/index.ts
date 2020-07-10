import { range, Observer, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observer: Observer<number> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('completado [obs]')
};

const numeros$ = range(1,5);
numeros$.subscribe( val => );