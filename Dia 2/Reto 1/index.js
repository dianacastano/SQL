const mysql = require("mysql2")

// Crear conexión a mysql
let connection = mysql.createConnection(
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
        console.log("Conectado a la bbd_escuela")
    }else {
        console.log(error)
    }
})

// calcular la nota media de los alumnos de la asignatura 1

let sql = "SELECT subjects_id, AVG(mark) FROM bbd_escuela.mark WHERE subjects_id = 1;"

connection.query(sql, (error, result) => {
    if (!error) {
        console.log("Operación correcta");
        console.log(result);
    }else (
        console.log(error)
    )
})

// Calcular el número total de alumnos que hay en el bootcamp
let sql1 = "SELECT COUNT(*) AS total_alumnos FROM bbd_escuela.students;"

connection.query(sql1, (error, result) => {
    if (!error) {
        console.log("Operación correcta");
        console.log(result);
    }else (
        console.log(error)
    )
})

// Calcular el número total de alumnos que hay en el bootcamp
let sql2 = "SELECT * FROM bbd_escuela.groups;"

connection.query(sql2, (error, result) => {
    if (!error) {
        console.log("Operación correcta");
        console.log(result);
    }else (
        console.log(error)
    )
})

// Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado (no utilices BETWEEN).
let sql3 = "DELETE FROM bbd_escuela.mark WHERE mark > 5 AND (`date` >= '2021-01-01' AND `date` <= '2021-12-31');"

connection.query(sql3, (error, result) => {
    if (!error) {
        console.log("Operación correcta");
        console.log(result);
    }else (
        console.log(error)
    )
})

// Obtén los datos de todos los estudiantes que estén en el bootcamp este año. Para ello la tabla de estudiantes debe tener un campo que sea el año de ingreso.

let sql4 = "SELECT * FROM bbd_escuela.students WHERE entry_year = 2022;"

connection.query(sql4, (error, result) => {
    if (!error) {
        console.log("Operación correcta");
        console.log(result);
    }else (
        console.log(error)
    )
})

// Calcular el número de profesores que hay por cada asignatura.

let sql5 = "SELECT subjects_id, COUNT(teachers_id) AS num_teachers FROM subject_teacher GROUP BY subjects_id;"

connection.query(sql5, (error, result) => {
    if (!error) {
        console.log('Operación correcta');
        console.log(result);
    }else (
        console.log(error)
    )
})

