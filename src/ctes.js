var EVENT_STATE_CHANGED = "EVENT_STATE_CHANGED"

if (typeof GameState == 'undefined')
{	
	var GameState = {};
 
    GameState.Shuffle   = "GameState.Shuffle";
    GameState.DealCards = "GameState.DealCards";
    GameState.RoundEnd  = "GameState.RoundEnd"; 

    GameState.changeTo = function( toState )
    {
        var event = new cc.EventCustom(EVENT_STATE_CHANGED);
        event.setUserData(toState);
        cc.eventManager.dispatchEvent(event);
    }
}

var PLAYERS_HANDS = 5