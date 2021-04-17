// all the stats for every character go in here
var gameManager = {
    setGameStart: function(classType){
        // this one method runs the two methods() on line 7 and 40 , so that I can put setGameStart on my onclick and have it run both methods
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType){
        // simular to if, else if, and else statements, can set up different scenarios useing js code
        // in this ie. depending on what the player chooses within the classType(which was made in player.js and enemy.js), it will set the player equal to
        // that character that they choose
            // classType, vitality, mana, energy, strength, intelligence, agility, speed
        switch (classType) {
            case "Knight":
                player = new Player(classType, 1000, 0, 100, 100, 0, 100, 100);
                break;
            case "Priest":
                player = new Player(classType, 1000, 100, 0, 0, 100, 100, 100);
                break;
            case "Hunter":
                player = new Player(classType, 1000, 0, 100, 100, 0, 100, 100);
                break;
            case "Wizard":
                player = new Player(classType, 1000, 100, 0, 0, 100, 100, 100);
                break;
        // default only runs if nothing in this object is selected. ie. could run an error message and reset the page
            // default:
            //     break;
        } 
        //this is where all my character stats will be held and givin when a player selects and starts the game

        
        var getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="/characters/' + classType.toLowerCase() + 
        '.png" class="characterImg"><div><h3>' + classType + '</h3><p class="playerVitality">Vitality: ' + player.vitality 
        + '</p><p>Mana: ' + player.mana + '</p><p>Energy: ' + player.energy + '</p><p>Strength: ' + player.strength 
        +'</p><p>Intelligence: ' + player.intelligence + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
        // this is the title for the character after you select one as well as the stats of each indiviual object
        
    },
    // good habbit to say getWhatever if you want to grab something and setWhatever when you want to change something. might make it easier
    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        //here I'm just grabbing the classes/elements I need so i can add them to a method

        // this part is easier with single quotes
        getHeader.innerHTML = '<p>Task: Find an enemy! </p>';
        
        getActions.innerHTML = '<a href="# class="btnPrefight" onclick="gameManager.setFight()">Seaching for opponent...</a>';
        // made ahead of time with an onclick event for the new method setFight()

        
        getArena.style.visibility = "visible"
        // .style - this is accessing the style properties in js, can change a specific styling with this
        // .visibility is a css styling
    }, 
    // use a , when making another method under the same object
    
    setFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
    // creates enemy npc's
    // can tweek these numbers if it's to hard or to east ect.
    // what I choose to name these has to be the same as in the files on my computer or it will not work right
    // ie. when '<img src="/gameBasics/monsters/' on line 102 look in my monsters folder. whatever picture is named Necromancer will represent "Necromancer" ect.
    // classType, vitality, mana, energy, strength, intelligence, agility, speed
        let enemy00 = new Enemy("Necromancer", 1000, 100, 0, 0, 100, 100, 150);
        let enemy01 = new Enemy("Horror", 1000, 0, 100, 100, 0, 100, 75);
        let enemy02 = new Enemy("Undead Behemoth", 1000, 0, 100, 100, 0, 100, 150);
        let enemy03 = new Enemy("Phosphorus Ghost", 1000, 100, 0, 0, 100, 100, 75);
        let enemy04 = new Enemy("Skeleton", 1000, 0, 100, 100, 0, 100, 150);
        let enemy05 = new Enemy("Undead Knight", 1000, 0, 100, 100, 0, 100, 75);
        
        // this method is how I get the random numbers needed for damage, healing ect.
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(6));
        // console.log to see if random numbers are working, in this case they are
        // console.log(chooseRandomEnemy)
        switch (chooseRandomEnemy) {
            // this being 0, will make this choose enemy00
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
            case 4:
                enemy = enemy04;
                break;
            case 5:
                enemy = enemy05;
                break;
            // I'm taking var enemy from enemy.js so I can use the method I made there, and saying it equals the stats I listed on lines 65 - 70
            }
            getHeader.innerHTML = '<p>Task: choose your move</p>';
            getActions.innerHTML = '<a href="# class="btnPrefight" onclick="playerMoves.calcAttack()">Attack</a>'
            getEnemy.innerHTML = '<img src="/monsters/' + enemy.enemyType.toLowerCase() + 
            '.png" class="characterImg"><div><h3>' + enemy.enemyType + '</h3><p class="enemyVitality">Vitality: ' + enemy.vitality 
            + '</p><p>Mana: ' + enemy.mana + '</p><p>Energy: ' + enemy.energy + '</p><p>Strength: ' + enemy.strength 
            +'</p><p>Intelligence: ' + enemy.intelligence + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';;
        }
    // this is the setFight Method that will be attached to the button I made in line 49. attached via on

    
}