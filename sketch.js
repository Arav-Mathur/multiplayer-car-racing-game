
var database;
var gamestate = 0;
var playerCount = 0;
var form,game,player;

function setup(){
    createCanvas(1500,700);
    database= firebase.database();

    game= new Game();
    game.getState();
    game.start();
   

}

function draw(){
   
}


