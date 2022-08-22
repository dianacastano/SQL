const mysql = require("mysql2")

// Crear conexión a mysql
const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Darwin_0192",
        database: "museo"
    }
)

// Conectar a la base de datos museo

connection.connect((error) => {
    if (!error) {
        console.log("Conectado a la bbdd museo")
    }else {
        console.log(error)
    }
})


// Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro de la exposición, la fecha de expiración de este, la información básica (nombre, apellidos y email) de la persona que los ha prestado.

let params = ["3"];
let sql = "SELECT pieza.nombre AS pieza, pieza.ubicacion, prestamo.fecha_entrega AS fecha_fin, propietario.nombre AS propietario_nombre, propietario.direccion AS propietario_direccion, propietario.email AS propietario_email FROM pieza JOIN prestamo ON pieza.prestamo_id = prestamo.prestamo_id JOIN propietario ON pieza.propietario_id = propietario.propietario_id WHERE prestamo.estado = ? ORDER BY fecha_entrega"

connection.query(sql, params, (error, result) => {
    if (!error) {
        console.log("Operación correcta");
        console.log(result);
    }else (
        console.log(error)
    )
})

// Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas agrupados por su situación dentro de la organización, esto es, cuántos hay expuestos, cuántos en itinerancia y cuántos almacenados.
let params1 = [];
let sql1 = "SELECT COUNT(*) AS num_piezas, coleccion.estado FROM pieza JOIN coleccion ON pieza.coleccion_id = coleccion.coleccion_id GROUP BY coleccion.estado ORDER BY num_piezas DESC"

connection.query(sql1, params1, (error, result) => {
    if (!error) {
        console.log("Ordenar de mayor a menor");
        console.log(result);
    }else (
        console.log(error)
    )
})

