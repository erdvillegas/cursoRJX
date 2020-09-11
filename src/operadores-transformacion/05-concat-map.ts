import { fromEvent, interval } from "rxjs";
import { concatMap, switchMap, take } from "rxjs/operators";

const interval$ = interval(500).pipe(take(10));
const clik$ = fromEvent(document, 'click');

clik$.pipe(
  concatMap(() => interval$)
).subscribe(console.log);