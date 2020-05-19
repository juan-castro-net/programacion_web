function showMessage(){
	alert("Hello World");		
}
function cambiarContenido(){
	document.getElementById('mensaje').innerHTML = "Texto Nuevo";
}
function cambiarValor(){
	document.getElementById('nombre').value = "Jose Luis";
}
function depurar(){
	console.log("Texto para la consola");
	console.log(document.getElementById('nombre').value);
}