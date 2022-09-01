function validar(){
	let nome = formContact.name.value;
	let telefone = formContact.telefone.value;
	let email = formContact.email.value;
    let menssagem = formContact.massege.value;
    let usuario = email.substring(0, email.indexOf("@"));
    let dominio = email.substring(email.indexOf("@")+ 1, email.length);
    let numeroTel = telefone.length;
	
	if(nome === ""){
		alert("Preencha o campo Nome");
		formContact.name.focus();
		return false;
	} else if(telefone === "" && 
        (numeroTel < 9)){
		alert("Preencha o campo Telefone");
		formContact.telefone.focus();
		return false;
	} else if(email === "" &&
        (usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1) ){
		alert("Preencha corretamente o campo E-mail, com um e-mail válido");
		formContact.email.focus();
		return false;
	} else if(menssagem === ""){
        alert("Preencha o campo Menssagem");
		formContact.massege.focus();
        return false;
    } else {
		document.forms["formContact"].submit();
	}
} 