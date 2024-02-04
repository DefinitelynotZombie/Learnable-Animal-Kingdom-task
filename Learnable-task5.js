class Animal{
    constructor(name, species,age){
        if (this.constructor === Animal){
            throw new Error("you can not instantiate directly");
        }
        this.name = name
        this.species = species
        this.age = age
    }
    
    //private method
    #stas(){
        console.log(`i am ${this.age} year(s) old`)
    }

    //public method calling the private method
    displayInfo(){
        console.log(`i am an animal, my species is: ${this.species}`)
        this.#stas()
    }
}
//example
//this will display "can not instantiate directly" 
// const mammal = new Animal("lion","mammal")


//creating classes for the direct class of animals
//mammal class
class Mammal extends Animal{
    constructor(name, species,age, hasFur){
        super(name,species,age)

        //private properties
        this.hasFur = hasFur        
    } 
    displayMammalInfo() {
        this.displayInfo();
        //i used return instead of console.log to solve the undefined problem i.e it shows undefined at the end after excution
        return (`i have Fur: ${this.hasFur}\n`);
      };
}

//reptilan class
class Reptile extends Animal{
    constructor(name, species,age,isColdBlooded){
        super(name,species,age)

        //private properties
        this.isColdBlooded = isColdBlooded        
    } 
    displayReptileInfo() {
        this.displayInfo();
        //i used return instead of console.log to solve the undefined problem i.e it shows undefined at the end after excution
        return (`i am cold blooded: ${this.isColdBlooded}\n`);
      };
}

//Bird class
class Bird extends Animal{
    constructor(name, species,age,canFly){
        super(name,species,age)

        //private properties
        this.canFly = canFly        
    } 
    displayBirdInfo() {
        this.displayInfo();
        //i used return instead of console.log to solve the undefined problem i.e it shows undefined at the end after excution
        return (`i am a ${this.species} and i can fly: ${this.canFly}\n`);
      };
}

//Fish class
class Fish extends Animal{
    constructor(name, species,age,preferredWaterType){
        super(name,species,age)

        //private properties
        this.preferredWaterType = preferredWaterType        
    } 
    displayFishInfo() {
        this.displayInfo();
        //i used return instead of console.log to solve the undefined problem i.e it shows undefined at the end after excution
        return (`i am a ${this.species} and i prefer: ${this.preferredWaterType}\n`);
      };
}

const mammal = new Mammal("lion","mammal",10,true)
const reptile = new Reptile("python","reptile",15,true)
const bird = new Bird("ostrich","bird",20,false)
const fish = new Fish("salmon","fish",25,"saltwater ocean")



//i used the "\n" to make space between each example 
console.log(mammal.displayMammalInfo())
console.log(reptile.displayReptileInfo())
console.log(bird.displayBirdInfo())
console.log(fish.displayFishInfo())