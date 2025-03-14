window.onload=()=>{
    if (sessionStorage.username){
        alert("hola " +  sessionStorage.username);
    } else {
        window.location ="../index.html";
    }
}

/*
window.onload = () => {
    if (!sessionStorage.name) {
      alert("hola " +  sessionStorage.name);
      window.location = "../index.html";
    }
  };*/


const h1 = document.getElementById("saludo");
    h1.innerHTML = "hola " + sessionStorage.username;

const logout = document.getElementById("buttonlogout");
logout.addEventListener("click", () => {
  sessionStorage.removeItem("username");
  window.location ="../index.html";
});

const chat = document.getElementById("chat");
const msg = document.getElementById("msg");
const send = document.getElementById("send");

const sendMsg = () => {
  chat.value += "\n" + msg.value;
  msg.value = "";
};

send.addEventListener("click", sendMsg);

msg.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMsg();
  }
});

/*
Botonlog.addEventListener("click",  ()=>{
         //console.log("clicker"); 
        sessionStorage.removeItem("name");  
        window.location ="../index.html";
   })
*/