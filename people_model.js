const {db_connection} = require("./database_connector")

exports.get = async(data)=>{
    try {
        const resposne = await db_connection.query("SELECT * FROM titanic", null)
        return resposne
      } catch (err) {
        console.log(err.stack)
        return null
      }
}



exports.get_one = async (data) =>{
    try {
        const id = data.params.id;
        const resposne = await db_connection.query('SELECT * FROM titanic WHERE id=$1', [id])
        return resposne
      } catch (err) {
        console.log(err.stack)
        return null
      }
};


// work on below

exports.save = async (data) =>{
    try {
        // data to insert
        const resposne = await db_connection.query('INSERT INTO titanic(name, job, department, salary, hire_date) VALUES($1, $2, $3, $4, $5) RETURNING *', cols)
        return resposne
      } catch (err) {
        console.log(err.stack)
        return null
      }
};

exports.update = async (data) =>{
    try {
        const id = req.params.id;
        var cols = [req.body.name, req.body.job, req.body.department, req.body.salary, req.body.hire_date, req.params.id];
        const resposne = await db_connection.query('UPDATE employee SET name=$1, job=$2, department=$3, salary=$4, hire_date=$5 WHERE id=$6', cols)
        return resposne
      } catch (err) {
        console.log(err.stack)
        return null
      }
};

exports.delete = async (data) =>{
    try {
        const id = req.params.id;
        const resposne = await db_connection.query('DELETE FROM employee WHERE id=$1', [id])
        return resposne
      } catch (err) {
        console.log(err.stack)
        return null
      }
};