var GameObject = cc.Sprite.extend({

    cdata:null,

    ctor:function(cdata){
        this.cdata = cdata;
        this._super();
        cc.eventManager.addCustomListener(EVENT_STATE_CHANGED,
            this.onStateChange.bind(this));
    },

    onStateChange:function(event)  {
        // Get the new state as user data and run its method.
      
        switch (event.getUserData() )   {
            case GameState.DealCards:
                this.stateDealCards();
                break;

            case GameState.Shuffle:
                this.stateShuffle();
                break;
            case GameState.RoundEnd:
                this.stateRoundEnd();
                break;
      
          } 
    },

    stateShuffle:function(){},
    stateDealCards:function(){},
    stateRoundEnd:function(){}

})