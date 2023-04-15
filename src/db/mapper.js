import {getConnection} from "./config.js";

/**
 *查询所有没有获取题目信息的qid
 */
export async function getQidList(){
    let flag;
    const connection = getConnection();
    let sql = "select qid from t_questions_stem where content is null or content = ''"
    await connection.query(sql,function (err,result) {
        flag =  result
    })
    connection.end()
    return flag;
}


