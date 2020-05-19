function validar(){
	var edad = document.getElementById("edad").value;
	console.log(edad);
	if (edad < 0 || edad > 120){
		alert("Edad no valida");
		return false;
	}
	else{
		return true;
	}
}

function validar2(){
	var cajonEdad = document.getElementById("edad");
	
	cajonEdad.setCustomValidity("Edad no valida");

	console.log(edad);
	if (cajonEdad.checkValidity() == false){

		if (cajonEdad.validity.rangeOverflow == true){
			alert("La edad debe ser menor que " + cajonEdad.max);
		}
		else{
			alert(cajonEdad.validationMessage);
		}
		return false;
	}
	else{
		return true;
	}
}
