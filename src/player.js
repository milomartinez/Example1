var Player = GameObject.extend({


    ctor:function(cdata){
        this._super(cdata);
        this.init();
    },

    init:function(){

        this.cards = []
        
        for(var i = 0 ; i < PLAYERS_HANDS; i++){

            var card = new PlayerCard();
            card.y = 300 - i*150
            this.addChild(card);
            this.cards.push(card);
   
        }
     
    },

    completed:function(){
        console.log("completed");
    },
    /**
     * 
     */

     stateDealCards:function(){

        for(var i = 0 ; i < PLAYERS_HANDS; i++){
            
            var p = this.cdata.playerCard[i];

            this.cards[i].result = p.result;
            this.cards[i].flipTo(p.card, this.completed.bind(this))
   
        }
     }

})

var PlayerCard = Card.extend({

    result:null,

    ctor:function(){
        this._super();
        this.setLable();
    },

    setLable:function(){

        this.lable = new cc.LabelTTF("", "Arial", 50);
        this.lable.x = -300;
        this.lable.visible = false;
        this.addChild(this.lable )
    },

    completed:function(){
        this._super(); 
        this.lable.setString(this.result)
        this.lable.visible = true;
    }
})