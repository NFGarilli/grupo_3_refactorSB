window.onload = function() {
    let productForm = document.querySelector ("#product-form");

    productForm.addEventListener("submit", function(e) {
        

        console.log(this.name);
        let errores = [];
         console.log(productForm);

        let productName = document.querySelector(this.name);
        let productDescription = document.querySelector(this.description);
        let productImg = document.querySelector(this.img);
         let productGender = document.querySelector(this.gender);
         let productCategory = document.querySelector(this.category);
         let productColor = document.querySelector(this.colors);
         let productSize = document.querySelector(this.sizes);
         let productPrice = document.querySelector(this.price);        
        
         let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

         // let fileExtension = path.extname(productAvatar.value);
          

         if( productName.value == "") {
             errores.push("Nombre comercial del producto");            
         } else if (productName.value.length < 5 ){
             errores.push("Tienes que escribir un nombre de mas de 5 caracteres.");      
         } else {
             formulario.productDescription.focus()
         };

         if( productDescription.value == "") {
             errores.push("Descripción del producto");                      
         } else if (productDescription.value.length <20 ){
             errores.push("Tienes que escribir un minimo de 20 caracteres.");    
         } else {
             formulario.productDescription.focus();
         };
         if( productGender.value == "") {
             errores.push("Genero del producto");            
         } else if (productGender.value.length < 4 ){
             errores.push("Tienes que escribir al menos 4 caracteres.");      
         } else {
             formulario.productLastName.focus()
         };
         if( productCategory.value == "") {
             errores.push("Categoría del producto");            
         } else if (productCategory.value.length < 4 ){
             errores.push("Tienes que escribir al menos 4 caracteres.");      
         } else {
             formulario.productLastName.focus()
         };
         if( productColor.value == "") {
             errores.push("Color del producto");            
         } else if (productName.value.length < 4 ){
             errores.push("Tienes que escribir al menos 4 caracteres.");      
         } else {
             formulario.productLastName.focus()
         };
         if( productSize.value == "") {
             errores.push("Talle del producto");            
         } else if (productName.value.length < 2 ){
             errores.push("Tienes que escribir al menos 2 caracteres.");      
         } else {
             formulario.productLastName.focus()
         };
         if( productPrice.value == "") {
             errores.push("Precio del producto");            
         } else if (productName.value.length < 2 ){
             errores.push("Tienes que escribir al menos 2 caracteres.");      
         } else {
             formulario.productLastName.focus()
         };         

       //  if( productImg.value == "") {
       //      errores.push("Debes subir una foto.");            
        // } else if (!acceptedExtensions.includes(fileExtension)){
        //     errores.push('Las extensiones de archivo permitidas son ' + acceptedExtensions.join(', '));
         //};
        
        e.preventDefault();
        if (errores.length > 0) {
            // e.preventDefault();
            let ulErrores = document.querySelector('div.errores ul')
            
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }
        } else {
            alert("El producto se cargo correctamente")
            formulario.submit();
        }
    })
} 