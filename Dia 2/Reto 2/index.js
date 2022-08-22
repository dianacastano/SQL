const mysql = require('mysql2')

// Crear conexión a mysql
const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Darwin_0192",
        database: "bbd_escuela"
    }
)

// Conectar a la base de datos bbd_escuela

connection.connect((error) => {
    if (!error) {
        console.log("Conectado a bbd_escuela")
    }else {
        console.log(error)
    }
})

// Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota mayor de 8 y la nota tenga fecha del año pasado.

let sql = "SELECT students_id, mark FROM mark WHERE (students_id BETWEEN 1 AND 20) OR (mark > 8 AND `date` BETWEEN '2021-01-01' AND '2021-12-31');"

connection.query(sql, (error, result) => {
    if (!error) {
        console.log("Operación correcta");
        console.log(result);
    }else (
        console.log(error)
    )
})

// Obtén la media de las notas que se han dado en el último año por asignatura.

let sql1 = 'SELECT AVG(mark) FROM mark WHERE subjects_id =1 AND date BETWEEN "2021-01-01" AND "2021-12-30"';
connection.query(sql1, (error, result) =>{
    if (!error) {
        console.log("MEDIA DE NOTAS");
        console.log(result);
    }else (
        console.log(error)
    )
});

// Obtén la media aritmética de las notas que se han dado en el último año por alumno.

let sql2= `SELECT students_id, AVG (mark) FROM mark WHERE students_id 
AND date BETWEEN "2022-01-01" AND "2022-06-30" GROUP BY students_id`;
connection.query(sql2, (error, result) =>{
        if (!error) {
            console.log("MEDIA POR ALUMNO ENTRE FECHAS DADAS");
            console.log(result);
    } else {
        console.log(error)
    }
});
