alert("Bienvenido. Por favor ingrese los datos solicitados");
function solicitarUsuario(){
        let usuarioIngresado = prompt("Ingrese su usuario");
        alert("El usuario ingresado es " + usuarioIngresado);
    }
function solicitarPass(){
        let passIngresada = prompt("Ingrese su contraseña");
        alert("La contraseña ingresada es " + passIngresada);
    }
function solicitarMail(){
        let mailIngresado = prompt("Ingrese su email");
        alert("El email ingresado es " + mailIngresado);
    }
solicitarUsuario();
solicitarPass();
solicitarMail();

/*var ingreseMonto = prompt("Ingrese monto:");
var ingresePago = prompt("Ingrese medio de pago:");
var MontoIva = ingreseMonto + (ingreseMonto *0,21);
let recargoTC = (*0,10);
var ingreseCom = prompt("Ingrese comisión del vendedor:");


if (ingresePago == "Efectivo"){
        alert("Total" + MontoIva);
}else if {
        (ingresePago == "Tarjeta")
        let MontoIva = ingreseMonto + (ingreseMonto *0,21);
        alert(MontoIva);
}*/