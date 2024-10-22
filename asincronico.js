async function obtenerProductosAcer() {
    try {
        const respuesta = await fetch('https://www.acer.com/us-en');
        return respuesta.ok ? respuesta : Promise.reject('Error al obtener los productos');
    } catch (error) {
        console.error('Error:', error);
    }
}

obtenerProductosAcer();


const verificar = async () => {
    try {
        const respuesta = await fetch('https://www.acer.com/us-en');
        console.log(respuesta);
    } catch (error) {
        console.error('Error en la conexión:', error);
    }
}

verificar();


const conexion = (datosConexion) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datosConexion ? resolve("OK Conexión") : reject("Conexión fallida");
        }, 3000);
    });
}

conexion(true) // Reemplaza 'true' o 'false' según si hay conexión o no
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));
