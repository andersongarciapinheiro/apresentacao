let timeline = new Amadre_Animation();
let diagram = new Performance_Align();
let configPreloader = new Performance_Config();
let configSprites = new Performance_Sprites();


let timerSteps;
let color;
let s1_spriteInfo;
let controleVideo = [false,false,false];
let controleSelo = false;


let devDynamicContent = {};

function initConfig() {
    configPreloader.preloaderImgs(dynamicContent,[initAnimation,alignAll]);

}

function loadEnablerInfos() {

    // Dynamic Content variables and sample values
    Enabler.setProfileId(10519113);

    devDynamicContent.Feed_Boticario_Make_B_Feed = [{}];
    devDynamicContent.Feed_Boticario_Make_B_Feed[0]._id = 0;
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Default = true;
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Fase = "Default";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Estrategia = "criativo-a-sem-video_Default";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Data_Start = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Data_Start.RawValue = "2020/03/09 00:00";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Data_Start.UtcValue = 1583737200000;
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Data_End = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Data_End.RawValue = "2020/03/31 23:59";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Data_End.UtcValue = 1585724340000;
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S1_IMG = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S1_IMG.Url = "http://dev.amad.re/almap/boticario/dco/make_b/empty.png";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S1_Video = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S1_Video.Type = "video";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S1_Video.Progressive_Url = "https://r2---sn-bg07dnsy.c.2mdn.net/videoplayback/id/9b84da633ecab97a/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3727366151/sparams/acao,expire,id,ip,ipbits,itag,mime,mip,mm,mn,ms,mv,mvi,pl,ratebypass,source/signature/426236C0FE61E35DFEE8C4D3F9C3E9CF76403198.67A00D91C733A893E90A3099605CE10626607EEE/key/cms1/mip/152.249.239.153/mvi/1/pl/24/redirect_counter/1/cm2rm/sn-bg06e7l/req_id/2abec567eedba3ee/cms_redirect/yes/mm/34/mn/sn-bg07dnsy/ms/ltu/mt/1582918030/mv/u?file=file.mp4";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S1_SPRITE_IMG = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S1_SPRITE_IMG.Url = "http://dev.amad.re/almap/boticario/dco/make_b/sprite/300x250.png";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S2_TXT_1 = "<font style='color:#ffffff;font-size:15px;letter-spacing: 1.1px;'>NOVA FÓRMULA</font><br><font style='color:#ffffff;font-size:20px'>COM ÁCIDO HIALURÔNICO</font>";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S1_QTD_STEPS_SPRITE = "36|1.5|L0";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S2_IMG = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S2_IMG.Url = "http://dev.amad.re/almap/boticario/dco/make_b/awareness/300x250/s2_bg1.jpg";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S2_VIdeo = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S2_VIdeo.Type = "video";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S2_VIdeo.Progressive_Url = "https://r2---sn-bg07dnsy.c.2mdn.net/videoplayback/id/9b84da633ecab97a/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3727366151/sparams/acao,expire,id,ip,ipbits,itag,mime,mip,mm,mn,ms,mv,mvi,pl,ratebypass,source/signature/426236C0FE61E35DFEE8C4D3F9C3E9CF76403198.67A00D91C733A893E90A3099605CE10626607EEE/key/cms1/mip/152.249.239.153/mvi/1/pl/24/redirect_counter/1/cm2rm/sn-bg06e7l/req_id/2abec567eedba3ee/cms_redirect/yes/mm/34/mn/sn-bg07dnsy/ms/ltu/mt/1582918030/mv/u?file=file.mp4";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S3_TXT_1 = "<font style='color:#ffffff;font-size:26px;letter-spacing: 1.3px;'>ALTA COBERTURA</font><br><font style='color:#ffffff;font-size:17px'>NA PRIMEIRA APLICAÇÃO</font>";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S3_IMG = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S3_IMG.Url = "http://dev.amad.re/almap/boticario/dco/make_b/awareness/300x250/s3_bg1.jpg";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S3_Video = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S3_Video.Type = "video";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S3_Video.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/de07fe4a96c83678/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3727366186/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/1058C04B716BC2BAEE36ECB83FB63EDA5E42A904.104B9155E0E4E56FC171E85231FD54FD595F4B27/key/ck2/file/file.mp4";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S4_IMG = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].S4_IMG.Url = "http://dev.amad.re/almap/boticario/dco/make_b/logo_make/300x250/s4_makeb.png";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Logo = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Logo.Url = "http://dev.amad.re/almap/boticario/dco/make_b/conversao/barra/300x250/logo.png";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Desconto = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].Desconto.Url = "http://dev.amad.re/almap/boticario/dco/make_b/empty.png"; // assets/images/empty.png
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].CTA = "CLIQUE AQUI";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].LOGO_SVG_COLOR = "";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].COLOR_TXT = "#ffffff|#ffffff|#ffffff";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].AUX_TXT = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].AUX_TXT.Url = "http://dev.amad.re/almap/boticario/dco/quasar/empty.png";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].AUX_IMG = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].AUX_IMG.Url = "http://dev.amad.re/almap/boticario/dco/quasar/empty.png";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].TIMER = "3|3|3";
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].URL = {};
    devDynamicContent.Feed_Boticario_Make_B_Feed[0].URL.Url = "https://www.boticario.com.br";
    Enabler.setDevDynamicContent(devDynamicContent);


    color = dynamicContent.Feed_Boticario_Make_B_Feed[0].COLOR_TXT.split("|");
    timerSteps = dynamicContent.Feed_Boticario_Make_B_Feed[0].TIMER.split("|");
    s1_spriteInfo = dynamicContent.Feed_Boticario_Make_B_Feed[0].S1_QTD_STEPS_SPRITE.split("|");



    let player_1 = dynamicContent.Feed_Boticario_Make_B_Feed[0].S1_Video.Progressive_Url;
    let player_2 = dynamicContent.Feed_Boticario_Make_B_Feed[0].S2_VIdeo.Progressive_Url;
    let player_3 = dynamicContent.Feed_Boticario_Make_B_Feed[0].S3_Video.Progressive_Url;
    let s1_sprite1 = dynamicContent.Feed_Boticario_Make_B_Feed[0].S1_SPRITE_IMG.Url;
    let s1_bg1 = dynamicContent.Feed_Boticario_Make_B_Feed[0].S1_IMG.Url; //assets/images/s1_bg1.jpg  | Ativar video Video => empty.png
    let s2_bg1 = dynamicContent.Feed_Boticario_Make_B_Feed[0].S2_IMG.Url;
    let s3_bg1 = dynamicContent.Feed_Boticario_Make_B_Feed[0].S3_IMG.Url; //assets/images/s1_bg1.jpg | Ativar video Video => empty.png
    let s3_selo = dynamicContent.Feed_Boticario_Make_B_Feed[0].Desconto.Url;
    let s4_txt2 = dynamicContent.Feed_Boticario_Make_B_Feed[0].Logo.Url;
    let s4_txt1 = dynamicContent.Feed_Boticario_Make_B_Feed[0].S4_IMG.Url;

    

    let s2_txt1 = dynamicContent.Feed_Boticario_Make_B_Feed[0].S2_TXT_1;
    let s3_txt1 = dynamicContent.Feed_Boticario_Make_B_Feed[0].S3_TXT_1;

    let ctaText = dynamicContent.Feed_Boticario_Make_B_Feed[0].CTA;



    //// Configs videos and atribuições
    if(s1_bg1.indexOf("empty")!=-1){
        el(".player_1").src = player_1;
        controleVideo[0] = true;
    }
    else{
        el(".s1_bg1").style.background = `url(${s1_bg1}) no-repeat`;
    }

    if(s2_bg1.indexOf("empty")!=-1){
        el(".player_2").src = player_2;
        controleVideo[1] = true;
    }
    else{
        el(".s2_bg1").style.background = `url(${s2_bg1}) no-repeat`;
    }

    if(s3_bg1.indexOf("empty")!=-1){
        el(".player_3").src = player_3;
        controleVideo[2] = true;
    }
    else{
        el(".s3_bg1").style.background = `url(${s3_bg1}) no-repeat`;
    }


    if(dynamicContent.Feed_Boticario_Make_B_Feed[0].Desconto.Url.indexOf("empty")==-1){
        controleSelo = true;
    }

    console.log("Selo: ",controleSelo)


    el(".s1_sprite1").style.background = `url(${s1_sprite1}) no-repeat`;
    el(".s4_txt2").style.background = `url(${s4_txt2}) no-repeat`;
    el(".s4_txt1").style.background = `url(${s4_txt1}) no-repeat`;
    el(".s3_selo").style.background = `url(${s3_selo}) no-repeat`;
    

    el(".s2_txt1").innerHTML = s2_txt1;
    el(".s3_txt1").innerHTML = s3_txt1;

    el(".ctaText").innerHTML = ctaText;

    //// Configs    

    el(".s2_txt1").style.color = color[0];
    el(".s3_txt1").style.color = color[1];
    el(".ctaBox").style.border = `1px solid ${color[2]};`;
    el(".ctaText").style.color = color[2];


    

    // CLICK EXIT
    let urlExit = dynamicContent.Feed_Boticario_Make_B_Feed[0].URL.Url;
    el('.hitArea').addEventListener('click', bannerExitHandler, false);
    // ████████████████████████████████████████████████████████████ EXIT
    function bannerExitHandler(e) {
        Enabler.exitOverride('Banner Exit', urlExit);
    }
}


function alignAll() {

    diagram.automateText(".ctaText",200,true);

    diagram.alignText([
        [".s2_txt1",'top',81],
        [".s2_txt1",'left',300],
        [".s3_txt1",'top',91,162],
        [".s3_txt1",'left',300],
        [".ctaBox",'left',300]
    ]);

}


let initAnimation = function() {

    
    if(controleSelo){
        el(".s3_img2").style.display = "none";
        el(".s3_img1").style.display = "none";
        el(".s3_txt1").style.display = "none";
    }



    if(controleVideo[0]){
        el('.player_1').style.opacity = 1;
        el('.player_1').play();
    }
    else{
        console.log("Eita")
        timeline.animationElements('s1_bg1_motion1', [['.s1_bg1', 0.2]]);
    }

    // timeline.animationElements('s1_sprite1_motion1', [['.s1_sprite1', 0]]);
    timeline.animationElements('STOP_HERE', [['.s1_bg1', 0.1]],function(){
        console.log("Uow")
        el(".s1_sprite1").style.opacity = 1;
        configSprites.spriteScript('.s1_sprite1',"vertical",250,1,s1_spriteInfo[0],s1_spriteInfo[1],s1_spriteInfo[2]);
    });



    timeline.animationElements('s2_img2_motion2', [['.s2_img2', timerSteps[0]]]);
    timeline.animationElements('s2_img1_motion3', [['.s2_img1', 0]]);


    timeline.animationElements('s2_bg1_motion4', [['.player_2', 0.50]]);
    timeline.animationElements('STOP_HERE', [['.s2_img1', 0]],function(){
        if(controleVideo[1]){
            el('.player_2').style.opacity = 1;
            el('.player_2').play();
        }
        else{
            el(".s2_bg1").classList.add("s2_bg1_motion4");
            // timeline.animationElements('s1_bg1_motion1', [['.s3_bg1', 0]]);
        }
    });

    
    timeline.animationElements('s2_txt1_motion5', [['.s2_txt1', 0.3]]);
    timeline.animationElements('s3_img2_motion6', [['.s3_img2', timerSteps[1]]]);
    timeline.animationElements('s3_img1_motion7', [['.s3_img1', 0]]);

   
    timeline.animationElements('grupo_video3_motion8', [['.player_3', 0.38]]);
    timeline.animationElements('STOP_HERE', [['.s3_img1', 0]],function(){
        if(controleVideo[2]){
            el('.player_3').style.opacity = 1;
            el('.player_3').play();
        }
        else{
            el(".s3_bg1").classList.add("grupo_video3_motion8");
            // timeline.animationElements('s1_bg1_motion1', [['.s3_bg1', 0]]);
        }
    });

    if(controleSelo){
        timeline.animationElements('spriteMotion', [['.spriteSelo', 0]]);
        timeline.animationElements('selo_motion2', [['.s3_selo', 0.7]]);
    }


    timeline.animationElements('s3_txt1_motion10', [['.s3_txt1', 0.2]]);
    timeline.animationElements('s4_bg2_motion11', [['.s4_bg2', timerSteps[2]]]);
    timeline.animationElements('s4_bg1_motion12', [['.s4_bg1', 0]]);
    timeline.animationElements('s4_txt1_motion13', [['.s4_txt1', 0.4]]);
    timeline.animationElements('s4_txt2_motion14', [['.s4_txt2', 0.1]]);
    timeline.animationElements('s4_txt2_motion14', [['.ctaBox', 0.1]]);

   


}
