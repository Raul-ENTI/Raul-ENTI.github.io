let nombre_field;
let pass_field;
let nacimiento_field;
let color_field;
let edad_field;
let subscribe_field;
let contact_form;
let fecha_field;
let comentario_field;

document.addEventListener("DOMContentLoaded", (event) => {
	nombre_field = document.getElementById("campo-nombre");
	pass_field = document.getElementById("campo-pass");
	color_field = document.getElementById("campo-color");
	edad_field = document.getElementById("campo-numero");
	comentario_field = document.getElementById("campo-comentario");
	fecha_field = document.getElementById("campo-fecha");
	subscribe_field = document.getElementById("campo-checkbox");
	contact_form = document.getElementById("contact-form");
	
	subscribe_field.addEventListener("click", function(event){
		if (event.target.checked){
			console.log("JAJAJAJA! Tu alma es mia");
		}
		else {
			console.log("Acepta!!!!!");
		}
	});
	
	contact_form.addEventListener("submit", (event) => {
		let send = true;
		
		if(nombre_field.value.length <= 2 || nombre_field.value.length > 32){
			send = false;
			nombre_field.style.border = "1px solid #ff0000";
			
		}
		else{
			nombre_field.style.border = "1px solid #00ff00";
		}
		if (fecha_field.value == "" || fecha_field.value.length != 10){
			send = false;
			fecha_field.style.border = "1px solid #ff0000";
		}
		else {
		
			let fecha = fecha_field.value.split("-");
			let year = parseInt(date[0]);
			let month = parseInt(date[1]);
			let day = parseInt(date[2]);
			
			console.log(date[0], date[1], date[2]);
			console.log(year,month,day);
			
			if (isNaN(year) || isNaN(month) || isNaN(day)){
				send = false;
				fecha_field.style.border = "1px solid red";
			}
			else{
				if ( year <= 0 || year >= 2025){
					send = false;
					fecha_field.style.border = "1px solid red";
				}
				else if(month <= 0 || month > 12){
					send = false;
					fecha_field.style.border = "1px solid red";
				}
				else if (day <= 0 || day > 30){
					send = false;
					fecha_field.style.border = "1px solid red";
				}
				else{
					fecha_field.style.border = "1px solid green";
				}
			}
}			
		if (color_field.value.length != 7){
			send = false;
			color_field.style.border = "1px solid red";
		}
		else{
			if (color_field.value[0] != "#"){
				send = false;
				color_field.style.border = "1px solid red";
			}
			else{
				color_field.style.border = "1px solid green";
			}
		}
		if (comentario_field.value.length < 5 || comentario_field.value.length > 255){
			send = false;
			comentario_field.style.border = "1px solid red";
		}
		else{
			comentario_field.value.replace(/'/g, "\\'");
		}
		
		if(!send){
			event.preventDefault();
		}
		
	});
	
});