'use strict'



   // creamos una variable booleana y la iniciamos a true  
   let cambioBooleano = true;

do {
  
  // le pedimos al usuario que introduzca un dato 
  let respuesta = prompt ("Escriba el nombre del primer presidente de la democracia");

  let resTrim = respuesta.trim();
    // imprimimos en consola la respuesta del usuario trimeada 
    console.log(resTrim);

  // pasamos ese dato a minusculas 
  let resMin= resTrim.toLocaleLowerCase();

  // imprimimos en consola la respuesta del usuario en minusculas
  console.log(resMin);


/* creamos un if para poder cambiar la bariable booleana en el caso que se cumpla
las dos condiciones */  

  if (resMin == "adolfo suarez") {

    cambioBooleano = false;
  }


  if(resMin == "adolfo suárez"){

    cambioBooleano = false;
  }

  //comprueba que incluya la palabra adolfo 
  if(resMin.includes("adolfo")){
     
    alert("Te falta el apellido o lo has escrito mal ");

  }

  //comprueba que incluya la palabra suarez o suárez
  if(resMin.includes("suarez")||resMin.includes("suárez")){
     
    alert("Te falta el nombre o lo has escrito mal ");

  }


} while (cambioBooleano);
   
// esto es fuera del bucle, una vez que se ha saltado el control parental
 document.write("<h2> Se ha superado el control parental<h2>");
 