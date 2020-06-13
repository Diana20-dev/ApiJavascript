//función 

let aprendiendo;

aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}

aprendiendo = () => {
    console.log('Aprendiendo JavaScript');
}

//una linea no requiere llave 
aprendiendo = () => console.log('Aprendiendo JavaScript');
//retorna valor
aprendiendo = () => 'Aprendiendo JavaScript';
//retorna objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo JavaScript'});
//pasar parametros 
aprendiendo = (tecnologia) => console.log( `Aprendiendo ${tecnologia}` );
//pasando un parametro 
aprendiendo = (tecn1,tecn2 ) => console.log( `Aprendiendo ${tecn1} y ${tecn2}` );

const productos = ['Disco', 'Camisa', 'Guitarra']; 

/*const letrasProductos = productos.map(function(producto){
    return productos.length;
});


const letrasProducto = productos.map(producto =>  producto.lenght);

console.log(letrasProducto); */

productos.forEach(producto =>  console.log(producto) );