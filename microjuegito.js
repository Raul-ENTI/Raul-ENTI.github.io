		let contador = 0;

		let numero = Math.floor(Math.random()* 100) +1;

		let attempt_max = 10;
		
		function compara_numero(){

			let submit_input = document.getElementById("campo-enviar");

			submit_input.value = "Adivina! ("+contador+")";
			
			let my_num_input = document.getElementById("numero");
			
			let num = document.getElementById("numero").value;
			
			let resultado = document.getElementById("resultado");
			if (num < 1 || num > 100 || num == ""){
				return;
			}
			else{
				contador++;
			if (contador === attempt_max){
				submit_input.disabled = true;
				resultado.innerHTML = "<em class=\"error\"> Ya has realizado 10 intentos</em>";
				return;
			}
			if (num > numero){
			resultado.innerHTML = "<em class=\"error\">El numero introducido es mas grande que "+num+"</em>";
			<!-- resultado.style.color = "red"; -->
			my_num_input.style.border = "1px solid #ff0000";
			}
			else if (num < numero){
			resultado.innerHTML = "<em class=\"error\">El numero introducido es mas pequeño que "+num+"</em>";
			<!-- resultado.style.color = "red"; -->
			my_num_input.style.border = "1px solid #ff0000";

			}
			else {
			resultado.innerHTML = "<em class=\"win\">Has Ganado era "+num+"</em>";
			<!-- resultado.style.color = "green"; -->
			my_num_input.style.border = "1px solid #00ff00";
			
			}

	
			my_num_input.value = "";
			my_num_input.focus();
		}
		}