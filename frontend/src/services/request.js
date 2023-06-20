import notification from "./notification"
export default async function request(url, method, data, headers = null){
    const mode = location.host.includes('localhost') ? 'dev' : 'prod' 

    // Define backend host
    let host = ""
    if(mode == "dev") host = 'http://localhost:8000/api/'
    else host = 'http://apirh.lelu0920.odns.fr/api/'

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