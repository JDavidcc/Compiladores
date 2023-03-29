//Declaración de variables

var Csharp="//Hello World in C#\n"+
"class HelloWorld\n"+
"{\n"+
    "\tstatic void Main()\n"+
    "\n\t{"+
        "\n\t\tSystem.Console.WriteLine(\"Hello, World!\");"+
    "\n\t}"+
"\n}";

var Java="// Hello World in Java\n"+

"class HelloWorld {\n"+
"\tstatic public void main( String args[] ) {\n"+
    "\t\tSystem.out.println( \"Hello World!\" );\n"+
  "\t}\n"+
"}";
var Kotlin="// Hello world in Kotlin\n"+
"fun main(args : Array<String>) {\n"+
    "\tprintln(\"Hello, world!\")\n"+
"}";

//Declaración de funciónes
 function Seleccionar(){
    var opcion=document.getElementById("Ejemplo").value;
    if (opcion=="c#"){
        document.getElementById("Texto").value=Csharp;
    }
    else if(opcion=="Java"){
        document.getElementById("Texto").value=Java;
    }
  else if(opcion=="Kotlin") {
        document.getElementById("Texto").value=Kotlin;
  }
  else if (opcion=="Limpio"){
    document.getElementById("Texto").value="";
  }
}

function Descargar(){
    alert("Vamos a descargar archivo");
    var texto=document.getElementById("Texto").value;
    var descarga=document.createElement("a");
    descarga.setAttribute("href","data:Text/plain;charset=utf-8,"+encodeURIComponent(texto));
    descarga.setAttribute("download", "codigofuente.txt");
    descarga.style.display="none";
    document.body.appendChild(descarga);
    descarga.click();
    document.body.removeChild(descarga);
}

function taquitosDeCabeza (evento){
if (evento.target.files[0]){
    let reader=new FileReader();
    reader.onload=function(e){
        document.getElementById("Texto").value= e.target.result;
    }
    reader.readAsText(evento.target.files[0]);
}
else{
    document.getElementById("Texto").value="Error al cargar el archivo";
}
}

window.addEventListener("load",()=>{
    document.getElementById("ArchivoSubido").addEventListener("change",taquitosDeCabeza );
}

);