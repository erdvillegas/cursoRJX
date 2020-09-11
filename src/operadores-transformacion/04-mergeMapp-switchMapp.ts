import { fromEvent, interval } from "rxjs";
import { mergeMap, switchMap } from "rxjs/operators";


const click$ = fromEvent(document, 'click');
const intervalo$ = interval(1000);


click$
  .pipe(
    switchMap(() => intervalo$)
  )
  .subscribe(console.log);