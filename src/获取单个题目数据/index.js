import {get,post} from "../api/config/index.js";
import DOMParser from "dom-parser";


get('http://222.22.63.178/student/getQuestion?qId=3A3TMvjWvA9&isSimulate=1',{}).then(resp=>{
    const document = new DOMParser().parseFromString(resp.data, 'text/html')
    // console.log(document.rawHTML);
    let timuDoc =  document.getElementsByClassName('q-content').filter(item=>{
        return item.getAttribute('data-q-id') === '3A3TMvjWvA9'
    })[0]

    //题目主题 标题
    let title =  timuDoc.childNodes.filter(item=>{
        return  item.getAttribute('class') === 'test-title'
    })[0].innerHTML
    console.log(title)

    timuDoc.childNodes.filter(item=>{
        console.log(item)
        return  item.getAttribute('class') === 'shiti-item'
    }).forEach(item =>{
        console.log(item)
    })
    // console.log(timuDoc.innerHTML)

})
