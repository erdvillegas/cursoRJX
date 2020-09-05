import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";


const url = 'https://htpbin.org/delay/1';

const manejaError = (resp: AjaxError) => {
    console.warn('error:', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejaError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// );

//obs$.subscribe(data => console.log('getJson:', data));
//obs2$.subscribe(data => console.log('ajax:', data));

const subs = {
    next: val => console.log('next:', val),
    error: (err: Error) => console.warn('error en subs: ', err),

    //Se completa dado que el error esta manejado en el manejaError
    complete: () => console.log('Completed')
};

obs$
    .pipe(
        catchError(manejaError)
    )
    .subscribe(subs);