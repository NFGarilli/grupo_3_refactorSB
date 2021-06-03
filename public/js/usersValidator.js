window.onload = function() {
    let formulario = document.querySelector ("form.login-form");

    console.log(formulario);

    formulario.addEventListener("submit", function(e) {
        
        let errores = [];

        let userName = document.querySelector("input.name");
        let userLastName = document.querySelector("input.lastName");
        let userEmail = document.querySelector("input.email");
        let userPassword = document.querySelector("input.password");
        let userAvatar = document.querySelector("input.avatar");

        let expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
        let expPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
        let fileExtension =  productImg.value.split('.').pop();
        let acceptedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

        // let fileExtension = path.extname(userAvatar.value);

        if( userName.value == "") {
            errores.push("Tienes que escribir un nombre");            
        } else if (userName.value.length < 3 ){
            errores.push("Tienes que escribir un nombre de mas de 3 caracteres.");      
        } else {
            formulario.userLastName.focus()
        };

        if( userLastName.value == "") {
            errores.push("Tienes que escribir un apellido");                      
        } else if (userLastName.value.length <3 ){
            errores.push("Tienes que escribir un apellido de mas de 3 caracteres.");    
        } else {
            formulario.userEmail.focus();
        };

        if( userEmail.value == "") {
            errores.push("Tienes que escribir un formato de email valido");            
        } else if (!expresion.test(userEmail.value)){
            errores.push("El email debe ser un formato valido");
        } else {
            formulario.userPassword.focus();
        };
        if( userPassword.value == "") {
            errores.push("La contraseña no puede ser vacia");            
        } else if (!expPassword.test(userPassword.value)){
            errores.push("Deben ser al menos 8 caracteres, un numero, una mayuscula y un caracter especial")
        } else {
            formulario.userAvatar.focus();
        };

        if( userAvatar.value == "") {
            errores.push("Debes subir una foto.");            
        } else if (!acceptedExtensions.includes(fileExtension)){
            errores.push('Las extensiones de archivo permitidas son ' + acceptedExtensions.join(', '));
        };
        
        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector('div.errores ul')
            
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }
        } else {
            alert("La validación fue exitosa")
            formulario.submit();
        }
    })
} 