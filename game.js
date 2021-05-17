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
            //player.getCount();
            
            form=new Form();
            form.display();
        }
    }

}