"use strict";

// TODO - write your code here.


function randomDamage(){
    return Math.floor(Math.random() * 10) + 1;
};




const chooseOption = (opt1, opt2) => {
    const randomNumber = (Math.round(Math.random()));
    
    return randomNumber === 0 ? opt1 : opt2; 
}

console.log(chooseOption("heads", "tails"));


function attackPlayer(health){
    return health - randomDamage();
};


function logHealth(player, health){
    console.log(`${player} health: ${health}`);
};


function logDeath(winner, loser){
    console.log(`${winner} defeated ${loser}`);
};


function isDead(health){
    if (health <= 0) {
        return true;
    } else {
        return false;
    }
};

function fight(player1, player2, player1Health, player2Health){
    
    while (true) {
        let attacker = chooseOption(player1, player2);

        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if (isDead(player2Health)){
                logDeath(player1, player2);
                break;
            }
        } 
        else {
                player1Health = attackPlayer(player1Health);
                logHealth(player1, player1Health);
                if (isDead(player1Health)){
                    logDeath(player2, player1);
                    break;
                }

            }
        
    }
}

fight("Mitch", "Adam", 100, 100);

