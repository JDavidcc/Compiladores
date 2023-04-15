// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onchange = function() {
  document.getElementById("modal-header").innerHTML="Palabras Reservadas de "+ document.getElementById("myBtn").value;
  
  var opcion=document.getElementById("myBtn").value;
    if (opcion=="c#"){
      document.getElementById("modal-body").innerHTML=Prcsharp;
        //document.getElementById("Texto").value=Csharp;
    }
    else if (opcion=="Java"){
      document.getElementById("modal-body").innerHTML=PrJava;
        //document.getElementById("Texto").value=Csharp;
    }
    else if (opcion=="Kotlin"){
      document.getElementById("modal-body").innerHTML=PrKotlin;
        //document.getElementById("Texto").value=Csharp;
    }
    else{
      document.getElementById("modal-body").innerHTML="En los lenguajes informáticos,\n"+
      "una palabra reservada es una palabra que tiene un significado \n"+
      "gramatical especial para ese lenguaje y no puede ser utilizada \n"+
      "como un identificador de objetos en códigos del mismo, como pueden ser las variables.";
    }
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}