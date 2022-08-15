// global variables
var lessOne = document.getElementById('lOne');
var pic=document.getElementById('pic');
var para = document.getElementsByClassName('para')
var src1 = "./resources/pic1.png";
var src2 = "./resources/pic2.png";
var arr=["./resources/pic1.png","resources/pic7.png","./resources/pic5.png","./resources/pic1.png","./resources/pic9.png",,"./resources/pic10.png"]
var index=0;
// change image every 200ms to move charachter
function change() {
  pic.setAttribute('src',arr[index])
 index > 3 ? index = 0 : index++;
}
var myint = setInterval(change, 400)

//add new text depend on audio 
var time = 2000;
function addPara(){
  for (const p of para) {
    setTimeout(()=>{
      p.style.opacity= 1;
    }, time)
    time += 33000;
  }
}

window.onload = function () {
 addPara()
}

// stop charachter when audio stop
setTimeout(
  function( ) { clearInterval(myint) } ,134000
 )





