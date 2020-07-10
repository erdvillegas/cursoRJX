import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<number> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('completado [obs]')

};


const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval(() => {
        subs.next(Math.random());
    }, 3000);

    return () => { 
        clearInterval(intervalID)
        console.log("Intervalo destruido");
    };
});

// const subs1 = intervalo$.subscribe(rnd => console.log("Subs[1]: ",rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log("Subs[2]: ",rnd));

/**
 * 1.- Casteo múltiple
 * 2.- Tambien es un observer
 */
const subject$ = new Subject<number>();
const subscripcion = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    subscripcion.unsubscribe();
},3500);