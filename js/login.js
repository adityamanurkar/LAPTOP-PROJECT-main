let un = "Aditya@gmail.com";
let pwd = "Aditya@321";
function submitForm() {
    let un2 = document.getElementById("un").value;
    let pwd2 = document.getElementById("pwd").value;

    if (un2 == un && pwd == pwd2) {
        open("home.html")
    }
    else {
        alert("Invalid credentials")
    }
}