
function atualizar(){
    var amplitude = document.getElementById("tenso").value;
    document.getElementById("l_tenso").innerHTML = `Tensao: ${amplitude} Volts`;
    var frequencia = document.getElementById("freq").value;
    document.getElementById("l_freq").innerHTML = `Frequencia: ${frequencia} Hertz`
    var V_zenner = document.getElementById("v_zenner").value;
    document.getElementById("l_vzenner").innerHTML = `T. Zenner: ${V_zenner} volts`


}


function CA_botao() {
    document.getElementById("tester").innerHTML = ""

    document.getElementById("explain").innerHTML = "O gráfico exibido no osciloscópio mostra uma forma de onda senoidal, que é um tipo de sinal periódico comum em circuitos de corrente alternada (AC) e em testes de equipamentos eletrônicos. No eixo horizontal (eixo X), temos o tempo, geralmente medido em segundos (T). Já o eixo vertical (eixo Y) representa a tensão, medida em volts (V)."


    document.getElementById("l_freq").style.display = "inline";
    document.getElementById("freq").style.display = "block";
    
    document.getElementById("l_tenso").style.display = "inline";
    document.getElementById("tenso").style.display = "block";


    document.getElementById("v_zenner").style.display = "none";
    document.getElementById("l_vzenner").style.display = "none";

    //Volts e Frequencia em Hertz
    var amplitude = document.getElementById("tenso").value;
    document.getElementById("l_tenso").innerHTML = `Tensao: ${amplitude} Volts`


    var frequencia = document.getElementById("freq").value;
    document.getElementById("l_freq").innerHTML = `Frequencia: ${frequencia} Hertz`


    let numPontos = 100000;

    let x = Array.from({length:numPontos}, (_, i) => i *(Math.PI * 2) / (numPontos-1));

    let y = x.map(valorX => amplitude * Math.sin( ( (2 * Math.PI) * frequencia) * valorX));

    


    var dados = [{
        x: x,
        y: y,
        mode: "lines",
        name: "Senoide",
        line: { color: 'blue' },
    }];

    var layout = {
        title: "Função CA Padrão",
        xaxis: {title: "Tempo (s)"},
        yaxis: {title: "Tensão (V)"},
        height: 300,
        width: 900,
        align: "center",
     };

    Plotly.newPlot("tester", dados, layout);

}

function diodo_normal() {
    document.getElementById("tester").innerHTML = ""

    document.getElementById("explain").innerHTML = "O gráfico apresentado no osciloscópio mostra o comportamento de um sinal de corrente alternada (CA) ao passar por um diodo. Nesse tipo de circuito, o diodo atua como um componente retificador, permitindo que a corrente passe apenas em uma direção — do ânodo para o cátodo — bloqueando a metade negativa do sinal de entrada."

    document.getElementById("l_freq").style.display = "inline";
    document.getElementById("freq").style.display = "block";

    document.getElementById("l_tenso").style.display = "inline";
    document.getElementById("tenso").style.display = "block";

    document.getElementById("v_zenner").style.display = "none";
    document.getElementById("l_vzenner").style.display = "none";

    //Volts e Frequencia em Hertz
    var amplitude = document.getElementById("tenso").value;
    document.getElementById("l_tenso").innerHTML = `Tensao: ${amplitude} Volts`

    var frequencia = document.getElementById("freq").value;
    document.getElementById("l_freq").innerHTML = `Frequencia: ${frequencia} Hertz`

    let numPontos = 100000;

    let x = Array.from({length:numPontos}, (_, i) => i *(Math.PI * 2) / (numPontos-1));

    let y = x.map(valorX => {
        let seno = amplitude * Math.sin((2 * Math.PI * frequencia) * valorX);
        return (seno + Math.abs(seno)) / 2})

    


    var dados = [{
        x: x,
        y: y,
        mode: "lines",
        name: "Senoide",
        line: { color: 'blue' },
    }];

    var layout = {
        title: "Função CA c/ Retificador meia onda",
        xaxis: {title: "Tempo (s)"},
        yaxis: {title: "Tensão (V)"},
        height: 300,
        width: 900,
        align: "center",
     };

    Plotly.newPlot("tester", dados, layout);

    
}

//fim da ultima função

function diodo_retificado() {
    document.getElementById("tester").innerHTML = ""

    document.getElementById("explain").innerHTML = "O gráfico apresentado no osciloscópio mostra o comportamento de um sinal de corrente alternada (CA) ao passar por um circuito com retificação de onda completa, geralmente realizado com uma ponte de diodos. Esse circuito tem a função de converter a totalidade do sinal alternado em sinal unidirecional, ou seja, transformar ambos os semiciclos da onda em tensões positivas."

    document.getElementById("l_freq").style.display = "inline";
    document.getElementById("freq").style.display = "block";

    document.getElementById("tenso").style.display = "block";
    document.getElementById("l_tenso").style.display = "inline";

    document.getElementById("v_zenner").style.display = "none";
    document.getElementById("l_vzenner").style.display = "none";

    //Volts e Frequencia em Hertz
    var amplitude = document.getElementById("tenso").value;

    document.getElementById("l_tenso").innerHTML = `Tensao: ${amplitude} Volts`

    var frequencia = document.getElementById("freq").value;

    document.getElementById("l_freq").innerHTML = `Frequencia: ${frequencia} Hertz`

    let numPontos = 100000;

    let x = Array.from({length:numPontos}, (_, i) => i *(Math.PI * 2) / (numPontos-1));

    let y = x.map(valorX => {
        let seno = amplitude * Math.sin((2 * Math.PI * frequencia) * valorX);
        return (Math.abs(seno))})

    


    var dados = [{
        x: x,
        y: y,
        mode: "lines",
        name: "Senoide",
        line: { color: 'blue' },
    }];

    var layout = {
        title: "Função CA c/ Retificador onda completa",
        xaxis: {title: "Tempo (s)"},
        yaxis: {title: "Tensão (V)"},
        height: 300,
        width: 900,
        align: "center",
     };

    Plotly.newPlot("tester", dados, layout);

    
}

function diodo_zenner(){
    document.getElementById("tester").innerHTML = ""

    document.getElementById("explain").innerHTML = "O gráfico exibido no osciloscópio refere-se ao comportamento da tensão em um circuito de corrente alternada (CA) com um diodo Zener associado. Diferente dos diodos comuns, o Zener é projetado para conduzir corrente em reverso quando a tensão atinge um valor específico conhecido como tensão Zener (Vz). Por isso, ele é frequentemente usado como regulador de tensão ou limitador."

    document.getElementById("freq").style.display = "block";
    document.getElementById("l_freq").style.display = "inline";
    
    document.getElementById("tenso").style.display = "block";
    document.getElementById("l_tenso").style.display = "inline";

    document.getElementById("v_zenner").style.display = "inline";
    document.getElementById("l_vzenner").style.display = "block";

    //Volts e Frequencia em Hertz
    var amplitude = document.getElementById("tenso").value;

    document.getElementById("l_tenso").innerHTML = `Tensao: ${amplitude} Volts`

    var frequencia = document.getElementById("freq").value;
    document.getElementById("l_freq").innerHTML = `Frequencia: ${frequencia} Hertz`

    
    var V_zenner = document.getElementById("v_zenner").value;
    document.getElementById("l_vzenner").innerHTML = `T. Zenner: ${V_zenner} volts`

    let numPontos = 100000;

    let x = Array.from({length:numPontos}, (_, i) => i *(Math.PI * 2) / (numPontos-1));

    let y = x.map(valorX => {
        let seno = amplitude * Math.sin((2 * Math.PI * frequencia) * valorX);
        let retificado = (Math.abs(seno))
        if (retificado >= V_zenner) {
            return V_zenner
        }
        else{
            return retificado
        }

    
    
    
    })

    


    var dados = [{
        x: x,
        y: y,
        mode: "lines",
        name: "Senoide",
        line: { color: 'blue' },
    }];

    var layout = {
        title: "Função CA c/ Retificador zenner + onda completa",
        xaxis: {title: "Tempo (s)"},
        yaxis: {title: "Tensão (V)"},
        height: 300,
        width: 900,
        align: "center",
     };

    Plotly.newPlot("tester", dados, layout);


}

function tenso_diodo(){
    document.getElementById("tester").innerHTML = ""

    document.getElementById("explain").innerHTML = "Esse gráfico se refere ao padrão de carga comum de um diodo padrão de Silicio. Um diodo de silício permite a passagem de corrente apenas em uma direção — do ânodo para o cátodo. Para que ele conduza, é necessário que a tensão aplicada no sentido direto (do ânodo para o cátodo) seja maior que a sua barreira de potencial, que é tipicamente de 0,7 volts. Caso o diodo seja anexado de forma inversa, a voltagem ira ser parada, até o ponto Zenner, que no caso é 6 volts, apos isso, o diodo quebrará e voltará a conduzir."

    document.getElementById("l_freq").style.display = "none";
    document.getElementById("freq").style.display = "none";

    document.getElementById("l_tenso").style.display = "none";
    document.getElementById("tenso").style.display = "none";

    document.getElementById("v_zenner").style.display = "none";
    document.getElementById("l_vzenner").style.display = "none";

    //Volts e Frequencia em Hertz
    var amplitude = document.getElementById("tenso").value;

    document.getElementById("l_tenso").innerHTML = `Tensao: ${amplitude} Volts`

    var frequencia = document.getElementById("freq").value;
    document.getElementById("l_freq").innerHTML = `Frequencia: ${frequencia} Hertz`

    
    var V_zenner = document.getElementById("v_zenner").value;
    document.getElementById("l_vzenner").innerHTML = `T. Zenner: ${V_zenner} volts`

    let numPontos = 100000;

    let x = Array.from({ length: numPontos }, (_, i) =>
    -(3 *Math.PI) + (i * (6 * Math.PI)) / (numPontos - 1)
);
    let y = x.map(valorX => {
    let parte1 = Math.max(0, ( (200 ** valorX ** 3) - (0.7 ** valorX) )/ 2 ) ;
    let parte2 = Math.min(0, valorX + 6) / 0.0001;
    let ampere = parte1 + parte2;
    if (ampere > 100){
        return null
    } else if(ampere < -100) {
        return null
    } else if (valorX < -V_zenner){
        return ampere = -100;
    }
    
    
    
    else{return ampere}


});

    


    var dados = [{
        x: x,
        y: y,
        mode: "lines",
        name: "Senoide",
        line: { color: 'blue' },
    }];

    var layout = {
        title: "Grafico de Carga do Diodo(simplificado)",
        xaxis: {title: "Volts (V)"},
        yaxis: {title: "Amperes (I)"},
        height: 300,
        width: 900,
        align: "center",
     };

    Plotly.newPlot("tester", dados, layout);




    

}


