//Declaración de variables
//Lenguajes
var Csharp="//Hello World in C#\n"+
"class HelloWorld\n"+
"{\n"+
    "\tstatic void Main()\n"+
    "\n\t{"+
        "\n\t\tSystem.Console.WriteLine(\"Hello, World!\");"+
    "\n\t}"+
"\n}";

var Java="// Hello World in Java \n"+

"class HelloWorld { \n"+
"\tstatic public void main( String args[] ) { \n"+
    "\t\tSystem.out.println( \"Hello World!\" ); \n"+
  "\t}\n"+
"}";
var Kotlin="// Hello world in Kotlin \n"+
"fun main(args : Array<String>) { \n"+
    "\tprintln(\"Hello, world!\") \n"+
"}";

//Palabras reservadas

var Prcsharp="abstract as base bool break byte case \n"+
"catch char checked class const continue decimal default delegate do double else enum event \n"+
"explicit extern false finally fixed float for foreach goto if implicit in int interface \n"+
"internal is lock  long  namespace new null object operator out override params private protected \n"+
"public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this \n"+
"throw true try typeof uint ulong unchecked unsafe ushort using virtual void volatile while \n"

var PrJava="abstract	continue	for	new	switch assert	default	goto	package	synchronized boolean	do	if	private	this \n"+
"break	double	implements	protected	throw byte	else	import	public	thows \n"+
"case	enum	instanceof	return	transient catch	extends	int	short	try \n"+
"char	final	interface	static	void class	finally	long	strictfp \n"+
"volatile const	float	native	super	while"

var PrKotlin="as as? break class continue do else false for fun if in !in \n"+
"interface is !is null object package return super this throw true try typealias \n"+
"typeof val var when while"


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