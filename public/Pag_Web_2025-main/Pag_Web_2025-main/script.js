//*console.log("hallo everyone, how are u? fine thank u");

//* variables con "const" or "let"

/* podemos declarar objetos de manera directa o por medio de clases como en c++*/
let alumno = {
    nombre: "Juan carlos bodoque",
    edad: "9",
    imprime(){
        console.log(this.nombre+" "+this.edad);
    },
};

alumno.imprime();
alumno["edad"]++;

//*se pueden declarar normales function o de manera anónima (flechas woo) 


const funcion = (NAME) =>{ //parametro
    console.log("holaaa"+ " "+ NAME)
};

funcion ("jose");

/*
! for (variable in objeto)
  ! instrucción
*/

/* 
*DOM para hacer referencia a elementos html por medio de id
con esto ´podemos cambiar lo que hay en una etiqueta 

ejem: 
    const titulo= document.querySelector("h1"); -> esto cambia el primer header que encuentra en el html
*/

