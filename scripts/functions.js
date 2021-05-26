function esconde(){
    if(hide){
        botao.style.visibility = 'hidden';
        redes.style.visibility = 'hidden';
    }
}

function desceu(idBotao, idHeader, idRedes){
    var botao = window.document.getElementById(idBotao);
    var header = window.document.getElementById(idHeader);
    var redes = window.document.getElementById(idRedes);
    var hide = true;

    if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){

        botao.style.opacity = '1';
        botao.style.visibility = 'visible';
        hide = false;

    }else if (document.body.scrollTop < 600 || document.documentElement.scrollTop < 600){
        
        botao.style.opacity = '0';
        hide = true;
        window.setTimeout(esconde, 300);
        
        // BASICAMENTE É PRA O CODIGO DENTRO DO TIMEOUT ESPERAR UM TEMPO PARA SER ACIONADO
        // ELE TAVA SUMINDO ANTES DA TRANSIÇÃO, POR ISSO O TEMPO DE ESPERA
    }

    if(document.body.scrollTop > 575 || document.documentElement.scrollTop > 575){
        
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.backgroundImage = 'linear-gradient(to right, black, rgb(54, 54, 54))'; 

        redes.style.opacity = '1';
        redes.style.visibility = 'visible';
        hide = false;

    }else if (document.body.scrollTop < 575 || document.documentElement.scrollTop < 575){

        header.style.position = 'absolute';
        header.style.top = '90%';

        redes.style.opacity = '0';
        hide = true;
        window.setTimeout(esconde, 300);
    }

}