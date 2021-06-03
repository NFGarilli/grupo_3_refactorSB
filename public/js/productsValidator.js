window.onload = function() {
    let productForm = document.querySelector("#product-form");
    console.log(productForm);

    productForm.addEventListener("submit", function(e) {   
             
        let errores = [];
                 
        let productName = productForm.name;
        let productDescription = productForm.description;
        let productImg = productForm.img;
        let productGender = productForm.gender;
        let productCategory = productForm.category;
        let productColor = productForm.colors;
        let productSize = productForm.sizes;
        let productPrice = productForm.price;     

        //console.log(productName.value, productDescription.value);
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];        
        // let fileExtension = path.extname(productAvatar.value);               
         if( productName.value == "") {
             errores.push("Nombre comercial del producto");            
         } else if (productName.value.length < 5 ){
             errores.push("El Nombre del producto debe tener al menos 5 caracteres.");      
         } else {
             productDescription.focus()
         };
         if( productDescription.value == "") {
             errores.push("Descripción del producto");                      
         } else if (productDescription.value.length <20 ){
             errores.push("La descripcion del producto debe tener un minimo de 20 caracteres.");    
         } else {
             productGender.focus();
         };
         if( productGender.value == "") {
             errores.push("Genero del producto");            
         } else if (productGender.value.length < 4 ){
             errores.push("El Genero del producto debe tener al menos 4 caracteres.");      
         } else {
             productCategory.focus()
         };
         if( productCategory.value == "") {
             errores.push("Categoría del producto");            
         } else if (productCategory.value.length < 4 ){
             errores.push("La categoria del producto debe de tener al menos 4 caracteres.");      
         } else {
             productColor.focus()
         };
         if( productColor.value == "") {
             errores.push("Color del producto");            
         } else if (productColor.value.length < 4 ){
             errores.push("El color del producto debe de tener al menos 4 caracteres.");      
         } else {
             productSize.focus()
         };
         if( productSize.value == "") {
             errores.push("Talle del producto");            
         } else if (productSize.value.length < 2 ){
             errores.push("El talle del producto debe tener al menos 2 caracteres.");      
         } else {
             productPrice.focus()
         };
         if( productPrice.value == "") {
             errores.push("Precio del producto");            
         } else if (productPrice.value.length < 2 ){
             errores.push("El Precio del producto debe ser mayor a 2 cifras.");      
         };
                 

        if( productImg.value == "") {
            errores.push("Debes subir una foto.");            
        } else if (!acceptedExtensions.includes(fileExtension)){
            errores.push('Las extensiones de archivo permitidas son ' + acceptedExtensions.join(', '));
         };
        
         e.preventDefault();
        if (errores.length > 0) {
            // e.preventDefault();
            let ulErrores = document.querySelector('div.errores ul')
            
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += '<li>' + errores[i] + '</li>'
            }
        } else {
            alert("El producto se cargo correctamente")
           productForm.submit(); 
        }
    })
} 