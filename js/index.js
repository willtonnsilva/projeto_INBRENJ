var perguntas = ["Ouvindo Abrão que seu sobrinho estava preso, fez sair quantos homens para resgatar Ló e sua familia?",
				 "Melquisedeque era rei de qual cidade?",
				 "Na biblia o sacerdote oferecia sacrificio e louvor a Deus, que tipo de sacrificio era esse ?",
				 "Antes de Deus Criar as igrejas, os templos, Deus estabeleceu várias leis para organizar a adoração, foi ai que ordenou a criação de um ?",
				 "Os sacerdotes trabalhavam como mediador a Deus, hoje quem é nosso mediador?",
				 "Tinha alguns homens que eram reconhecidos como sacerdotes, cite o nome do sacerdote que venho ao encontro de Abrão com pão e vinho e o abençou.",
				 "Qual o significado do nome Melquisedeque?",
				 "Quem foi Melquisedeque?",
				 "Qual O significado do nome da cidade Salém",
				 "Melquisedeque e abraão se conheceram pela a primeira vez de que?",
				 "O que abraão ofereceu a Melquisedeque?"];

var respostas = ["318 Homens", 
				"Rei de Selém", 
				"Eles ofereciam animais em sacrificio a Deus em troca do perdão dos seus pecados",
				"Tabernaculo",
				"Jesus Cristo",
				"Melquisedeque",
				"Rei da Justiça, Rei da Paz, Rei de Selém",
				"Melquisedeque era um rei e sacerdote de Deus no tempo de abraão",
				"Paz",
				"Depois da vitoria de Abraão contra Quedorlaomer ",
				"Dizimo e tudo o que tinha conquistado"];

var chocolate = ["Serenata", "Crocante", "Alo Doçura", "Surreal", "It coco", "Ao Leite", "Baton Garoto", "Milk mel", "Mundy","Opereta","Baton Garoto morango"];

$('#gera-pergunta').click(function(){

	if ($('#nome-digitado').val() != ""){

		switch($('#nome-digitado').val()){
			case chocolate[0]:
				$('#localPergunta').text(perguntas[0]);
				$('#localResposta').text(respostas[0]);
				break;
			case chocolate[1]:
				$('#localPergunta').text(perguntas[1]);
				$('#localResposta').text(respostas[1]);
				break;
			case chocolate[2]:
				$('#localPergunta').text(perguntas[2]);
				$('#localResposta').text(respostas[2]);
				break;
			case chocolate[3]:
				$('#localPergunta').text(perguntas[3]);
				$('#localResposta').text(respostas[3]);
				break;	
			case chocolate[4]:
				$('#localPergunta').text(perguntas[4]);
				$('#localResposta').text(respostas[4]);
				break;
			case chocolate[5]:
				$('#localPergunta').text(perguntas[5]);
				$('#localResposta').text(respostas[5]);
				break;
			case chocolate[6]:
				$('#localPergunta').text(perguntas[6]);
				$('#localResposta').text(respostas[6]);
				break;
			case chocolate[7]:
				$('#localPergunta').text(perguntas[7]);
				$('#localResposta').text(respostas[7]);
				break;
			case chocolate[8]:
				$('#localPergunta').text(perguntas[8]);
				$('#localResposta').text(respostas[8]);
				break;
			case chocolate[9]:
				$('#localPergunta').text(perguntas[9]);
				$('#localResposta').text(respostas[9]);
				break;
			case chocolate[10]:
				$('#localPergunta').text(perguntas[10]);
				$('#localResposta').text(respostas[10]);
				break;							
		}
	
	$('#resposta-cabecario').removeClass("esconde-icones-pergunta");
	$('#tabela-resposta').removeClass("esconde-icones-pergunta");
	$('#perguntas').removeClass("esconde-icones-pergunta");
	$('#respostas').addClass("esconde-icones-resposta");

	}else{
		console.log("erro");
	}

});

$('#gera-resposta').click(function(){
	$('#respostas').removeClass("esconde-icones-resposta");
	
});



