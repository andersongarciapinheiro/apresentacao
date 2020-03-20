
let timeline = new Amadre_Animation();
let diagram = new Performance_Align();
let configPreloader = new Performance_Config();

let timerSteps;
let txt2_controle = true;
let selo = false;
let controleVideos = [false,false];
let videosRegras;
let posTextos = [
    ["vd_espirro_simples_b","direita"]
]

let devDynamicContent = {};
function initConfig(){
    configPreloader.preloaderImgs(dynamicContent,[initAnimation,alignAll]);
}   

function loadEnablerInfos(){

    // Dynamic Content variables and sample values

    Enabler.setProfileId(10495002);

    devDynamicContent.DCO_Boticario_MalbecVert_Sheet = [{}];
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0]._id = 0;
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Unique_ID = "default_1";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Reporting_Label = "default_728x90";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Active = true;
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Default = true;
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Funil_DTK = "default";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Placement_ID = [260097745];
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].UTM = "";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Translate = "";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Dimension = [];
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Dimension[0] = {"Width": 728, "Height": 90};
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Teste_AB = "";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].TesteAB_BG1 = "";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].TesteAB_BG2 = "";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].TesteAB_Txt1 = "";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].TesteAB_Txt2 = "";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].TesteAB_Selo = "";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Image1 = {};
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Image1.Url = "http://dev.amad.re/almap/boticario/dco/malbec/empty.png";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Video = {};
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Video.Type = "video";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Video.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/ec5633e73d297b76/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3717779233/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/3BBAD232BCD98F1299A14DE321D16243234D933A.895EB7F6278AB8D16720BE7500F8444C34037465/key/ck2/file/file.mp4";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Video.Stream_Url = "";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Image2 = {};
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Image2.Url = "http://dev.amad.re/almap/boticario/dco/malbec/empty.png";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Video2 = {};
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Video2.Type = "video";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Video2.Progressive_Url = "http://dev.amad.re/almap/boticario/dco/malbec/videos/300x250-Pack-mesa_01.mp4";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Video2.Stream_Url = "";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].ImageSelo = {};
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].ImageSelo.Url = "http://dev.amad.re/almap/boticario/dco/malbec/selo/300x250_desconto_15.png"; // http://dev.amad.re/almap/boticario/dco/malbec/selo/empty.png
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].ImageAux = {};
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].ImageAux.Url = "http://dev.amad.re/almap/boticario/dco/malbec/empty.png";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Logo = {};
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Logo.Url = "http://dev.amad.re/almap/boticario/dco/malbec/selo/300x250_logo_chegou.png"; 
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Txt1 = "Default_txt1";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Txt2 = "O DNA MARCANTE DE MALBEC ENCONTRA O FRESCOR DAS UVAS CONGELADAS. NOVO MALBEC VERT."; // #vazio
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Txt3 = "Default_txt3";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].TxtAux = "Default_aux";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].TxtLegal = "Promoção válida de 11/11/2019 a 01/12/2019 ou enquanto durarem os estoques. Imagens meramente ilustrativas.";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].CTA = "SAIBA MAIS";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Cores = "#ffffff|#167173|#92bdbe|#ffffff|#ffffff"
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Timer = "3|3";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Aux = "vd_espirro_a_close_rosto|vd_espirro_simples_a";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].URL = {};
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].URL.Url = "http://www.boticario.com.br";
    devDynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Numb_Aux_ID = "0";
    Enabler.setDevDynamicContent(devDynamicContent);





    let cores = dynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Cores.split("|");

    timerSteps = dynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Timer.split("|");


    ///// Variáveis

    let player_1 = dynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Video.Progressive_Url;
    let player_2 = dynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Video2.Progressive_Url;
    
    let bg1 = dynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Image1.Url;
    let bg2 = dynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Image2.Url;

    let logo_inicial = dynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Logo.Url;
    let s2_selo = dynamicContent.DCO_Boticario_MalbecVert_Sheet[0].ImageSelo.Url; // http://dev.amad.re/almap/boticario/dco/malbec/selos/empty.png
    

    let s2_txt1 = dynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Txt2; 
    let s2_ctatxt1 = dynamicContent.DCO_Boticario_MalbecVert_Sheet[0].CTA;
    let txtLegal = dynamicContent.DCO_Boticario_MalbecVert_Sheet[0].TxtLegal;
    

    videosRegras = dynamicContent.DCO_Boticario_MalbecVert_Sheet[0].Aux.split("|");
    
    let videos = {
        "step1":[videosRegras[0]],
        "step2":[videosRegras[1]]
    }
    ////// Atribuições e configurações

    for(var i = 0 ; i<posTextos.length ; i++){
        
        if(posTextos[i][0] == videos.step1[0]){
            
            if(posTextos[i][1] == "direita"){
                el(".logo_inicial").style.left = "135px";
                
            }
        }

        if(posTextos[i][1] == videos.step2[0]){

        }
    }




    if(bg1.indexOf("empty")!=-1){
        el(".player_1").src = player_1;
        controleVideos[0] = true;
    }
    else{
        el(".s1_bg1").style.background = `url(${bg1}) no-repeat`;
    }

    if(bg2.indexOf("empty")!=-1){
        el(".player_2").src = player_2;
        controleVideos[1] = true;
    }
    else{
        el(".s2_bg1").style.background = `url(${bg2}) no-repeat`;
    }


    if(s2_selo.indexOf("empty")==-1){
        selo = true;
        el(".txtLegal").innerHTML = txtLegal;
    }

    if(s2_txt1 == "#vazio"){
        txt2_controle = false;
    }
    else{
        el(".s2_txt1").innerHTML = s2_txt1;
    }


    el(".logo_inicial").style.background = `url(${logo_inicial}) no-repeat`;
    el(".s2_selo").src = s2_selo;


    
    el(".s2_ctatxt1").innerHTML = s2_ctatxt1;


    ///// Cores

    el(".s2_txt1").style.color = cores[0];
    el(".s2_ctabg1").style.backgroundColor = cores[1];
    el(".s2_ctabg1").style.border = `1px solid ${cores[2]}`;
    el(".s2_ctatxt1").style.color = cores[3];
    el(".txtLegal").style.color = cores[4];






    // CLICK EXIT
    // el('.hitArea').addEventListener('click', bannerExitHandler, false);
    // ████████████████████████████████████████████████████████████ EXIT
    function bannerExitHandler(e) { Enabler.exitOverride('Banner Exit', urlExit); }
}


function alignAll(){

    


    diagram.automateText(".s2_ctatxt1",112,true);
    diagram.automateTextTelecine(".s2_txt1",145,true,"altura|131px");

    diagram.alignText([
        [".s2_txt1",'top',166]
    ]);

}


let initAnimation = function () {


        if(controleVideos[0]){
            timeline.animationElements('s1_bg1_classMotion_0', [['.player_1', 0]]);
            el('.player_1').play();
        }
        else{
            timeline.animationElements('s1_bg1_classMotion_0', [['.s1_bg1', 0]]);
        }




        timeline.animationElements('s1_txt1_classMotion_0', [['.logo_inicial', 0.20]]);
        timeline.animationElements('s2_logo1_classMotion_0', [['.s2_logo1', 0.10]]);


        if(videosRegras[0] == "vd_espirro_a_close_rosto"){
            timeline.animationElements('s1_txt1_classMotion_1', [['.logo_inicial', timerSteps[0]]]);
            timeline.animationElements('STOP_HERE', [['.logo_inicial', 3]],function(){
                console.log("tempo")
            });
        }
        else{
            timeline.animationElements('s1_txt1_classMotion_1', [['.logo_inicial', timerSteps[0]]]);
        }



        if(controleVideos[1]){
            timeline.animationElements('s2_bg1_classMotion_0', [['.player_2', 0.20]]);
            timeline.animationElements('STOP_HERE', [['.player_2', 0.20]],function(){
                el('.player_2').play();
            });
            
        }
        else{
            timeline.animationElements('s2_bg1_classMotion_0', [['.s2_bg1', 0.20]]);
        }


        if(!txt2_controle){
            timeline.animationElements('s1_txt1_classMotion_0', [['.s2_selo', 0.20]]);
            timeline.animationElements('s2_txt1_classMotion_0', [['.txtLegal', 0.20]]);
            timeline.animationElements('s2_ctabg1_classMotion_0', [['.s2_ctabg1', 0.20]]);
            timeline.animationElements('s2_ctatxt1_classMotion_0', [['.s2_ctatxt1', 0.10]]);

        }
        else{
            timeline.animationElements('s1_txt1_classMotion_0', [['.s2_txt1', 0.20]]);
            timeline.animationElements('s2_ctabg1_classMotion_0', [['.s2_ctabg1', 0.20]]);
            timeline.animationElements('s2_ctatxt1_classMotion_0', [['.s2_ctatxt1', 0.10]]);


            if(selo){
                timeline.animationElements('s1_txt1_classMotion_1', [['.s2_txt1', timerSteps[1]]]);
                timeline.animationElements('s1_txt1_classMotion_0', [['.s2_selo', 0.20]]);
                timeline.animationElements('s2_txt1_classMotion_0', [['.txtLegal', 0.20]]);
            }
        }

}


