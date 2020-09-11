
// Creacion de formulario

import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, exhaustMap, map, mergeMap, pluck, switchMap, tap } from "rxjs/operators";

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Enviar';
form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

// Helpers

const peticionHttpLogin = (userPass: any) =>
  ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
      pluck('response', 'token'),
      catchError( err => of('Token no valido'))
  );

// Streams

const submitForm$ = fromEvent<Event>(form, 'submit')
  .pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
      email: ev.target[0].value,
      password: ev.target[1].value
    })),
    exhaustMap(peticionHttpLogin)
  );

submitForm$.subscribe(token => {
  console.log(token);
});