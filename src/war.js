var WarManager = cc.Layer.extend({

    ctor:function(){
        this._super();
        this.initState();
    },

    initState:function(){

        var dataController = new DataController();

        this.calculation  = new Calculation(dataController);

        this.player = new Player(dataController);
        this.player.x = 300;
        this.addChild( this.player );
        
        this.dealer = new Dealer(dataController);
        this.dealer.x = -300;
        this.addChild( this.dealer );

        this.buttons = new Buttons(dataController);
        this.buttons.x = -cc.winSize.width/2; 
        this.buttons.y = -cc.winSize.height + 200; 
        this.addChild( this.buttons );
    }

})