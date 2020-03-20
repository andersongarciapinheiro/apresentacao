///////////////// VARIÁVEIS GLOBAIS
var timeline = new Amadre_Animation();
var template_used;
var timer;
var spriteInfos;


var diagram = new Performance_Align();
var configPreloader = new Performance_Config();
var configSprites = new Performance_Sprites();


var devDynamicContent = {};
function initConfig(){
    configPreloader.preloaderImgs(dynamicContent,[initAnimation,alignConfig]);
}

function loadEnablerInfos(){

		// Dynamic Content variables and sample values
	    Enabler.setProfileId(10012288);

	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes= [{}];
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0]._id = 0;
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].Exit_URL = {};
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].Exit_URL.Url = "http://ofertas.vw.com.br";
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].img_1 = {};
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].img_1.Url = "https://bucket-dco-vw.s3.amazonaws.com/v4/condicoes_300x250_bg_t1_s1_201906.jpg"; //BG1
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].img_2 = {};
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].img_2.Url = "https://bucket-dco-vw.s3.amazonaws.com/v4/_sprite/300x250_logo_sprite_18.png"; //SPRITE
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].img_3 = {};
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].img_3.Url = "https://bucket-dco-vw.s3.amazonaws.com/v4/condicoes_300x250_tiguan_t1_s2_201906.jpg"; //BG2
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].img_logo = {};
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].img_logo.Url = "https://bucket-dco-vw.s3.amazonaws.com/v4/_logo/300x250_logo_1.png";
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].txt1 = "SÓ NESTE MÊS, TODA LINHA <b>VOLKSWAGEN</b>";
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].txt2 = "<b>FAZER PARTE DA NOVA VOLKSWAGEN VALE.</b>";
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].txt3 = "volkswagen#vale";
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].CTA = "CLIQUE E CONFIRA";
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].Layout = "1";
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].Steps = "30||1||L0";
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].Color = "#FFFFFF|#FFFFFF |#FFFFFF |#FFFFFF |#FFFFFF |#1b5dff|#FFFFFF"; //TEXT1||TEXT_LINE1||TEXT_LINE2||TEXT_LINE3||TEXT_VALE4||BG_CTA||TEXT_CTA
	    devDynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].Timer = "5";
	    Enabler.setDevDynamicContent(devDynamicContent);


		/////////////// Load variáveis
		template_used = Number(dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].Layout);
		(template_used===3) ? template_used = 2 : template_used = template_used;

		var img_bg1 = dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].img_1.Url;
		var img_sprite = dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].img_2.Url;
		var img_bg2 = dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].img_3.Url;
		var img_logo = dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].img_logo.Url;

		var txt_titulo = dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].txt1;
		var txt_infos = dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].txt2;
		var txt_infos_Explode = txt_infos.split("||");
		var txt_hash = dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].txt3;
		var txt_cta = dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].CTA;
		var txt_colors = dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].Color;
		var txt_colors_Explode = txt_colors.split("|");
		timer = dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].Timer;
		spriteInfos = dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].Steps.split("||");
		
		var fase_default = false;
		var urlExit = dynamicContent.VWAOV4Condies_VWAOV4Condicoes[0].Exit_URL.Url;
		


		if(template_used != 4 && template_used != 5){

			////////////// Carregando nos elementos
			// Images
			el(".bg1_"+template_used.toString()).style.background = "url("+img_bg1+")";
			el(".bg2_"+template_used.toString()).style.background = "url("+img_bg2+")";
			el(".logo_sprite_"+template_used.toString()).style.background = "url("+img_sprite+")";
			el(".logo_"+template_used.toString()).style.background = "url("+img_logo+")";

			// Txt
			el(".txt01_"+template_used.toString()).innerHTML = txt_titulo;
			el(".txt01_"+template_used.toString()).style.color = txt_colors_Explode[0];

			for(var i = 0 ; i < txt_infos_Explode.length ; i++){
				var indexMomento = (i+1).toString();
				el(".txt02_"+indexMomento+"_"+template_used.toString()).innerHTML = txt_infos_Explode[i];
				el(".txt02_"+indexMomento+"_"+template_used.toString()).style.color = txt_colors_Explode[i+1];
				// automateText(".txt02_"+indexMomento+"_"+template_used.toString(),275);
			}	

			el(".hashtag_"+template_used.toString()).innerHTML = txt_hash;
			el(".hashtag_"+template_used.toString()).style.color = txt_colors_Explode[4];

			// Cta
			el(".cta_"+template_used.toString()).innerHTML = txt_cta;
			el(".cta_"+template_used.toString()).style.backgroundColor = txt_colors_Explode[5];
			el(".cta_"+template_used.toString()).style.color = txt_colors_Explode[6];


		}
		else{
			//// Template 4 generico
			// BG

			if(template_used === 5){
				template_used = 4;
				el(".txt_1_1_image").style.fontFamily = "VWHead-Regular";
				el(".txt_2_1").style.fontFamily = "VWHead-Regular";
			}


		    el(".bg_1").style.background = "url("+img_bg1+") no-repeat";
		    el(".bg_2").style.background = "url("+img_bg2+") no-repeat";

		    // Logo
		    el(".logo_vw_1").style.background = el(".logo_vw_2").style.background = "url("+img_logo+") no-repeat";
		    el(".logo_vw_1").style.backgroundSize =  el(".logo_vw_2").style.backgroundSize = "100%";
		    el(".logo_vw_1").style.left = "240px";
		    el(".logo_vw_1").style.top = "191px";
		    
		    // // TEXTs
		    el(".txt_1_1_image").innerHTML = txt_titulo;
		    el(".txt_1_1_image").style.color = txt_colors_Explode[0];
		    el(".txt_2_1").innerHTML = txt_infos+"<br>"+"<span style='color:#8bb0dc'>"+txt_hash+"</span>";

		    // // Footer
		    el(".cta_txt").innerHTML = txt_cta;
		}

	    // CLICK EXIT
	    el('.hitArea').addEventListener('click', bannerExitHandler, false);

	    // ████████████████████████████████████████████████████████████ EXIT
	    function bannerExitHandler(e) { Enabler.exitOverride('Banner Exit', urlExit); }



}

function alignConfig(){
	switch(template_used) {
	    case 1:
	    	
	    	diagram.alignText([
		        [".txt01_1",'top',90],
		        [".boxFinal_1",'top',194]
		    ]);


	        break;
	    case 2:
	    	
	        
	    	diagram.alignText([
		        [".txt01_2",'top',55,196],
		        [".boxFinal_2",'top',196]
		    ]);

	        break;
	    case 3:

	    	diagram.alignText([
		        [".txt01_2",'top',55,196],
		        [".boxFinal_2",'top',196]
		    ]);


	        break;
	    case 6:
	    	

	    	diagram.alignText([
		        [".txt01_6",'top',50],
		        [".boxFinal_6",'top',153,30]
		    ]);


	        break;
	    case 4:
		    diagram.alignText([
		        [".txt_1_1_image",'top',68],
		        [".txt_2_1",'top',70],
		        [".cta_txt",'top',75,175]
		    ]);
	    	break;    
	}
}




initAnimation = function(e){ 



	if(template_used === 1 || template_used === 3){
		el('.template_1').style.display = "block";
		timeline.animationElements("cortina_out",[[".cortina_1",.3]]);
		timeline.animationElements("objects_in",[[".txt01_1",.5]]);
		timeline.animationElements("STOP_HERE",[[".txt01_1",.0]],function(){

			if(spriteInfos[2]!='L0'){
				var timeline_sprite = new Amadre_Animation();
				timeline_sprite.animationElements("sprite_in",[[".logo_sprite_1",.1]]);
			}
			else{
				el('.logo_sprite_1').style.opacity = "1";
			}
			configSprites.spriteScript('.logo_sprite_1',"horizontal",300,1,spriteInfos[0],spriteInfos[1],spriteInfos[2]);
		});
		// timeline.animationElements("logo_anima",[[".logo_sprite_1",.0]]);
		timeline.animationElements("objects_in2",[[".bg2_1",timer]]);
		timeline.animationElements("alpha_1_instant",[[".step2_1",.3]]);
		timeline.animationElements("objects_in",[[".hashtag_1",.1]]);
		timeline.animationElements("objects_in2",[[".txt02_1_1",.3]]);
		timeline.animationElements("objects_in2",[[".txt02_2_1",.15]]);
		timeline.animationElements("objects_in2",[[".txt02_3_1",.15]]);
		timeline.animationElements("objects_in",[[".cta_1",.2]]);
		timeline.animationElements("objects_in",[[".logo_1",.2]]);

		timeline.animationElements('STOP_HERE', [['.logo_1', 0]],function(){
			loopingNow();
		});
		

	}
	else if(template_used === 2){
		el('.template_2').style.display = "block";
		timeline.animationElements("cortina_out",[[".cortina_2",.3]]);
		timeline.animationElements("objects_in",[[".txt01_2",.5]]);
		timeline.animationElements("STOP_HERE",[[".txt01_2",.0]],function(){

			if(spriteInfos[2]!='L0'){
				var timeline_sprite = new Amadre_Animation();
				timeline_sprite.animationElements("sprite_in",[[".logo_sprite_2",.1]]);
			}
			else{
				el('.logo_sprite_2').style.opacity = "1";
			}
			configSprites.spriteScript('.logo_sprite_2',"horizontal",300,1,spriteInfos[0],spriteInfos[1],spriteInfos[2]);
		});
		// timeline.animationElements("logo_anima",[[".logo_sprite_2",.0]]);
		timeline.animationElements("objects_in2",[[".bg2_2",timer]]);
		timeline.animationElements("alpha_1_instant",[[".step2_2",.3]]);
		timeline.animationElements("objects_in",[[".hashtag_2",.1]]);
		timeline.animationElements("objects_in2",[[".txt02_1_2",.3]]);
		timeline.animationElements("objects_in2",[[".txt02_2_2",.15]]);
		timeline.animationElements("objects_in2",[[".txt02_3_2",.15]]);
		timeline.animationElements("objects_in",[[".cta_2",.2]]);
		timeline.animationElements("objects_in",[[".logo_2",.2]]);
	}
	else if(template_used === 6){
		el('.template_6').style.display = "block";
		timeline.animationElements("cortina_out",[[".cortina_6",.3]]);
		timeline.animationElements("objects_in",[[".txt01_6",.5]]);
		timeline.animationElements("objects_in",[[".bg2_6",.1]]);
		timeline.animationElements("STOP_HERE",[[".txt01_6",.0]],function(){
			
			if(spriteInfos[2]!='L0'){
				var timeline_sprite = new Amadre_Animation();
				timeline_sprite.animationElements("sprite_in",[[".logo_sprite_6",.1]]);
			}
			else{
				el('.logo_sprite_6').style.opacity = "1";
			}
			configSprites.spriteScript('.logo_sprite_6',"vertical",134,1,spriteInfos[0],spriteInfos[1],spriteInfos[2]);
		});
		timeline.animationElements("cortina_out",[[".step1_6",timer]]);
		timeline.animationElements("alpha_1_instant",[[".step2_6",.3]]);
		timeline.animationElements("objects_in",[[".hashtag_6",.1]]);
		timeline.animationElements("objects_in2",[[".txt02_1_6",.3]]);
		timeline.animationElements("objects_in2",[[".txt02_2_6",.15]]);
		timeline.animationElements("objects_in2",[[".txt02_3_6",.15]]);
		timeline.animationElements("objects_in",[[".cta_6",.2]]);
		timeline.animationElements("objects_in",[[".logo_6",.2]]);

	}
	else if(template_used === 4){
		el('.template_4').style.display = "block";
		timeline.animationElements("cortina_out",[[".cortina_4",.3]]);
	    timeline.animationElements('all_in', [['.bg_1', .1]]);
	    timeline.animationElements('all_in', [['.txt_1_1_image', 0]]); 
		timeline.animationElements('scale_in', [['.logo_vw_1', .2]]);
	    timeline.animationElements('all_out', [['.txt_1_1_image', timer]]);
	    timeline.animationElements('all_out', [['.bg_1', .3]]);
		// ████████████████ ◢ STEP02 ◣ █████████████████████████████████
		timeline.animationElements('all_in', [['.bg_2', .2]]);
		timeline.animationElements('cta_in', [['.cta_txt', .2]]);
		timeline.animationElements('all_in', [['.txt_2_1', -.2]]);
	}



}




function loopingNow(){

    setTimeout(function(){
        timeline.clearAnimation(".all");
        el(".logo_sprite_1").style.backgroundPositionX = "0px";
        initAnimation();
    },4000)

}