class Player{
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = null;

    }
    getCount(){
        var playerCountRef= database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount= data.val();
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    update(){
       var playerIndex= "players/player"+this.index; 
       database.ref(playerIndex).set({
           name: this.name,
           distance: this.distance,
           rank:this.rank
       })

    }

    static get_PlayerInfo(){
        var playerInfoRef= database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
        })
    }
    get_carsEnded(){
        var carsEndedRef= database.ref('carsEnded');
        carsEndedRef.on("value",(data)=>{
            this.rank= data.val();
        })
    }
    static update_carsEnded(rank){
        database.ref("/").update({
            carsEnded: rank
        })

    }

}