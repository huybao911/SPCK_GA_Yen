let register = document.querySelector('#register');
register.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("exampleInputEmail1");
    let pw = document.getElementById("exampleInputPassword1")

    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (email.value.trim().length == 0 && pw.value.trim().length == 0){
        alert("Vui lòng nhập email và mật khẩu")
    }
        else if (email.value.trim().length == 0){
            alert("Vui lòng nhập email")
        }
        else if (pw.value.trim().length == 0){
            alert("Vui lòng nhập mật khẩu")
        }
        else if (pw.value.trim().length < 8){
            alert("Mật khẩu phải có ít nhất 8 ký tự")
        }
        else if (!pw.value.trim().match(lowerCaseLetter)){
            alert("Mật khẩu phải có chữ viết thường")
        }
        else if (!pw.value.trim().match(upperCaseLetter)){
            alert("Mật khẩu phải có chữ viết hoa")
        }
        else if (!pw.value.trim().match(numbers)){
            alert("Mật khẩu phải có số")
        }
        else {
            if(localStorage.users) {
                let users = JSON.parse(localStorage.users)
                users.push({
                    email: email.value.trim(),
                    pw: pw.value.trim()
                })
                localStorage.setItem("users", JSON.stringify(users))
            } else {
                localStorage.setItem("users",
                JSON.stringify(
                [
                    {
                      email: email.value.trim(),
                      pw: pw.value.trim()
                    }
                ]));
            }
            location.replace("../html/login.html")
    }
})
