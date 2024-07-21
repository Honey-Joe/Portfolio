const form =document.getElementById("form")
const fname= document.getElementById("fname")
const ferr = document.getElementById("fnameerr")
const lname = document.getElementById("lname")
const lerr = document.getElementById("lnameerr")
const email = document.getElementById("email")
const emailerr = document.getElementById("emailerr")
const mess = document.getElementById("message")
const merr = document.getElementById("messerr")




const savetodb = (fname,lname,email,mess)=>{
    const firebaseConfig = {
        apiKey: "AIzaSyBMn7Yw5zTqZvVLqzSs3_HxSucbFrBF0eQ",
        authDomain: "portfolio-8323e.firebaseapp.com",
        databaseURL: "https://portfolio-8323e-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "portfolio-8323e",
        storageBucket: "portfolio-8323e.appspot.com",
        messagingSenderId: "256157583296",
        appId: "1:256157583296:web:f55cec94db4d50ad19ea25"
      };
    
    
      // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref("ReqForm");
 
var newRef = db.push();

newRef.set(
  {
    fname : fname,
    lname:lname,
    email : email,
    mess : mess
  }
);

}
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

    savetodb(fname.value,lname.value,email.value,mess.value);

})