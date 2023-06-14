import notification from "./notification"

export default async function request(url, method, data, headers = null){
    const host = 'http://127.0.0.1:8000/api/'
    let body = {}

    if(method != 'GET'){
        body = {body: data ?? null,}
    }

    const response = await fetch(host + url, { 
        method: method, 
        ...body,
        headers: {...headers}
    })

    const json  = await response.json()

    if(response.status != 200){
        notification(json, 'warning')
        return false
    }

    return json
}