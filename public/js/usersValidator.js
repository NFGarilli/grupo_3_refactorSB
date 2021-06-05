window.onload = function() {
    let loginForm = document.querySelector ("#login-form");
    console.log(loginForm);

    loginForm.addEventListener("submit", function(e) {
        
        let errores = [];

        let userName = loginForm.name;
        let userLastName = loginForm.lastName;
        let userEmail = loginForm.email;
        let userPassword = loginForm.password;
        let userAvatar = loginForm.avatar;

        let expresion = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let expPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
        let fileExtension =  userAvatar.value.split('.').pop();
        let acceptedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

        if( userName.value == "") {
            errores.push("Tienes que escribir un nombre");            
        } else if (userName.value.length < 3 ){
            errores.push("Tienes que escribir un nombre de mas de 3 caracteres.");      
        } else {
            userLastName.focus()
        };

        if( userLastName.value == "") {
            errores.push("Tienes que escribir un apellido");                      
        } else if (userLastName.value.length < 3 ){
            errores.push("Tienes que escribir un apellido de mas de 3 caracteres.");    
        } else {
            userEmail.focus();
        };

        if( userEmail.value == "") {
            errores.push("Tienes que escribir un formato de email valido");            
        } else if (!expresion.test(userEmail.value)){
            errores.push("El email debe ser un formato valido");
        } else {
            userPassword.focus();
        };

        if( userPassword.value == "") {
            errores.push("La contraseña no puede ser vacia");            
        } else if (!expPassword.test(userPassword.value)){
            errores.push("Deben ser al menos 8 caracteres, un numero, una mayuscula y un caracter especial")
        } else {
            userAvatar.focus();
        };

        if( userAvatar.value == "") {
            errores.push("Debes subir una foto.");            
        } else if (!acceptedExtensions.includes(fileExtension)){
            errores.push('Las extensiones de archivo permitidas son ' + acceptedExtensions.join(', '));
        };
        
        console.log(errores)

        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector('div.errores ul')
            
            ulErrores.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }
        } else {
            alert("La validación fue exitosa")
            loginForm.submit();
        }
    })
} 