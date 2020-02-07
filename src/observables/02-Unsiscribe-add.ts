import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.info('completado [obs]')

};

const intervalo$ = new Observable<number>(subs => {
    let i = 0;
    const interval = setInterval(() => {
        subs.next(i + 1);
        i++;
        console.log("Log: ", i + 1);
    }, 1000);

    setTimeout(()=>{
        subs.complete();
    },2500);

    return () => {
        clearInterval(interval);
        console.log("Intervalo destruido");
    };
});

//intervalo$.subscribe(num => console.log('Num',num));
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1
.add(subs2)
.add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
    console.log("Completado timeout");
}, 6000);