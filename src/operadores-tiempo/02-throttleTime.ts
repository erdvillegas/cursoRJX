import { asyncScheduler, fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck, tap, throttleTime } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click');

let contador: number = 0
click$
    .pipe(
        throttleTime(3000)
    )
    .subscribe(console.log);

// Ejemplo 2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(document, 'keyup');
input$
    .pipe(
        throttleTime(400, asyncScheduler, {
            leading: false,
            trailing: true
        }),
        pluck('target', 'value'),
        distinctUntilChanged()
    )
    .subscribe(console.log)