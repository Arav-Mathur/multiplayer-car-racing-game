class Form{
    constructor() {
        this.input= createInput('Anonymous');
        this.button= createButton('Play');
        this.greeting= createElement('h2');
        this.reset= createButton('reset')
    }

    display(){
        var title= createElement('h1');
        title.html("Car Racing Game");
        title.position(windowWidth/2,0);

        if (gamestate === 0){
        this.input.position(470,160);
        this.button.position(470,200);
        }
        this.reset.position(50,50)
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            Player.update_carsEnded(0)
            // this.reset.hide()
        })
        //button.mousePressed()- used to trigger an action when a mouse button is pressed
        //It expects  a function as an argument
        //1. Greeting needs to be displayed on the screen
        //2. Update the database with the name of the player
        // 3. Update the playercount in the game and in the database

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name= this.input.value();

            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name);
            this.greeting.position(500,500) 

        })
    }


    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}
