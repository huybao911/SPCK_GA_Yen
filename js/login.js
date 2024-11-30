let login = document.getElementById("login");
login.addEventListener("submit", (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.users);
    console.log(users)

    let email = document.getElementById("exampleInputEmail1");
    let pw = document.getElementById("exampleInputPassword1");

    let check = users.map(index => index.email == email.value.trim() && index.pw == pw.value.trim());
    if (check[0] == true) {
        window.location.href = "../html/mainpage.html";
    }
    else {
        alert("Vui lòng nhập lại")
    }
})