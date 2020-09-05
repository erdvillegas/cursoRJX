import { ajax } from "rxjs/ajax";

const URL = 'https://httpbin.org/delay/1';

// ajax.post(URL, {
//     id: 1,
//     nombre: 'Erik'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

ajax({
    url: URL,
    method: 'POST',
    headers: {
        'mi-token': 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'Erik'
    }
}).subscribe(console.log);