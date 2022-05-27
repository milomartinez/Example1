

var CARDS_SUITS = ["D","H","C","S"]
var CARDS_PER_DECK = 52;
var CARDS_PER_SUIT = 13;
var Utils = Utils || {} ;
var CARD_DICTIONARY = {
    "1":"A",
    "10":"T",
    "11":"J",
    "12":"Q",
    "13":"K"
}

var CARD_DICTIONARY_REVERSE = {
    "A":1,
    "T":10,
    "J":11,
    "Q":12,
    "K":13
}

Utils.index2Card = function(idx){

    var num = idx%CARDS_PER_SUIT + 1;
    var suit  = Math.floor(idx/CARDS_PER_SUIT);

    if(Object.keys(CARD_DICTIONARY).includes(""+num)) {
        num = CARD_DICTIONARY[num]
    }
    

    return num+CARDS_SUITS[suit];
}

Utils.getDeck = function(){

    var deck = [];
    for (var i = 0; i< CARDS_PER_DECK; i++){

        deck.push(Utils.index2Card(i))
    }

    return deck;
}

Utils.cardNum = function(scard){

    var value = scard[0];
    if(Object.keys(CARD_DICTIONARY_REVERSE).includes(""+value)) {

        value = CARD_DICTIONARY_REVERSE[value]
    }

    return parseInt(value)
     
}