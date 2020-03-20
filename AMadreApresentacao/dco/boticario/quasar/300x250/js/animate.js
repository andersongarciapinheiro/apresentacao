var timeline = new Amadre_Animation();
var diagram = new Performance_Align();
var configPreloader = new Performance_Config();
var configSprites = new Performance_Sprites();

var timerSteps;
var colorLogo;
var color;
var s2_spriteInfo;
var controleVideo = false;

var devDynamicContent = {};

function initConfig() {
    configPreloader.preloaderImgs(dynamicContent,[initAnimation,alignAll]);
}

function loadEnablerInfos() {

    // Dynamic Content variables and sample values
    Enabler.setProfileId(10515996);
    devDynamicContent.Feed_Boticarios_Quasar_Feed = [{}];
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0]._id = 0;
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].Active = true;
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].Default = true;
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].Fase = "Default";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].Estrategia = "";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S1_BG_IMG = {};
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S1_BG_IMG.Url = "http://dev.amad.re/almap/boticario/dco/quasar/awareness/300x250/S1_BG_IMG.png"; // Empty = Video true
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S1_VIDEO = {};
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S1_VIDEO.Type = "video";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S1_VIDEO.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/961fb2f8de6dcd3e/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3726067483/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/6C89BC5EE918FFC102E5D891EB71D135A0B86474.72ABA9175653942F2C7CADAE041A932DC6FF447A/key/ck2/file/file.mp4";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S1_IMG_EXP = {};
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S1_IMG_EXP.Url = "http://dev.amad.re/almap/boticario/dco/quasar/awareness/300x250/S1_IMG_EXP.png";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_BG_IMG = {};
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_BG_IMG.Url = "http://dev.amad.re/almap/boticario/dco/quasar/awareness/300x250/S2_BG_IMG.png";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_SPRITE_IMG = {};
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_SPRITE_IMG.Url = "http://dev.amad.re/almap/boticario/dco/quasar/awareness/300x250/300x250.png";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_QTD_STEPS_SPRITE = "17|0.8|L0";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_DESCONTO_PRECO_IMG = {};
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_DESCONTO_PRECO_IMG.Url = "http://dev.amad.re/almap/boticario/dco/quasar/awareness/300x250/S2_DESCONTO_PRECO_IMG_01.png";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_IMG_PROD = {};
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_IMG_PROD.Url = "http://dev.amad.re/almap/boticario/dco/quasar/awareness/300x250/S2_IMG_PROD.png";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S3_BG_IMG = {};
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S3_BG_IMG.Url = "http://dev.amad.re/almap/boticario/dco/quasar/empty.png";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].S1_TXT1 = "A <font style='background-color:MACROCOLOR'>CORAGEM</font> CRIA ALGUÉM CAPAZ DE CRIAR TUDO AQUILO QUE QUISER.";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].TXT_LEGAL = "Promoção válida de 17/02/2020 a 08/03/2020 ou enquanto durarem os estoques, apenas para região NE. Exceto kits Ed. Limitada e itens de Quasar Next.";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].CTA = "CONHEÇA";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].LOGO_SVG_COLOR = "#ffffff|#000000";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].COLOR_TXT = "#000000|#fde900|#000000|#fde900|#000000";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].AUX_TXT = "";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].AUX_IMG = "";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].TIMER = "3|3";
    devDynamicContent.Feed_Boticarios_Quasar_Feed[0].URL = "https://www.boticario.com.br";
    Enabler.setDevDynamicContent(devDynamicContent);



    colorLogo = dynamicContent.Feed_Boticarios_Quasar_Feed[0].LOGO_SVG_COLOR.split("|");
    color = dynamicContent.Feed_Boticarios_Quasar_Feed[0].COLOR_TXT.split("|");

    s2_spriteInfo = dynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_QTD_STEPS_SPRITE.split("|");

    timerSteps = dynamicContent.Feed_Boticarios_Quasar_Feed[0].TIMER.split("|");


    var player_1 = dynamicContent.Feed_Boticarios_Quasar_Feed[0].S1_VIDEO.Progressive_Url;
     

    var s1_bg2 = dynamicContent.Feed_Boticarios_Quasar_Feed[0].S1_BG_IMG.Url;
    var s1_txt2 = dynamicContent.Feed_Boticarios_Quasar_Feed[0].S1_IMG_EXP.Url;

    var s2_bg1 = dynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_BG_IMG.Url;
    var sprite_txt = dynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_SPRITE_IMG.Url;
    var s2_selo1 = dynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_DESCONTO_PRECO_IMG.Url;
    var s2_pack1 = dynamicContent.Feed_Boticarios_Quasar_Feed[0].S2_IMG_PROD.Url;

    var s1_txt1 = dynamicContent.Feed_Boticarios_Quasar_Feed[0].S1_TXT1;
    s1_txt1 = s1_txt1.replace("MACROCOLOR",color[1]);
    var s2_ctatxt1 = dynamicContent.Feed_Boticarios_Quasar_Feed[0].CTA;

    var txt_legal = dynamicContent.Feed_Boticarios_Quasar_Feed[0].TXT_LEGAL;

    /// Atribuições

    if(s1_bg2.indexOf("empty")!=-1){
        el(".player_1").src = player_1;
        controleVideo = true;
    }
    else{
        el(".s1_bg2").style.background = `url(${s1_bg2}) no-repeat`;
    }



    
    el(".s1_txt2").style.background = `url(${s1_txt2}) no-repeat`;
    el(".s2_bg1").style.background = `url(${s2_bg1}) no-repeat`;
    el(".sprite_txt").style.background = `url(${sprite_txt}) no-repeat`;
    el(".s2_selo1").style.background = `url(${s2_selo1}) no-repeat`;
    el(".s2_pack1").style.background = `url(${s2_pack1}) no-repeat`;

    el(".s1_txt1").innerHTML = s1_txt1;
    el(".s2_ctatxt1").innerHTML = s2_ctatxt1;
    el(".txt_legal").innerHTML = txt_legal;



    /// Configs

    el(".s1_txt1").style.color = color[0];
    el(".s2_ctabg1").style.backgroundColor = color[2];
    el(".s2_ctatxt1").style.color = color[3];
    el(".txt_legal").style.color = color[4];

    // CLICK EXIT
    var urlExit = dynamicContent.Feed_Boticarios_Quasar_Feed[0].URL;
    el('.hitArea').addEventListener('click', bannerExitHandler, false);
    // ████████████████████████████████████████████████████████████ EXIT
    function bannerExitHandler(e) {
        Enabler.exitOverride('Banner Exit', urlExit);
    }
}


function alignAll() {

    // diagram.automateText(".s2_ctatxt1",120,true);

    // diagram.alignText([
    //     [".s1_txt1",'top',226,26],
    //     [".s1_txt1",'left',160],
    //     [".s2_ctabg1",'left',160]
    // ]);

}


var initAnimation = function() {

    el(".LOGO_SVG_COLOR").style.fill = colorLogo[0];


    timeline.animationElements('s1_bg1_motion0', [['.s1_bg1', 0]]);
    timeline.animationElements('sprite_bg1_motion1', [['.sprite_bg1', 0.1]]);
    timeline.animationElements('s1_shape1_motion2', [['.s1_shape1', 0]]);

    timeline.animationElements('STOP_HERE', [['.s1_shape1', 0.2]],function(){
        if(controleVideo){
            el('.player_1').style.opacity = 1;
            // console.log("Video")
            el('.player_1').play();
        }
    });

    timeline.animationElements('s1_bg2_motion3', [['.s1_bg2', 0.1]]);
    timeline.animationElements('sprite_comp_motion5', [['.sprite_comp', 0.3]]);
    timeline.animationElements('LOGO_SVG_COLOR_classMotion_0', [['.LOGO_SVG_COLOR', 0.1]]);
    timeline.animationElements('sprite1_motion6', [['.sprite1', 0]]);
    timeline.animationElements('s1_txt1_motion7', [['.s1_txt1', 0.1]]);
    timeline.animationElements('s1_txt2_motion8', [['.s1_txt2', 0.1]]);
    timeline.animationElements('s1_spray3_motion9', [['.s1_spray3', 0.3]]);
    timeline.animationElements('s1_spray2_motion10', [['.s1_spray2', 0]]);
    timeline.animationElements('s1_spray1_motion11', [['.s1_spray1', 0]]);
    timeline.animationElements('sprite_bg2_motion12', [['.sprite_bg2', timerSteps[0]]]);
    timeline.animationElements('s2_shape1_motion13', [['.s2_shape1', 0]]);
    timeline.animationElements('s2_bg1_motion14', [['.s2_bg1', 0.5]]);

    timeline.animationElements('STOP_HERE', [['.s2_bg1', 0.5]],function(){
        configSprites.spriteScript('.sprite_txt',"vertical",250,1,s2_spriteInfo[0],s2_spriteInfo[1],s2_spriteInfo[2]);
    });

    // timeline.animationElements('s2_txt1_motion15', [['.s2_txt1', 0.2]]);
    timeline.animationElements('sprite2_motion16', [['.sprite2', 0]]);
    timeline.animationElements('STOP_HERE', [['.sprite2', -0.5]],function(){
        el(".LOGO_SVG_COLOR").style.fill = colorLogo[1];
    });
    // timeline.animationElements('s2_txt2_motion17', [['.s2_txt2', 0.1]]);
    // timeline.animationElements('s2_txt3_motion18', [['.s2_txt3', 0.1]]);
    timeline.animationElements('s2_pack1_motion19', [['.s2_pack1', 0.2]]);
    timeline.animationElements('s2_selo1_motion21', [['.s2_selo1', 0.3]]);
    timeline.animationElements('s2_ctabg1_motion22', [['.s2_ctabg1', 0.3]]);
    timeline.animationElements('s2_ctatxt1_motion23', [['.s2_ctatxt1', 0.1]]);
    timeline.animationElements('s2_ctatxt1_motion23', [['.txt_legal', 0.1]]);
    timeline.animationElements('LOOPING', [['.txt_legal', 4]],initAnimation);
    

}