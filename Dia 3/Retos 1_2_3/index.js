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
        console.log("Conectado a la bbd_escuela")
    }else {
        console.log(error)
    }
})

// Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados.

let params = [];
let sql = "SELECT CONCAT(students.first_name, ' ', students.last_name) AS estudiante, subject.tittle AS asignatura FROM mark JOIN students ON mark.students_id = students.students_id JOIN subject ON mark.subjects_id = subject.subjects_id ORDER BY estudiante"

connection.query(sql, params, (error, result) => {
    if (!error) {
        console.log("Nombres y Apellidos + Asignaturas");
        console.log(result);
    }else (
        console.log(error)
    )
})

// Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.

let params1 = [];
let sql1 = "SELECT CONCAT(teachers.first_name, ' ', teachers.last_name) as profesor, subject.tittle AS asignatura FROM teachers JOIN subject_teacher ON teachers.teachers_id = subject_teacher.teachers_id JOIN subject ON subject_teacher.subjects_id = subject.subjects_id ORDER BY profesor"

connection.query(sql1, params1, (error, result) => {
    if (!error) {
        console.log("Nombre y Apellidos de los Profesores");
        console.log(result);
    }else (
        console.log(error)
    )
})

// Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.

let params2 = [];
let sql2 = "SELECT subject.tittle AS asignatura, COUNT(students_id) AS num_alumnos, CONCAT(teachers.first_name, ' ', teachers.last_name) AS profesor FROM mark JOIN subject ON mark.subjects_id = subject.subjects_id JOIN subject_teacher ON subject.subjects_id = subject_teacher.subjects_id JOIN teachers ON subject_teacher.teachers_id = teachers.teachers_id GROUP BY asignatura ORDER BY asignatura"

connection.query(sql2, params2, (error, result) => {
    if (!error) {
        console.log("Numero total de Alumnos y asignaturas");
        console.log(result);
    }else (
        console.log(error)
    )
})