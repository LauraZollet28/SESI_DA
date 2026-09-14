const btn1 = document.getElementById("1").innerHTML;
const btn2 = document.getElementById("2").innerHTML;
const btn3 = document.getElementById("3").innerHTML;
const btn4 = document.getElementById("4").innerHTML;
const btn5 = document.getElementById("5").innerHTML;
const btn6 = document.getElementById("6").innerHTML;
const btn7 = document.getElementById("7").innerHTML;
const btn8 = document.getElementById("8").innerHTML;
const btn9 = document.getElementById("9").innerHTML;



//true == X
//false == O
var ordem_jogada = true;


function jogar(nun_btn) {
    //BUSQUE O BOTAO QUE ESTA SENDO CLICADO 
    const botao = document.getElementById(nun_btn);

    //ADICIONE O VALOR "X" OU "O" NO BOTAO QUE FOI QUE FOI CLICADO
    if (ordem_jogada === true) {
        botao.innerHTML = "o";
        // ordem_jogada = false;
    } else {
        botao.innerHTML = "x"
        // ordem_jogada = true;
    }

    ordem_jogada = !ordem_jogada;

    //VALIDACAO DE GANHADORES
    if ((btn1_vlr === btn2_vlr) && (btn1_vlr == btn3_vlr)){
        alert("O ganhador foi" + ordem_jogada)
    }else if ((btn4_vlr == btn5_vlr) && (btn4_vlr == btn6_vlr)){
    
    }else if ((btn7_vlr == btn8_vlr) && (btn7_vlr == btn9_vlr)){
        
    }else if ((btn1_vlr == btn4_vlr) && (btn4_vlr == btn7_vlr)){
        
    }else if ((btn7_vlr == btn8_vlr) && (btn7_vlr == btn9_vlr)){
        
        //
    }


    
    
    

}