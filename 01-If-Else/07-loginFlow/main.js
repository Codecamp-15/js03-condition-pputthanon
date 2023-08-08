let user = prompt("Username");
let pass = prompt("Password");
if (user == null) {
    let user = alert("username is required");
}
if (pass == null) {
    let pass = alert("password is required");
}
// null = ESC, cancel

    else if (user == "admin" && pass == "1234") {
        alert("Hello" + user)
    } else if (user == "john" && pass == "qwerty"){
        alert("Hello" + user)

    }
else alert("invalid username or password")   