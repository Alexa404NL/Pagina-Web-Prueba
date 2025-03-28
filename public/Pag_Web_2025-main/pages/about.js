const iGame = document.getElementById("iGame");

console.log("tengo id " + sessionStorage.user_id);

iGame.setAttribute("src", "./game/index.html?id=" + sessionStorage.user_id);

