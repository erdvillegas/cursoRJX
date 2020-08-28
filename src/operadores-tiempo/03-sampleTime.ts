import { asyncScheduler, fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, map, pluck, sampleTime, tap, throttleTime } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

let contador: number = 0
click$
    .pipe(
        tap(()=>contador++),
        sampleTime(2000),
        map(({ x, y }) => ({ x, y })),
        tap(()=> console.log('Total: ',contador))
    )
    .subscribe(console.log);

// Ejemplo 2

// const input = document.createElement('input');
// document.querySelector('body').append(input);

// const input$ = fromEvent(document, 'keyup');
// input$
//     .pipe(
//         throttleTime(400, asyncScheduler, {
//             leading: false,
//             trailing: true
//         }),
//         pluck('target', 'value'),
//         distinctUntilChanged()
//     )
//     .subscribe(console.log)