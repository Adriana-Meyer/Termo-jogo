const palavraSecreta = "porta";

const palavraSecretaDividida = palavraSecreta.split('');
console.log(palavraSecretaDividida);

let quantTentativas = 1;

const botao = document.getElementById("botao-tentar");
botao.addEventListener("click", validaTentativa);


function validaTentativa() {
    const tentativa = capturaLetrasInput();
    const arrayInputs = selecionaInputs();

    for(let i = 0; i < tentativa.length; i++) { 

        if (tentativa[i] === palavraSecretaDividida[i]) {
            arrayInputs[i].style.backgroundColor = "#2e9e53";
        } else if (palavraSecretaDividida.includes(tentativa[i])) {
            arrayInputs[i].style.backgroundColor = "#e09a31";
        } else {
            arrayInputs[i].style.backgroundColor = "#473f33";
        }

        arrayInputs[i].setAttribute("disabled", '');
    }

    quantTentativas++;
}


function capturaLetrasInput() {
    let letra1;
    let letra2;
    let letra3;
    let letra4;
    let letra5;

    if(quantTentativas === 1) {
        letra1 = document.getElementById("letra1").value;
        letra2 = document.getElementById("letra2").value;
        letra3 = document.getElementById("letra3").value;
        letra4 = document.getElementById("letra4").value;
        letra5 = document.getElementById("letra5").value;
    } else if (quantTentativas === 2) {
        letra1 = document.getElementById("letra6").value;
        letra2 = document.getElementById("letra7").value;
        letra3 = document.getElementById("letra8").value;
        letra4 = document.getElementById("letra9").value;
        letra5 = document.getElementById("letra10").value;
    } else if (quantTentativas === 3) {
        letra1 = document.getElementById("letra11").value;
        letra2 = document.getElementById("letra12").value;
        letra3 = document.getElementById("letra13").value;
        letra4 = document.getElementById("letra14").value;
        letra5 = document.getElementById("letra15").value;
    } else if (quantTentativas === 4) {
        letra1 = document.getElementById("letra16").value;
        letra2 = document.getElementById("letra17").value;
        letra3 = document.getElementById("letra18").value;
        letra4 = document.getElementById("letra19").value;
        letra5 = document.getElementById("letra20").value;
    } else if (quantTentativas === 5) {
        letra1 = document.getElementById("letra21").value;
        letra2 = document.getElementById("letra22").value;
        letra3 = document.getElementById("letra23").value;
        letra4 = document.getElementById("letra24").value;
        letra5 = document.getElementById("letra25").value;
    }

    const arrayTentativa = [letra1, letra2, letra3, letra4, letra5];
    
    return arrayTentativa;
}


function selecionaInputs() {
    let input1;
    let input2;
    let input3;
    let input4;
    let input5;

    if(quantTentativas == 1) {
        input1 = document.getElementById("letra1");
        input2 = document.getElementById("letra2");
        input3 = document.getElementById("letra3");
        input4 = document.getElementById("letra4");
        input5 = document.getElementById("letra5");
    } else if (quantTentativas == 2) {
        input1 = document.getElementById("letra6");
        input2 = document.getElementById("letra7");
        input3 = document.getElementById("letra8");
        input4 = document.getElementById("letra9");
        input5 = document.getElementById("letra10");
    } else if (quantTentativas == 3) {
        input1 = document.getElementById("letra11");
        input2 = document.getElementById("letra12");
        input3 = document.getElementById("letra13");
        input4 = document.getElementById("letra14");
        input5 = document.getElementById("letra15");
    } else if (quantTentativas == 4) {
        input1 = document.getElementById("letra16");
        input2 = document.getElementById("letra17");
        input3 = document.getElementById("letra18");
        input4 = document.getElementById("letra19");
        input5 = document.getElementById("letra20");
    } else if (quantTentativas == 5) {
        input1 = document.getElementById("letra21");
        input2 = document.getElementById("letra22");
        input3 = document.getElementById("letra23");
        input4 = document.getElementById("letra24");
        input5 = document.getElementById("letra25");
    }

    const arrInputs = [input1, input2, input3, input4, input5];
    
    return arrInputs;
}
