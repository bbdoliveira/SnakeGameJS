window.onload = function () { //Assim que janela carregar essa função vai ser executada.
    
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");

    this.setInterval(game, 60); //Cada intervalo de 60ms executa a função.

    //Velocidade
    const vel = 1;   //Velocidade constante é 1
    var vx = vy = 0; //Velocidade X e Y começam no 0

    //Posição Inicial
    var px = 10;     //Inicia ponto X em 10. (Colocar como random depois)
    var py = 20;     //Inicia ponto Y em 20. (Colocar como random depois)

    //Tamanho dos Blocos
    var tb = 20; //Cada bloco vai ser 20x20
    var qb = 20; //Quantidade de blocos

    //Posição Maçã
    var ax = 25; //Inicia ponto X em 25. (Colocar como random depois)
    var ay = 30; //Inicia ponto y em 30. (Colocar como random depois)

    //Tamanho da Cobra
    var trail = []; //Um array vazio do tamanho do rastro
    tail = 5; //Tamanho da calda


    function game() {

        px += vx; //Posição x recebe velocidade x
        py += vy; //Posição y recebe velocidade y

        if (px <0) {
            px = qb-1;
        }

        if (px > qb-1) {
            px = 0;
        }

        if (py <0) {
            py = qb-1;
        }

        if (py > qb-1) {
            py = 0;
        }
        
        ctx.fillStyle = "black"; //Estilo de preenchimento do Stage.
        ctx.fillRect(0,0, stage.width, stage.height);

        ctx.fillStyle = "green";
        ctx.fillRect(ax*tb, ay*tb, tb, tb);

        
    }

    


}