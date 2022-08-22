const connection = require ("../database")

// GET //
const getMedia = (req, res) => {
    console.log(req.query.id)
    let sql;
    if (req.query.id != "")
    sql = "SELECT student_id, AVG (mark) FROM mark WHERE student_id=" + req.query.id
    
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    })
}


module.exports = {getMedia};