// ████████████████████████████████████████████████████████████ VARs
var timeline = new Amadre_Animation();
var diagram = new Performance_Align();
var configPreloader = new Performance_Config();
// 

var timerStep1;
var etapa;

var devDynamicContent = {};

function initConfig(){
    configPreloader.preloaderImgs(dynamicContent,[initAnimation,alignAll]);

}

// ████████████████████████████████████████████████████████████ ENABLER INFOS
function loadEnablerInfos(){

    // ████████████████ ◢ DYNAMIC VARs ◣ ████████████████████████████████████████████████████████████
   // Dynamic Content variables and sample values
    // Dynamic Content variables and sample values
    Enabler.setProfileId(10013677);

    devDynamicContent.VWAOV4_Main= [{}];
    devDynamicContent.VWAOV4_Main[0]._id = 0;
    devDynamicContent.VWAOV4_Main[0].ID = 1;
    devDynamicContent.VWAOV4_Main[0].url1 = {};
    devDynamicContent.VWAOV4_Main[0].url1.Url = "http://www.ofertas.vw.com.br";
    devDynamicContent.VWAOV4_Main[0].url2 = {};
    devDynamicContent.VWAOV4_Main[0].url2.Url = "http://www.ofertas.vw.com.br";
    devDynamicContent.VWAOV4_Main[0].url3 = {};
    devDynamicContent.VWAOV4_Main[0].url3.Url = "";
    devDynamicContent.VWAOV4_Main[0].url4 = {};
    devDynamicContent.VWAOV4_Main[0].url4.Url = "http://www.ofertas.vw.com.br";
    devDynamicContent.VWAOV4_Main[0].img_1 = {};
    devDynamicContent.VWAOV4_Main[0].img_1.Url = "https://bucket-dco-vw.s3.amazonaws.com/v4/incen_hatch_300x250_4.jpg";
    devDynamicContent.VWAOV4_Main[0].img_2 = {};
    devDynamicContent.VWAOV4_Main[0].img_2.Url = "https://bucket-dco-vw.s3.amazonaws.com/v4/incen_hatch_300x250_3.jpg";
    devDynamicContent.VWAOV4_Main[0].img_3 = {};
    devDynamicContent.VWAOV4_Main[0].img_3.Url = "http://dev.amad.re/VW/v4/_logo/logo_vw.png";
    devDynamicContent.VWAOV4_Main[0].txt1 = "A <b>potência certa</b> para quem busca <b>emoção.</b>";
    devDynamicContent.VWAOV4_Main[0].txt2 = "Conheça o desempenho dos <b>hatches Volkswagen.</b>";
    devDynamicContent.VWAOV4_Main[0].txt3 = "#vazio";
    devDynamicContent.VWAOV4_Main[0].txt4 = "#vazio";
    devDynamicContent.VWAOV4_Main[0].CTA = "Clique e saiba mais";
    devDynamicContent.VWAOV4_Main[0].Layout = "default"; //image - alltype
    devDynamicContent.VWAOV4_Main[0].Travelling = "right"; //left - right 120x600 e 160x600
    devDynamicContent.VWAOV4_Main[0].Tempo = "3";
    Enabler.setDevDynamicContent(devDynamicContent);


    timerStep1 = dynamicContent.VWAOV4_Main[0].Tempo;
    etapa = dynamicContent.VWAOV4_Main[0].Layout;


    var imageBG1 = dynamicContent.VWAOV4_Main[0].img_1.Url;
    var imageBG2 = dynamicContent.VWAOV4_Main[0].img_2.Url;
    var imageLogo = dynamicContent.VWAOV4_Main[0].img_3.Url;

    var textStep1 = dynamicContent.VWAOV4_Main[0].txt1;
    var textStep2 = dynamicContent.VWAOV4_Main[0].txt2;
    var textCTA = dynamicContent.VWAOV4_Main[0].CTA;

    

    var urlExit = dynamicContent.VWAOV4_Main[0].url1.Url;
    

    if(etapa!="default"){
        //////////// IMAGE
        // BG
        el(".bg_1").style.background = "url("+imageBG1+") no-repeat";

        // Logo
        el(".logo_vw_1").style.background = el(".logo_vw_2").style.background = "url("+imageLogo+") no-repeat";
        el(".logo_vw_1").style.backgroundSize =  el(".logo_vw_2").style.backgroundSize = "100%";
        el(".logo_vw_1").style.left = "240px";
        el(".logo_vw_1").style.top = "191px";
        
        // // TEXTs
        el(".txt_1_1").innerHTML = textStep1;

        // // Footer
        el(".cta_txt").innerHTML = textCTA;
    }
    else{
        el(".default").style.display = "block";
        //////////// IMAGE
        // image
        el(".bg_1_default").style.background = "url("+imageBG1+") no-repeat";
        // text //txt_1_1_image
        el(".txt_1_1_default").style.display = "none";
        // logo
        el(".logo_vw_1_default").style.left = "240px";
        el(".logo_vw_1_default").style.top = "191px";
        // BG
        el(".bg_2_default").style.background = "url("+imageBG2+") no-repeat";

        // Logo
        el(".logo_vw_1_default").style.background = el(".logo_vw_2_default").style.background = "url("+imageLogo+") no-repeat";
        el(".logo_vw_1_default").style.backgroundSize =  el(".logo_vw_2_default").style.backgroundSize = "100%";
        
        // // TEXTs
        el(".txt_1_1_default").innerHTML = el(".txt_1_1_image_default").innerHTML = textStep1;
        el(".txt_2_1_default").innerHTML = textStep2;

        // // Footer
        el(".cta_txt_default").innerHTML = textCTA;

    }


    // ████████████████ ◢ DYNAMIC FIELDs ◣ ████████████████████████████████████████████████████████████
    


	// CLICK EXIT
    el('.hitArea').addEventListener('click', bannerExitHandler, false)


    
    // ████████████████████████████████████████████████████████████ EXIT
    function bannerExitHandler(e) { Enabler.exitOverride('Banner Exit', urlExit); }

    


}



// ████████████████████████████████████████████████████████████ ALIGN ALL TEXTS
function alignAll(){

    if(etapa!="default"){
        diagram.alignText([
            [".txt_1_1",'top',80],
            [".cta_txt",'top',75,175]
        ]);
    }
    else{
        diagram.alignText([
            [".txt_1_1_image_default",'top',68],
            [".txt_1_1_default",'top',161],
            [".txt_2_1_default",'top',72],
            [".cta_txt_default",'top',75,175]
        ]);
    }


    

}






// ████████████████████████████████████████████████████████████ INIT ANIMATION
var initAnimation = function () {

    if(etapa!="default"){
        // INIT
        // ████████████████ ◢ STEP01 ◣ █████████████████████████████████

        timeline.animationElements('cortina_out', [['#banner', 0.1]]);
        timeline.animationElements('scale_in', [['.logo_vw_1', .2]]);


        // ████████████████ ◢ STEP02 ◣ █████████████████████████████████

        timeline.animationElements('all_in', [['.bg_1', .2]]);
        timeline.animationElements('cta_in', [['.cta_txt', .3]]);
        timeline.animationElements('all_in', [['.txt_1_1', .1]]);

       
    }
    else{
        // INIT
        // ████████████████ ◢ STEP01 ◣ █████████████████████████████████

        timeline.animationElements('cortina_out', [['.banner', 0.1]]);
        // BG IMAGE 1
        timeline.animationElements('all_in_default', [['.bg_1_default', .1]]);
        // 
        timeline.animationElements('all_in_default', [['.txt_1_1_default', .2]]); //TEXT IN ALLTYPE
        timeline.animationElements('all_in_default', [['.txt_1_1_image_default', 0]]); //TEXT IN IMAGE
        timeline.animationElements('scale_in_default', [['.logo_vw_1_default', .2]]);

            // OUT
            timeline.animationElements('all_out_default', [['.txt_1_1_default', timerStep1]]); //TEXT OUT ALLTYPE
            timeline.animationElements('all_out_default', [['.txt_1_1_image_default', 0]]); //TEXT OUT IMAGE

            
            timeline.animationElements('all_out_default', [['.bg_1_default', .3]]);


        // ████████████████ ◢ STEP02 ◣ █████████████████████████████████

        timeline.animationElements('all_in_default', [['.bg_2_default', .2]]);
        timeline.animationElements('cta_in_default', [['.cta_txt_default', .2]]);
        timeline.animationElements('all_in_default', [['.txt_2_1_default', -.2]]);

timeline.animationElements('LOOPING', [['.txt_2_1_default', 4]],initAnimation);
        
    }

	


}