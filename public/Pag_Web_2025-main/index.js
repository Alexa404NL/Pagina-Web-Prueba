//*alert("lololololo")

const password = document.getElementById("inputpass");

const username = document.getElementById("inputussername");

const btnLogin = document.getElementById("buttonlogin");

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
const login = async () => {
    const user = { username: username.value, password: password.value };
    const respuesta = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await respuesta.json();
    if (data.isLogin) {
      sessionStorage.setItem("user_id", data.user.user_id);
      sessionStorage.setItem("username", data.user.username);
      window.location = "/pages/main.html?id=" + data.user.user_id;
    } else {
      alert("credenciales incorrectas");
    }
  };


btnLogin.addEventListener("click", login);

password.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      login();
    }
  });
  
