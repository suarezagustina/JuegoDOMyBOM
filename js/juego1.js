let numeroMagico = Math.floor(Math.random() * 100) + 1

        let intentos = 0
    
        function adivinarNumero() {
          let numeroUsuario = document.getElementById("numeroUsuario").value
          intentos++
          if 
          (numeroUsuario == numeroMagico) 
          {
            alert("¡Felicitaciones! Adivinaste el número en " + intentos + " intentos.")
          } 
          else if 
          (numeroUsuario > numeroMagico) 
          {
            alert("El número que ingresaste es mayor que el número mágico. Intenta nuevamente.")
          } else 
          {
            alert("El número que ingresaste es menor que el número mágico. Intenta nuevamente.")
          }
        }