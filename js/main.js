var imprimir = document.getElementById("clientes");

function mostrarData(){
	var nombre = document.getElementById("Nombre-Dueño").value;
	var apellido = document.getElementById("Apellido").value;
	var correo = document.geteElementById("Email").value;
	var direccion = document.getElementById("Direccion").value;
	var telefono = document.getElementById("Telefono").value;
	var otros = ("<br>" + "nombre:" + "<br>" + nombre + "<br>" + "apellido:" + apellido + "<br>" + "correo:" + correo + "<br>" + "direccion:" + direccion + "<br>" + "telefono:" + telefono + "<br>")

imprimir.innerHTML = (otros);
}