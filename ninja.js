/*
Create a Ninja class

add an attribute: name

add an attribute: health

add a attribute: speed - give a default value of 3

add a attribute: strength - give a default value of 3

add a method: sayName() - This should log that Ninja's name to the console

add a method: showStats() - This should show the Ninja's name, strength, speed, and health.

add a method: drinkSake() - This should add +10 Health to the Ninja
*/
class Ninja {
    constructor(nameInput){
        this.name = nameInput;
        this.health = 1;
        this.speed = 3;
        this.strenght = 3;
    }
    sayName(){
        console.log(`name ${this.name}`)
    }
    showStats(){
        console.log(`name ${this.name} \n strenght ${this.strenght} \n speed ${this.speed} \n health ${this.health}`)
        // this.name == Ninja.name
        // this.strenght == Ninja.strenght
        // this.speed == Ninja.speed
        // this.health == Ninja.health
    }
    drinkShake(){
        this.health += 10;
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkShake();
ninja1.showStats();

// console.log(ninja1)