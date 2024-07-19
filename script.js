document.addEventListener("DOMContentLoaded", ready);


function ready(){

    const form = document.getElementById("registration-form").addEventListener("submit" , (event) => {
        event.preventDefault();


        let isValid = true
        let messages = []
        
//user validation
   const username =   document.getElementById("username").value.trim();
   
if( username.length < 3){
const isValid = false;
messages.push("Username must be at least 3 characters long.");
}

//email validation
   const email =   document.getElementById("email").value.trim();
if(!email.indexOf("@") === -1  ||  !email.indexOf(".") === -1){
    const isValid = false;
    messages.push("Email must be valid and contain '@' and '.'");
}

//password validation
   const password  =   document.getElementById("password").value.trim();
if(password.length < 8){
    isValid = false;
    messages.push("Password must be at least 8 characters long.")
}


//feedback display
const feedbackDiv = document.getElementById("form-feedback");

if(isValid === true ){
    feedbackDiv.textContent = "Registration successful";
    feedbackDiv.style.color = "#28a745"
}else{
    feedbackDiv.innerHTML = messages.join('<br>');
    feedbackDiv.style.color = " #dc3545"
}

feedbackDiv.style.display = "block";
 });

};

