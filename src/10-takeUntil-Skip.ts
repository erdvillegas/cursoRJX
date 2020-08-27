import { fromEvent, interval } from "rxjs";
import { count, skip, takeUntil, tap } from "rxjs/operators";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent<MouseEvent>(boton, 'click').pipe(
    tap(()=>console.log('Tap antes de Skip')),
    skip(1),
    tap(()=>console.log('Tap despues de Skip'))
);


counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next :>> ', val),
    complete: () => console.log('completado')
})