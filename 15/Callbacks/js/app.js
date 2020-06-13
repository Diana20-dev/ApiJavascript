/*
//Callback en Foreach 

const ciudades =['Londres', 'New York', 'Madrid', 'Paris','Viena'];

//Inline Callback
ciudades.forEach(function(ciudad) {
    console.log(ciudad);
})*/

const paises = ['Francia', 'España', 'Protugal', 'Autralia', 'Inglaterra', 'Irlanda'];

//se agrega un nuevo pais despues de dos segundos 
function nuevoPais(pais, callback){
    setTimeout(function(){
        paises.push(pais);
        callback();
    }, 2000);
}


//Los paises se muestran deapues de un segundo 
function mostrarPaises() {
    setTimeout(function() {
        let html = '';
        paises.forEach(function(pais) {
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000);
}

//agregar nuevo pais 
nuevoPais('Alemania', mostrarPaises);

//mostrar los paises 
mostrarPaises();