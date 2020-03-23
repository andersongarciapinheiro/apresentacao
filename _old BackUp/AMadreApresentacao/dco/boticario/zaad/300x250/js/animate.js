
var timeline = new Amadre_Animation();
var diagram = new Performance_Align();
var configPreloader = new Performance_Config();

var timerSteps;
var umStep = false;
var selo = false;
var preco = false;

var step1Imagem = false;

var devDynamicContent = {};
function initConfig(){
    configPreloader.preloaderImgs(dynamicContent,[initAnimation,alignAll]);
    
}

function loadEnablerInfos(){

    // Dynamic Content variables and sample values
    Enabler.setProfileId(10476433);
    var devDynamicContent = {};

    devDynamicContent.DCO_Boticario_Zaad__Main = [{}];
    devDynamicContent.DCO_Boticario_Zaad__Main[0]._id = 0;
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Unique_ID = "1";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Reporting_Label = "default |  |  | 160x600";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Active = true;
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Default = true;
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Teste_AB = "";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Img_Video1 = {};
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Img_Video1.Type = "video";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Img_Video1.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/fb34e84014601ea3/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3711362359/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/320E3FA6AF493A6677016F513A63096B5E6AE130.4D263637FEEE3AAE36743DAF48E04ADB281F43D5/key/ck2/file/file.mp4";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Img_Video1.Stream_Url = "";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Img2 = {};
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Img2.Url = "http://dev.amad.re/almap/boticario/dco/v1/300x250_teste.jpg ";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].ImgAux = {};
    devDynamicContent.DCO_Boticario_Zaad__Main[0].ImgAux.Url = "http://dev.amad.re/almap/boticario/dco/v1/300x250_selo_20_1.png"; // http://dev.amad.re/almap/boticario/dco/v1/300x250_selo_20_1.png
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Logo = {};
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Logo.Url = "http://dev.amad.re/almap/boticario/dco/v1/300x250_bg_logo.jpg";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Txt1 = "NOVO ZAAD GO NOVO ZAAD GO";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Txt2 = "NOVO ZAAD GO.";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].TxtDesconto = "#vazio";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].TxtDe = "244,90";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].TxtPara = "199,90";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].TxtAux = "#vazio";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].TxtLegal = "*Para saber mais, consulte https:\/\/www.boticario.com.br";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].CTA = "FRETE GRATIS";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Cores = "#ffffff|#ffffff|#464646|#ffffff|#ffffff";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Timer = "3";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].Aux = "";
    devDynamicContent.DCO_Boticario_Zaad__Main[0].URL = {};
    devDynamicContent.DCO_Boticario_Zaad__Main[0].URL.Url = "https://www.boticario.com.br";
    Enabler.setDevDynamicContent(devDynamicContent);


    // VARIÁVEIS
    let cores = dynamicContent.DCO_Boticario_Zaad__Main[0].Cores;
    cores = cores.split("|");


    timerSteps = dynamicContent.DCO_Boticario_Zaad__Main[0].Timer;
    

    let video = dynamicContent.DCO_Boticario_Zaad__Main[0].Img_Video1.Progressive_Url;

    if(dynamicContent.DCO_Boticario_Zaad__Main[0].Txt1.indexOf('#vazio')!=-1){
        umStep = true;
    }

    let s2_bg1 = dynamicContent.DCO_Boticario_Zaad__Main[0].Img2.Url;


    let s1_txt1 = dynamicContent.DCO_Boticario_Zaad__Main[0].Txt1;
    let s2_txt1 = dynamicContent.DCO_Boticario_Zaad__Main[0].Txt2;

    let s2_ctatxt1 = dynamicContent.DCO_Boticario_Zaad__Main[0].CTA;
    el('.txtLegal').innerHTML = dynamicContent.DCO_Boticario_Zaad__Main[0].TxtLegal;

    // ATRIBUIÇÕES

    let imgSelo = dynamicContent.DCO_Boticario_Zaad__Main[0].ImgAux.Url;
    if(imgSelo.indexOf('empty') != -1){
        el(".s2_txt1").innerHTML = s2_txt1;
    }
    else{
        selo = true;
        console.log('uahuahauha')
        el(".s2_selo").style.background = `url(${imgSelo}) no-repeat`;
        
    }


    el(".s1_txt1").innerHTML = s1_txt1;
    el(".s2_ctatxt1").innerHTML = s2_ctatxt1;



    document.querySelector('#player').src = video;
    el(".s2_bg1").style.background = `url(${s2_bg1}) no-repeat`;


    let precoDe = dynamicContent.DCO_Boticario_Zaad__Main[0].TxtDe;
    let precoPor = dynamicContent.DCO_Boticario_Zaad__Main[0].TxtPara;
    if(precoDe != '#vazio' && precoPor != '#vazio'){
        el(".s2_txt1").innerHTML = '';
        preco = true;
        el(".nomePerfume").innerHTML = s2_txt1;
        precoDe = precoDe.split(' ');
        precoDe = precoDe[0].split(',');
        console.log(precoDe);

        precoPor = precoPor.split(' ');
        precoPor = precoPor[0].split(',');
        console.log(precoPor);

       
        let posCifra = '9px';
        let posCentavos = '14px';

        if(precoPor[0].length < 3){
             posCifra = '18px';
             posCentavos = '20px';
             el('.precoPor').style.right = '-21px';
        }
        else{
            el('.precoPor').style.right = '-15px';
        }
        

        el('.precoDe').innerHTML = `<span style='text-decoration: line-through;'>DE <span style='font-size:8px'>R$</span> ${precoDe[0]},${precoDe[1]}</span> POR`;
        el('.precoPor').innerHTML = `<span style='font-size:15px; position:absolute; top:8px; left:${posCifra};'>R$</span> <span style='font-size:38px'>${precoPor[0]},</span><span style='font-size:19px; position:absolute; top:6px; right:${posCentavos};'>${precoPor[1]}</span>`;
        
        
    }
    // if(!preco&&!selo){
    //     el('.txtLegal').innerHTML = '';
    // }
    
    // CONFIGURAÇÕES

    el(".s1_txt1").style.color = cores[0];
    el(".s2_txt1").style.color = cores[1];
    el(".nomePerfume").style.color = cores[1];
    el(".precoDe").style.color = cores[1];
    el(".precoPor").style.color = cores[1];
    el(".txtLegal").style.color = cores[1];
    el(".s2_ctabg1").style.backgroundColor = cores[2];
    el(".s2_ctabg1").style.border = `1px solid ${cores[3]}`;
    el(".s2_ctatxt1").style.color = cores[4];
    

    if(dynamicContent.DCO_Boticario_Zaad__Main[0].Logo.Url.indexOf('empty')==-1){
        console.log('tem imagem')
        el(".s1_bg1").style.background = `url(${dynamicContent.DCO_Boticario_Zaad__Main[0].Logo.Url}) no-repeat`;
        el('.s1_txt1').innerHTML = '';
        step1Imagem = true;
    }

    // CLICK EXIT
    let urlExit = dynamicContent.DCO_Boticario_Zaad__Main[0].URL.Url;
    el('.hitArea').addEventListener('click', bannerExitHandler, false);
    // ████████████████████████████████████████████████████████████ EXIT
    function bannerExitHandler(e) { Enabler.exitOverride('Banner Exit', urlExit); }
}


function alignAll(){

    let diferencial = 0;
    let diferencialLargura = 0;



    if(el('.s2_ctatxt1').innerHTML.indexOf('<br>')!=-1){

        el('.boxCta').style.height = el('.s2_ctatxt1').clientHeight+'px';
        el('.boxCta').style.left = '5px';
        
        el('.s2_ctaimg1').style.position = 'absolute';
        el('.s2_ctaimg1').style.left = el('.s2_ctatxt1').clientWidth+'px';
        el('.s2_ctabg1').style.padding = '6px 0px';
        el('.s2_ctabg1').style.height = '22px';
        el('.s2_ctatxt1').style.textAlign = 'center';
        el('.s2_ctatxt1').style.lineHeight = '12px';
        el('.s2_ctaimg1').style.float= 'none';
        diferencial = -5;
        diferencialLargura = 1;
    }
    else{
        diagram.automateText(".s2_ctatxt1",120,true);
    }


    
    let altura_s2_ctabg1 = el('.s2_ctabg1').clientHeight;
    let altura_s2_ctatxt1 = el('.s2_ctatxt1').clientHeight;

   console.log(altura_s2_ctabg1)


    if(selo){

        el('.boxAlinhamento').style.bottom = '68px';
        // el('.s2_ctabg1').style.height = '24px';

        if(el('.s2_ctatxt1').innerHTML.indexOf('<br>')!=-1){
            el('.s2_selo').style.top = '21px';
        }


        diagram.alignText([
            [".boxCta",'top',altura_s2_ctabg1,diferencialLargura],
            [".boxCta",'left',143,diferencial],
            [".s2_ctaimg1",'top',altura_s2_ctatxt1],
        ]);
    }
    else{
        diagram.alignText([
            [".boxAlinhamento",'top',200],
            [".boxCta",'top',altura_s2_ctabg1,diferencialLargura],
            [".boxCta",'left',143,diferencial],
            [".s2_ctaimg1",'top',altura_s2_ctatxt1],
        ]);
    }

    

}


var initAnimation = function () {


if(umStep){
    timeline.animationElements('s2_bg1_classMotion_0', [['.s2_bg1', 0]]);
    timeline.animationElements('s2_logo1_classMotion_0', [['.s2_logo1', 0.10]]);

    if(selo){
        timeline.animationElements('s2_txt1_classMotion_0', [['.s2_selo', 0]]);
    }
    else{
        timeline.animationElements('s2_txt1_classMotion_0', [['.s2_txt1', 0.40]]);
        if(preco){
            timeline.animationElements('s2_txt1_classMotion_0', [['.nomePerfume', 0]]);
            timeline.animationElements('s2_txt1_classMotion_0', [['.precoDe', 0]]);
            timeline.animationElements('s2_ctatxt1_classMotion_0', [['.precoPor', 0.20]]);
        }
    }


    
    timeline.animationElements('s2_ctabg1_classMotion_0', [['.s2_ctabg1', 0.20]]);
    timeline.animationElements('s2_ctatxt1_classMotion_0', [['.s2_ctatxt1', 0.20]]);
    timeline.animationElements('s2_txtLegal_classMotion_0', [['.txtLegal', 0]]);
    timeline.animationElements('s2_ctaimg1_classMotion_0', [['.s2_ctaimg1', 0.10]]);
    timeline.animationElements('s2_ctaimg1_classMotion_1', [['.s2_ctaimg1', 1.10]]);
    timeline.animationElements('s2_ctaimg1_classMotion_2', [['.s2_ctaimg1', 0.90]]);
    timeline.animationElements('s2_ctaimg1_classMotion_3', [['.s2_ctaimg1', 0.90]]);
    timeline.animationElements('s2_ctaimg1_classMotion_4', [['.s2_ctaimg1', 0.90]]);
    timeline.animationElements('s2_ctaimg1_classMotion_5', [['.s2_ctaimg1', 0.90]]);
    timeline.animationElements('s2_ctaimg1_classMotion_6', [['.s2_ctaimg1', 0.90]]);
}
else{
    if(step1Imagem){
        timeline.animationElements('s1_bg1_classMotion_0', [['.s1_bg1', 0]]);
    }
    else{
        document.querySelector('#player').play();
        timeline.animationElements('s1_bg1_classMotion_0', [['.player', 0]]);
    }

    timeline.animationElements('s2_logo1_classMotion_0', [['.s2_logo1', 0.10]]);
    timeline.animationElements('s1_txt1_classMotion_0', [['.s1_txt1', 0.40]]);
    timeline.animationElements('s2_bg1_classMotion_0', [['.s2_bg1', timerSteps]]);

    if(selo){
        timeline.animationElements('s2_txt1_classMotion_0', [['.s2_selo', 0]]);
    }
    else{
        timeline.animationElements('s2_txt1_classMotion_0', [['.s2_txt1', 0.40]]);
        if(preco){
            timeline.animationElements('s2_txt1_classMotion_0', [['.nomePerfume', 0]]);
            timeline.animationElements('s2_txt1_classMotion_0', [['.precoDe', 0]]);
            timeline.animationElements('s2_ctatxt1_classMotion_0', [['.precoPor', 0.20]]);
        }
    }

    
   
    timeline.animationElements('s2_ctabg1_classMotion_0', [['.s2_ctabg1', 0.20]]);
    timeline.animationElements('s2_ctatxt1_classMotion_0', [['.s2_ctatxt1', 0.20]]);
    timeline.animationElements('s2_txtLegal_classMotion_0', [['.txtLegal', 0]]);
    timeline.animationElements('s2_ctaimg1_classMotion_0', [['.s2_ctaimg1', 0.10]]);
    timeline.animationElements('s2_ctaimg1_classMotion_1', [['.s2_ctaimg1', 1.10]]);
    timeline.animationElements('s2_ctaimg1_classMotion_2', [['.s2_ctaimg1', 0.90]]);
    timeline.animationElements('s2_ctaimg1_classMotion_3', [['.s2_ctaimg1', 0.90]]);
    timeline.animationElements('s2_ctaimg1_classMotion_4', [['.s2_ctaimg1', 0.90]]);
    timeline.animationElements('s2_ctaimg1_classMotion_5', [['.s2_ctaimg1', 0.90]]);
    timeline.animationElements('s2_ctaimg1_classMotion_6', [['.s2_ctaimg1', 0.90]]);

    timeline.animationElements('LOOPING', [['.s2_ctaimg1', 2]],initAnimation);
    
}




}


