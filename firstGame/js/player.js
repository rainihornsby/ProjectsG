//dones not work with capital letters
let player;

function Player(classType, vitality, mana, energy, strength, intelligence, agility, speed) {
    this.classType = classType;
    this.vitality = vitality;
    this.mana = mana;
    this.energy = energy;
    this.strength = strength;
    this.intelligence = intelligence;
    this.agility = agility;
    this.speed = speed;
}
// makes sure to put the classes inside the () because you are bringing in variables outside the object

// moves of the player
// might be better to put ever move in a different object
let playerMoves = {
    calcAttack: function() {
    // this will determine who will attack first
    let getPlayerSpeed = player.speed
    let getEnemySpeed = enemy.speed

       // this will allow the player to attack
let playerAttack = function(){
    let calcBaseDamage;
    if(player.mana > 0){
       // damage if player has mana 
       calcBaseDamage = player.intelligence * player.mana / 1000;
    }
    else{
        // damage if player has no mana. ie. the knight some hunter ect.
        calcBaseDamage = player.strength * player.energy / 1000
    }
    // this is a random number between 1 and 50, this make it so that whatever number is generated in the attack function, it will be 50 lower or higher (depending on what number I put as random)
    //this makes it a little more random but still takes the stats into account
    let offsetDamage = Math.floor(Math.random() * Math.floor(50))
    // this is the official damage that will be dealt
    let calcOutputDamage = calcBaseDamage + offsetDamage
    // this will be how many times a player hits, in this game it is according to their agility
    let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10 ) / 2 ) + 1;
    // this is equal to the array that will use calcOutputDamage and numberOfHits
    let attackValues = [calcOutputDamage, numberOfHits];
    return attackValues

}

// this will allows the enemy to attack, or player 2?
let enemyAttack = function(){
    let calcBaseDamage;
    if(enemy.mana > 0){
       // damage if player has mana 
       calcBaseDamage = enemy.intelligence * enemy.mana / 1000;
    }
    else{
        // damage if player has no mana. ie. the knight some hunter ect.
        calcBaseDamage = enemy.strength * enemy.energy / 1000
    }
    // this is a random number between 1 and 50, this make it so that whatever number is generated in the attack function, it will be 50 lower or higher (depending on what number I put as random)
    //this makes it a little more random but still takes the stats into account
    let offsetDamage = Math.floor(Math.random() * Math.floor(50))
    // this is the official damage that will be delt
    let calcOutputDamage = calcBaseDamage + offsetDamage
    // this will be how many times a player hits, in this game it is according to their agility
    let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10 ) / 2 ) + 1;
    // this is equal to an array, this is so I can return the value of the full attack, 
    let attackValues = [calcOutputDamage, numberOfHits];
    return attackValues
}
// this is for getting the player and enemy health to change when attacked
let getPlayerVitality = document.querySelector(".playerVitality");
let getEnemyVitality = document.querySelector(".enemyVitality");

// initiate attacks
// this will say, if the players speed if greater than or equal to the enemy speed the player attacks first.
// this means that if the players speed is EQUAL to the enemy the player goes first, if you take out the = the enemy will attack first if thir speeds are equal
            if(getPlayerSpeed >= getEnemySpeed){
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.vitality = enemy.vitality - totalDamage;
                alert("You Hit for " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times!")
            
            if(enemy.vitality <= 0){
                alert("Congrats! ^.^")
                getPlayerVitality.innerHTML = 'Health: ' + player.vitality;
        // this will make it so that when the enemy runs out of health and you win, it won't show them with a negative number on their health bar (which could be kinda funny)
                getEnemyVitality.innerHTML = 'Health: 0'
            }
            else {
                // enemy attacks back if it survives
                getEnemyVitality.innerHTML = 'Health: ' + enemy.vitality;
        
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.vitality = player.vitality - totalDamage;
                alert( "Enemy hit you for " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times!")
        }    
            if(player.vitality <= 0){
                alert("haha you lost")        
                // this will make it so that when the player runs out of health and you lose
                getPlayerVitality.innerHTML = 'Health: 0';
                getEnemyVitality.innerHTML = 'Health: ' + enemy.vitality;
            } 
            else {
                getPlayerVitality.innerHTML = 'Health: ' + player.vitality;
            }
        }

            if(getEnemySpeed >= getPlayerSpeed){
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.vitality = player.vitality - totalDamage;
                alert("Enemy Hit for " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times!")
            
            if(player.vitality <= 0){
                alert("You Lost")
                getEnemyVitality.innerHTML = 'Health: ' + enemy.vitality;
        // this will make it so that when the player runs out of health and you lose, it won't show them with a negative number on their health bar (which could be kinda funny)
                getPlayerVitality.innerHTML = 'Health: 0'
            }
            else {
                getPlayerVitality.innerHTML = 'Health: ' + player.vitality;
        // player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.vitality = enemy.vitality - totalDamage;
                alert( "You hit you for " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times!")
        }    
            if(enemy.vitality <= 0){
                alert("You Win")        
                // this will make it so that when the player runs out of health and you lose
                getEnemyVitality.innerHTML = 'Health: 0';
                getPlayerVitality.innerHTML = 'Health: ' + player.vitality;
            } 
            else {
                getEnemyVitality.innerHTML = 'Health: ' + enemy.vitality;
            }
        }
    }

}    




