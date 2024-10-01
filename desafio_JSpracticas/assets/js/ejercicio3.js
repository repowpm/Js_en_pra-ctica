document.querySelector("#btn-sumar").addEventListener("click", function() {
    let num1 = document.getElementById("valor1").value;
    let num2 = document.getElementById("valor2").value;
    let resultado = sumar(num1, num2);
    document.querySelector(".resultado").innerHTML = resultado;
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
  });
  
  document.querySelector("#btn-restar").addEventListener("click", function() {
    let num1 = document.getElementById("valor1").value;
    let num2 = document.getElementById("valor2").value;
    let resultado = restar(num1, num2);
    if (resultado < 0) {
      resultado = 0;
    }
    document.querySelector(".resultado").innerHTML = resultado;
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
  });
  
  function sumar (a, b){
    let resultado = parseInt(a) + parseInt(b);
    return resultado
  }
  
  function restar (a, b){
    let resultado = parseInt(a) - parseInt(b);
    return resultado
  }