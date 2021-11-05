
console.log("MAYONESA CASERA DE ARI");

let huevo = true, aceite = true, limon = false, sal = true;

function hacer_mayonesa() {
    console.log("PASO A PASO");
}

function agregar_limon() {
    console.log("AGREGAR LIMON");     
}

if (huevo && aceite && sal && limon) {
    console.log("HACER CON LIMON "); 
    hacer_mayonesa();
    agregar_limon();
} else if (huevo && aceite && sal) {
    console.log("SIN LIMON "); 
    hacer_mayonesa();
} else { 
    console.log("NO SE PUEDE HACER MAYONESA")
}

function hacer_mayonesa() {
    console.log("Romper un huevo y meterlo en un vaso hondo");
    console.log("Meter 2 tazas de aceite de oliva o girasol");
    console.log("Agregar pizcas de sal al gusto");
    // 2 gotas de limon !  
    console.log("Agregar vinagre media cucharadita.");
    console.log("Introducir la licuadora electrica o manual dentro de la mezcla");
    console.log("Empezar a batir todo hasta emulsionar");
    console.log("Mover de arriba hacia abajo para sacarle aire ");
    consola.log("Al ver una textura espesa, retira la licuadora");
    console.log("Dejarlo reposar");
    console.log("Listo!!")
}
 
  var  mayonesa_casera  =  new  Mayonesa_casera ( "1 huevo, 2 tazas de aceite, 2 gotas de limón, sal al gusto." ) ; {
  }
  consola . log ( mayonesa_casera . ingredientes ) ;
}
