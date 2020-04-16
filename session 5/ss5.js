
var correctUser={
    username:"Hanh My",
    password:"My1234"
}
var valueInput={
    username:"",
    password:"",
    rePassword:""
}
function onChangeUsername (value) {
    valueInput.username=value
}
function onChangePassword (value) {
    valueInput.password=value
}
function onChangeRePassword (value){
    valueInput.rePassword=value
}
function handleSubmit(){
   //if(
   //    valueInput.username === correctUser.username &&
   //    valueInput.password === correctUser.password
   // ) {
    //    document.getElementById("myForm").action="./pages/homepage.html"
    //} else {
   //    console.log(valueInput.username)
    //   console.log(valueInput.password)
    //   alert("Username hoặc Password bị sai")
   //}
   if(
       valueInput.password === valueInput.rePassword
   ) {
    document.getElementById("myForm").action="./pages/register.html"
   } else{
       alert("Password không trùng")
   }
}
var name =""
function onChangeName (value){
    name=value
}
function addName() {
    document.getElementById("name").innerHTML = "My name is " + name
}