function valida(campo){
			if (campo.value == "")
				alert("Faltan datos");
			else 	if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/))
					return "No tiene formato de RFC";
				else{
                     return "El RFC escrito es correcto: "+ campo.value;
                }
		}
function res(campo){
     document.getElementById("r1").innerHTML = valida(campo);
}