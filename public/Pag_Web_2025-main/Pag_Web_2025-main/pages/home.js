window.onload=()=>{
    if (sessionStorage.name){

        alert("hola " +  sessionStorage.name);
    } else {
        window.location ="../index.html";
    }
}


const Botonlog = document.getElementById("buttonlogout");

Botonlog.addEventListener("click",  ()=>{
         //console.log("clicker"); 
        sessionStorage.removeItem("name");  
        window.location ="../index.html";
   })
