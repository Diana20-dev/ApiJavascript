
document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
     e.preventDefault();

     // Leer las variables
     const apiKey = '53ae89eb5f3cd54814a53cc2d9085fc4';

     const origen = document.getElementById('origen');
     const origenSeleccionado = origen.options[origen.selectedIndex].value;

     let url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${ origenSeleccionado }&api_key=${ apiKey }&format=json`;
       
     //crear fetch
     fetch(url)
          .then(function(res) {
               return res.json();
          })
          .then(function (data) {
               let html = `<h2>Top de Artistas</h2>`;
               html += `<ul class="lista">`;
               data.forEach(function (artista) {
                    html += `
                         <li><a href='${ artista.url }' target="_blank>${artista.name}</a></li>
                    `;
               })
               html += `</ul>`;
               document.querySelector('#resultado').innerHTML = html;
          })
          .catch(function (error) {
               console.log(error);
          })

}

     /*// Conectar con ajax
     // Iniciar XMLHTTPRequest
     const xhr = new XMLHttpRequest();
     // Abrimos la conexion
     xhr.open('GET', url, true);
     // Datos e impresion del template
     xhr.onload = function() {
          if(this.status === 200) {
               const respuesta = JSON.parse( this.responseText ) ;
               const artistas = respuesta.topartists.artist;
               console.log(artistas);
               // Generar el HTML
               let htmlNombres = '<h2>Top de Artistas </h2>';
               
               htmlNombres += '<ul class="lista">';

               // Imprimir cada nombre
               artistas.forEach(function(artista) {
                    htmlNombres += `
                              <li><a href='${ artista.url }' target="_blank>${artista.name}</a></li>
                    `;
               })

               htmlNombres += '</ul>';

               document.getElementById('resultado').innerHTML = htmlNombres;
          }
     }
     // Enviar el Request
     xhr.send();*/

