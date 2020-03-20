
var timeline = new Amadre_Animation();
var diagram = new Performance_Align();
var configPreloader = new Performance_Config();
var configSprites = new Performance_Sprites();


var timerSteps;
var controleSelo = false;
var spriteInfos;

var devDynamicContent = {};
function initConfig(){
    configPreloader.preloaderImgs(dynamicContent,[initAnimation,alignAll]);
}

function loadEnablerInfos(){

    // Dynamic Content variables and sample values
    Enabler.setProfileId(10512592);

    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1 = [{}];
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0]._id = 0;
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_BG = {};
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_BG.Url = "http://dev.amad.re/almap/boticario/dco/intense/300x250/consideracao/s1_bg.png";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_PRODUTO = {};
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_PRODUTO.Url = "http://dev.amad.re/almap/boticario/dco/intense/300x250/consideracao/s1_produto.png";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_SPRITE = {};
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_SPRITE.Url = "http://dev.amad.re/almap/boticario/dco/intense/300x250/consideracao/sprite.png";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_QTD_STEPS_SPRITE = "44|1.6|L0";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S2_BG = {};
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S2_BG.Url = "http://dev.amad.re/almap/boticario/dco/intense/300x250/consideracao/s3_bg.png";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_PRODUTO_2 = {};
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_PRODUTO_2.Url = "http://dev.amad.re/almap/boticario/dco/intense/300x250/consideracao/s3_produto.png";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S2_FOTO = {};
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S2_FOTO.Url = "http://dev.amad.re/almap/boticario/dco/intense/300x250/consideracao/s3_foto.png";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S2_TXT =  "<font style=\'color:#ffffff\'>O brilho do seu Carnaval sem esquecer <\/font><font style=\'color:#ced648\'>do cuidado com o meio ambiente. <\/font>";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S3_BG = {};
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S3_BG.Url = "http://dev.amad.re/almap/boticario/dco/intense/300x250/consideracao/s2_bg.png";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S3_PRODUTO = {};
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S3_PRODUTO.Url = "http://dev.amad.re/almap/boticario/dco/intense/300x250/consideracao/s2_produto.png";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S3_SELO = {};
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S3_SELO.Url = "http://dev.amad.re/almap/boticario/dco/intense/300x250/consideracao/s2_selo_3.png";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S4_BG = {};
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S4_BG.Url = "http://dev.amad.re/almap/boticario/dco/intense/300x250/consideracao/s4_bg.png";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].CTA = "SAIBA MAIS";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].LOGO_SVG_COLOR = "#ffffff|#000000|#ffffff";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].COLOR_TXT = "#000000";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].COLOR_CTA = "#30355d|#30355d";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].AUX_TXT = "3|3|3";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].AUX_IMG = {};
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].AUX_IMG.Url = "http://dev.amad.re/almap/boticario/dco/intense/300x250/empty.png";
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].URL = {};
    devDynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].URL.Url = "http://www.boticario.com.br";
    Enabler.setDevDynamicContent(devDynamicContent);
    

    var colorCta = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].COLOR_CTA.split("|");

    timerSteps = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].AUX_TXT.split("|");
    spriteInfos = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_QTD_STEPS_SPRITE.split("|");



    var s1_bg1 = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_BG.Url;
    var s1_img1 = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_PRODUTO.Url;
    var s1_sprite = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_SPRITE.Url;

    var s2_bg1 = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S2_BG.Url;
    var s2_foto1 = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S2_FOTO.Url;
    var s2_img1 = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S1_PRODUTO_2.Url;

    var s3_bg1 = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S3_BG.Url;
    var s3_img1 = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S3_PRODUTO.Url;
    var s3_logo1 = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S3_SELO.Url;


    var s4_bg1 = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S4_BG.Url;




    var s2_txt1 = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].S2_TXT;


    var s4_ctatxt1 = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].CTA;
    


    // Atribuições
    
    
    el(".s1_bg1").style.background = `url(${s1_bg1}) no-repeat`;
    el(".s1_img1").style.background = `url(${s1_img1}) no-repeat`;
    el(".s1_sprite").style.background = `url(${s1_sprite}) no-repeat`;

    el(".s2_bg1").style.background = `url(${s2_bg1}) no-repeat`;
    el(".s2_foto1").style.background = `url(${s2_foto1}) no-repeat`;
    el(".s2_img1").style.background = `url(${s2_img1}) no-repeat`;

    el(".s3_bg1").style.background = `url(${s3_bg1}) no-repeat`;
    el(".s3_img1").style.background = `url(${s3_img1}) no-repeat`;
    el(".s3_logo1").style.background = `url(${s3_logo1}) no-repeat`;

    el(".s4_bg1").style.background = `url(${s4_bg1}) no-repeat`;





    el(".s2_txt1").innerHTML = s2_txt1;
    el(".s4_ctatxt1").innerHTML = s4_ctatxt1;


    

    // Configuração

    if(s3_logo1.indexOf("empty") == -1){
        controleSelo = true;
    }


    el(".s4_ctabg1").style.border = `2px solid ${colorCta[0]}`;
    el(".s4_ctatxt1").style.color = colorCta[1];


    // CLICK EXIT
    var urlExit = dynamicContent.Feed_Boticario_Intense_Feed_Msg_1[0].URL.Url;
    el('.hitArea').addEventListener('click', bannerExitHandler, false);
    // ████████████████████████████████████████████████████████████ EXIT
    function bannerExitHandler(e) { Enabler.exitOverride('Banner Exit', urlExit); }
}


function alignAll(){

    diagram.automateText(".s4_ctatxt1",165,true);

    diagram.alignText([
        [".s2_txt1",'top',250],
        [".s4_ctabg1",'left',300]
    ]);

}


var initAnimation = function () {

    
timeline.animationElements('s1_bg1_classMotion_0', [['.s1_bg1', 0]]);
timeline.animationElements('s1_img1_classMotion_0', [['.s1_img1', 0.00]]);
timeline.animationElements('s1_borda1_classMotion_0', [['.s1_borda1', 0.00]]);
timeline.animationElements('s1_logo1_classMotion_0', [['.s1_logo1', 0.30]]);

timeline.animationElements('STOP_HERE', [['.s1_logo1', 0]],function(){
    el(".s1_sprite").style.opacity = 1;
    configSprites.spriteScript('.s1_sprite',"vertical",250,1,spriteInfos[0],spriteInfos[1],spriteInfos[2]);
   
});


if(controleSelo){
    timeline.animationElements('s3_bg1_classMotion_0', [['.s3_bg1', timerSteps[0]]]);
    timeline.animationElements('s3_img1_classMotion_0', [['.s3_img1', 0.10]]);
    timeline.animationElements('s3_logo1_classMotion_0', [['.s3_logo1', 0.40]]);
}

timeline.animationElements('s2_bg1_classMotion_0', [['.s2_bg1', timerSteps[1]]]);
timeline.animationElements('s2_bg1_classMotion_0', [['.s2_foto1', 0]]);
timeline.animationElements('s2_txt1_classMotion_0', [['.s2_txt1', 0.00]]);
timeline.animationElements('s2_img1_classMotion_0', [['.s2_img1', 0.20]]);







timeline.animationElements('s4_bg1_classMotion_0', [['.s4_bg1', timerSteps[2]]]);
timeline.animationElements('s4_logo1_classMotion_0', [['.s4_logo1', 0.20]]);
timeline.animationElements('s4_ctabg1_classMotion_0', [['.s4_ctabg1', 0.60]]);
timeline.animationElements('s4_ctatxt1_classMotion_0', [['.s4_ctatxt1', 0.10]]);
timeline.animationElements('LOOPING', [['.s4_ctatxt1', 4]],initAnimation);

}


