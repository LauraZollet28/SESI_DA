


//true == X
//false == O
var ordem_jogada = true;
var total_jogadas = 0;
var total_de_vitorias_O;
var total_de_vitorias_X;
  
function jogar(num_btn){
    //busque o botao que esta sendo clicado
    const botao = document.getElementById(num_btn);
    //adicione "X" ou "O" no botao que foi clicado
    if (ordem_jogada === true){
        botao.innerHTML = "O";
        // ordem_jogada = false;
    }else{
        botao.innerHTML = "X";
        // ordem_jogada = true; 
    }

    validarGanhador();
    

    ordem_jogada = !ordem_jogada;
}

function validarGanhador(){

    document.getElementById("total_jog").innerHTML;
    const btn1_vlr = document.getElementById("1").innerHTML;
    const btn2_vlr = document.getElementById("2").innerHTML;
    const btn3_vlr = document.getElementById("3").innerHTML;
    const btn4_vlr = document.getElementById("4").innerHTML;
    const btn5_vlr = document.getElementById("5").innerHTML;
    const btn6_vlr = document.getElementById("6").innerHTML;
    const btn7_vlr = document.getElementById("7").innerHTML;
    const btn8_vlr = document.getElementById("8").innerHTML;
    const btn9_vlr = document.getElementById("9").innerHTML;

    if ((btn1_vlr == btn2_vlr)
        && (btn1_vlr == btn3_vlr)
        && (btn1_vlr !== "")
        && (btn2_vlr !== "")
        && (btn3_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        LimparJogo();
        contabilizarganhadores();
       
    } else if ((btn4_vlr == btn5_vlr)
        && (btn4_vlr == btn6_vlr)
        && (btn4_vlr !== "")
        && (btn5_vlr !== "")
        && (btn6_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        LimparJogo();
        contabilizarganhadores();
    
    } else if ((btn7_vlr == btn8_vlr)
        && (btn7_vlr == btn9_vlr)
        && (btn7_vlr !== "")
        && (btn8_vlr !== "")
        && (btn9_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        LimparJogo();
        contabilizarganhadores();
       
    } else if ((btn1_vlr == btn4_vlr)
        && (btn4_vlr == btn7_vlr)
        && (btn1_vlr !== "")
        && (btn4_vlr !== "")
        && (btn7_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        LimparJogo();
        contabilizarganhadores();
    
    } else if ((btn2_vlr == btn5_vlr)
        && (btn2_vlr == btn8_vlr)
        && (btn2_vlr !== "")
        && (btn5_vlr !== "")
        && (btn8_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        LimparJogo();
        contabilizarganhadores();
    
    } else if ((btn3_vlr == btn6_vlr)
        && (btn3_vlr == btn9_vlr)
        && (btn3_vlr !== "")
        && (btn6_vlr !== "")
        && (btn9_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        LimparJogo();
        contabilizarganhadores();
    
    } else if ((btn1_vlr == btn5_vlr)
        && (btn1_vlr == btn9_vlr)
        && (btn1_vlr !== "")
        && (btn5_vlr !== "")
        && (btn9_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        LimparJogo();
        contabilizarganhadores();
    
    } else if ((btn3_vlr == btn5_vlr)
        && (btn3_vlr == btn7_vlr)
        && (btn3_vlr !== "")
        && (btn5_vlr !== "")
        && (btn7_vlr !== "")) {
        alert("O ganhador foi " + (ordem_jogada ? "O" : "X"));
        LimparJogo();
        contabilizarganhadores();
    
    } else if(btn1_vlr !== ""
        && btn2_vlr !== ""
        && btn3_vlr !== ""
        && btn4_vlr !== ""
        && btn5_vlr !== ""
        && btn6_vlr !== ""
        && btn7_vlr !== ""
        && btn8_vlr !== ""
        && btn9_vlr !== ""
    ){alert("Empate!");
        LimparJogo();
        contabilizarganhadores();
    
    }
}

function LimparJogo(){
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
    document.getElementById("9").innerHTML = "";
}



function contabilizarganhadores(){
    total_jogadas++;

    if(ordem_jogada == true){
       total_de_vitorias_O++;
    }else{
        total_de_vitorias_X++;
    }

  

    document.getElementById("total_jogadas").innerHTML = "Total de jogadas: " + total_jogadas;
    document.getElementById(total_O).innerHTML = "total de vitorias O: " + total_de_vitorias_O;
    document.getElementById(total_X).innerHTML = "total de vitorias O: " + total_de_vitorias_X;
}