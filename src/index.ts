import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]',error),
    complete: ()=> console.info('completado [obs]')

};

//const obs$ = Observable.create();

const obs$ = new Observable<String>(subs => {

    subs.next("Hola");
    subs.next("Mundo");

    subs.complete();
});

// //Se requiere minimo una subscripcion para que el Observable pueda ejecutar el valor
// obs$.subscribe(
//     valor => console.log('next:',valor),
//     error => console.warn('error:',error),
//     () => console.info('Completado :)')
// );

obs$.subscribe(observer);