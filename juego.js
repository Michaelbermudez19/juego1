var vida1 = 100;
var vida2 = 100;
var messageContainer = document.getElementById('messageContainer');


function ataqueEnemigo(potencia) { 
    defensa= Math.floor(Math.random()*4);
    appendMessage(defensa);
    cambiarTurno();

    if (vida1 <= 0 || vida2 <= 0) {
        return; // Verificar si el juego ya ha terminado
    }
    cambiarTurno();
    mensajetaque();
    ///ataque de agua 
    if(potencia==0){
        appendMessage("El judador ataco con agua");
        if(defensa==0){
            vida1 -= 10
            appendMessage("El Enemigo se defendio con agua, su vida es "+vida1)
        }else if(defensa==1){
                vida1 -= 20
                appendMessage("El Enemigo se defendio con fuego, su vida es "+vida1) 
        }else{
                vida1 -= 0
                appendMessage("El Enemigo se defendio con electricidad, su vida es "+vida1)
        }
        ///ataque de fuego
    }else if(potencia==1){
        appendMessage("El judador ataco con fuego");
        if(defensa==0){
            vida1 -= 0
            appendMessage("El Enemigo se defendio con agua, su vida es "+vida1)
        }else if(defensa==1){
                vida1 -= 10
                appendMessage("El Enemigo se defendio con fuego, su vida es "+vida1) 
        }else{
                vida1 -= 20
                appendMessage("El Enemigo se defendio con electricidad, su vida es "+vida1) 
        }
        ///ataque de electricidad
    }else{
        appendMessage("El judador ataco con electricidad");
        
            if(defensa==0){
            vida1 -= 20
            appendMessage("El Enemigo se defendio con agua, su vida es "+vida1)
            }else if(defensa==1){
                vida1 -= 0
                appendMessage("El Enemigo se defendio con fuego, su vida es "+vida1) 
            }else{
                vida1 -= 10
                appendMessage("El Enemigo se defendio con electricidad, su vida es "+vida1) 
            }
}
if (vida1 <= 0) {
    appendMessage("¡Has Ganado!");
}
vidajugadores()
}

function usarescudo(potencia) { 
    ataque= Math.floor(Math.random()*4);
    appendMessage(ataque);
    if (vida1 <= 0 || vida2 <= 0) {
        return; // Verificar si el juego ya ha terminado
    }
    ///defensa de agua 
    mensajedefensa();
    if(potencia==0){
        appendMessage("El judador Utilizo escudo de agua");
        if(ataque==0){
            vida2 -= 10
            appendMessage("El Enemigo ataco con agua, nuestra vida es "+vida2)
        }else if(ataque==1){
                vida2 -= 0
                appendMessage("El Enemigo ataco con fuego, nuestra vida es "+vida2) 
        }else{
                vida2 -= 20
                appendMessage("El Enemigo ataco con electricidad, nuestra vida es "+vida2) 
        }
        ///defensa de fuego
    }else if(potencia==1){
        appendMessage("El judador utilizo escudo de fuego");
        if(ataque==0){
            vida2 -= 20
            appendMessage("El Enemigo ataco con agua, nuestra vida es "+vida2)
        }else if(ataque==1){
                vida2 -= 10
                appendMessage("El Enemigo ataco con fuego, nuestra vida es "+vida2) 
        }else{
                vida2 -= 0
                appendMessage("El Enemigo ataco con electricidad, nuestra vida es "+vida2) 
        }
        ///defensa de electricidad
    }else {
        appendMessage("El judador utilizo escudo de electricidad");
        if(ataque==0){
            vida2 -= 0
            appendMessage("El Enemigo ataco con agua, nuestra vida es "+vida2)
        }else if(ataque==1){
                vida2 -= 20
                appendMessage("El Enemigo ataco con fuego, nuestra vida es "+vida2) 
        }else {
                vida2 -= 10
                appendMessage("El Enemigo atac con electricidad, nuestra vida es "+vida2) 
        }
    }     
    vidajugadores()
}
 //cambiar turno

 var jugadoractual = 1;

 function cambiarTurno() {
     var player1 = document.getElementById("player1");
     var player2 = document.getElementById("player2");

     if (jugadoractual === 1) {
         player1.style.display = "none";
         player2.style.display = "block";
         jugadoractual = 2;
        } else {
            player1.style.display = "block";
            player2.style.display = "none";
            jugadoractual = 1;
        }
    }
    function vidajugadores(){
        var progreso1= document.getElementById("barra1");
        var progreso2= document.getElementById("barra2");
        
        progreso1.value= vida1;
        progreso2.value= vida2;

        // File2.style.value=vida2
        // document.getElementById("file").value[vida1];
        // document.getElementById("file2").value[vida2];
    }
    function mensajedefensa() {
        messageContainer.textContent = "¡Defendiendose del Ataque!";
        document.getElementById("player1").style.display = "block";
        document.getElementById("player2").style.display = "none";
    }
    function mensajetaque() {
        messageContainer.textContent = "¡Atacando al Enemigo!";
        document.getElementById("player1").style.display = "none";
        document.getElementById("player2").style.display = "block";
    }
    function appendMessage(message) {
        var newMessage = document.createElement('p');
        newMessage.innerHTML = message;
        messageContainer.appendChild(newMessage);
    }