document.addEventListener("DOMContentLoaded",()=>{

const loginForm=document.getElementById("loginForm");
const registerForm=document.getElementById("registerForm");


// LOGIN
if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const remember=document.getElementById("rememberMe").checked;

const users=JSON.parse(localStorage.getItem("users")) || [];

const user=users.find(u=>u.email===email && u.password===password);

if(user){

localStorage.setItem("token","login-token");
localStorage.setItem("userInfo",JSON.stringify(user));

if(remember){
localStorage.setItem("rememberedEmail",email);
}

window.location.href="dashboard.html";

}
else{
alert("Invalid credentials");
}

});

}


// REGISTER
if(registerForm){

registerForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email=document.getElementById("regEmail").value;
const password=document.getElementById("regPassword").value;
const confirmPassword=document.getElementById("regConfirmPassword").value;

if(password !== confirmPassword){
alert("Passwords do not match");
return;
}

let users=JSON.parse(localStorage.getItem("users")) || [];

const exists=users.find(u=>u.email===email);

if(exists){
alert("User already exists");
return;
}

users.push({email,password});

localStorage.setItem("users",JSON.stringify(users));

alert("Account created");

window.location.href="index.html";

});

}

});