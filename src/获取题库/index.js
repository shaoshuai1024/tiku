import axios from "axios";
import DOMParser from 'dom-parser'


axios.interceptors.request.use(config => {
    config.headers.set('Cookie', 'zdyj2web=018a49cc-ceca-4f27-8894-d53fdffbd6ad.null')

    return config
})
axios.get('http://222.22.63.178/student/exercise').then(resp => {

    const document = new DOMParser().parseFromString(resp.data, 'text/html')

    // console.log(document.rawHTML)

    let script =  document.getElementsByTagName('script')
        .filter(item => {
            return item.getAttribute('type') === 'text/javascript'
        })[1].innerHTML;


    let list = JSON.parse(script.split(';')[0].replace('var questionsJson = ',''))

    list.forEach(item=>{

    })


})

