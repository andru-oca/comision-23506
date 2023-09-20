console.table(
    {
        nombre: "manuel",
        edad:44,
        email:"mail@mail.com"
    }
)



let userName = prompt("Señor usuario, ingrese su nombre")

let mensajeDeBienvenida = "Hola!!" + userName

document.write(
    "<h1>"+
    mensajeDeBienvenida
    +"</h1>"
);


let edadUsuario =  prompt("Señor usuario, ingrese su edad")

edadUsuario = Number(edadUsuario) + 10

mensajeDeBienvenida = "<hr> mi edad es " + edadUsuario
  


document.write(
    "<h1>"+
    mensajeDeBienvenida
    +"</h1>"
);






