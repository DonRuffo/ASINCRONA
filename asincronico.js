//Creacion de una funcion para estabecer una conexion con el link

async function obtenerProductosAcer() {
    try {
        const respuesta = await fetch('https://www.acer.com/us-en');
        return respuesta.ok ? respuesta : Promise.reject('Error al obtener los productos');
    } catch (error) {
        console.error('Error:', error);
    }
}

obtenerProductosAcer();

//Verificar la conexion 
const verificar = async () => {
    try {
        const respuesta = await fetch('https://www.acer.com/us-en');
        console.log(respuesta);
    } catch (error) {
        console.error('Error en la conexión:', error);
    }
}

verificar();

//Verificación con deley de 5 segundos

const conexion = (datosConexion) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datosConexion ? resolve("OK Conexión") : reject("Conexión fallida");
        }, 3000);
    });
}

conexion(true)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));
