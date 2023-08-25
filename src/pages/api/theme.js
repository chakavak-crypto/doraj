import {setCookie} from "../../tools/cookies";

export default function handler(req, res) {
    console.log()
    if(JSON.parse(req?.body)?.theme === 'light' || JSON.parse(req?.body)?.theme === 'dark'){
        setCookie(res, 'theme', JSON.parse(req?.body)?.theme, { path: '/', maxAge: 2592000 })
    }

    res.end('ok')
}