
var timeline = new Amadre_Animation();
var diagram = new Performance_Align();
var configPreloader = new Performance_Config();
var configSprites = new Performance_Sprites();

var timerSteps;

var s1_spriteInfo;
var s3_spriteInfo;
var s4_spriteInfo;

var controleVideo = false;

var devDynamicContent = {};
function initConfig(){
    configPreloader.preloaderImgs(dynamicContent,[initAnimation,alignAll]);

}

function loadEnablerInfos(){

    // Dynamic Content variables and sample values
    Enabler.setProfileId(10512556);

    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1 = [{}];
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0]._id = 0;
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].DTK = "Awareness";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].Estrategia = "-";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S1_BG = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S1_BG.Url = "http://dev.amad.re/almap/boticario/dco/beijinho/300x250/S1_BG.png";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S1_VIDEO = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S1_VIDEO.Type = "video";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S1_VIDEO.Progressive_Url = "https://r1---sn-bg07dnsr.c.2mdn.net/videoplayback/id/95e89ec9261f4487/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3724346161/sparams/acao,expire,id,ip,ipbits,itag,mime,mip,mm,mn,ms,mv,mvi,pl,ratebypass,source/signature/2BDB5D0C88C844B06120301F0398DCB0C920655B.4E25440262627DFF30FF955672E533109E4764A0/key/cms1/mip/152.249.239.153/mvi/0/pl/24/redirect_counter/1/cm2rm/sn-bg0d67e/req_id/b8514b5db556a3ee/cms_redirect/yes/mm/34/mn/sn-bg07dnsr/ms/ltu/mt/1579898073/mv/m?file=file.mp4";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S1_SPRITE = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S1_SPRITE.Url = "http://dev.amad.re/almap/boticario/dco/beijinho/300x250/S1_SPRITE.png";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S1_QTD_STEPS_SPRITE = "25|1|L3";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S2_BG = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S2_BG.Url = "http://dev.amad.re/almap/boticario/dco/beijinho/300x250/S2_BG.png";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S2_TXT_IMG = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S2_TXT_IMG.Url = "http://dev.amad.re/almap/boticario/dco/beijinho/300x250/S2_TXT_IMG.png";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S3_BG_SPRITE = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S3_BG_SPRITE.Url = "http://dev.amad.re/almap/boticario/dco/beijinho/300x250/S3_BG_SPRITE.png";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S3_QTD_STEPS_SPRITE = "25|1.2|L2";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S3_PRODUTO_IMG = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S3_PRODUTO_IMG.Url = "http://dev.amad.re/almap/boticario/dco/beijinho/300x250/S3_PRODUTO_IMG.png";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_BG_SPRITE = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_BG_SPRITE.Url = "http://dev.amad.re/almap/boticario/dco/beijinho/300x250/S4_BG_SPRITE.png";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_QTD_STEPS_SPRITE = "25|1.3|L5";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_PRODUTO_IMG = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_PRODUTO_IMG.Url = "http://dev.amad.re/almap/boticario/dco/beijinho/300x250/S4_PRODUTO_IMG.png";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_TXT_IMG = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_TXT_IMG.Url = "http://dev.amad.re/almap/boticario/dco/beijinho/300x250/S4_TXT_IMG.png";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_DESCONTO_IMG = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_DESCONTO_IMG.Url = "http://dev.amad.re/almap/boticario/dco/beijinho/300x250/empty.png";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_PRECO_TXT = "99,00|80,00";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_DEFESA_TXT = "EX: V\u00E1lido na compra de 2 produtos";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_LEGAL_TXT = "EX: *Promo\u00E7\u00E3o v\u00E1lida enquanto houver estoque";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].CTA = "EXPERIMENTE";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].LOGO_SVG_COLOR = "#9d2b57|#ffffff|#9d2b57";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].COLOR_TXT = "#ffffff|#000000|#ffffff";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].COLOR_CTA = "#fcbb75|#9d2b57";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].AUX_TXT = "-";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].AUX_IMG = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].AUX_IMG.Url = "http://dev.amad.re/almap/boticario/dco/beijinho/300x250/empty.png";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].TIMER = "3|3|3";
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].URL = {};
    devDynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].URL.Url = "https://www.boticario.com.br";
    Enabler.setDevDynamicContent(devDynamicContent);


    // Variáveis

    timerSteps = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].TIMER.split("|");


    colorCta = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].COLOR_CTA.split("|");
    colorLogo = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].LOGO_SVG_COLOR.split("|");

    var player_1 = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S1_VIDEO.Progressive_Url;

    var S1_BG = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S1_BG.Url;
    var S1_SPRITE = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S1_SPRITE.Url;
    s1_spriteInfo = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S1_QTD_STEPS_SPRITE.split("|");

    var S2_BG = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S2_BG.Url;
    var S2_TXT_IMG = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S2_TXT_IMG.Url;

    var S3_BG_SPRITE = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S3_BG_SPRITE.Url;
    s3_spriteInfo = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S3_QTD_STEPS_SPRITE.split("|");
    var S3_PRODUTO_IMG = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S3_PRODUTO_IMG.Url;

    var S4_BG_SPRITE = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_BG_SPRITE.Url;
    s4_spriteInfo = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_QTD_STEPS_SPRITE.split("|");
    var S4_PRODUTO_IMG = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_PRODUTO_IMG.Url;
    var S4_TXT_IMG = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].S4_TXT_IMG.Url;

    var cta = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].CTA;


    
    // Atribuições  


    if(S1_BG.indexOf("empty")!=-1){
        el(".player_1").src = player_1;
        controleVideo = true;
    }
    else{
        el(".S1_BG").style.background = `url(${S1_BG}) no-repeat`;
    }


    
    el(".S1_SPRITE").style.background = `url(${S1_SPRITE}) no-repeat`;

    el(".S2_BG").style.background = `url(${S2_BG}) no-repeat`;
    el(".S1_SPRITE").style.background = `url(${S1_SPRITE}) no-repeat`;
    el(".S2_TXT_IMG").style.background = `url(${S2_TXT_IMG}) no-repeat`;

    el(".S3_BG_SPRITE").style.background = `url(${S3_BG_SPRITE}) no-repeat`;
    el(".S3_PRODUTO_IMG").style.background = `url(${S3_PRODUTO_IMG}) no-repeat`;

    el(".S4_BG_SPRITE").style.background = `url(${S4_BG_SPRITE}) no-repeat`;
    el(".S4_PRODUTO_IMG").style.background = `url(${S4_PRODUTO_IMG}) no-repeat`;
    el(".S4_TXT_IMG").style.background = `url(${S4_TXT_IMG}) no-repeat`;


    el(".CTA").innerHTML = cta;


    // Configurações


    el(".COLOR_CTA").style.backgroundColor = colorCta[0];
    el(".CTA").style.color = colorCta[1];




    // CLICK EXIT
    var urlExit = dynamicContent.Feed_Boticario_Beijinho_Feed_Msg_1[0].URL.Url;
    el('.hitArea').addEventListener('click', bannerExitHandler, false);
    // ████████████████████████████████████████████████████████████ EXIT
    function bannerExitHandler(e) { Enabler.exitOverride('Banner Exit', urlExit); }
}


function alignAll(){
    
    diagram.automateText(".CTA",128,true);

    // diagram.alignText([
    //     [".boxteste",'top',157,42],
    //     [".boxteste",'left',300]
    // ]);
    
}


var initAnimation = function () {

// 	 el(".LOGO_SVG_COLOR").style.fill = corLogo[2];
el(".LOGO_SVG_COLOR").style.fill = colorLogo[0];
    
if(controleVideo){
    timeline.animationElements('alphaShow', [['.player_1', 0]]);
    el('.player_1').play();
    el(".LOGO_SVG_COLOR").style.fill = colorLogo[1];
}

timeline.animationElements('alphaShow_2', [['.S1_BG', 0]]);
timeline.animationElements('alphaShow', [['.S1_SPRITE', 0]]);
timeline.animationElements('STOP_HERE', [['.S1_SPRITE', 0]],function(){
    configSprites.spriteScript('.S1_SPRITE',"vertical",250,1,s1_spriteInfo[0],s1_spriteInfo[1],s1_spriteInfo[2]);
   
});
timeline.animationElements('grupo_sprit1_classMotion_0', [['.grupo_sprit1', 0]]);
timeline.animationElements('mascara1_classMotion_0', [['.mascara1', 0]]);
timeline.animationElements('LOGO_SVG_COLOR_classMotion_0', [['.LOGO_SVG_COLOR', 0]]);
timeline.animationElements('S2_BG_classMotion_0', [['.S2_BG', timerSteps[0]]]);
timeline.animationElements('STOP_HERE', [['.S2_BG', 0]],function(){
    el(".LOGO_SVG_COLOR").style.fill = colorLogo[0];
});
timeline.animationElements('S2_TXT_IMG_classMotion_0', [['.S2_TXT_IMG', 0.10]]);
timeline.animationElements('mascara2_classMotion_0', [['.mascara2', timerSteps[1]]]);
timeline.animationElements('S2_BG_classMotion_1', [['.S2_BG', 0.40]]);
timeline.animationElements('S2_TXT_IMG_classMotion_1', [['.S2_TXT_IMG', 0]]);
timeline.animationElements('grupo_sprit3_classMotion_0', [['.grupo_sprit3', 0]]);

timeline.animationElements('alphaShow', [['.S3_BG_SPRITE', 0.30]]);
timeline.animationElements('STOP_HERE', [['.S3_BG_SPRITE', 0]],function(){
    configSprites.spriteScript('.S3_BG_SPRITE',"vertical",250,1,s3_spriteInfo[0],s3_spriteInfo[1],s3_spriteInfo[2]);
    
});

timeline.animationElements('S3_PRODUTO_IMG_classMotion_0', [['.S3_PRODUTO_IMG', 0]]);
timeline.animationElements('S3_PRODUTO_IMG_classMotion_1', [['.S3_PRODUTO_IMG', timerSteps[2]]]);

timeline.animationElements('alphaShow', [['.S4_BG_SPRITE', 0.30]]);
timeline.animationElements('STOP_HERE', [['.S4_BG_SPRITE', 0]],function(){
    configSprites.spriteScript('.S4_BG_SPRITE',"vertical",250,1,s4_spriteInfo[0],s4_spriteInfo[1],s4_spriteInfo[2]);
    
});


timeline.animationElements('grupo_sprit4_classMotion_0', [['.grupo_sprit4', 0]]);
timeline.animationElements('grupo_sprit3_classMotion_1', [['.grupo_sprit3', 0.20]]);
timeline.animationElements('S4_PRODUTO_IMG_classMotion_0', [['.S4_PRODUTO_IMG', 0]]);
timeline.animationElements('S4_TXT_IMG_classMotion_0', [['.S4_TXT_IMG', 0.60]]);
timeline.animationElements('COLOR_CTA_classMotion_0', [['.COLOR_CTA', 0.40]]);
timeline.animationElements('CTA_classMotion_0', [['.CTA', 0.30]]);


timeline.animationElements('LOOPING', [['.CTA', 4]],initAnimation);


}


