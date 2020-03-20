
// ████████████████████████████████████████████████████████████ VARs
var timeline = new Amadre_Animation();
var timeline_Assinatura = new Amadre_Animation();
var timeline_efeito = new Amadre_Animation();
var diagram = new Performance_Align();
var configPreloader = new Performance_Config();
//

var timerStep1;
var etapa;

var controleRadar = false;
var nameCars;
var qtd;
var qtdUnico;
var tamanhoLinha;
var timerInicial;
var timerInteracao;
var textStep2;
var arrayTamanhoRadar = [];

var devDynamicContent = {};
function initConfig(){
    configPreloader.preloaderImgs(dynamicContent,[createRadar,initAnimation,alignAll]);

}


// ████████████████████████████████████████████████████████████ ENABLER INFOS
function loadEnablerInfos(){

    // ████████████████ ◢ DYNAMIC VARs ◣ ████████████████████████████████████████████████████████████
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
    devDynamicContent.VWAOV4_Main[0].img_1.Url = "https://bucket-dco-vw.s3.amazonaws.com/v4/radar_amarok_300x250_7.jpg";
    devDynamicContent.VWAOV4_Main[0].img_2 = {};
    devDynamicContent.VWAOV4_Main[0].img_2.Url = "https://bucket-dco-vw.s3.amazonaws.com/v4/radar_amarok_300x250_8.jpg";
    devDynamicContent.VWAOV4_Main[0].img_3 = {};
    devDynamicContent.VWAOV4_Main[0].img_3.Url = "http://dev.amad.re/VW/v4/_logo/logo_vw.png";
    devDynamicContent.VWAOV4_Main[0].txt1 = "Seu espírito de aventura pede uma picape de verdade.";
    devDynamicContent.VWAOV4_Main[0].txt2 = "Amarok<br>Trendline";
    devDynamicContent.VWAOV4_Main[0].txt3 = "Amarok Trendline<br>A força da inteligência.|Amarok Highline<br>A força da inteligência.|Amarok V6<br>Força que vem de dentro.|Amarok V6 Extreme<br>Força que vem de dentro.";
    devDynamicContent.VWAOV4_Main[0].txt4 = "#vazio";
    devDynamicContent.VWAOV4_Main[0].CTA = "Solicite uma proposta";
    devDynamicContent.VWAOV4_Main[0].Layout = "image"; //image - alltype
    devDynamicContent.VWAOV4_Main[0].Travelling = "left|left"; //left - right 120x600 e 160x600
    devDynamicContent.VWAOV4_Main[0].Tempo = "3";
    Enabler.setDevDynamicContent(devDynamicContent);
    

    // TESTE

    timerStep1 = dynamicContent.VWAOV4_Main[0].Tempo;
    etapa = dynamicContent.VWAOV4_Main[0].Layout;


    if(etapa!="default"){
        var imageBG1 = dynamicContent.VWAOV4_Main[0].img_1.Url;
        var imageBG2 = dynamicContent.VWAOV4_Main[0].img_2.Url;
        var imageLogo = dynamicContent.VWAOV4_Main[0].img_3.Url;

        var textStep1 = dynamicContent.VWAOV4_Main[0].txt1;
            nameCars = dynamicContent.VWAOV4_Main[0].txt2.split("|");
            textStep2 = dynamicContent.VWAOV4_Main[0].txt3.split("|");
        var textCTA = dynamicContent.VWAOV4_Main[0].CTA;

        

        var urlExit = dynamicContent.VWAOV4_Main[0].url1.Url;
        

        // ████████████████ ◢ DYNAMIC FIELDs ◣ ████████████████████████████████████████████████████████████
        //////////// IMAGE
        // BG
        el(".sprite_scroll").style.background = "url("+imageBG1+") no-repeat";
        el(".sprite_final").style.background = "url("+imageBG2+") no-repeat";

        // Logo
        el(".logo1").style.background = el(".logo2").style.background =  "url("+imageLogo+") no-repeat";
        el(".logo1").style.backgroundSize = el(".logo2").style.backgroundSize =  "100%";
        
        // // TEXTs
        el(".txt1").innerHTML = textStep1;
        // el(".txt2").innerHTML = textStep2;
        // // Footer
        el(".cta_txt_final").innerHTML = textCTA;


        // CLICK EXIT
        el('.hitArea').addEventListener('click', bannerExitHandler, false)
        // ████████████████████████████████████████████████████████████ EXIT
        function bannerExitHandler(e) { Enabler.exitOverride('Banner Exit', urlExit); }


        qtd = nameCars.length;
        qtdUnico = false;
        if(qtd === 1){
            qtd = 2;
            qtdUnico = true;
        }

        tamanhoLinha = 241/(qtd-1);
    }
    else{
        var imageBG1 = dynamicContent.VWAOV4_Main[0].img_1.Url;
        var imageBG2 = dynamicContent.VWAOV4_Main[0].img_2.Url;
        var imageLogo = dynamicContent.VWAOV4_Main[0].img_3.Url;

        var textStep1 = dynamicContent.VWAOV4_Main[0].txt1;
        var textStep2_default = dynamicContent.VWAOV4_Main[0].txt2;
        var textCTA = dynamicContent.VWAOV4_Main[0].CTA;

    

        var urlExit = dynamicContent.VWAOV4_Main[0].url1.Url;
        

        // ████████████████ ◢ DYNAMIC FIELDs ◣ ████████████████████████████████████████████████████████████
        //////////// IMAGE
        el(".default").style.display = "block";
        
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
        el(".txt_2_1_default").innerHTML = textStep2_default;

        // // Footer
        el(".cta_txt_default").innerHTML = textCTA;


        // CLICK EXIT
        el('.hitArea').addEventListener('click', bannerExitHandler, false)
        
        // ████████████████████████████████████████████████████████████ EXIT
        function bannerExitHandler(e) { Enabler.exitOverride('Banner Exit', urlExit); }
    }
    
    

}




function createRadar(){
    for(var i = 0 ; i < qtd ; i++){
        console.log(i);
        window['slot_'+i] = document.createElement('div');
        window['slot_'+i].classList.add("slot");
        window['slot_'+i].classList.add('slot_'+i);
        var slot = document.getElementsByClassName('slot_'+i);
        var bar = document.getElementsByClassName("bar");
        bar[0].appendChild(window['slot_'+i]);
        window['slot_'+i].style.top = 13+"px";
        window['slot_'+i].style.left = (6+(tamanhoLinha*i))+"px";

        window['bar_slot_'+i] = document.createElement('div');
        window['bar_slot_'+i].classList.add("bar_slot");
        window['bar_slot_'+i].classList.add('bar_slot_'+i);
        window['bar_slot_'+i].setAttribute("id", 'bar_slot_'+i);
        slot[0].appendChild(window['bar_slot_'+i]);
        window['nav_txt_'+i] = document.createElement('div');
        window['nav_txt_'+i].setAttribute("id", 'nav_txt_'+i);

        //// Condicao unico ou mais de 1
        if(qtdUnico){
            if(i != 0){
                window['bar_slot_'+i].addEventListener("mouseover",overRadar,false);
                window['bar_slot_'+i].addEventListener("click",clickRadar,false);
                window['nav_txt_'+i].addEventListener("mouseover",overRadar,false);
                window['nav_txt_'+i].addEventListener("click",clickRadar,false);
                window['nav_txt_'+i].innerHTML = nameCars[0];
            }
        }
        else{
            window['bar_slot_'+i].addEventListener("mouseover",overRadar,false);
            window['bar_slot_'+i].addEventListener("click",clickRadar,false);
            window['nav_txt_'+i].addEventListener("mouseover",overRadar,false);
            window['nav_txt_'+i].addEventListener("click",clickRadar,false);
            window['nav_txt_'+i].innerHTML = nameCars[i];
        }
        /// End
        
        window['nav_txt_'+i].classList.add("nav_txt");
        window['nav_txt_'+i].classList.add('nav_txt_'+i);
        slot[0].appendChild(window['nav_txt_'+i]);

        var resultado = 5+el('.bar_slot_'+i).clientHeight+el('.nav_txt_'+i).clientHeight;
        arrayTamanhoRadar.push(parseInt(resultado));

        diagram.alignText([
            ['.bar_slot_'+i,'left',50],
            ['.nav_txt_'+i,'left',50]
        ]);
        

    }


    function overRadar(){

        if(controleRadar){
            efeitoNav();
            var id = this.getAttribute("id").split("_");
            var multiplicador;
            clearTimeout(timerInicial);
            clearTimeout(timerInteracao);

            switch(qtd) {
                case 1:
                    multiplicador = 241;
                    break;
                case 2:
                    multiplicador = 241;
                    break;
                case 3:
                   multiplicador = 121;
                    break;
                case 4:
                    multiplicador = 81;
                    break;
            }

            el(".nav_dot").style.left = (-221+(multiplicador*id[2]))+"px";
            

            if(qtdUnico){
                el(".txt2").innerHTML = textStep2[0];
                el(".sprite_scroll").style.left = -300*0+"px";
                el(".sprite_final").style.left = -300*0+"px";
            }
            else{
                el(".txt2").innerHTML = textStep2[id[2]];
                el(".sprite_scroll").style.left = -300*id[2]+"px";
                el(".sprite_final").style.left = -300*id[2]+"px";
            }

            for(var e = 0 ; e < qtd ; e++){
                el(".nav_txt_"+e).style.color = "#757575";
            }
            el(".nav_txt_"+id[2]).style.color = "#ffffff";

            

            timerInteracao = setTimeout(assinatura,5000);

        }
    }


    function clickRadar(){
        if(controleRadar){
            assinatura();
            var id = this.getAttribute("id").split("_");
            

            if(qtdUnico){
                el(".sprite_final").style.left = -300*0+"px";
                el(".txt2").innerHTML = textStep2[0];
            }
            else{
                el(".sprite_final").style.left = -300*id[2]+"px";
                el(".txt2").innerHTML = textStep2[id[2]];
            }


        }
    }



}



function randomiza(){
    controleRadar = false;
    efeitoNav();
    var id = Math.random()*qtd;
    var idAjustado = Math.floor(id);
    if(qtdUnico){
        idAjustado = 1;
    }
    console.log("AAHSUASHSU: "+Math.floor(idAjustado));
    var multiplicador;

    switch(qtd) {
        case 1:
            multiplicador = 241;
            break;
        case 2:
            multiplicador = 241;
            break;
        case 3:
           multiplicador = 121;
            break;
        case 4:
            multiplicador = 81;
            break;
    }

    el(".nav_dot").style.left = (-221+(multiplicador*idAjustado))+"px";
    


    if(qtdUnico){
        el(".txt2").innerHTML = textStep2[0];
        el(".sprite_scroll").style.left = -300*0+"px";
        el(".sprite_final").style.left = -300*0+"px";
    }
    else{
        el(".txt2").innerHTML = textStep2[idAjustado];
        el(".sprite_scroll").style.left = -300*idAjustado+"px";
        el(".sprite_final").style.left = -300*idAjustado+"px";
    }



    for(var e = 0 ; e < qtd ; e++){
        el(".nav_txt_"+e).style.color = "#757575";
    }
    el(".nav_txt_"+idAjustado).style.color = "#ffffff";

    

    setTimeout(assinatura,3000);

}



// ████████████████████████████████████████████████████████████ ALIGN ALL TEXTS
function alignAll(){

    if(etapa!="default"){
        diagram.automateText(".txt1",null,false);

        // 170 / 82

        arrayTamanhoRadar.sort(function(a, b){
            return b - a;
        });
        console.log((80/2)-(arrayTamanhoRadar[0]/2)-10+"px");

        
        el(".bar").style.top = (80/2)-(arrayTamanhoRadar[0]/2)-10+"px";
        

        

        diagram.alignText([
            [".txt1",'top',85,55],
            [".txt1",'left',300]

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
        // ########## STEP1 ##########

        timeline.animationElements('cortina_out', [['#banner', .1]]);
        timeline.animationElements('scale_in', [['.logo1', .2]]);
        timeline.animationElements('all_in', [['.txt1', .1]]);
        timeline.animationElements('all_in2', [['.cta_txt', 1.8]]);
        timeline.animationElements('all_in2', [['.cta_seta', .1]]);
        timeline.animationElements('all_in', [['.nav', -1.8]]);



        // barra dinamica de navegacao
        timeline.animationElements('nav_bars_in', [['.bar', .4]]);
        timeline.animationElements('all_in2', [['.bar_slot', .1]]);


        // nav dots in
        timeline.animationElements('all_in', [['.nav_txt', .1]]);
        timeline.animationElements('STOP_HERE', [['.sprite_scroll', .1]],function(){
            controleRadar = true;
            timerInicial = setTimeout(randomiza,5000);
        });
    }
    else{
        // INIT
        // ████████████████ ◢ STEP01 ◣ █████████████████████████████████

        timeline.animationElements('cortina_out', [['#banner', 0.1]]);
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
    }

	


}







function efeitoNav(){
    
    timeline_efeito.animationElements('dots_in', [['.nav_dot3', .1]]);
    timeline_efeito.animationElements('dots_in', [['.nav_dot2', .1]]);
    timeline_efeito.animationElements('dots_in', [['.nav_dot1', .1]]);
    timeline_efeito.animationElements('nav1_dot_move1', [['.nav_dot', -.2]]);
    timeline_efeito.animationElements('nav_ScrollEfect', [['.nav_dot', .1]]);
    timeline_efeito.animationElements('nav_ScrollEfect', [['.sprite_scroll', .1]]);
    timeline_efeito.animationElements('cta_out', [['.cta', .1]]);
    timeline_efeito.animationElements('alpha_0', [['.logo1', .1]]);
    timeline_efeito.animationElements('alpha_0', [['.txt1', .1]]);
    timeline_efeito.animationElements('alpha_0', [['.cta_txt', .1]]);
    timeline_efeito.animationElements('alpha_0', [['.cta_seta', .1]]);
}


function assinatura(){

    diagram.automateText(".txt2",null,false);

     diagram.alignText([
        [".txt2",'top',69],
        [".cta_txt_final",'top',75,175]
    ]);

    timeline_Assinatura.animationElements('all_in2', [['.bg_black',.1]]);

    timeline_Assinatura.animationElements('STOP_HERE', [['.bg_black', .1]],function(){
        el(".hitArea").style.zIndex = 999999999;
        el(".sprite_final").style.zIndex = 99999999;
        el(".txt2").style.zIndex = 99999999;
        el(".cta_txt_final").style.zIndex = 99999999;
        el(".logo2").style.zIndex = 99999999;
    });


    // bgs finais ativos
    timeline_Assinatura.animationElements('all_in', [['.sprite_final', .6]]);

    timeline_Assinatura.animationElements('all_in', [['.txt2', .3]]);
    timeline_Assinatura.animationElements('btn_in', [['.cta_txt_final', .2]]);
    timeline_Assinatura.animationElements('all_in2', [['.logo2', .1]]);
}












