class Form{
    constructor() {
        
    }

    display(){
        var title= createElement('h1');
        title.html("Car Racing Game");
        title.position(windowWidth/2,0);

        var input= createInput('Anonymous');
        input.position(470,160);
        
        var button= createButton('Play');
        button.position(470,200);

        var greeting= createElement('h2');

        //button.mousePressed()- used to trigger an action when a mouse button is pressed
        //It expects  a function as an argument
        //1. Greeting needs to be displayed on the screen
        //2. Update the database with the name of the player
        // 3. Update the playercount in the game and in the database

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name= input.value();

            playerCount+=1;
            //player.update(name);
           // player.updateCount(playerCount);

            greeting.html("Hello "+ name);
            greeting.position(500,500)

        })
    }
}
