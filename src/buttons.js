var Buttons = GameObject.extend({

    ctor:function(){
        this._super();
        this.init();
    },

    init:function(){

       this.play = cc.MenuItemFont.create("Play", this.processPlay, this)
       this.restart = cc.MenuItemFont.create("Restart", this.processPlay, this)
       this.restart .visible = false;
        var menu = cc.Menu.create(  this.play, this.restart);
        menu.alignItemsVertically(); 

        this.addChild(menu);
    },
/**
 * 
 */
    processPlay:function(){

        this.play .visible = false;
        GameState.changeTo(GameState.Shuffle);
    },
    stateShuffle:function(){

    },
    stateRoundEnd:function(){
        this.restart .visible = true;
    }
})