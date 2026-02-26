const account = {
    id : 120,
    username : "ilhammm",
    password : "ilham"
}

const editPassword = {
            ...account,
            password : "ilham"}
    
function editPass(passwordBaru) {
    if (passwordBaru.length < 5) {
        console.log(account)
        console.log("minimum password adalah 5 karakter")
    } else {
        console.log(editPassword)
        }
    }


editPass("ilha");