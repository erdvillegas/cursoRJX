import { interval, timer } from 'rxjs';

const observer = {
    next: valor => console.log("[next]: ",valor),
    complete: () => console.log("completed")
};

//Crea un evento cada 1000 milisegundos
const interval$ = interval(1000);

//Crea un evento despues de 2000 milisegundos
//const timer$ = timer(2000);

//Inicia una secuencida cada segundo (1000 milisegundos) despues de 2 segundos (2000 milisegundos)
//const timer$ = timer(2000,1000);

//Emite una emisión de un observable en un momento específico
const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds()+5);
const timer$ = timer(hoyEn5);

console.log("Inicio");
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("Fin");