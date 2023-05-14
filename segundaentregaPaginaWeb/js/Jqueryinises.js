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