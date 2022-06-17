// user name
let userName= document.getElementById("username");
let namePara= document.getElementById("namePara");

// email
let email= document.getElementById("email");
let emailPara= document.getElementById("emailPara");

// phone number
let phonenum = document.getElementById("phonenum");
let phonePara = document.getElementById("phonePara");

// password
let pass = document.getElementById("pass");
let passPara = document.getElementById("passPara");

// repassword
let repassword = document.getElementById("repassword");
let repassPara = document.getElementById("repassPara");

let para = document.getElementsByClassName("para");
let btn = document.getElementById("btn");

let togglePassword = document.querySelector("#togglePassword");
let togPassword = document.querySelector("#togPassword");

// const changeButton = document.getElementsByTagName("input");


btn.addEventListener("click",(e)=>{
    e.preventDefault()

    if(userName){
        if(userName.value == null || userName.value == ""){
        namePara.innerText="UserName is required*"
        namePara.style.color="red"
        userName.style.border="2px solid red"
        userName.style.background = "#ffe6e6"
        }
        else{
            userName.style.border="2px solid green"
            namePara.innerText=""
            userName.style.background = "none"
        }
    }

    if(email){
        if(email.value == null || email.value == ""){
            emailPara.innerText="Email is required*"
            emailPara.style.color="red"
            email.style.border="2px solid red"
            email.style.background = "#ffe6e6"
        }
        else{
            email.style.border="2px solid green"
            emailPara.innerText=""
            email.style.background = "none"
        }
    }

    if(phonenum){
        if(phonenum.value == null || phonenum.value == ""){
            phonePara.innerText="Phone number is required*"
            phonePara.style.color="red"
            phonenum.style.border="2px solid red"
            phonenum.style.background = "#ffe6e6"
        }
        else{
            phonenum.style.border="2px solid green"
            phonePara.innerText=""
            phonenum.style.background = "none"
        }
    }

    if(pass){
        if(pass.value == null || pass.value == ""){
            passPara.innerText="Password is required*"
            passPara.style.color ="red"
            pass.style.border ="2px solid red"
            pass.style.background = "#ffe6e6"
        }
        else if(repassword.value == null || repassword.value == ""){
            passPara.innerText="Please enter re-password first"
            passPara.style.color="red"
            pass.style.background = "#ffe6e6"
            // pass.style.border="2px solid red"
        }
        else{
            pass.style.border="2px solid green"
            passPara.innerText=""
            pass.style.background = "none"
        }
    }

    if(repassword){
        if(repassword.value == null || repassword.value == ""){
            repassPara.innerText="Re-password is required*"
            repassPara.style.color="red"
            repassword.style.border="2px solid red"
            repassword.style.background = "#ffe6e6"
        }
        else if(repassword.value != pass.value){
            repassword.style.border="2px solid red"
            repassPara.innerText="Password does not match"
            repassPara.style.color = "red"
            repassword.style.background = "#ffe6e6"
        }
        else{
            repassword.style.border="2px solid green"
            repassPara.innerText=""
            repassword.style.background = "none"
            
        }
    }

    // if(changeButton.value == null || changeButton.value == ""){
    //     btn.innerText = "SignUp"
    //     console.log("SignUp")
    // } else {
    //     btn.innerText = "hcbhsbch"
    //     console.log("cccc")
    // }


})

const password = document.querySelector("#password");
        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = pass.getAttribute("type") === "password" ? "text" : "password";
            pass.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
});


const repass = document.querySelector("#repassword");
togPassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = repass.getAttribute("type") === "password" ? "text" : "password";
    repass.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});