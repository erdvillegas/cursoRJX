import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500));


forkJoin({
  num: numeros$,
  int: intervalo$,
  le: letras$
}).subscribe(resp => {
  // console.log('numeros',resp[0])
  // console.log('intervalos',resp[1])
  // console.log('letras',resp[2])
  console.log('resp :>> ', resp);
});