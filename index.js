import express from 'express';

const app = express();
const port =5000;

app.use("/", express.static("public/Pag_Web_2025-main"));
app.listen(port, console.log("http://localhost:"+ port));


/* puertos menores a 100 necesitan superusuario, por eso usamos puertos grandes disponibles*/