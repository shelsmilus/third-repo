
const button = document.getElementById('button');

function btnClick(event){
  event.target.textContent = "Searching ";
  event.target.style.color = "pink";
  event.target.style.font = "2cm";
}
button.addEventListener('click', btnClick);



let user;
let pass;

document.getElementById("btnsubmit").onclick = function(){
  user = document.getElementById("nameEntered").value;
  pass = document.getElementById("passEntered").value;
  

  console.log('Username:', user)
  console.log('Password:', pass);

}











function calarea(area){
  return area**2
}
var width = 17;
var height = 7;
var area = calarea(width * height)
console.log(area);


const maelData = [

  {
    Dish : "yamarita" ,
    price : 17
  },
  {
    Dish: "yam porridge",
    price : 25
  }
]