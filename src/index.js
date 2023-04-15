import {getQidList} from "./db/mapper.js";


import {getConnection} from "./db/config.js";

const connection = getConnection();
// let sql = "select qid from t_questions_stem where content is null or content = ''"
// await connection.query(sql,function (err,result) {
//     if (err){throw err}
//     console.log(result)
// })
// connection.end()

console.log(connection)
