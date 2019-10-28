window.onload = function () { //Assim que janela carregar essa função vai ser executada.
    
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");

    this.document.addEventListener("keydown", keyPush) //Executa a função, quando uma teclar for pressionada.

    this.setInterval(game, 100); //Cada intervalo de 60ms executa a função.

    //Velocidade
    const vel = 1;   //Velocidade constante é 1
    var vx = vy = 0; //Velocidade X e Y começam no 0

    //Posição Inicial
    var px = 10;     //Inicia ponto X em 10. (Colocar como random depois)
    var py = 20;     //Inicia ponto Y em 20. (Colocar como random depois)

    //Tamanho dos Blocos
    var tb = 20; //Cada bloco vai ser 20x20
    var qb = 30; //Quantidade de blocos

    //Posição Maçã
    var ax = 10; //Inicia ponto X em 25. (Colocar como random depois)
    var ay = 10; //Inicia ponto y em 30. (Colocar como random depois)

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

        ctx.fillStyle = "red"; //Preenche o bloco com a cor escolhida.
        ctx.fillRect(ax*tb, ay*tb, tb, tb); //Pinta o bloco inteiro.

        ctx.fillStyle = "gray"; //Preenche a cobra com a cor escolhida.
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x*tb, trail[i].y*tb, tb, tb)
            if (trail[i].x == px && trail[i].y == py) { //Condição para Game Over
                vx = 0;
                vy = 0;
                tail = 5;
            }
            
        }

        trail.push({x:px,y:py}) //Objeto que coloca a cobra em movimento
        while (trail.length > tail) { //Testa pra saber se calda esta correta
            trail.shift(); //Remove a calda garantindo o tamanho certo.
        }
        //Condição para aumentar a cobra e reposicionar a maçã.
        if (ax==px && ay==py) {
            tail++; //Acrescenta um bloco a mais na cobra.
            ax = Math.floor(Math.random()*qb);
            ay = Math.floor(Math.random()*qb);//Reposiciona a Maçã.

        }
    }

    function keyPush(event) {
        switch (event.keyCode) {
            case 37: //Seta para esquerda.
                vx = -vel;
                vy = 0;
                break;
            case 38: //Seta para cima.
                vx = 0;
                vy = -vel;
                break;
            case 39: //Seta para direita
                vx = vel;
                vy = 0;
                break;
            case 40: //Seta para baixo.
                vx = 0;
                vy = vel;
                break;
        
            default:
                break;
        }
    }


}