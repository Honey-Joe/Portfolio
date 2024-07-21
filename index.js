const form =document.getElementById("form")
const fname= document.getElementById("fname")
const ferr = document.getElementById("fnameerr")
const lname = document.getElementById("lname")
const lerr = document.getElementById("lnameerr")
const email = document.getElementById("email")
const emailerr = document.getElementById("emailerr")
const mess = document.getElementById("message")
const merr = document.getElementById("messerr")


form.addEventListener("submit", (e)=>{
    e.preventDefault()

    if(fname.value== ""){
        ferr.innerHTML="*Required"
        ferr.style.color="red"
    }
    if(lname.value== ""){
        lerr.innerHTML="*Required"
        lerr.style.color="red"
    }
    if(email.value== ""){
        emailerr.innerHTML="*Required"
        emailerr.style.color="red"
    }
    if(mess.value== ""){
        merr.innerHTML="*Required"
        merr.style.color="red"
    }

})