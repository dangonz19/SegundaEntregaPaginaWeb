



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


$(function(){
    $("#miFormulario").validate({
        rules:{
            txtUsuario:{
                required:true,
                minlength:10
            },
            txtContraseña:{
                required:true,
                minlength:10
            }
           
            
        },
        messages:{
            txtUsuario:{
                required:"el rut es un campo obligatorio",
                minlength:"El minimo de caracteres es de 10"
            },

            txtContraseña:{
                required:"el Nombre es un campo obligatorio",
                minlength:"El minimo de caracteres es de 10"
            }

           
        }
    })
})


function validarFormulario(){
    /* registro */
    let Usuario = document.getElementById("txtUsuario").value;
    let Contraseña = document.getElementById("txtContraseña").value;

    if (Usuario.length == 0) {
        /* Se cambia el "none" por un "inline" para que aparezca */
        
    
        /* Se usa para darle una clase a el input que tenga componentes del bootstrap y agregue diseños en momentos especificos 
        En este caso agrega un color rojo al input en caso de que no ingresen nada*/
        document.getElementById("txtUsuario").classList.add("is-invalid");
        
    }else{
    
        /* Todo esto es para que agregue un color verde en caso de que si ingresen los datos */
        document.getElementById("txtUsuario").classList.remove("is-invalid");
        document.getElementById("txtUsuario").classList.add("is-valid");
        
    
    }


    if (Contraseña.length == 0) {
        /* Se cambia el "none" por un "inline" para que aparezca */
        
    
        /* Se usa para darle una clase a el input que tenga componentes del bootstrap y agregue diseños en momentos especificos 
        En este caso agrega un color rojo al input en caso de que no ingresen nada*/
        document.getElementById("txtContraseña").classList.add("is-invalid");
        
    }else{
    
        /* Todo esto es para que agregue un color verde en caso de que si ingresen los datos */
        document.getElementById("txtContraseña").classList.remove("is-invalid");
        document.getElementById("txtContraseña").classList.add("is-valid");
        
    
    }
}


