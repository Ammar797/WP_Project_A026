function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.number.value;
    var country = document.contactForm.country.value;
    var adults = document.contactForm.adults.value;
    var children = document.contactForm.children.value;

    var terms=document.getElementById("terms");

    var nameErr = emailErr = mobileErr =countryErr = termsErr =adultsErr = childrenErr=true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    // Validate country
    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
//terms
    if(terms.checked) {

        printError("termsErr", "");
        termsErr = false;
        console.log("In if");
    } else {
        printError("termsErr", "Please Agree Terms and Condition");
        termsErr= true;
        console.log("In else");
        }
        // Validate number of adults
        if(adults == "") {
            printError("adultsErr", "Please  enter number of adults");
        } else {
            var regex = /^[0-9]$/;                
            if(regex.test(adults) === false) {
                printError("adultsErr", "Please enter a valid number");
            } else {
                printError("adultsErr", "");
                adultsErr = false;
            }
        }
                // Validate number of children
                if(children == "") {
                    printError("childrenErr", "Please  enter number of childrem");
                } else {
                    var regex = /^[0-9]$/;                
                    if(regex.test(children) === false) {
                        printError("childrenErr", "Please enter a valid number");
                    } else {
                        printError("childrenErr", "");
                        childrenErr = false;
                    }
                }

    if((nameErr || emailErr || mobileErr || countryErr ||termsErr || adultsErr ||childrenErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " +  + "\n" +
                          "Email Address: " + + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
        alert(dataPreview);
    }
}