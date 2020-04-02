//Parent
class Ninja{
    constructor (name,health,speed,strength){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("My Ninja name is"+this.name+" !")
    }

    showStats(){
        console.log("Ninja Name: "+this.name+" Strength: "+this.strength+" Speed: "+this.speed+" Health: "+this.health);
    }

    drinkSake(){
        this.health +=10;
        console.log("Ninja Health Now: "+this.health);
    }
}

 // create a class Sensei that inherits from the Ninja class
 // add an attribute: wisdom - default to 10
 // create a method: speakWisdom()
 // create a method: drinkSake()


//child class
class Sensei extends Ninja{
    constructor(name){
        super("Master Splinter",200, 10, 10);
        // this.health=200;
        // this.speed=10;
        // this.strength=10;
        this.wisdom=10;
    }

    speakWisdom(){
        const message = super.drinkSake();
        console.log(message);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"