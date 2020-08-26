import { fromEvent, of } from "rxjs";
import { first, map, take, tap } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    tap<MouseEvent>(console.log),
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first( event=> event.clientY >= 150)
)
    .subscribe({
        next: val => console.log(val),
        complete: () => console.log()
    });