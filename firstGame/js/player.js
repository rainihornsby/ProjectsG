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
    }
}
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
    // this is for getting the player and enemy health to change when attacked
let getPlayerHealth = document.querySelector(".healthPlayer");
let getEnemyHealth = document.querySelector(".healthEnemy")
    // this will allows the enemy to attack, or player 2?
// let enemyAttack = function(){
//         let calcBaseDamage;
//         if(enemy.mana > 0){
//            // damage if player has mana 
//            calcBaseDamage = enemy.intelligence * enemy.mana / 1000;
//         }
//         else{
//             // damage if player has no mana. ie. the knight some hunter ect.
//             calcBaseDamage = enemy.strength * enemy.energy / 1000
//         }
//         // this is a random number between 1 and 50, this make it so that whatever number is generated in the attack function, it will be 50 lower or higher (depending on what number I put as random)
//         //this makes it a little more random but still takes the stats into account
//         let offsetDamage = Math.floor(Math.random() * Math.floor(50))
//         // this is the official damage that will be delt
//         let calcOutputDamage = calcBaseDamage + offsetDamage
//         // this will be how many times a player hits, in this game it is according to their agility
//         let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10 ) / 2 ) + 1;
//         // this is equal to an array, this is so I can return the value of the full attack, 
//         let attackValues = [calcOutputDamage, numberOfHits];
//         return attackValues
//     }



