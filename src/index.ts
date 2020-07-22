import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit tellus, sollicitudin non vulputate non, luctus tempus purus. Nam molestie lacus mi. Phasellus gravida justo sem, at facilisis neque blandit nec. Mauris est ex, fringilla in feugiat in, pulvinar nec tortor. Nunc id varius eros, sed aliquam nunc. Curabitur sollicitudin, odio auctor efficitur consequat, erat diam sagittis orci, sed vulputate dolor elit sed orci. Suspendisse potenti. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sed auctor eros. Ut consequat eleifend augue, et placerat magna vulputate ut. Nunc molestie purus eget erat iaculis pretium.
<br/><br/>
Donec urna lorem, hendrerit non elit id, malesuada elementum ante. Aliquam posuere eget enim et viverra. Vivamus maximus tristique arcu, eget auctor odio sagittis commodo. Aenean dictum congue arcu non mattis. Vestibulum mollis imperdiet nunc non lobortis. Ut vitae rhoncus purus, id pharetra massa. Sed gravida ante a condimentum posuere. Proin in ex lectus. Phasellus molestie magna et dolor convallis interdum. Aenean egestas ullamcorper dolor, id mollis quam fringilla quis. Quisque imperdiet posuere velit, id sagittis purus.
<br/><br/>
Nullam vestibulum risus nec turpis sodales placerat. In lacus tortor, mollis tincidunt vehicula vestibulum, dictum in dui. Fusce sem metus, ornare a ipsum vel, efficitur porttitor nibh. Sed eget quam ac ipsum dapibus aliquam sed eget neque. Ut ultricies volutpat nulla, sed eleifend sem facilisis non. Integer vulputate, neque in ultricies commodo, lectus urna dictum dui, at posuere ligula felis sed purus. Maecenas ac ex lacus. Fusce viverra elit eget dui bibendum interdum a at nibh. Suspendisse potenti. Mauris ut laoreet odio, quis bibendum quam. Maecenas dolor ante, rhoncus eu ligula non, hendrerit ornare nisi. Donec lacinia, velit vitae tempor feugiat, erat nunc imperdiet tortor, quis vestibulum libero est eu libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
<br/><br/>
Aenean lacinia diam nec augue varius, nec suscipit magna malesuada. Etiam porttitor ultricies sem, euismod ultricies nulla sagittis auctor. Ut sed lectus felis. Aliquam condimentum nisl ut leo dictum luctus. Fusce dapibus eros urna, in vestibulum erat ultrices et. Donec eget urna et massa facilisis volutpat a ac massa. Duis id rutrum enim. In luctus porttitor velit, sit amet scelerisque nibh lacinia non. Ut ut suscipit erat. Nullam auctor nulla quis molestie tempus.
<br/><br/>
Donec augue metus, vehicula id pretium varius, posuere sodales nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non aliquet purus, nec vulputate sem. In hac habitasse platea dictumst. Nullam ut mattis magna. Etiam varius vel nisl sit amet pellentesque. Praesent a orci eget justo dapibus ultrices id eu libero. Nam rutrum tortor quis magna sodales euismod. Vestibulum vel mauris dignissim, sollicitudin turpis sed, commodo arcu. Ut commodo laoreet tortor, id posuere leo congue ultricies. Ut blandit euismod venenatis. Nulla congue porttitor enim, ac venenatis ante malesuada at.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

//Funcion que hace el calculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});