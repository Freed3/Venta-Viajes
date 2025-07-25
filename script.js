import { tokyo, newYork, sydney, rio, capeTown } from './ciudades.js';

//Obtener los elements del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');

//Agregar un evento de CLICK a cada enlace
enlaces.forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    //REMOVER  la cla se "active" de todos los enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove('active');
    });

    // agregar la clase 'active' al enlace  actual
    this.classList.add('active');

    // Obtener el contenido correspondiente segun el enlace
    let contenido = ObtenerInformacion(this.textContent);

    //MOSTRAR EL CONTENIDO EN EL DOM

    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });
});

//funcion para traer la informacion correcta desde ciudades.js
function ObtenerInformacion(enlace) {
  console.log('Enlace clickeado:', enlace); // Verifica qué se está recibiendo
  
  const contenido = {
    'Tokyo': tokyo,
    'NewYork': newYork,
    'Sydney': sydney,
    'Rio': rio,
    'CapeTown': capeTown
  };
  
  console.log('Contenido a devolver:', contenido[enlace]);
  return contenido[enlace];
}