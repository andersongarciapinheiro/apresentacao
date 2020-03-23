

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
	-----> nome_linhaDoTempo.splitWordAnimation("classeAnimacao","elemento","delay","string_especifica_refencia");
	 Ex.
	nome_linhaDoTempo.splitWordAnimation(".fadeIn","alinhamento3",.1," ");

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
	-----> nome_align.automateText("elementoQueVaiReceber",width);
	 Ex.
	nome_align.automateText(".text_4",250);




___________________________________________________________________________________________________________________________________





__________________________________________________________________________________________________________________________________







	/* Método para rodar spriteSheets com javascript
	-----> nome_sprites.spriteScript("elemento",largura_sprite,step_inicial,total_steps,tempo_animacao);
	 Ex.
	nome_sprites.spriteScript('.logo_sprite_1',728,1,24,1.3);


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
											    allElements[u].classList.add(classAnimation);
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
						for_Elements_all[a].classList.remove(clear[i][1]);
					}
					clearTimeout(clear[i][2]);
					
			}
			
		}
		else{
			for(var j=0;j<clear.length;j++){
				if(clear[j][0]==element.replace(".","")){
					var for_Elements = document.querySelectorAll("."+clear[j][0]);
					for(var a=0;a<for_Elements.length;a++){
						for_Elements[a].classList.remove(clear[j][1]);
					}
					//clearTimeout(clear[j][2]);	
				}
			
			}
		}

	}
	///////END Count timer animation

	///////START Word Animation
	function splitWordAnimation(classAnimation,element,delay,condition){
		////
		var text = el(element).innerHTML;
		var splittingTxt = text.split(condition);
		var randow = Math.floor((Math.random() * 1000) + 1);


		el(element).innerHTML = "";

		for(var i=0;i<splittingTxt.length;i++){

				var txtMomento = splittingTxt[i];
				if(condition==""){
					if(txtMomento==" "){
						txtMomento="&nbsp";
					}
					var txtTratado =  document.createElement('div');
			       	txtTratado.innerHTML = txtMomento;
			       	el(element).appendChild(txtTratado);
			       	txtTratado.style.position = "relative";
			       	txtTratado.style.float = "left";
			       	txtTratado.classList.add(classAnimation+"_"+randow+"_"+i);
				}
				else{
					var txtTratado =  document.createElement('div');
			       	txtTratado.innerHTML = txtMomento+"&nbsp";
			       	el(element).appendChild(txtTratado);
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


	///////START Processing Text
	
 	function alignText(array){
       
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
	///////END Processing Text



	///////START Text Automate (BETA)
	function automateText(elemento,limite){
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
	                automateText(elemento,limite);
	                break;
	            }
	            else{
	                document.getElementById("banner").removeChild(div);
	            }

	    }


	}
	///////END Text Automate (BETA)





}
/////// MODULO ALIGN END








/////// MODULO SPRITES START
function Performance_Sprites(){


	this.spriteScript = spriteScript;
	this.spriteCss = spriteCss;


	//////// START SPRITES SCRIPTS


	function spriteScript(elemento,largura,count,steps,timer){
		var spriteTimer = 1000/(steps/timer);
		setTimeout(function(){
			if(count<steps){
				// console.log(count);
				el(elemento).style.backgroundPosition = largura-(largura*count)+"px";
				count++;
				spriteScript(elemento,largura,count,steps,timer);
			}
		},spriteTimer);
	}


	//////// END SPRITES SCRIPTS



	//////// START SPRITES CSS

	function spriteCss(elemento,steps,time){
		var stylesDocument = document.styleSheets;
		for(var i = 0; i < stylesDocument.length ; i++){
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
			var regex = new RegExp(/http[^\"]*(jpg|png|gif)/g);
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
		var qtdImgs = arrayImgs.length;
		var qtdCallbacks = callback.length;
		for(var i = 0 ; i < qtdImgs ; i++){
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
		}
	}
}
/////// MODULO SPRITES END





