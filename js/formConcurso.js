// JQuery EVENTOS

function validar() {

	var txt_input;
	var len_input;
	var expr_input;
	
	
	/*apellidoInput
	nombresInput
	dniInput
	selProvincia
	correoInput
	telInput*/
	
	
	// Validar APELLIDO
	txt_input  = document.getElementById('apellidoInput').value;		// $('#txtAntecedentes').val();
	expr_input = /^[A-Za-z \/ÑÁÉÍÓÚñáéíóúÜü']{2,30}$/;
	if (txt_input.length < 2) {
		alert('( ! ) ATENCIÓN:\n\nIngrese APELLIDO');
		frmConcurso.apellidoInput.focus()
		return (false);
	} else if (!expr_input.test(txt_input)) {
		alert('( ! ) ATENCIÓN:\n\nSe ingresaron caracteres No Válidos en el campo \"APELLIDO\".');
		frmConcurso.apellidoInput.focus()
		return (false);
	}


	// Validar NOMBRE
	txt_input  = document.getElementById('nombresInput').value;
	expr_input = /^[A-Za-z \/ÑÁÉÍÓÚñáéíóúÜü']{2,30}$/;
	if (txt_input.length < 2) {
		alert('( ! ) ATENCIÓN:\n\nIngrese NOMBRE');
		frmConcurso.nombresInput.focus()
		return (false);
	} else if (!expr_input.test(txt_input)) {
		alert('( ! ) ATENCIÓN:\n\nSe ingresaron caracteres No Válidos en el campo \"NOMBRE\".');
		frmConcurso.nombresInput.focus()
		return (false);
	}

	
	// Validar DNI
	txt_input = parseInt(document.getElementById('dniInput').value); //($('#dniInput').val());
	if (isNaN(txt_input) || (txt_input < 1000000) || (txt_input > 50000000))  {
		alert('( ! ) ATENCIÓN:\n\nIngrese \"DNI\" válido.');
		frmConcurso.dniInput.focus()
		return (false);
	}
	

	
	// Validar PROVINCIA
	if (document.frmConcurso.selProvincia.selectedIndex==0) {
		alert('( ! ) ATENCIÓN:\n\n\tSeleccione PROVINCIA');
		frmConcurso.selProvincia.focus();
		return (false);
	}
	
	
	// Validar CORREO ELECTRÓNICO
	txt_input  = document.getElementById('correoInput').value;		//$('#correoInput').val();
	expr_input = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if (txt_input.length < 7 || txt_input.length > 80) {
		alert('( ! ) ATENCIÓN:\n\nEl campo \"CORREO ELECTRÓNICO\" debe tener entre 7 y 80 caracteres.');
		frmConcurso.correoInput.focus()
		return (false);
	} else if (!expr_input.test(txt_input)) {
		alert('( ! ) ATENCIÓN:\n\nIngresa \"CORREO ELECTRÓNICO\" válido.');
		frmConcurso.correoInput.focus()
		return (false);
	}
	
	
	
	// Validar TELÉFONO
	txt_input  = document.getElementById('telInput').value; 	//$('#telInput').val();
	expr_input = /^[\+]?[(]?[0-9]{3,5}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
	if (txt_input.length < 11 || txt_input.length > 16) {
		alert('( ! ) ATENCIÓN:\n\nEl campo \"TELÉFONO\" debe tener entre 11 y 16 caracteres.');
		frmConcurso.telInput.focus()
		return (false);
	} else if (!expr_input.test(txt_input)) {
		alert('( ! ) ATENCIÓN:\n\nSe ingresaron caracteres No Válidos en el campo \"TELÉFONO\" o el campo \"TELÉFONO\" está incompleto.');
		frmConcurso.telInput.focus()
		return (false);
	}
	
	
	if (!document.getElementById('checkTerms').checked) {
		alert('( ! ) ATENCIÓN:\n\nDebe aceptar los términos y condiciones');
		frmConcurso.checkTerms.focus()
		return (false);
	}
	

	return (true);
	
}