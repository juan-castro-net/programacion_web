function ajax(){
  var url = "https://raw.githubusercontent.com/juancasi/programacion_web/master/chapter_04/src/json/datos/productos.json";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}


function get_productos(){
	
	var items = "";
	for (var i=1; i<=2; i++){
		var item = '<div class="media">';
	    item += '<img src="images/producto_0' + i + '.jpg" class="align-self-start mr-3" alt="...">';
	    item += '<div class="media-body">';
	    item += '<h5 class="mt-0">Producto ' + i + '</h5>';
	    item += '<p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>';
	    item += '</div>';
	    item += '</div>';

	    items += item;
	}

    document.getElementById("div_productos").innerHTML = items;
}


function mostrar_productos(respuesta){
	var data_json = JSON.parse(respuesta);
    var productos = data_json.productos;

	var items = "";
	for (var i=0; i<productos.length; i++){
		var item = '<div class="media">';
	    item += '<img src="' + productos[i].foto + '" class="align-self-start mr-3" alt="...">';
	    item += '<div class="media-body">';
	    item += '<h5 class="mt-0">' + productos[i].nombre + '</h5>';
	    item += '<p>'+ productos[i].descripcion + '</p>';
	    item += '</div>';
	    item += '</div>';

	    items += item;
	}
	document.getElementById("div_productos").innerHTML = items;
}


function get_productos_json() {
	var url = "https://raw.githubusercontent.com/juancasi/programacion_web/master/chapter_04/src/json/datos/productos.json";	
  	
  	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
      		console.log(this.responseText);
      		//var respuesta = this.responseText;
      		mostrar_productos(this.responseText);
    	}
  	};
  	xhttp.open("GET", url, true);
  	xhttp.send();
}
