import "./style.css";


window.onload = function() {
 let when = ['ayer', 'hoy por la mañana', 'anoche', 'ayer por la tarde'];
 let who = ['mi perro', 'el gato de mi vecino', 'mi sobrina', 'mi pareja', 'un alien'];
 let action = ['se comió', 'defecó sobre', 'olvidó', 'no ha impreso', 'se llevó'];
 let what = ['mi tarea', 'mis documentos', 'la tarjeta de embarque', 'los apuntes para estudiar'];


 function generarExcusa () {
   let randomWhen = when[Math.floor(Math.random() * when.length)];
   let randomWho = who[Math.floor(Math.random() * who.length)];
   let randomAction = action[Math.floor(Math.random() * action.length)];
   let randomWhat = what[Math.floor(Math.random() * what.length)];
    return `${randomWhen} ${randomWho} ${randomAction} ${randomWhat}.`;
 }


 let excusa = document.getElementById("genExcuse");
 excusa.innerText = generarExcusa();


 let boton = document.getElementById("generate");
 boton.addEventListener("click", function () {
   excusa.innerText = generarExcusa();
 });


};
