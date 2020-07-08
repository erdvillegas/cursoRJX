import { asyncScheduler } from 'rxjs';

const observer = {
    next: valor => console.log("[next]: ", valor),
    error: valor => console.error("[error]: ", valor),
    complete: () => console.log("completed")
};

const saludar = () => console.log("Hola Mundo");

//Si se necesita enviar un parametro, este debe ser un objeto
const saludar2 = nombre => console.log(`Hola ${nombre.nombre}, Edad ${nombre.edad}`);

//asyncScheduler.schedule(saludar, 2000);

//El tercer parametro que se manda, es el objeto
//asyncScheduler.schedule(saludar2,2000,{nombre:"Daniel", edad:28});

//Un AsynSchedule no puede recibir una funcion de flecha, debe ser el nombre
const subs = asyncScheduler.schedule(function (state) {
    //El estado debe ser un valor, no un objeto
    console.log('[state]: ', state)
    this.schedule(state + 1, 1000)

}, 3000, 0);

//De esta manera se cancela la subscripcion despues de 6 segundos
// setTimeout(() => {
//     subs.unsubscribe()
// }, 6000);

asyncScheduler.schedule(()=>subs.unsubscribe(),6000)