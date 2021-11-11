// ES6 JS Classes
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    // Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    // Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    }
}

// Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

// super 
class BronzeLevelUser extends User {
    // we addthe ccinfo property to the user here
    constructor(username, password, ccinfo) {
        // if you are going to use 'this' in your constructor, you must have super that points to the parent constructor
        super(username, password);
        // the 'this' keyword wouldn't work without super
        this.type = 'Bronze User',
            this.ccinfo = ccinfo
    }

    getInfo() {
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

let bronzeGuy = new BronzeLevelUser('Bronze Dude', 'bronze1234', 0000111122223333);
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);