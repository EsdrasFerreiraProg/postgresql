const sql = require('./connection');

async function runQueries(id){
    return await sql`select * from cursa where aluno_id = ${id}`;
}


module.exports = {runQueries};