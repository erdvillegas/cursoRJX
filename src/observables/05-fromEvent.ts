import { fromEvent, Observable } from 'rxjs';

/**
 * Eventos del DM
 */

 const src1$ = fromEvent<MouseEvent>(document,'click');
 const src2$ = fromEvent<KeyboardEvent>(document,'keyup');

 const observer = {
     next: (val: any) => console.log('[next] ',val)
 };

 src1$.subscribe(({x,y})=>{console.log(x,y)});
 src2$.subscribe(evento=>{console.log("[evento]: ",evento.key)});