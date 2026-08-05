document.getElementById("registerForm").addEventListener("submit", function(e){

    let fullname = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(fullname === "" || email === "" || phone === "" || username === "" || password === ""){
        alert("Please fill all the fields.");
        e.preventDefault();
        return;
    }

    if(phone.length !== 10 || isNaN(phone)){
        alert("Please enter a valid 10-digit phone number.");
        e.preventDefault();
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters long.");
        e.preventDefault();
        return;
    }

    if(password !== confirmPassword){
        alert("Passwords do not match.");
        e.preventDefault();
        return;
    }

});