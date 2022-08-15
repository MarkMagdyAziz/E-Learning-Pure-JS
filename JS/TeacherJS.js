
function getTeacher()
{
    
    var xhttp=new XMLHttpRequest()
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&&this.status==200)
        {
           var data=JSON.parse(this.responseText)
          // console.log(data)
           for (var item of data) {
             var divconter =  document.createElement("div");
             divconter.setAttribute("ID",item.id);
             divconter.classList.add("cardTeacher")

            var DivItemInner = `
                 <img src="Images/Teacher/${item.ImgURL}" alt="img" >
                 <h1>Name : ${item.Name}</h1>
                 <p>Subject IS : ${item.Subject}</p>
                 <p>Experience For Learning Is : ${item.Experience} Years</p> 
                    <a href="#"><i class="fa fa-dribbble"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                <p><button>Contact</button></p> `;

            divconter.innerHTML+= DivItemInner;           
            document.getElementById("DivContnerTeacher").appendChild(divconter)
           }
          // console.log(ContnerDivTeacher)
        }
    }
    xhttp.open("GET","https://62f2893eb1098f1508150a58.mockapi.io/22/Teacher",true)
    xhttp.send()
  
  
}

getTeacher()
