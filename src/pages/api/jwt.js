import {setCookie} from "../../tools/cookies";

export default function handler(req, res) {
    if (req.method === 'POST' && req?.body?.token) {
        setCookie(res, 'jwt', req?.body?.token, {path: '/', maxAge: 2592000})
    }

    res.end('ok')
}