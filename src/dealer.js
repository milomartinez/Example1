var Dealer = GameObject.extend({

    ctor:function(cdata){
        this._super(cdata);
        this.init();
    },

    init:function(){

        this.card = new Card();
        this.addChild(this.card);

     
    },
    completed:function(){
        console.log("completed");
        GameState.changeTo(GameState.RoundEnd);
    },
    /**
     * 
     */
    stateDealCards:function(){
        this.card.flipTo( this.cdata.dealerCard, this.completed.bind(this))
    }
})