

      let userinfo = JSON.parse(localStorage.getItem("userdata")) || []
     let data = JSON.parse( localStorage.getItem("Login")) || []

     let form = document.querySelector("form")
    form.addEventListener("submit", login)

    function login(event) {
        event.preventDefault()

        let obj = {
            email: form.email.value,
            pass: form.pass.value,
          
           
           
        }
         let value =false ;
           userinfo.forEach(elem=>{
            if(elem.email == obj.email && elem.pass == obj.pass){
                // console.log(true)
                localStorage.setItem("Login",JSON.stringify(elem))

                alert("Log In Succesfull")
                window.location.href="cloth.html"
                value = true ;
            }

        })  
            if(value==false){
                alert("Wrong Email Or Password")
            }


         
           
    }

    let cross = document.getElementById("crossform")
    .addEventListener("click",(e)=>{
        window.location.href="index.html"
    })
    