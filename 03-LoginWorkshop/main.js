let user = prompt("Username");

if (user === null || user !== "codecamp") {
    let user = "guest"
    alert("Welocome" + user)
} else if (user === "codecamp") {
    let password = prompt("password")
    
    if (password === "123456") {
        let user = "codecamp"
        alert("Welocome" + user)
    } else { alert("Wrong password") }
}

else {
    
}



