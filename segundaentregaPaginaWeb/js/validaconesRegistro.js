function validarFormulario(){
    /* registro */
    let nombre = document.getElementById("txtNombre").value;
    let rut = document.getElementById("txtRut").value;
    let correo = document.getElementById("txtCorreo").value;
    let contraseña = document.getElementById("txtContraseña").value;
    /* la contrasela del usuario ya la estoy usando en el inicio de sesion */


    if (nombre.length == 0) {
        /* Se cambia el "none" por un "inline" para que aparezca */
        document.getElementById("valNombre").style.display = "inline";

        /* Se usa para darle una clase a el input que tenga componentes del bootstrap y agregue diseños en momentos especificos 
        En este caso agrega un color rojo al input en caso de que no ingresen nada*/
        document.getElementById("txtNombre").classList.add("is-invalid");
        
    }else{

        /* Todo esto es para que agregue un color verde en caso de que si ingresen los datos */
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
        document.getElementById("valNombre").style.display = "none";

    }

    if (rut.length == 0) {
        /* Se cambia el "none" por un "inline" para que aparezca */
        document.getElementById("valRut").style.display = "inline";

        /* Se usa para darle una clase a el input que tenga componentes del bootstrap y agregue diseños en momentos especificos 
        En este caso agrega un color rojo al input en caso de que no ingresen nada*/
        document.getElementById("txtRut").classList.add("is-invalid");
        
    }else{

        /* Todo esto es para que agregue un color verde en caso de que si ingresen los datos */
        document.getElementById("txtRut").classList.remove("is-invalid");
        document.getElementById("txtRut").classList.add("is-valid");
        document.getElementById("valRut").style.display = "none";

    }

    if (correo.length == 0) {
        /* Se cambia el "none" por un "inline" para que aparezca */
        document.getElementById("valCorreo").style.display = "inline";

        /* Se usa para darle una clase a el input que tenga componentes del bootstrap y agregue diseños en momentos especificos 
        En este caso agrega un color rojo al input en caso de que no ingresen nada*/
        document.getElementById("txtCorreo").classList.add("is-invalid");
        
    }else{

        /* Todo esto es para que agregue un color verde en caso de que si ingresen los datos */
        document.getElementById("txtCorreo").classList.remove("is-invalid");
        document.getElementById("txtCorreo").classList.add("is-valid");
        document.getElementById("valCorreo").style.display = "none";

    }

    if (contraseña.length == 0) {
        /* Se cambia el "none" por un "inline" para que aparezca */
        document.getElementById("valContraseña").style.display = "inline";

        /* Se usa para darle una clase a el input que tenga componentes del bootstrap y agregue diseños en momentos especificos 
        En este caso agrega un color rojo al input en caso de que no ingresen nada*/
        document.getElementById("txtContraseña").classList.add("is-invalid");
        
    }else{

        /* Todo esto es para que agregue un color verde en caso de que si ingresen los datos */
        document.getElementById("txtContraseña").classList.remove("is-invalid");
        document.getElementById("txtContraseña").classList.add("is-valid");
        document.getElementById("valContraseña").style.display = "none";


    }

}

document.getElementById("valNombre").style.display = "none";
document.getElementById("valRut").style.display = "none";
document.getElementById("valCorreo").style.display = "none";
document.getElementById("valContraseña").style.display = "none";



document.getElementById("ocultar").style.display = "none";


function pass(){
    let input = document.getElementById("txtContraseña")
    if (input.type == "password"){
        input.type = "text";
        document.getElementById("ocultar").style.display = "inline";
        document.getElementById("mostrar").style.display = "none";
    }else{
        input.type = "password";
        document.getElementById("ocultar").style.display = "none";
        document.getElementById("mostrar").style.display = "inline";
    }
}


