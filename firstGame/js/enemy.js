let enemy;

function Enemy(enemyType, vitality, mana, energy, strength, intelligence, agility, speed) {
    this.enemyType = enemyType;
    this.vitality = vitality;
    this.mana = mana;
    this.energy = energy;
    this.strength = strength;
    this.intelligence = intelligence;
    this.agility = agility;
    this.speed = speed;
}
// makes sure to put the classes inside the () because you are bringing in variables outside the object

// this will allows the enemy to attack, or player 2?
// let enemyAttack = function(){
//     let calcBaseDamage;
//     if(enemy.mana > 0){
//        // damage if player has mana 
//        calcBaseDamage = enemy.intelligence * enemy.mana / 1000;
//     }
//     else{
//         // damage if player has no mana. ie. the knight some hunter ect
//         calcBaseDamage = enemy.strength * enemy.energy / 1000;
//     }
//     // this is a random number between 1 and 50, this make it so that whatever number is generated in the attack function, it will be 50 lower or higher (depending on what number I put as random)
//     //this makes it a little more random but still takes the stats into account
//     let offsetDamage = Math.floor(Math.random() * Math.floor(50))
//     // this is the official damage that will be delt
//     let calcOutputDamage = calcBaseDamage + offsetDamage
//     // this will be how many times a player hits, in this game it is according to their agility
//     let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10 ) / 2 ) + 1;
//     // this is equal to an array, this is so I can return the value of the full attack, 
//     let attackValues = [calcOutputDamage, numberOfHits];
//     return attackValues
// }