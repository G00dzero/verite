 function processForm(event)
        {
            if(validateForm()==false)
                event.preventDefault();
        }
        
        function validateForm()
        {
            const errors=document.getElementsByClassName("errors");
            for (i=0;i<errors.length;i++)
                {  errors[i].innerHTML="";}
            
            let name_val=document.getElementById("first_name").value;
            if(name_val==null || name_val=="")
                {
                    document.getElementById("error1").innerHTML=" Please enter name";
                    return false;
                }
            
            if(name_val.length >20)
               { document.getElementById("error1").innerHTML=" input has exceeded 20 characters";
            return false;
                }
        
        let name2_val=document.getElementById("last_name").value;
        if(name2_val==null || comp_val=="")
            {
                document.getElementById("error2").innerHTML=" Please enter Last name";
                return false;
            }
               if(name2_val.length >20)
               { document.getElementById("error1").innerHTML=" input has exceeded 20 characters";
            return false;
                }

          let password_val = document.getElementById("password").value;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 chars, 1 letter, 1 number

if (password_val == null || password_val == "") {
    document.getElementById("error4").innerHTML = " Enter a password";
    return false;
}
if (password_val.length < 8) {
    document.getElementById("error4").innerHTML = " Password must be at least 8 characters";
    return false;
}
if (passwordPattern.test(password_val) == false) {
    document.getElementById("error4").innerHTML = " Password must contain at least one letter and one number";
    return false;
}

let password2_val = document.getElementById("password2").value;

if (password2_val == null || password2_val == "") {
    document.getElementById("error5").innerHTML = " Enter confirm password";
    return false;
}
if (password2_val.length < 8) {
    document.getElementById("error5").innerHTML = " Confirm password must be at least 8 characters";
    return false;
}
if (passwordPattern.test(password2_val) == false) {
    document.getElementById("error5").innerHTML = " Confirm password must contain at least one letter and one number";
    return false;
}
if (password2_val !== password_val) {
    document.getElementById("error5").innerHTML = " Passwords do not match";
    return false;
}

            if(validate_email() == false)
                return false;
            
        //     let query_val=document.getElementById("query").value;
        //     if(query_val==null || query_val=="")
        //     {document.getElementById("error6").innerHTML=" Please enter a query";
        //   return false;}

        //   if(checkCaptcha() == false) // if captcha isnt right, dont let user submit form
        //   {
        //     return false;
        //   }

        //   console.log(checkCaptcha());
            
        //   return true; 
         }
        

        const emailPattern=/^[a-zA-Z09._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        function validateEmail(elementValue)
        {
            return emailPattern.test(elementValue);
        }
        
        function isNumeric(numericValue)
        {
            const numericPattern=/^[0-9]+$/;
            return numericPattern.test(numericValue);
        }
       
        
        function isNonNumeric(input)
        {
            const numberPattern=/[0-9]/;
            return !numberPattern.test(input);
            /*if (numberPatterm.test(inout)==true)
            return false;
            else
            return true;*/
        }
        
        function validate_email()
        {
            let email_val=document.getElementById("email").value;
            if(email_val==null || email_val=="")
               {
               document.getElementById("error3").innerHTML=" Please ennter valid email";
            return false;
               }

        if(validateEmail(email_val)==false)
            {
                document.getElementById("error3").innerHTML=" invalid email format";
                return false;
            }
        
        let email2_val =document.getElementById("email2").value;
        if(email_val!= email2_val)
            {
                document.getElementById("error5").innerHTML=" Email field must be the same";
                return false;
            }
        return true;
        }



      // function makeCaptcha() // will make a random captcha in the captchaText p tag every time function is called
      // {
      //     let captchaText = document.getElementById("captchaText");
      //     let captchaAttempt = document.getElementById("captchaAttempt");
      //     let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // list of potential letters captcha can have
      //     // reset captcha textbox, and captcha 
      //     captchaText.innerHTML= "";
      //     captchaAttempt.value= "";

      //     // will run 7 times (you can change it to be as many letters as u want) because it only makes 1 letter per loop
      //     for (let i = 0; i < 7; i++)
      //         captchaText.innerHTML += chars.charAt(Math.floor(Math.random() * chars.length)); // i barely know how this works but it makes a random number and then chooses the character from chars variable based on that number
      // }

      // function checkCaptcha() // this one will compare what the user types in with the random captcha
      // {
      //     let captchaText = document.getElementById("captchaText");
      //     let captchaAttempt = document.getElementById("captchaAttempt");
      //     let error7 = document.getElementById("error7");

      //     if (captchaAttempt.value != captchaText.innerHTML) // if they dont match
      //     {
      //       error7.innerHTML = " Captcha is incorrect";
      //       makeCaptcha(); // make a new captcha if they got it wrong
      //       return false;
      //     }
      //     else
      //     {
      //       return true;
      //     }
      // }

// JavaScript for the navigation menu and form toggling
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function showSignIn() {
  document.getElementById('form').style.display = 'none';
  document.getElementById('signin-form').style.display = 'block';
}
function showSignUp() {
  document.getElementById('signin-form').style.display = 'none';
  document.getElementById('form').style.display = 'block';
}

    document.getElementById("buttonS").addEventListener('click', processForm);
