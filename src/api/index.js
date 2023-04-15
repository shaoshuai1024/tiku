import {get, post} from "./config/index.js";
import axios from "axios";

export function getQues(qid) {
    get('/getQuestion?qId=080602072014&isSimulate=1', {
        qId: qid,
        isSimulate: 1
    }).then(response => {
        return response.data
    })
}

// get('http://222.22.63.178/student/courseSelect?studentCourseId=221302061350806').then(response => {
//     console.log(response)
// })


axios.get('http://222.22.63.178/student/courseSelect?studentCourseId=221302061350806').then(resp=>{
    console.log(resp)
})
