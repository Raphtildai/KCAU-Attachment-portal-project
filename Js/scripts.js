// Form fields validation
// Login page validation
function validate(){
    // Accessing all the form fields

    // Regular expressions for email validation
    // Here we ensure that the email address entered is that from the
    // KCAU student domain

    var mail = document.login[0].value;
    var password = document.forms[0][1].value;

    let regex = new RegExp('[0-9]+@students.kcau.ac.ke');
    // alert("Hello");
    if(mail == "" || password == ""){
        alert("Email Address and Password is required");
        return false;
    }else if(password.length < 6){
        alert("Password Characters should be more than 6 characters");
        return false;
    }else{
        // Checking the email address if it is valid or not
        if(regex.test(mail)== true){
            alert("You entered correct email address");
            return true;
        }else{
            alert("You entered wrong email address");
            return false;
        }
    }
}

// Main page validation
function validate_main(){
    // Main Page 
    var x = document.forms[0].elements[0].value;
    for(var j = 0; j <= x.length; j++){
        var regno = document.forms[0][0].value;
        var name = document.forms[0][1].value;
        var organisation = document.forms[0][2].value;
        var address = document.forms[0][3].value;
        var location = document.forms[0][4].value;
        var supervisor = document.forms[0][5].value;
        var pnumber = document.forms[0][6].value;
        var sdate = document.forms[0][7].value;
        var edate = document.forms[0][8].value;

        if(regno == "" || organisation == "" || name == "" || address == "" || location == "" || pnumber == "" || supervisor == "" || sdate == "" || edate == ""){
            alert("All fields must be field");
            document.forms[0][1].focus();
            return false;
        }else if(pnumber.length < 10 || pnumber.length > 10){
            alert("Incorrect phone number. Phone number should be 10 digits");
            document.forms[0][4].focus();
            return false;
        }else{
            return true;
        }
    }
}

// Validating forgot password page
function validate_forgot_password(){
    // Regular expressions for email validation
    // Here we ensure that the email address entered is that from the
    // KCAU student domain

    var mail = document.forms[0][0].value;

    let regex = new RegExp('[0-9]+@students.kcau.ac.ke');
    // alert("Hello");
    if(mail == ""){
        alert("Email Address is required");
        return false;
    }else{
        if(regex.test(mail)== true){
            alert("An Email with password Reset link has been sent to your Email Address. Click the link to reset it");
            return true;
        }else{
            alert("You entered wrong email address");
            return false;
        }
    }
}