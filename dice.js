// starting values: 50 health points


let health = 50;
let turnArray = [];

function battleStrength() {
        let numberOfSides = 15;
        let roll8 = Math.floor(Math.random() * numberOfSides) + 1;
        return roll8;
}

function battleOutcome() {
        let numberOfSides = 12;
        let roll12 = Math.floor(Math.random() * numberOfSides) + 1;
        if (roll12 >= 9) {
                return roll12 = "strong attack!";
        }    
        else if (roll12 >= 6 && roll12 < 9) {
                return roll12 = "moderate attack.";
        }
        else if (roll12 > 2 && roll12 < 6) {
                return roll12 = "weak attack.";
        }
        else if (roll12 <= 2) {
                return roll12 = "total loss!";
        }

}

function defenseOutcome() {
        let numberOfSides = 6;
        let roll6 = Math.floor(Math.random() * numberOfSides) + 1;
        if (roll6 <= 2) {
                return roll6 = "Everything is lost!";
        }    
        else if (roll6 = 3) {
                return roll6 = "You have been conquered.";
        }
        else if (roll6 = 4) {
                return roll6 = "There were some losses, but you've managed to fend off the attack.";
        }
        else if (roll6 >= 5) {
                return roll6 = "A complete success! They never stood a chance.";
        }

}

function getCardValue() { 
        let numberOfSides = 13;
        let roll13 = Math.floor(Math.random() * numberOfSides) + 1;
        if (roll13 === 1) {
            return roll13 = "2";
        }
        else if (roll13 === 2) {
            return roll13 = "3";
        }
        else if (roll13 === 3) {
            return roll13 = "4";
        }
        else if (roll13 === 4) {
            return roll13 = "5";
        }
        else if (roll13 === 5) {
            return roll13 = "6";
        }
        else if (roll13 === 6) {
            return roll13 = "7";
        }
        else if (roll13 === 7) {
            return roll13 = "8";
        }
        else if (roll13 === 8) {
            return roll13 = "9";
        }
        else if (roll13 === 9) {
            return roll13 = "10";
        }
        else if (roll13 === 10) {
            return roll13 = "Jack";
        }
        else if (roll13 === 11) {
            return roll13 = "Queen";
        }
        else if (roll13 === 12) {
            return roll13 = "King";
        }
        else if (roll13 === 13) {
            return roll13 = "Ace";
        }

}

function getCardSuit(cardSuit) {
                      
        let numberOfSuits = 4;
        let roll4 = Math.floor(Math.random() * numberOfSuits) + 1;

        if (roll4 === 1) {
                return cardSuit = "Hearts";
        }
        else if (roll4 === 2) {
                return cardSuit = "Diamonds";
        }
        else if (roll4 === 3) {
                return cardSuit = "Clubs";
        }
        else if (roll4 === 4) {
                return cardSuit = "Spades";
        }        
        return cardSuit;           
}

function healthImpact(cardSuit) {
        
        let numberOfSides = 20;

        if (cardSuit === "Hearts") {
                let roll20 = Math.floor((Math.floor(Math.random() * numberOfSides) + 1) * 1.5);
                console.log("You gained " + roll20 + " points of health.");
                return roll20;
        }

        else if (cardSuit === "Diamonds") {
                let roll20 = Math.floor((Math.floor(Math.random() * numberOfSides) + 1) / 2);
                console.log("You gained " + roll20 + " points of health.");
                return roll20;
        }

        else if (cardSuit === "Clubs") {
                let roll20 = Math.floor(Math.random() * numberOfSides) + 1;
                console.log("You lost " + roll20 +  " points of health.");
                roll20 *= -1;
                return roll20;
        }

        else if (cardSuit === "Spades") {
                let roll20 = Math.floor((Math.floor(Math.random() * numberOfSides) + 1) * 1.5);
                console.log("You lost " + roll20 + " points of health.");
                roll20 *= -1;
                return roll20;
        }
        
}
     

function runGame() {
         
              
        let battleScore = battleStrength();
        let battleResult = battleOutcome();
        let defenseResult = defenseOutcome();
        let cardValue = getCardValue();
        getCardSuit();

        console.log("Your turn resulted in the following:");
        console.log("      Battle damage: " + battleScore + " Which was a " + battleResult);
        console.log("      Defense: " + defenseResult);
        let cardSuit = getCardSuit();
        console.log("Your card is " + cardValue + " of " + cardSuit + ".");
                        
        let healthAffect = healthImpact(cardSuit);
        let newHealth = health + healthAffect;
        console.log("Your health is now " + newHealth);
        turnArray.push(newHealth);
        health = newHealth;
        console.log(turnArray);       

        return health;
}



