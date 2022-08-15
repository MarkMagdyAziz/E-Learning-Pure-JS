


function checkValid()
{
    var regFullName= /^[A-Z a-z]{3,} [A-Z a-z]{3,}$/
    var regEmail=new RegExp("^[A-Z a-z]+[0-9]*@[A-Z a-z]+(.com.eg|.net.eg|.edu.eg )$")


   var strFullName= document.getElementById("FullName").value
   var resultFullName=regFullName.test(strFullName)
   if(resultFullName==true)
   {
    document.getElementById("Msg").innerHTML="Your Full Name is Valid"
   }
   else
   {
    document.getElementById("Msg").innerHTML="Your full Name is not Valid"
   }

   var strEmail= document.getElementById("email").value
   var resultemail =regEmail.test(strEmail)


   
}


function isChar(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return true;
  }
  return false;
}






var InputuserName = document.getElementById("FullName");

InputuserName.onblur = function() {

  var regFullName= /^[A-Z a-z]{3,} [A-Z a-z]{3,}$/

  var strFullName= document.getElementById("FullName").value
  var resultFullName=regFullName.test(strFullName)

  if (resultFullName!=true) { // not Valid
    InputuserName.classList.add('invalid');
    document.getElementById("errorFulName").innerHTML = 'Please enter a User Name Is Valid'

  }
  InputuserName.classList.remove('inputfocus');
};

InputuserName.onfocus = function() {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    document.getElementById("errorFulName").innerHTML =  "";
  }
  InputuserName.classList.add('inputfocus');
};



// Check For   password and repeat password should be the same

var InputRePass = document.getElementById("RePass");


InputRePass.onblur = function() {

  var valpass = document.getElementById("pass").value
  var ValuRePass = InputRePass.value

  if (valpass != ValuRePass || ValuRePass == "") { // not Valid
    InputRePass.classList.add('invalid');
    document.getElementById("errorpass").innerHTML = 'password and repeat password should be the same'


    InputRePass.style.backgroundColor = "gray";
  }
  else{
    InputRePass.style.backgroundColor = "white" ;
  }
  InputRePass.classList.remove('inputfocus');
};

InputRePass.onfocus = function() {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    document.getElementById("errorpass").innerHTML =  "";
  }
  InputRePass.classList.add('inputfocus');
};

// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}


const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

const form = document.getElementById('signup');

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

    
    const name = form.elements['UserName'];
    const email = form.elements['email'];
    const FullNa = form.elements["FullName"];
    const UserTyp = form.elements["UserType"];
    const passw = form.elements["password"];

   
    // getting the element's value
    let UserNameV = name.value;
    let emailAddressV = email.value;
    let FullNameV = form.elements["FullName"].value;
    let UserTypeV = form.elements["UserType"].value;
    let passwordV = form.elements["pass"].value;

    // create Object 

    var User = {
        UserName : UserNameV,
        emailAddress : emailAddressV,
        FullName: FullNameV,
       UserType:UserTypeV,
        password : passwordV
    }

    
   // Test print Object 
   //console.log(User)

   //Save Users To session
     var ResultSave =  SaveUser(User) ;
    // console.log(Result)

	// validate the form
	let nameValid = hasValue(form.elements["UserName"], NAME_REQUIRED);
	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (nameValid && emailValid) {
		
    if(ResultSave =="Existing")
    {
      document.getElementById("MsgFrom").innerHTML = "User IS Existing";
      
    }
    else{

         setTimeout(function(){
             //win=window.open('home.html') 
             window.location.href ='home.html'
             }, 1000);
      }
        
	}
});


// Create Session
function SaveUser(New_User)
{
  // IF There Is Nothing Save at the Start then Save on Empty User  
  if(sessionStorage.getItem("Users") ==  null)
  {    
    sessionStorage.setItem("Users", "[]");
  } 
  // get old User And Slap it to The list of user
    var Old_Users =  JSON.parse(sessionStorage.getItem("Users"))
   // console.log(Old_Users)

    // Check For User is Existing
    var UserISExi=  CheckUserIsExisting(New_User , Old_Users)
    if(UserISExi == "Existing")
    {
      return "Existing";
    }

    //Add New User    
    sessionStorage.removeItem("Users")
    Old_Users.push(New_User);
    var All_User = JSON.stringify(Old_Users)   
   // console.log(All_User) 
    sessionStorage.setItem("Users", All_User);
  
  
    return "Done";

}

function CheckUserIsExisting(NewUer , ListOldUser)
{
  for(var UserOld of ListOldUser)
  {
    if(UserOld != null)
    {
      if(UserOld.UserName == NewUer.UserName)
      {
        return "Existing";
      }
    }
    else {
      return "User IS Not Existing"
    }
  }
}