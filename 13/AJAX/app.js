document.getElementById('cargar').addEventListener('click', cargarDatos);


function cargarDatos() {
    //Crear el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexión 
    xhr.open('GET', 'datos.txt', true);

    xhr.onreadystatechange = function(){

        console.log(`Estado ${this.readyState}`);
        if(this.readyState === 4 && this.status === 200){
            //console.log(this.responseText);
        }

    }

    //ready status 
    /*
    0 = No inicializado 
    1 = Conexión establecida
    2 = Recibido
    3 = Procesando
    4 = Respuesta lista 
    */



    /*una vez que carga 
    xhr.onload = function() {
        // 200 = correcto    |   403 = Prohibido   |   404 = No encontrado 
        if(this.status === 200){
            document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;

        }
    }*/


    //enviar el request
    xhr.send();
}
