//*alert("lololololo")

const pass = document.getElementById("inputpass");

const user = document.getElementById("inputussername");

const Botonlog = document.getElementById("buttonlogin");

/*opcion 1

Botonlog.addEventListener("click",  ()=>{
    //console.log("clicker");   
    if (user.value==="ale" && pass.value==="123") {
        sessionStorage.setItem("name","pocoyo");
        window.location ="./pages/main.html";
    } else {
        alert("nao nao tu no tiene acceso");
    }
})
    
*/


/*opcion 2*/

const login =()=>{
    if (user.value==="ale" && pass.value==="123") {
        sessionStorage.setItem("name","pocoyo");
        window.location ="./pages/main.html";
    } else {
        alert("nao nao tu no tiene acceso");
    }
}

Botonlog.addEventListener("click",  login);

pass.addEventListener("keydown", function(e){
    console.log("lololololo");
    if(e.key=="Enter"){
        login();
    }
});
