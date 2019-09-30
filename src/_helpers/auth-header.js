export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'))

    if (user && user.token) {
        return {
            'Authorization': 'Bearer ' + user.token,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    } else {
        return {}
    }
}