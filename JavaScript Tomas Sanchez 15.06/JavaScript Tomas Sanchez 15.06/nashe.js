
      //inicio Calculos//

function sumarNumeros() {
      var num1 = parseInt(document.getElementById("num1").value);
      var num2 = parseInt(document.getElementById("num2").value);
      var sumaresultado = num1 + num2;
      console.log("que miras bobo, la suma es " + sumaresultado);
      
      if (isNaN(num1) || isNaN(num2)) {
          
        alert("No ingresaste ningun numero"); 
        return
      }
      
      alert("Sumando...")
 
  var htmlresultado = document.getElementById("idresultado");
        htmlresultado.innerHTML = "el resultado es: " + sumaresultado;
        htmlresultado.style.color = "green";
    
    }


    function restarNumeros() {
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        var restresultado = num1 - num2;
        console.log("que miras bobo, la resta es " + restresultado);
        
        if (isNaN(num1) || isNaN(num2)) {
          
          alert("No ingresaste ningun numero"); 
          return
        }
        
        alert("Restando...")

        var htmlresultado = document.getElementById("idresultado");
        htmlresultado.innerHTML = "el resultado es: " + restresultado;
        htmlresultado.style.color = "blue";
        
        
        
        
      }
      function multiplicarNumeros() {
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        var multresultado = num1 * num2;
        console.log("que miras bobo, la multiplicacion es " + multresultado);
        
        if (isNaN(num1) || isNaN(num2)) {
          
          alert("No ingresaste ningun numero"); 
          return
        }
        
        alert("Multiplicando...")

      

        var htmlresultado = document.getElementById("idresultado");
        
      

          htmlresultado.innerHTML = "el resultado es: " + multresultado;
          htmlresultado.style.color = "red";
          
      }

      //Fin Calculos//


      //inicio caja de comentarios//
      

      function agregarComentario() {
        // Obtener el valor del campo de comentario
        var comentarioInput = document.getElementById("comentario").value;
        
         
        
      
        // Verificar si el campo de comentario está vacío
        if (comentarioInput === "") {
          alert("Por favor ingresa un comentario")
          return; // Si no se ingresó ningún texto en el imput, salir de la función sin cambiar ni agregar nada nuevo. (la función termina aca)
        }
      
        // Obtener el contenedor de comentarios
        var contenedorComentarios = document.getElementById("contenedor-comentarios");
      
        // Crear un nuevo elemento div para el comentario
        var nuevoComentario = document.createElement("div");
      
        // Establecer el contenido del nuevo comentario con el valor del campo de comentario
        nuevoComentario.innerHTML = comentarioInput;
      
        // Agregar la clase "comentario" al nuevo comentario
        nuevoComentario.classList.add("comentario");
      
        // Agregar el nuevo comentario al contenedor de comentarios
        contenedorComentarios.appendChild(nuevoComentario);
      
        // Limpiar el campo de comentario después de agregar el comentario
        document.getElementById("comentario").value = "";
        var h2Element = document.getElementById("H2coment");
        h2Element.innerHTML = "¡Gracias por tu comentario!";
      }
      
       //fin caja de comentarios//






  


     

