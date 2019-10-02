export function authHeader() {
    let token = localStorage.getItem('token')

    if (token) {
        return {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    } else {
        return {}
    }
}