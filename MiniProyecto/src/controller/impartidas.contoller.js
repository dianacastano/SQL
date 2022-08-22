const connection = require ("../database")

const getImpartidas = (req, res) => {
    console.log(req.query.id)
    let sql;
    if (req.query.id != "")
        sql = "SELECT teacher_id, subject_id FROM subject_teacher WHERE teacher_id=" + req.query.id
    else 
    {
        sql =  `SELECT first_name, last_name, tittle FROM teacher JOIN
                subject_teacher ON (teacher.teacher_id = subject_teacher.teacher_id) JOIN
                subject ON (subject_teacher.subject_id = subject.subject_id)`
    }
        
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
}

module.exports = {getImpartidas}