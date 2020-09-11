import { fromEvent, interval } from "rxjs";
import { concatMap, exhaustMap, switchMap, take } from "rxjs/operators";

const interval$ = interval(500).pipe(take(3));
const clik$ = fromEvent(document, 'click');

clik$.pipe(
  exhaustMap(() => interval$)
).subscribe(console.log);