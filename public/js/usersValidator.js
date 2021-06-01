window.addEventListener("load", function() {
    let customerLogin = document.querySelector ("form.customer-login");

    customerLogin.addEventListener(""submit", function(e) {
        
        let errores = [];

        let userName = document.querySelector("input.name");

        if( userName.value == "") {
            errores.push("No te olvides de contarnos como te llamas!!!"):            
        } else if (userName.value.length <3 ){
            alert("Tu nombre debe tener al menos 3 letras!!");
        }
        let userLastName = document.querySelector("input.lastName");

        if( userLastName.value == "") {
            errores.push("No te olvides de contarnos como es tu apellido!!!"):            
        } else if (userLastName.value.length <3 ){
            alert("Tu apellido debe tener al menos 3 letras!!");
        }
                //IMPORTANTE VER VALIDACIONES DE EMAIL

        if( userEmail.value == "") {
            errores.push("No te olvides de dejarnos tu mail, es mas facil contactarte!!!"):            
        } else if (userLastName.value.email ){
            alert("Debe ser un formato valido!!");
        }
        //IMPORTANTE VER VALIDACIONES DE PASSWORD
        if( userPassword.value == "") {
            errores.push("Deben ser al menos 8 caracteres, una Mayuscula, un número y para cerrar un caracter especial!!!"):            
        } else if (userName.value.length < 8 ){
            alert("Revisa nuevamente, es por tu seguridad!!");
        }
        
        
        e.preventDefault();


    })
}) 