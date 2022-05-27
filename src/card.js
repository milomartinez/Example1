var Card = cc.Sprite.extend({


    ctor:function(){
        this._super();
        this.init();
        this.createFlip();
        this.scale = 0.3;
    },

    init:function(){
        this.canvas = new cc.Sprite();
        this.addChild(this.canvas )

        this.rear = new cc.Sprite();
        this.canvas.addChild(this.rear);
        this.rear.setSpriteFrame("rear.png");

        this.front = {};
        var deck = Utils.getDeck();
  
        for(var i = 0 ; i < deck.length; i++){
            var spr = new cc.Sprite();
            spr.setSpriteFrame(deck[i]+".png")
            this.canvas.addChild(spr);
            spr.visible = false;
            this.front[deck[i]] = (spr)
        }
    },

    createFlip:function(){

        var totalTime = 0.8;
        var flip1 = cc.scaleTo(totalTime*.5, 0,1)
        var flip2 = cc.scaleTo(totalTime*.5, 1,1)

        this.action = cc.sequence(flip1,cc.callFunc(this.setFront.bind(this)), flip2,cc.callFunc(this.completed.bind(this)))
    },

    setFront:function(){

        for(var each in this.front){
           
            this.front[each].visible = false;
        }
      
        
        this.front[ this.scard].visible = true;
    },

    flipTo:function(scard, callback){
        this.scard = scard;
        this.callback = callback;

        this.canvas.runAction(this.action )

    },
    completed:function(){
        this.callback(); 
    }
})