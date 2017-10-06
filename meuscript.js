// JavaScript 



function geranumero(){
	document.querySelector("#num1").value=Math.floor(3+Math.random()*100);
	document.querySelector("#num2").value=Math.floor(3+Math.random()*100);
	
}

function verificasoma(){
	var n1=parseFloat(document.querySelector("#num1").value);
	var n2=parseFloat(document.querySelector("#num2").value);
	var resultado=parseFloat(document.querySelector("#resultado").value);
	var result=n1+n2;

	if (resultado == result){
		document.querySelector("#banner").innerHTML="Resposta correta! Siga para o <a href='num2.html'>próximo desafio.</a>";
	} else {
		alert("Valor incorreto!");
		geranumero();
	}

	
	document.querySelector("#resultado").value=resultado;
	
}

function verificasub(){
	var n1=parseFloat(document.querySelector("#num1").value);
	var n2=parseFloat(document.querySelector("#num2").value);
	var resultado=parseFloat(document.querySelector("#resultado").value);
	var result=n1-n2;

	if (resultado == result){
		document.querySelector("#banner").innerHTML="Resposta correta! Siga para o <a href='num3.html'>próximo desafio.</a>";
	} else {
		alert("Valor incorreto!");
		geranumero();
	}

	
	document.querySelector("#resultado").value=resultado;
	
}

function verificamulti(){
	var n1=parseFloat(document.querySelector("#num1").value);
	var n2=parseFloat(document.querySelector("#num2").value);
	var resultado=parseFloat(document.querySelector("#resultado").value);
	var result=n1*n2;

	if (resultado == result){
		document.querySelector("#banner").innerHTML="Resposta correta! Siga para o <a href='num4.html'>próximo desafio.</a>";
	} else {
		alert("Valor incorreto!");
		geranumero();
	}

	
	document.querySelector("#resultado").value=resultado;
	
}

function verificadiv(){
	var n1=parseFloat(document.querySelector("#num1").value);
	var n2=parseFloat(document.querySelector("#num2").value);
	var resultado=parseFloat(document.querySelector("#resultado").value);
	var result=n1/n2;

	if (resultado == result){
		document.querySelector("#banner").innerHTML="PARABÉNS!! Você venceu o desafio de matemática! Volte ao <a href='index.html'>início do jogo.</a>";
	} else {
		alert("Valor incorreto!");
		geranumero();
	}

	
	document.querySelector("#resultado").value=resultado;
	
}