
      // server.js
      function calculate() {
        // Obtén los valores de los campos de entrada
        const percentage = document.getElementById('percentage').value;
        const total = document.getElementById('total').value;
    
        // Calcula el resultado
        const result = (percentage / 100) * total;
    
        // Muestra el resultado
        document.getElementById('result').innerText = `Resultado: ${result}`;
    }