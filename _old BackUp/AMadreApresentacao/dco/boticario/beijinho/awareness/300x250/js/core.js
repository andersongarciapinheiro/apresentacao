

////////////////////////////////////// DOCUMENT AMADRE ANIMATION VERSION 2.0 DYNAMIC ///////////////////////////////////////////////////////////////





	 								//////////////////////*  PORTUGUÊS  *//////////////////////




	/*  Criando uma Instancia do objeto de animação Amadre_Animation
	-----> var 'nome_linhaDoTempo' = new Amadre_Animation()
	-----> var 'nome_align' = new Performance_Align()
	-----> var 'nome_sprites' = new Performance_Sprites()
	-----> var 'nome_preload' = new Performance_Config()
__________________________________________________________________________________________________________________________________

	/*  Método para adicionar animações aos elementos
	-----> nome_linhaDoTempo.animationElements("classeAnimacao",[["elementoQueVaiReceber",delay],["elementoQueVaiReceber",delay],...]);
	
	 Ex.
	nome_linhaDoTempo.animationElements("classeAnimacao",[[".text_2",1],[".text_3",1],[".text_4",4]]);
	
	 OU PARA DAR UM TEMPO NA PEÇA USE A CLASS 'STOP_HERE'

	nome_linhaDoTempo.animationElements("STOP_HERE",[[".text_2",1]],função_callback(opcional));  ///text_2 tem que ser o último elemente animado antes do STOP_HERE

	 OU PARA DAR UM LOOP NA PEÇA USE A CLASS 'LOOPING'

	nome_linhaDoTempo.animationElements("LOOPING",[[".text_2",1]],função_chamaAnimações);  ///text_2 tem que ser o último elemente animado antes do LOOPING

__________________________________________________________________________________________________________________________________

	/* Método para contar tempo da animação total, passando como referência o último elemento animado
	-----> nome_linhaDoTempo.animationControlTime("últimoElementoAnimado");
	 Ex.
	nome_linhaDoTempo.animationControlTime(".text_4");

__________________________________________________________________________________________________________________________________

	/* Método para limpar timer e remover a classe do objeto
	-----> nome_linhaDoTempo.clearAnimation("elemento");
	 Ex.
	nome_linhaDoTempo.clearAnimation(".text_4");    Limpa de um obj específico
	
	 OU
	nome_linhaDoTempo.clearAnimation(".all");       Limpa de todos os objs do 'nome_linhaDoTempo'


__________________________________________________________________________________________________________________________________



	/* Método para separar uma string a partir de um caracter especifico, e aplicar uma animação em cada elemento separado...
	-----> nome_linhaDoTempo.splitWordAnimation("classe_Set","classeAnimacao","elemento","delay","string_especifica_refencia");
	 Ex.
	nome_linhaDoTempo.splitWordAnimation("class_Set",".fadeIn","alinhamento3",.1," ");

__________________________________________________________________________________________________________________________________


	/* Método para identificar se o dispositivo é mobile
	-----> nome_linhaDoTempo.isMobile();
	 Ex.
	var variável = nome_linhaDoTempo.isMobile(); ///Retorna true se estiver em um mobile, e false se estiver em desk

	if(variável==true){
		mobile
	}
	else{
		desk
	}


__________________________________________________________________________________________________________________________________















_____________________________________________________DYNAMIC_DOCUMENTAÇÃO____________________________________________________________________________




	/* Método para alinhar um texto verticalmente e horizontalmente, passando como referencia o elemento,a opção de alinhamento horizontal(center,left,rigth), e o respiro(exe..20px)
	-----> nome_align.alignText([ARRAY CONTENDO => ["elementoQueVaiReceber","top_Ou_left",valor_base_alinhamento,diferencial(OPCIONAL)]]);
	 Ex.
	nome_align.alignText([
		[".txt01_",'top',90,],
		[".txt01_",'left',270,300]
	]);
	ou
	nome_align.alignText([
		[".txt01_",'tl',[90,270]]
	]);


___________________________________________________________________________________________________________________________________


	/* Método para controlar o tamanho da string levando em conta o número de caracteres de cada palavra e o width do container
	-----> nome_align.automateText("elementoQueVaiReceber",width ou null,true=toda a frase ou false/null = palavra por palavra);
	-----> nome_align.automateTextLargAlt("elementoQueVaiReceber",width ou null,true=toda a frase ou false/null = palavra por palavra, largura ou altura: se for altura colocar | width do elemento;
	 Ex.
	nome_align.automateText(".text_4",250,true);
	nome_align.automateText(".text_4",250,false);
	nome_align.automateText(".text_4",null,null);


	nome_align.automateTextLargAlt(".text_4",220,false,"largura");
	nome_align.automateTextLargAlt(".text_4",150,true,"altura|220px");
	150 = altura
	220px = largura




___________________________________________________________________________________________________________________________________


	Método para testar quantidade de caracteres

	var exemploJson={
        'elemento':'.txt_1_1',
        'maiuscula':true,
        'alinhamento':[diagram,'top',250,0],
        'contInicialCaracteres':0,
        'divisorMedia':3,
        'qtdTestes':3
    }

	ex. function

	nome_align.qtdCaracteres(exemploJson);


__________________________________________________________________________________________________________________________________







	/* Método para rodar spriteSheets com javascript
	-----> nome_sprites.spriteScript("elemento",largura_sprite,step_inicial,total_steps,tempo_animacao,looping);
	 Ex.
	nome_sprites.spriteScript('.logo_sprite_1',728,1,24,1.3,L2); - dois loopings
	nome_sprites.spriteScript('.logo_sprite_1',728,1,24,1.3,L0); - sem looping


__________________________________________________________________________________________________________________________________



	

	/* Método para rodar spriteSheets com css
	-----> nome_sprites.spriteCss("elemento",total_steps,tempo_animacao);
	 Ex.
	nome_sprites.spriteCss('.logo_sprite_1',24,1.3);



__________________________________________________________________________________________________________________________________





__________________________________________________________________________________________________________________________________




	/* Método para rodar preload
	-----> nome_preload.preloaderImgs(dynamicArray,[callback1,calback2...]);
	 Ex.
	configPreloader.preloaderImgs(dynamicArray,[initAnimation,alignConfig]);









__________________________________________________________________________________________________________________________________




	/* Método para rodar o Milagro Dynamic
	------> nome_milagro.analyseText(json);
	Ex.
	 milagro.analyseText({
        "id":"1uB9JQpwCJGlo0IMUph98KHBa2kH2gzuk2EtE-9tQckQ",
        "formato":"300x50",
        "popUp":[true,"baixo"],
        "save":[false,"html"],
        "condicao":["etapa","LeadGenerator"],
        "imagens":[["imagem1","300x50"],["imagem2","300x50"],["logo","92x92"]],
        "textos":[["txt1","txt_1_1_image",50],["txt2","txt_2_1",38]],
        "callback":alignAll
    });


	




*/


/////////////////////////////////////////////////////////////***************///////////////////////////////////////////////////////////////
var d = document;
var el = function(e){return d.querySelector(e)}
// if(typeof(obj)) var banner = JSON.parse(obj);

///////START Trace 
function trace(txt){
	 console.log(txt);
}
///////END Trace




/////// TIMELINE ANIMAÇÃO
function Amadre_Animation(){
	///
	var timeLineAnimation = 0;
	var clear = [];
	var objClearTimer;
	var debug = document.createElement( "div" );
	///	
	///Set debug
	debug.setAttribute("style","margin:2px;width:95px;height:auto;background-color:#000000;color:white;z-index:9999;position:relative;text-align:center;top:0px;left:0px;opacity: 0.5;border-radius: 10px;font-size: 10px;line-height: 50px;");
	debug.innerHTML = "<span>DEBUG:</span>";
	debug.querySelector('span').setAttribute("style","position: absolute;font-size: 9px;color: #fff;top: -16px;left: 31px;");
	
	//Set functions
	this.animationElements = animationElements;
	this.animationControlTime = animationControlTime;
	this.clearAnimation = clearAnimation;
	this.splitWordAnimation = splitWordAnimation;
	this.isMobile = isMobile;

	///////START Function automate animation 
	function animationElements(classAnimation,element,functionCall){
		var j=0;
		
		for(var e=0;e<element.length;e++){
			///Checks whether the element exists in the document
			if(!document.querySelector(element[e][0])){
				debug.innerHTML = debug.innerHTML+element[e][0]+": error<br>";
				document.body.appendChild(debug);
			}
			else{

					///If the element exists
					timeLineAnimation+=(element[e][1]*1000);
					objClearTimer = element[e][0].replace(".", "");
					window['timer'+e] = timeLineAnimation;
						window['clear_'+objClearTimer] = setTimeout(
							function(){

								if(classAnimation=="STOP_HERE"){
										if(functionCall){
										   functionCall();
										}
								}
								if(classAnimation=="LOOPING"){
										clearAnimation(".all");
										if(functionCall){
										   functionCall();
										}
								}
								else{

									for(var i=j;i==j;j++){
											////Assigning elements to dynamic variables
											window['elementMoment'+i] = element[i][0];
											var allElements = document.querySelectorAll(window['elementMoment'+i]);
											
											///Loop element to associate the class and callback function
											for ( var u = 0; u < allElements.length; u++ ) {
												var explode = classAnimation.split(" ");
												for(var t = 0 ; t < explode.length ; t++){
													allElements[u].classList.add(explode[t]);
												}
											    
											}
									}

								}		

						},window['timer'+e]);
						
						////Polula array
						clear.push([objClearTimer,classAnimation,window['clear_'+objClearTimer]]);
				
				}

			


			}

	}

	///////END Function automate animation
	///////START Count timer animation
	function animationControlTime(element){
		var countAnimation = 1;	
		var control = document.createElement( "div" );
		control.setAttribute("style","width:95px;height:40px;background-color:#B50707;color:white;z-index:9999;position:relative;text-align:center;top:0px;left:0px;opacity: 0.5;border-radius: 50px;font-size: 22px;line-height: 50px;");
		control.innerHTML = "<span>Timer animation:</span>";
		control.querySelector('span').setAttribute("style","position: absolute;font-size: 9px;color: #fff;top: -16px;left: 9px;");

		document.body.appendChild( control );
		var timerInterval = setInterval(function(){
			////// Convert timer to string
			var countString = countAnimation.toString();
			var count;
			if(countString.length==1){
				count = "0."+countString.substr(0,1);
			}
			else if(countString.length==2){
				count = countString.substr(0,1)+"."+countString.substr(1,1);
			}
			else if(countString.length==3){
				count = countString.substr(0,1)+countString.substr(1,1)+"."+countString.substr(2,1);
			}
			////End
			control.innerHTML = count+"<span>Timer animation:</span>s";
			control.querySelector('span').setAttribute("style","position: absolute;font-size: 9px;color: #fff;top: -16px;left: 9px;");
			countAnimation++;
			el(element).addEventListener('transitionend',function(event){clearInterval(timerInterval);},false);
			el(element).addEventListener('webkitTransitionEnd',function(event){clearInterval(timerInterval);},false);
			el(element).addEventListener('oTransitionEnd',function(event){clearInterval(timerInterval);},false);
			el(element).addEventListener('animationend',function(event){clearInterval(timerInterval);},false);
			el(element).addEventListener('webkitAnimationEnd',function(event){clearInterval(timerInterval);},false);
			el(element).addEventListener('MSAnimationEnd',function(event){clearInterval(timerInterval);},false);

			
		},100)
	}
	///////END Count timer animation
	
	///////START Count timer animation
	function clearAnimation(element){
		if(element==".all"){
			////Zera variável
			timeLineAnimation = 0;
			////
			for(var i=0;i<clear.length;i++){
					var for_Elements_all = document.querySelectorAll("."+clear[i][0]);
					for(var a=0;a<for_Elements_all.length;a++){

						var explodeClear = clear[i][1].split(" ");
						for(var y = 0 ; y < explodeClear.length ; y++){
							console.log(explodeClear[y]);
							for_Elements_all[a].classList.remove(explodeClear[y]);
						}
					}
					clearTimeout(clear[i][2]);
					
			}
			
		}
		else{
			for(var j=0;j<clear.length;j++){
				if(clear[j][0]==element.replace(".","")){
					var for_Elements = document.querySelectorAll("."+clear[j][0]);
					for(var a=0;a<for_Elements.length;a++){

						var explodeClear = clear[j][1].split(" ");
						for(var y = 0 ; y < explodeClear.length ; y++){
							console.log(explodeClear[y]);
							for_Elements[a].classList.remove(explodeClear[y]);
						}
					}
					clearTimeout(clear[j][2]);	
				}
			
			}
		}

	}
	///////END Count timer animation

	///////START Word Animation
	function splitWordAnimation(classSet,classAnimation,element,delay,condition){
		////
		var text = el(element).innerHTML;
		var splittingTxt = text.split(condition);
		var randow = Math.floor((Math.random() * 1000) + 1);

		var maxWidth = el(element).offsetWidth;
		var widthMomento = 0;
		var tamanhoLetra = 0;
		var pulaLinha = "";
		el(element).innerHTML = "";



		for(var i=0;i<splittingTxt.length;i++){

				var txtMomento = splittingTxt[i];
				if(condition==""){
					if(txtMomento==" "){
						txtMomento="&nbsp;"+pulaLinha;
					}



					var txtTratado =  document.createElement('div');
			       	txtTratado.innerHTML = txtMomento;
			       	el(element).appendChild(txtTratado);
			       	txtTratado.classList.add(classSet);
			       	txtTratado.style.position = "relative";
			       	if(pulaLinha == "</br>"){
			       		txtTratado.style.display = "initial";
			       		pulaLinha = "";
			       		txtMomento="&nbsp;"+pulaLinha;
			       	}
			       	else{
			       		txtTratado.style.display = "inline-block";
			       	}
			       	
			       	txtTratado.classList.add(classAnimation+"_"+randow+"_"+i);


					tamanhoLetra = txtTratado.offsetWidth;
					widthMomento += tamanhoLetra;
					if(splittingTxt[i+1] === " "){


						var controleFor = true;
						var resultado = widthMomento;
						for(var e = 1 ; e < 20 ; e++){
							if(splittingTxt[i+1+e]&&controleFor){
								if(splittingTxt[i+1+e] != " "){

									var txtTester =  document.createElement('div');
							       	txtTester.innerHTML = splittingTxt[i+1+e];
							       	el(element).appendChild(txtTester);
			       					txtTester.style.position = "relative";
			       					txtTester.style.display = "inline-block";
							       	tamanhoLetraMomento = txtTester.offsetWidth;
									resultado += tamanhoLetraMomento;
									console.log("Uow: "+splittingTxt[i+1+e]+" = "+tamanhoLetraMomento+" => "+resultado);
									el(element).removeChild(txtTester);
									if(maxWidth-tamanhoLetraMomento<=resultado){
										console.log("PULA");
										pulaLinha = "</br>";
										widthMomento = 0;
									}

								}
								else{
									console.log("false");
									controleFor = false;
								}
								
							}
							
						}


						
					}
					
	

				}
				else{
					var txtTratado =  document.createElement('div');
			       	txtTratado.innerHTML = txtMomento+"&nbsp";
			       	el(element).appendChild(txtTratado);
			       	txtTratado.classList.add(classSet);
			       	txtTratado.style.position = "relative";
			       	txtTratado.style.float = "left";
			       	txtTratado.classList.add(classAnimation+"_"+randow+"_"+i);


				}

				
		}

		for(var i=0;i<el(element).children.length;i++){
			animationElements(classAnimation,[["."+classAnimation+"_"+randow+"_"+[i],delay]]);
		}

      
	}
	///////END Word Animation 

	///////START Is Mobile
	function isMobile()
	{
		var userAgent = navigator.userAgent.toLowerCase();
		if(userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1)
		{
			return true;
		}
		else{
			return false;
		}
	}
	///////END Is Mobile



	
}












//////////////////////////////////////////// DYNAMIC MODULOS ////////////////////////////////////////////////////////////


/////// MODULO ALIGN START
function Performance_Align(){


	this.alignText = alignText;
	this.automateText = automateText;
	this.automateTextLargAlt = automateTextLargAlt;
	this.qtdCaracteres = qtdCaracteres;
	this.alinhaPreco = alinhaPreco;

	///////START Processing Text
	
 	function alignText(array){

 		var countTimer = 0;
 		var timerDinamico = setInterval(function(){
 			if(countTimer===30){
 				clearInterval(timerDinamico);
 			}
 			else{
 				// console.log(countTimer)
 				for(var i = 0 ; i < array.length ; i++){

						var diferencial = 0;
						if(array[i][3]){
							diferencial = array[i][3];
						}

						if(array[i][1]==="top"){
							el(array[i][0]).style[array[i][1]] = Math.floor((array[i][2]/2) - (el(array[i][0]).clientHeight/2)+diferencial)+"px";
						}
						else if(array[i][1]==="tl"||array[i][1]==="TL"){
							el(array[i][0]).style.top = Math.floor((array[i][2][0]/2) - (el(array[i][0]).clientHeight/2)+diferencial)+"px";
							el(array[i][0]).style.left = Math.floor((array[i][2][1]/2) - (el(array[i][0]).clientWidth/2)+diferencial)+"px";
						}
						else{
							el(array[i][0]).style[array[i][1]] = Math.floor((array[i][2]/2) - (el(array[i][0]).clientWidth/2)+diferencial)+"px";
						}

				}
 			}
 			countTimer++
 		},100)

   
    }
	///////END Processing Text



	///////START Text Automate (BETA)
	function automateText(elemento,limite,all){
		var tamanhoDinamico = window.getComputedStyle(document.querySelector(elemento), null).getPropertyValue('width').split("px"); 

		if(limite===null){
			limite = parseInt(tamanhoDinamico);
		}
		else{
			limite = limite;
		}

		var fontDinamica = window.getComputedStyle(document.querySelector(elemento), null).getPropertyValue('font-size').split("px");
	    var letterSpacingDinamica = window.getComputedStyle(document.querySelector(elemento), null).getPropertyValue('letter-spacing').split("px");
	    var familyDinamica = window.getComputedStyle(document.querySelector(elemento), null).getPropertyValue('font-family');
	    var textTransformDinamica = window.getComputedStyle(document.querySelector(elemento), null).getPropertyValue('text-transform');
	    // console.log("EXISTE=> "+ limite);
	    var fontSizeA = fontDinamica[0];
	    var txtAuto1 = el(elemento).innerHTML;

	    if(all===true){
	    	var div = document.createElement( "div" );
	        div.innerHTML = txtAuto1;
	        div.style.width = "auto";
	        div.style.position = "absolute";
	        div.style.fontSize = fontSizeA+'px';
	        div.style.fontFamily = familyDinamica;
	        div.style.textTransform = textTransformDinamica;
	        div.style.letterSpacing = letterSpacingDinamica[0]+'px';
	        document.getElementById("banner").appendChild(div);
	        var tamanhoString = div.clientWidth;
	        if(tamanhoString>limite){
	            fontSizeA = fontSizeA - 1;
	            el(elemento).style.fontSize = fontSizeA+'px';
	            // console.log("AKI "+fontSizeA+" TAMANHO "+div.clientWidth);
	            document.getElementById("banner").removeChild(div);
	            automateText(elemento,limite,all);
	            
	        }
	        else{
	            document.getElementById("banner").removeChild(div);
	        }
	    }
	    else if(all===false||all===null){
	    	var explodeTxtAuto1 = txtAuto1.split(' ');
		    // console.log(fontSizeA);
		    for(var i = 0 ; i < explodeTxtAuto1.length ; i++){

		            var div = document.createElement( "div" );
		            div.innerHTML = explodeTxtAuto1[i];
		            div.style.width = "auto";
		            div.style.position = "absolute";
		            div.style.fontSize = fontSizeA+'px';
		            div.style.fontFamily = familyDinamica;
		            div.style.textTransform = textTransformDinamica;
		            div.style.letterSpacing = letterSpacingDinamica[0]+'px';
		            document.getElementById("banner").appendChild(div);
		            var tamanhoString = div.clientWidth;
		            if(tamanhoString>limite){
		                fontSizeA = fontSizeA - 1;
		                el(elemento).style.fontSize = fontSizeA+'px';
		                // console.log("AKI "+fontSizeA+" TAMANHO "+div.clientWidth);
		                document.getElementById("banner").removeChild(div);
		                automateText(elemento,limite,all);
		                break;
		            }
		            else{
		                document.getElementById("banner").removeChild(div);
		            }

		    }
	    }

	   


	}
	///////END Text Automate (BETA)
	///////END Text Automate (BETA)
	function automateTextLargAlt(elemento,limite,all,modo){
		var tamanhoDinamico = window.getComputedStyle(document.querySelector(elemento), null).getPropertyValue('width').split("px"); 

		if(limite===null){
			limite = parseInt(tamanhoDinamico);
		}
		else{
			limite = limite;
		}

		var fontDinamica = window.getComputedStyle(document.querySelector(elemento), null).getPropertyValue('font-size').split("px");
	    var letterSpacingDinamica = window.getComputedStyle(document.querySelector(elemento), null).getPropertyValue('letter-spacing').split("px");
	    var familyDinamica = window.getComputedStyle(document.querySelector(elemento), null).getPropertyValue('font-family');
	    var textTransformDinamica = window.getComputedStyle(document.querySelector(elemento), null).getPropertyValue('text-transform');
	    var lineHeight = window.getComputedStyle(document.querySelector(elemento), null).getPropertyValue('line-height').split("px");
	    var textAlign = window.getComputedStyle(document.querySelector(elemento), null).getPropertyValue('text-align');

	    // console.log("EXISTE=> "+ limite);
	    var fontSizeA = fontDinamica[0];
	    var txtAuto1 = el(elemento).innerHTML;

	    if(all===true){
	    	if(modo === "largura"){
	    		var div = document.createElement( "div" );
		        div.innerHTML = txtAuto1;
		        div.style.width = limite+"px";
		        div.style.position = "absolute";
		        div.style.fontSize = fontSizeA+'px';
		        div.style.fontFamily = familyDinamica;
		        div.style.textTransform = textTransformDinamica;
		        div.style.letterSpacing = letterSpacingDinamica[0]+'px';
		        document.getElementById("banner").appendChild(div);
		        var tamanhoString = div.clientWidth;
		        if(tamanhoString>limite){
		            fontSizeA = fontSizeA - 1;
					el(elemento).style.fontSize = fontSizeA+'px';
					el(elemento).style.lineHeight = fontSizeA+3+'px';
		            // console.log("AKI "+fontSizeA+" TAMANHO "+div.clientWidth);
		            document.getElementById("banner").removeChild(div);
		            automateTextLargAlt(elemento,limite,all,modo);
		            
		        }
		        else{
		            document.getElementById("banner").removeChild(div);
		        }
	    	}
	    	else{
	    		var div = document.createElement( "div" );
	    		var larguraMomento = modo.split("|");
	    		console.log(larguraMomento)
		        div.innerHTML = txtAuto1;
		        div.style.width = larguraMomento[1];
		        div.style.position = "absolute";
		        div.style.fontSize = fontSizeA+'px';
		        div.style.fontFamily = familyDinamica;
		        div.style.textTransform = textTransformDinamica;
		        div.style.letterSpacing = letterSpacingDinamica[0]+'px';
		        div.style.lineHeight = lineHeight[0]+'px';
		        div.style.textAlign = textAlign;
		        document.getElementById("banner").appendChild(div);
		        var tamanhoString = div.clientHeight;
		        console.log(elemento+" => "+tamanhoString+" => "+div.style.width)
		        if(tamanhoString>limite){
		            fontSizeA = fontSizeA - 1;
		            el(elemento).style.fontSize = fontSizeA+'px';
		            el(elemento).style.lineHeight = fontSizeA+3+'px';
		            // console.log("AKI "+fontSizeA+" TAMANHO "+div.clientHeight);
		            document.getElementById("banner").removeChild(div);
		            automateTextLargAlt(elemento,limite,all,modo);
		            
		        }
		        else{
		            document.getElementById("banner").removeChild(div);
		        }
	    	}
	    	
	    }
	    else if(all===false||all===null){
	    	var explodeTxtAuto1 = txtAuto1.split(' ');
		    // console.log(fontSizeA);
		    for(var i = 0 ; i < explodeTxtAuto1.length ; i++){

		            var div = document.createElement( "div" );
		            div.innerHTML = explodeTxtAuto1[i];
		            div.style.width = "auto";
		            div.style.position = "absolute";
		            div.style.fontSize = fontSizeA+'px';
		            div.style.fontFamily = familyDinamica;
		            div.style.textTransform = textTransformDinamica;
		            div.style.letterSpacing = letterSpacingDinamica[0]+'px';
		            document.getElementById("banner").appendChild(div);
		            var tamanhoString = div.clientWidth;
		            if(tamanhoString>limite){
		                fontSizeA = fontSizeA - 1;
						el(elemento).style.fontSize = fontSizeA+'px';
						el(elemento).style.lineHeight = fontSizeA+3+'px';
		                // console.log("AKI "+fontSizeA+" TAMANHO "+div.clientWidth);
		                document.getElementById("banner").removeChild(div);
		                automateTextLargAlt(elemento,limite,all,modo);
		                break;
		            }
		            else{
		                document.getElementById("banner").removeChild(div);
		            }

		    }
	    }

	   


	}
	///////END Text Automate (BETA)


	/////// START TESTE CARACTERES


	function qtdCaracteres(info_json){

			var txt = info_json.elemento;
			var maiuscula = info_json.maiuscula;
			var alinhamento = [info_json.alinhamento[0],info_json.alinhamento[1],info_json.alinhamento[2],info_json.alinhamento[3]];


			var countMedia_info = {
		        'contLength':info_json.contInicialCaracteres,
		        'divisorMedia':info_json.divisorMedia,
		        'qtdTest':info_json.qtdTestes,
		    };

		    testCaracteres(txt,maiuscula,alinhamento);

			function testCaracteres(txt,maiuscula,alinhamento){

		        var sugestao = ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit,", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua.", "Ut", "enim", "ad", "minim", "veniam,", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat.", "Duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur.", "Excepteur", "sint", "occaecat", "cupidatat", "non", "proident,", "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum."]
		        var controleAltura;

		        el(txt).innerHTML = "";

		        var timerControle = setInterval(function(){

		            var randomico = Math.floor(Math.random()*sugestao.length);
		            el(txt).innerHTML = el(txt).innerHTML+' '+sugestao[randomico];
		            if(maiuscula){
		                el(txt).innerHTML = el(txt).innerHTML.toUpperCase();
		            }
		            alinhamento[0].alignText([
		                [txt,alinhamento[1],alinhamento[2],alinhamento[3]]
		            ]);
		            controleAltura = el(txt).clientHeight;
		            if(controleAltura>alinhamento[2]){
		                clearInterval(timerControle);
		                var tratamento = el(txt).innerHTML.split(' ');
		                console.log(tratamento);
		                console.log('controle 1');
		                for(var i = 0 ; i < 5 ; i++){
		                    tratamento.pop();
		                    el(txt).innerHTML = "";
		                    for(var e = 0 ; e < tratamento.length ; e++){
		                        el(txt).innerHTML = el(txt).innerHTML+' '+tratamento[e];
		                    }
		                    console.log('controle 2');
		                    controleAltura = el(txt).clientHeight;
		                    alinhamento[0].alignText([
		                        [txt,alinhamento[1],alinhamento[2],alinhamento[3]]
		                    ]);
		                    if(controleAltura<=alinhamento[2]){
		                        console.log('controle 3');
		                        console.log('Contagem de caracteres: '+el(txt).innerHTML.length);
		                        if(countMedia_info.qtdTest!=1){
		                            countMedia_info.qtdTest--;
		                            countMedia_info.contLength += el(txt).innerHTML.length;
		                            testCaracteres(txt,maiuscula,alinhamento);
		                        }
		                        else{
		                            countMedia_info.contLength += el(txt).innerHTML.length;
		                            countMedia_info.contLength = countMedia_info.contLength/countMedia_info.divisorMedia;
		                            console.log('Média contagem de caracteres: '+txt+" => "+Math.floor(countMedia_info.contLength));
		                        }
		                        return;
		                    }

		                }

		            }

		        },100) 


		    }


	}

			

	/////// END TESTE CARACTERES
	/////// START ALINHA PREÇO
	function alinhaPreco(valorInformado,elemento,arrayFonts,alinhamento){

		let box = document.createElement("div");
		box.style.position = "relative";
	
	
		/////// Tratando virgulas
		if(valorInformado.indexOf(",")!=-1){
			valorInformado = valorInformado.split(",");
			valorInformado[0] = Number(valorInformado[0]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1.').replace(/.{3}$/, '');
		   
			
	
		}
		else{
			valorInformado = `${valorInformado},00`.split(",");
			valorInformado[0] = Number(valorInformado[0]).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1.').replace(/.{3}$/, '');
			
		}
	
		///// Tratando R$
		let R_cifrao = document.createElement("div");
		R_cifrao.style.position = "relative";
		R_cifrao.style.float = "left";
		R_cifrao.style.fontSize = arrayFonts[0];
		if(alinhamento == "cima"){
			R_cifrao.style.lineHeight = arrayFonts[1];
		}
		else{
			let arrayFonts_0 = arrayFonts[0].split("px");
			let arrayFonts_1 = arrayFonts[1].split("px");
			let tratamentoLineHeight = (arrayFonts_1[0]*2)-(((arrayFonts_1[0]*2)*15)/100);
			R_cifrao.style.lineHeight = tratamentoLineHeight + "px";
		}
		
		R_cifrao.innerHTML = "R$";
		box.appendChild(R_cifrao)
	
	
		///// Tratando valor cheio
		let valorCheio = document.createElement("div");
		valorCheio.style.position = "relative";
		valorCheio.style.float = "left";
		valorCheio.style.fontSize = arrayFonts[1];
		valorCheio.innerHTML = valorInformado[0];
		box.appendChild(valorCheio)
	
		///// Tratando valor centavos
		let valorCentavos = document.createElement("div");
		valorCentavos.style.position = "relative";
		valorCentavos.style.float = "left";
		valorCentavos.style.fontSize = arrayFonts[0];
		if(alinhamento == "cima"){
			valorCentavos.style.lineHeight = arrayFonts[1];
		}
		else{
			let arrayFonts_0 = arrayFonts[0].split("px");
			let arrayFonts_1 = arrayFonts[1].split("px");
			let tratamentoLineHeight = (arrayFonts_1[0]*2)-(((arrayFonts_1[0]*2)*15)/100);
			valorCentavos.style.lineHeight = tratamentoLineHeight + "px";
		}
		
		valorCentavos.innerHTML = `,${valorInformado[1]}`;
		box.appendChild(valorCentavos)
	
	
		////// Adicionando box no elemento
		el(elemento).appendChild(box);
	
	
	}
	/////// END ALINHA PREÇO




}
/////// MODULO ALIGN END








/////// MODULO SPRITES START
function Performance_Sprites(){


	this.spriteScript = spriteScript;
	this.spriteCss = spriteCss;


	//////// START SPRITES SCRIPTS


	function spriteScript(elemento,posicao,largura,count,steps,timer,looping){
		
		var controle_loop = false;
		if(looping!='L0'){
			
			controle_loop = true;
		}

		var spriteTimer = 1000/(steps/timer);
		setTimeout(function(){
			if(count<steps){
				if(posicao === "vertical"){
					el(elemento).style.backgroundPositionY = largura-(largura*count)+"px";
				}
				else{
					el(elemento).style.backgroundPositionX = largura-(largura*count)+"px";
				}
				
				count++;
				spriteScript(elemento,posicao,largura,count,steps,timer,looping);
			}
			else{
				
				if(posicao === "vertical"){
					el(elemento).style.backgroundPositionY = largura-(largura*count)+"px";
				}
				else{
					el(elemento).style.backgroundPositionX = largura-(largura*count)+"px";
				}
				count++;

				if(controle_loop){
					console.log('looping');
					console.log(looping);
					var atualizando_Looping = looping.split('L');
					atualizando_Looping[1] = atualizando_Looping[1]-1;
					console.log(atualizando_Looping[1]);
					atualizando_Looping = "L"+atualizando_Looping[1];
					spriteScript(elemento,posicao,largura,1,steps,timer,atualizando_Looping);
				}
			}
		},spriteTimer);
	}


	//////// END SPRITES SCRIPTS



	//////// START SPRITES CSS

	function spriteCss(elemento,steps,time){
		var stylesDocument = document.styleSheets;
		for(var i = 0; i < stylesDocument.length; i++){
			if(stylesDocument[i].href == null)
                return;

			if(stylesDocument[i].href.indexOf("animate")!=-1){
				var styleAnimate = stylesDocument[i];
				styleAnimate.insertRule("@keyframes spriteAnimacaoScript {0% { background-position: 0% 0%; }100% { background-position: 100% 100%; }}", 0);
				el(elemento).style.opacity = "1";
				el(elemento).style.animation = "spriteAnimacaoScript "+time+"s steps("+steps+") forwards";
			}
			
		}
	}

	//////// END SPRITES CSS


}
/////// MODULO SPRITES END


/////// MODULO CONFIG START
function Performance_Config(){

	this.preloaderImgs = preloaderImgs;

	
	function preloaderImgs(dynamicArray,callback){
		

		//// Identificando imagens no dynamicArray
		var stringDev2 = JSON.stringify(dynamicArray);
		var arrayImgs = [];
		var controle = true;
		while(controle){
			var regex = new RegExp(/http[^\"]*(jpg|png|gif|mp4)/g);
			var match = regex.exec(stringDev2);
			if(match){
				stringDev2 = stringDev2.replace(match[0]," ");
				arrayImgs.push(match[0]);
			}
			else{
				controle = false;
			}
		}

		//// Preload
		var countPreloader = 0;
		// console.log(arrayImgs)
		var qtdImgs = arrayImgs.length;
		var qtdCallbacks = callback.length;
		
		for(var i = 0 ; i < qtdImgs ; i++){

			if(arrayImgs[i].indexOf('.mp4')!=-1){
				console.log('Video => '+arrayImgs[i])
				// TESTE
				window['videoPreloader_'+i] = document.createElement("video");
				
				window['videoPreloader_'+i].src = arrayImgs[i];
				window['videoPreloader_'+i].setAttribute("width", "300");
				window['videoPreloader_'+i].setAttribute("height", "250");
				window['videoPreloader_'+i].controls = true;
				// document.querySelector('body').appendChild(window['videoPreloader_'+i]);
				
				if (window['videoPreloader_'+i].addEventListener) {
				window['videoPreloader_'+i].addEventListener('canplay', function() {
					loadImage();
					// this.play();
					// document.querySelector('body').removeChild(this);
				});
				} else {
				// it's IE!
				window['videoPreloader_'+i].attachEvent('oncanplay', function() {
					loadImage();
				});
				}
				// TESTE


			}
			else{
				console.log('Imagem => '+arrayImgs[i])
				window['imgPreloader_'+i] = new Image();
				window['imgPreloader_'+i].src = arrayImgs[i];
				if (window['imgPreloader_'+i].addEventListener) {
				window['imgPreloader_'+i].addEventListener('load', function() {
					loadImage();
				});
				} else {
				// it's IE!
				window['imgPreloader_'+i].attachEvent('onload', function() {
						loadImage();
				});
				}
			}

			
		}
		//// Load
		function loadImage(){
			countPreloader++;
			// console.log("Loaded => Image: "+countPreloader+" Total: "+qtdImgs);
			if(countPreloader === qtdImgs){
				// console.log("Loaded Complete!");
				if(el(".preloaderMain")){
					el(".preloaderMain").style.transition = "all 1s cubic-bezier(0.215, 0.61, 0.355, 1)";
					el(".preloaderMain").style.opacity = 0;
					setTimeout(function(){
						for(var u = 0 ; u < qtdCallbacks ; u++){
							callback[u]();
						}
					},1100);
				}
				else{
					for(var u = 0 ; u < qtdCallbacks ; u++){
						callback[u]();
					}
				}
				

			}
			else{
				console.log('carregando...'+ countPreloader)
			}
		}
	}
}
/////// MODULO CONFIG END



/////// MODULO MILAGRO START

function Milagro_dynamic(){

	var imported = document.createElement('script');
	imported.src = '../../../js/FileSaver_min.js';
	document.head.appendChild(imported);




	this.analyseText = analyseText;

	function analyseText(info){

		    var erros = {
		        "textos":[],
		        "imagens":[],
		        "imagens_size":[]
		    };


		    var xhr = new XMLHttpRequest();
		    xhr.open("GET", "https://spreadsheets.google.com/feeds/list/"+info.id+"/od6/public/values?alt=json");

		    //Start 0
		    xhr.addEventListener("load", function(){
		        var response = xhr.responseText;
		        var planilha = JSON.parse(response);
		        var bannerSize = info.formato;
		       
		        console.log(bannerSize+" Load!");
		       
		        //Start 1
		        for(var i=0;i<planilha.feed.entry.length;i++){
		            
		                ///// Referencia
		                // planilha.feed.entry[i].gsx$carro.$t
		                // planilha.feed.entry[i].gsx$etapa.$t
		                // planilha.feed.entry[i].gsx$formato.$t
		                // planilha.feed.entry[i].gsx$step1.$t
		                // planilha.feed.entry[i].gsx$step2.$t
		                // planilha.feed.entry[i].gsx$cta.$t
		                
		                //Ref concatenação
		                // planilha.feed.entry[i]["gsx$"+info.textos[t][0]].$t


		                //Start 2
		                if(planilha.feed.entry[i]["gsx$"+info.condicao[0]].$t==info.condicao[1]&&planilha.feed.entry[i].gsx$formato.$t==bannerSize){



		                        for(var a=0;a<info.imagens.length;a++){

		                            //// Test image START
		                            var imagem_test = new Image();
		                            imagem_test.src = planilha.feed.entry[i]["gsx$"+info.imagens[a][0]].$t;
		                            imagem_test.setAttribute("alt",planilha.feed.entry[i].gsx$id.$t)
		                            imagem_test.setAttribute("data-size",info.imagens[a][1])

		                            imagem_test.onload = function() {
		                                var size_image = this.naturalWidth+"x"+this.naturalHeight;
		                                if(size_image!=this.getAttribute("data-size")){
		                                	erros.imagens_size.push([this.alt,this.getAttribute("data-size"),size_image]);
		                                }
		                            }
		                            imagem_test.onerror = function() {
		                                erros.imagens.push([this.alt,this.src]);
		                            }
		                            //// Test image END

		                        }

		                        //// Test text START
		                        //Start 3
		                        for(var t=0;t<info.textos.length;t++){    

		                                if(planilha.feed.entry[i]["gsx$"+info.textos[t][0]].$t.indexOf("|") != -1){
		                                    var explodeText = planilha.feed.entry[i]["gsx$"+info.textos[t][0]].$t.split("|")
		                                    for(var u = 0 ; u < explodeText.length ; u++){
		                                        el("."+info.textos[t][1]).innerHTML = explodeText[u];

		                                        if(el("."+info.textos[t][1]).clientHeight>info.textos[t][2]){
		                                            erros.textos.push([planilha.feed.entry[i].gsx$id.$t,info.textos[t][0],info.textos[t][1],explodeText[u]]);
		                                        }
		                                    }
		                                }
		                                else{
		                                    el("."+info.textos[t][1]).innerHTML = planilha.feed.entry[i]["gsx$"+info.textos[t][0]].$t;
		                                    if(el("."+info.textos[t][1]).clientHeight>info.textos[t][2]){
		                                        erros.textos.push([planilha.feed.entry[i].gsx$id.$t,info.textos[t][0],info.textos[t][1],planilha.feed.entry[i]["gsx$"+info.textos[t][0]].$t]);
		                                    }
		                                }
		                        }
		                        //End 3
		                        //// Test text END

		                   
		                }
		                //End 2
		       }
		       //End 1


		      




		    });
		    //End 0

		    xhr.send();


		    setTimeout(function(){
		        // console.log(erros);
		        console.log(erros);
		        var errosGerados = false;
		        var popErros = "<!DOCTYPE html><html><head><title>Error Debug</title><script type='text/javascript'>window.onload = function(){var boxError = document.getElementsByClassName('boxError');for(var i = 0 ; i < boxError.length ; i++){boxError[i].onclick = function(e){console.log(this.getAttribute('data-click'));if(this.getAttribute('data-click') == 'false'){this.style.backgroundColor = '#4aba79';this.setAttribute('data-click','true');}else{this.style.backgroundColor = '#b94b67';this.setAttribute('data-click','false');}}}}</script><style type='text/css'>.boxError{position: relative;border: 1px solid black;width: auto;background-color: #b94b67;color: #ffffff;cursor: pointer;padding:5px;font-size:14px;width:500px;}</style></head><body><h1 style='margin-left:180px;'>Debug Error:</h1>";


		        popErros+="<h3>Error Imagens:</h3>";
		       
		        if(erros.imagens.length!=0){
		        	errosGerados = true;
		        	for(var t = 0 ; t < erros.imagens.length ; t++ ){
		        	 	popErros+="<div class='boxError' data-click='false'>";
			        	popErros+="<span style='font-size:15px;text-decoration: underline;'>ID:</span> "+erros.imagens[t][0]+"<br><span style='font-size:15px;text-decoration: underline;'>Imagem:</span> "+erros.imagens[t][1];
			        	popErros+="</div><br>";
			        }
		        }
		        else{
		        	popErros+="<h4 style='color:#4aba79;'>Nenhum erro encontrado! :D</h4>";
		        }


		        
		        




		        popErros+="<h3>Error Imagem Size:</h3>";
		        
		        if(erros.imagens_size.length!=0){
		        	errosGerados = true;
		        	for(var t = 0 ; t < erros.imagens_size.length ; t++ ){
			        	popErros+="<div class='boxError' data-click='false'>";
			        	popErros+="<span style='font-size:15px;text-decoration: underline;'>ID:</span> "+erros.imagens_size[t][0]+"<br><span style='font-size:15px;text-decoration: underline;'>Size Img Rule:</span> "+erros.imagens_size[t][1]+"<br><span style='font-size:15px;text-decoration: underline;'>Size Img Error:</span> "+erros.imagens_size[t][2];
			        	popErros+="</div><br>";
			        }
		        }
		        else{
		        	popErros+="<h4 style='color:#4aba79;'>Nenhum erro encontrado! :D</h4>";
		        }

		        
		        




	         	popErros+="<h3>Error textos:</h3>";
	         	
	         	if(erros.textos.length!=0){
	         		errosGerados = true;
	         		for(var t = 0 ; t < erros.textos.length ; t++ ){
			        	popErros+="<div class='boxError textTeste' data-click='false' data-text='"+erros.textos[t][3]+"' data-class='"+erros.textos[t][2]+"'>";
			        	popErros+="<span style='font-size:15px;text-decoration: underline;'>ID:</span> "+erros.textos[t][0]+"<br><span style='font-size:15px;text-decoration: underline;'>Step:</span> "+erros.textos[t][1]+"<br><span style='font-size:15px;text-decoration: underline;'>Class:</span> "+erros.textos[t][2]+"<br><span style='font-size:15px;text-decoration: underline;'>Texto:</span> "+erros.textos[t][3];
			        	popErros+="</div><br>";
			        }
	         	}
	         	else{
	         		popErros+="<h4 style='color:#4aba79;'>Nenhum erro encontrado! :D</h4>";
	         	}

		        
		        popErros+="</body></html>";






		        var pop = document.createElement("div");
		        var banner = document.querySelector("#banner");
		        pop.style.width = "510px";
		        pop.style.height = "240px";
		        if(info.popUp[1] == "baixo"){
		        	pop.style.top = banner.offsetHeight+5+"px";
		        	pop.style.left = "5px";
		        }
		        else if(info.popUp[1] == "lado"){
		        	pop.style.top = "5px";
		       	    pop.style.left = banner.offsetWidth+5+"px";
		        }
		        else{
		        	pop.style.top = banner.offsetHeight+5+"px";
		        	pop.style.left = "5px";
		        }
		        
		        pop.style.boxShadow = " 0px 0px 5px 3px rgba(0,0,0,0.69)";
		        pop.style.position = "absolute";
		        pop.style.zIndex = 9999999999;
		        pop.style.backgroundColor = "#ffffff";
		        pop.style.color = "#000000";
		        pop.style.fontSize = "10px";
		        pop.style.overflow = "auto";
		        pop.innerHTML = popErros;
		        if(info.popUp[0]){
		        	 document.getElementsByTagName('body')[0].appendChild(pop);

		        	 var textTeste = document.getElementsByClassName('textTeste');


		        	 for(var t = 0 ; t < textTeste.length ; t++){
		        	 	textTeste[t].onclick = function(){
			        	 	var textMoment= this.getAttribute('data-text');
			        	 	var classMoment = this.getAttribute('data-class');
			        	 	el("."+classMoment).innerHTML = textMoment;
			        	 	if(info.callback!=null){
			        	 		info.callback();
			        	 	}
			        	 }
		        	 }

		        	 
	        	}

	        	if(info.save[0] && errosGerados===true){
	        		var blob = new Blob([popErros], {type: "text/plain;charset=utf-8"});
					saveAs(blob, "error_"+banner.offsetWidth+"x"+banner.offsetHeight+"."+info.save[1]);
	        	}

				


		    },5000)
		    


	}



}

/////// MODULO MILAGRO END






