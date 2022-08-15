

// Function Login 
 function ButLogin()
 {
    var userName = document.getElementById("Username").value  ;
    var passw = document.getElementById("password").value  ;
  //  console.log("User Name : " + userName + " Passw IS : " + passw)
  document.getElementById("Msg").innerHTML =  LogIN(userName ,passw)   
 }

 // Check For IS Login
function GetCurrentUser()
{
 


  var loginForm = document.getElementById("loginForm");
  var loggedInMsg = document.getElementById("loggedInMsg");

  var CurrentUser = sessionStorage.getItem("UserName");
  
 //loginForm.classList.add("loggedInMsg")

  console.log(CurrentUser) 
  if(CurrentUser != null )
  {

   loggedInMsg.style.display = "block"
   //loginForm.classList.add("loggedIn")
   loginForm.style.display = "none"
   document.getElementById("WelcUser").innerHTML = CurrentUser;
  }
}

GetCurrentUser()


// LogIN Function For Check
function LogIN(UserName ,Password)
{
  // IF There Is Nothing Save 
  if(sessionStorage.getItem("Users") ==  null)
  {    
   return "No User Found Please Register"
  } 
  // get All User And Check IFUser Exi
    var Old_Users =  JSON.parse(sessionStorage.getItem("Users"))
     
    console.log(Old_Users)

    // Check For User is Existing
    var UserISExi =  CheckUserIsExisting(UserName , Old_Users)

    console.log(UserISExi)

    if(UserISExi == "No Found UserName")
    {
      return "No Found UserName";
    }

    // Check For Password 

    var Result = CheckPassword(Password , Old_Users)

    console.log(Result);   
     if(Result == "Password Is Not Correct")
     {

         return "Password Is Not Correct";
     }

   //////////////
    console.log('check login')
  
    sessionStorage.setItem("UserName" , Result)
    return "Welcome : " + Result;

}


function CheckUserIsExisting(UserName , ListOldUser)
{
  for(var UserOld of ListOldUser)
  {
    if(UserOld != null)
    {
      if(UserOld.UserName == UserName)
      {
        return "Existing";
      }
    }    
  }

  return "No Found UserName"
}

function CheckPassword(Password , ListOldUser)
{

    var USerLogin ={};
  for(var UserOld of ListOldUser)
  {
    if(UserOld != null)
    {
      if(UserOld.password == Password)
      {
       // USerLogin = UserOld;
        return UserOld.FullName
      //  return "Password Is Pass";
      }
    }
   
  }

  return "Password Is Not Correct"
}
