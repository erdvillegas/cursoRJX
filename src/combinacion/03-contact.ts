import { concat, fromEvent, interval } from "rxjs";
import { pluck, take } from "rxjs/operators";


const interval$ = interval(1000);

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  fromEvent<MouseEvent>(document, 'click')
).subscribe(console.log);
