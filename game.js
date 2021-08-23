class Game{
    // gamestate = 0: wait
    //gamestate = 1: play
    //gamestate = 2: end 
    constructor() {
        
    }

    //will read the gamestate value from the database and assign that value to the application's gamestate variable
    getState(){
        var gamestateRef= database.ref('gamestate');
        gamestateRef.on("value",function(data){
            gamestate= data.val();
        })
    }

    //uptdate a value that is already in the database
    update(state){
        database.ref('/').update({
            gamestate: state
        })
    }

// this is the function that starts the game
    start(){
        if(gamestate===0){
            player= new Player();
            player.getCount();
                
            form=new Form();
            form.display();
        }

        car1= createSprite(100,200);
        car1.addImage(car1_img)

        car2= createSprite(300,200);
        car2.addImage(car2_img)

        car3= createSprite(500,200);
        car3.addImage(car3_img)

        car4= createSprite(700,200);
        car4.addImage(car4_img)

        cars=[car1,car2,car3,car4];

    }

    play(){
        form.hide();
        clear();
        Player.get_PlayerInfo();
        player.get_carsEnded();
        if(allPlayers !== undefined){
           // var display_position=130;
           
             var carIndex =0;
                var x=180;
                var y;

            // for each loop. goes through each value in an array
            //1st iteration- plr --> player1
            //2nd "" - plr--> player2 .... (4 iterations)
            //allPlayers[plr] = player1 or player2 depending on number of iteration
            for(var plr in allPlayers){

                carIndex=carIndex+1;
                x= x+240;
                y= displayHeight-allPlayers[plr].distance;
                if(carIndex === player.index){
                    //fill("red")
                    image(track_img,0,-displayHeight*4,displayWidth,displayHeight*5)
                    cars[carIndex-1].shapeColor="red"
                    camera.position.x= displayWidth/2
                    camera.position.y= cars[carIndex-1].y
                   /* fill("red")
                    textStyle(BOLD)
                    text(player.rank,x-10,y+60);
                    */

                }
                else{
                   // fill("black")
                }
                cars[carIndex-1].x = x;
                cars[carIndex-1].y=y;
                //  textSize(15);
                // text(allPlayers[plr].name+": "+allPlayers[plr].distance,160,display_position)
                //display_position+=20;
            }
            if(keyIsDown(UP_ARROW) && player.index !=null){
                    player.distance+=20;
                    player.update();
            }
            if(player.distance > 4220){
                gamestate = 2;
                player.rank+=1;
                player.update();
                Player.update_carsEnded(player.rank);
                
            }
        }
        drawSprites();
    }
    
    destroy(){
        car1.visible = false;
        car2.visible = false;
        car3.visible = false;
        car4.visible = false;
    }
    end(){
        console.log(camera.position.x,camera.position.y);
        text("game has ended",camera.position.x,camera.position.y);
        console.log(player.rank);
        //player.get_PlayerInfo();
    }
}