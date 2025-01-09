console.log("Script loaded");

// Variable global para el número aleatorio, solo declarado una vez
let randomeNumber = Math.floor(Math.random() * 20) + 1;
//console.log("Número generado:", randomeNumber);

let contador=20;
document.querySelector(".score").textContent = contador;
// Evento del botón "Check!"
document.querySelector(".btn.check").addEventListener("click", function () {
    //console.log("Botón presionado");

    // Capturar el valor del input
    let getValue = document.querySelector(".guess").value;

    // Validar si el input está vacío
    if (getValue === "" || getValue.trim() === "") {
        document.querySelector(".message").textContent = "Add a number from 1 to 20.";
        return;
    }

    
    // Convertir a número después de validar
    getValue = Number(getValue);

    // Comparaciones
    if (getValue === randomeNumber) {
        document.querySelector(".message").textContent = "YOU WON!";


        
    } else if (getValue > randomeNumber) {
        document.querySelector(".message").textContent = "Too high!";
        if (contador === 1) { 
            document.querySelector(".message").textContent = "Game Over";
            return; // Terminar la función
        }

        contador--;
        document.querySelector(".score").textContent = contador;
    } else {
        document.querySelector(".message").textContent = "Too low!";

        if (contador === 1) { // Verificar si va a llegar a 0
            document.querySelector(".message").textContent = "Game Over";
            return; // Terminar la función
        }
        contador--;
        document.querySelector(".score").textContent = contador;
    }

   

    

});

// Evento del botón "Again"
document.querySelector(".btn.again").addEventListener("click", function() {
    document.querySelector(".message").textContent = "Start Guessing";
    
    // Limpiar input
    document.querySelector(".guess").value = "";
    
    // Generar nuevo número aleatorio
    randomeNumber = Math.floor(Math.random() * 20) + 1;
    console.log("Nuevo número generado:", randomeNumber);

    document.querySelector(".score").textContent ="20";

    randomeNumber = Math.floor(Math.random() * 20) + 1;
    contador=20;
  
});
