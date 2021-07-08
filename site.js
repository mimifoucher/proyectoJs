//Voy a crear un carrito de compras para comprar y reservar entradas de mi proyecto creado en el Curso de Desarrollo Web


//Aquí cree una clase para los tickets
class Tickets {
    constructor(nombre,precio,horario){
        this.nombre = nombre;
        this.precio = precio;
        this.horario = horario;
    }
    
}

//Aquí cree una función para crear los tickets
function crearTicket(){
    const nombreTicket = prompt('Que obra deseas ver?');
    const precioTicket = prompt('Que precio tiene la función?');
    const horarioTicket = prompt('En que horario deseas ver la función?');
    return new Tickets(nombreTicket,precioTicket,horarioTicket);
}
// Esta función se ocupa de agregar nuevos tickets al carrito
function nuevoTicket(ticket){
    carritoCompras.push(ticket);
    
}


let carritoCompras = [];

const entrada1 = crearTicket();
const entrada2 = crearTicket();
const entrada3 = crearTicket();
nuevoTicket(entrada1);
nuevoTicket(entrada2);
nuevoTicket(entrada3);

console.log(carritoCompras);