function mostrar(index){
	if (index == 1){
		document.getElementById('foto').src="images/foto1.jpeg";
	}
	else{
		document.getElementById('foto').src="images/foto2.jpeg";
	}
}

function bordear(index){
	if (index == 1){
		document.getElementById('foto').className = "estilo1";
	}
	else{
		document.getElementById('foto').className = "estilo2";
	}
}
