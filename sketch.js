// variables a utilizar 
let leftBuffer, rightBuffer, dRightBuffer, dLeftBuffer;
let iText1, iText2, iText3, iText4;
let score1 = 10; // puntaje inicial Jugador 1
let score2 = 10; // puntaje inicial Jugador 2
let score3 = 10; // puntaje inicial Jugador 3
let score4 = 0; // puntaje inicial Jugador 4
let btn1, btn2, btn3, btn4;
let life1 = true; // Jugador 1 está activo (importante para que funcione la muerte del jugador cuando llega a 0 puntos)
let life2 = true; // Jugador 2 está activo                           True -> Activo | False -> Muerto
let life3 = true; // Jugador 3 está activo
let life4 = false; // Jugador 4 está inactivo
let nOpon = 2; // se usa para saber la cantidad de puntos que se suma al jugador que haga una carambola (3 si están los 4 jugadores)
let nCarambolasJ1 = 0; // número de carambolas actual del jugador 1
let nCarambolasJ2 = 0;
let nCarambolasJ3 = 0;
let nCarambolasJ4 = 0;


// condiciones iniciales del canvas
function setup() {
    
    createCanvas(800, 800); // se hace la ventana donde se va a trabajar
    
    leftBuffer = createGraphics(400, 400);
    rightBuffer = createGraphics(400, 400);
    dLeftBuffer = createGraphics(400, 400);
    dRightBuffer = createGraphics(400, 400);
    textAlign(CENTER);

}


// para actualizar condiciones
function draw() {
    
    drawUpLeftBuffer(); // dibujando los buffers
    drawUpRightBuffer();
    drawDownRightBuffer();
    drawDownLeftBuffer();
    
    image(leftBuffer, 0, 0); // seccionando el canvas
    image(rightBuffer, 400, 0);
    image(dLeftBuffer, 0, 400);
    image(dRightBuffer, 400, 400);

}

// sección 1
function drawUpLeftBuffer() {
    
    iText1 = "Jugador 1"; // Nombre del jugador 1

    btn1 = createButton('Carambola'); // creando el botón de carambola
    btn1.position(300, 350);

    leftBuffer.background(118, 66, 72);
    leftBuffer.fill(0);
    leftBuffer.textSize(32);
    leftBuffer.text(iText1, 200 - (iText1.length * 10), 50);
    leftBuffer.text(`${score1}`, 195, 200);

    if(score1 == 0 && life1 == true) { // si el jugador llega a 0 puntos
        nOpon -= 1;
        life1 = false;
    }

    btn1.mousePressed(function(){ // función que suma puntos cuando se hace una carambola
        score1 += nOpon;
        score2 -= 1;
        score3 -= 1;
        score4 -= 1;
        nCarambolasJ1 += 1;
        console.clear();
        console.log(`Carambolas ${iText1}: ${nCarambolasJ1}`); // para ver en la terminal
        console.log(`Carambolas ${iText2}: ${nCarambolasJ2}`);
        console.log(`Carambolas ${iText3}: ${nCarambolasJ3}`);
        console.log(`Carambolas ${iText4}: ${nCarambolasJ4}`);
    });
}


// sección 2
function drawUpRightBuffer() {
    
    iText2 = "Jugador 2"; // Aquí va el nombre del jugador 2

    btn2 = createButton('Carambola');
    btn2.position(700, 350);

    rightBuffer.background(191, 209, 229);
    rightBuffer.fill(0);
    rightBuffer.textSize(32);
    rightBuffer.text(iText2, 200 - (iText2.length * 10), 50);
    rightBuffer.text(`${score2}`, 195, 200);

    if(score2 == 0 && life2 == true) {
        nOpon -= 1;
        life2 = false;
    }

    btn2.mousePressed(function(){
        score2 += nOpon;
        score1 -= 1;
        score3 -= 1;
        score4 -= 1;
        nCarambolasJ2 += 1;
        console.clear();
        console.log(`Carambolas ${iText1}: ${nCarambolasJ1}`);
        console.log(`Carambolas ${iText2}: ${nCarambolasJ2}`);
        console.log(`Carambolas ${iText3}: ${nCarambolasJ3}`);
        console.log(`Carambolas ${iText4}: ${nCarambolasJ4}`);
    });

}


// sección 3
function drawDownRightBuffer() {

    iText3 = "Jugador 3"; // Aquí va el nombre del jugador 3

    btn3 = createButton('Carambola');
    btn3.position(700, 750);

    dRightBuffer.background(235, 245, 238);
    dRightBuffer.fill(0);
    dRightBuffer.textSize(32);
    dRightBuffer.text(iText3, 200 - (iText3.length * 10), 50);
    dRightBuffer.text(`${score3}`, 195, 200);

    if(score3 == 0 && life3 == true) {
        nOpon -= 1;
        life3 = false;
    }

    btn3.mousePressed(function(){
        score3 += nOpon;
        score2 -= 1;
        score1 -= 1;
        score4 -= 1;
        nCarambolasJ3 += 1;
        console.clear();
        console.log(`Carambolas ${iText1}: ${nCarambolasJ1}`);
        console.log(`Carambolas ${iText2}: ${nCarambolasJ2}`);
        console.log(`Carambolas ${iText3}: ${nCarambolasJ3}`);
        console.log(`Carambolas ${iText4}: ${nCarambolasJ4}`);
    });
}


// sección 4
function drawDownLeftBuffer() {
    
    iText4 = "Jugador 4"; // Aquí va el nombre del jugador 4

    btn4 = createButton('Carambola');
    btn4.position(300, 750)

    dLeftBuffer.background(216, 191, 170);
    dLeftBuffer.fill(0);
    dLeftBuffer.textSize(32);
    dLeftBuffer.text(iText4, 200 - (iText4.length * 10), 50);
    dLeftBuffer.text(`${score4}`, 195, 200);

    if(score4 == 0 && life4 == true) {
        nOpon -= 1;
        life4 = false;
    }

    btn4.mousePressed(function(){
        score4 += nOpon;
        score2 -= 1;
        score1 -= 1;
        score3 -= 1;
        nCarambolasJ4 += 1;
        console.clear();
        console.log(`Carambolas ${iText1}: ${nCarambolasJ1}`);
        console.log(`Carambolas ${iText2}: ${nCarambolasJ2}`);
        console.log(`Carambolas ${iText3}: ${nCarambolasJ3}`);
        console.log(`Carambolas ${iText4}: ${nCarambolasJ4}`);
    });

}