import { combineLatest, fromEvent } from "rxjs";
import { pluck } from "rxjs/operators";


// const keyup$ = fromEvent(document, 'keyup');
// const clic$ = fromEvent<MouseEvent>(document, 'click');

// combineLatest(
//   keyup$.pipe(pluck('type')),
//   clic$.pipe(pluck('type'))
// ).subscribe(console.log); 

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'erdpruebas@gmail.com';
input2.placeholder = '********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

// Helper

const getImputStream = (element: HTMLElement) => fromEvent<KeyboardEvent>(element, 'keyup').pipe(pluck<KeyboardEvent, string>('target', 'value'));

combineLatest(
  getImputStream(input1),
  getImputStream(input2)
).subscribe(console.log);