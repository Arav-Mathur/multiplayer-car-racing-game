class Game{
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
    }

    play(){
        form.hide();
        textSize(30);
        text("Game Start",160,100);
        Player.get_PlayerInfo();

        if(allPlayers !== undefined){
            var display_position=130;

            //player1,player2,player3,player4

            for(var plr in allPlayers){
                textSize(15);
                text(allPlayers[plr].name+": "+allPlayers[plr].distance,160,display_position)
                display_position+=20;
            }
        }
    }

}