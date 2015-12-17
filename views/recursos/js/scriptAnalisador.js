$(document).ready(function(){
	$('button').click(function(){
		$('#titulo').html("<b>Testando...</b>");
		$.getJSON("./myFile.json",function(result){
			frase = result[0].commit.message;
		//var frase = "primeiro commit closed #2";
		var palavra = "close"
		var ocorrencia = "";
		if(frase.search(palavra) >= 0){
			if(frase.search("#") >= 0){
				ocorrencia = frase.charAt(frase.search("#")) + frase.charAt(frase.search("#")+1);
				document.getElementById("paragrafo").innerHTML = ocorrencia;	
				paragrafo = ocorrencia;		
			}
		}else{
			document.getElementById("paragrafo").innerHTML = "nada";
			paragrafo = "nada";
		}
		});
	});
	
});

