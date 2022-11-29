



let form = document.querySelector("form")
form.addEventListener("submit", information)

let userinfo = JSON.parse(localStorage.getItem("userdata")) || []
function information(event) {
    event.preventDefault()

    let obj = {
        name: form.name.value,
        email: form.email.value,
        phone: form.no.value,
        pass: form.pass.value,
    }
     userinfo.push(obj)
     localStorage.setItem("userdata" ,JSON.stringify(userinfo))

}

let cross = document.getElementById("crossform")
.addEventListener("click",(e)=>{
    window.location.href="index.html"
})

