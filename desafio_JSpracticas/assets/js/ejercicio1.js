document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
  
    let textoCampos = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/; 
  
    let errores = [];
  
    if (!textoCampos.test(nombre)) {
      errores.push("El nombre es requerido");
      document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
    } else {
      document.querySelector(".errorNombre").innerHTML = "";
    }
  
    if (!textoCampos.test(asunto)) {
      errores.push("El asunto es requerido");
      document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
    } else {
      document.querySelector(".errorAsunto").innerHTML = "";
    }
  
    if (!textoCampos.test(mensaje)) {
      errores.push("El mensaje es requerido");
      document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido";
    } else {
      document.querySelector(".errorMensaje").innerHTML = "";
    }
  
    if (errores.length > 0) {
      document.querySelector(".resultado").innerHTML = "Por favor, revise los campos";
    } else {
      document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito!!!";
    }
  });