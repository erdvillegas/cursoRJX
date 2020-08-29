import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, pluck } from "rxjs/operators";


const url = 'https://api.github.com/users?per_page=5';

// /**
//  * Lanza un error si no se encuentra
//  * @param response 
//  */
// const manejaErrores = (response: Response) => {
//     if (!response.ok) {
//         throw new Error(response.statusText)
//     }

//     return response;
// };

// const fetchPromesa = fetch(url);

// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(data=> console.log('data: ',data))
//     .catch(err => console.warn('error en usuarios: ',err))

const atrapaErr = (err: AjaxError) => {
    console.warn('error en: ', err);
    return of([]);
};

ajax(url)
    .pipe(
        pluck('response'),
        catchError(atrapaErr)
    )
    .subscribe(users=>console.log('Usuarios: ',users));