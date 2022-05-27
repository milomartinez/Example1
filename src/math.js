var Calculation = GameObject.extend({

    ctor:function(cdata){
        this._super(cdata);
        this.createDeck();
    },

    createDeck:function(){

        this.cdata.currrentDeck = Utils.getDeck();

        this.cdata.currrentDeck.sort( () => .5 - Math.random() );

        GameState.changeTo(GameState.DealCards);
    },
    /**
     * states
     */

     stateShuffle:function(){
     
        //grab  cards from deck
        this.cdata.dealerCard = this.cdata.currrentDeck.pop();
        console.log("dealer:",this.cdata.dealerCard)
        for(var i = 0 ; i < PLAYERS_HANDS;i++){
            obj = {
                card:this.cdata.currrentDeck.pop(),
                result:0
            }
            this.cdata.playerCard.push(obj)
        }

        //calulcate result
        for (var each in  this.cdata.playerCard){

            var player = Utils.cardNum(this.cdata.playerCard[each].card)
            var dealer = Utils.cardNum(this.cdata.dealerCard)

            var result = "draw";
            if(player > dealer){
                result = "win"
            } else if(player < dealer){
                result = "lost"
            }
            this.cdata.playerCard[each].result =result;

        }

        console.log(this.cdata.playerCard)
        GameState.changeTo(GameState.DealCards);
     }
})