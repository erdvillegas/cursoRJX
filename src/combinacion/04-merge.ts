import { fromEvent, merge } from "rxjs";
import { pluck } from "rxjs/operators";


const keyup$ = fromEvent(document, 'keyup');
const clic$ = fromEvent<MouseEvent>(document, 'click');

merge(
  keyup$.pipe(
    pluck('type')
  ),
  clic$.pipe(
    pluck('type')
  )
).subscribe(console.log); 