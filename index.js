// Classes

class Animal {

    constructor(sound, food, sleeping) {
        this.sound = sound;
        this.food = food;
        this.sleeping = sleeping;
    }

    makeSound() {
        console.log('Sound energy ', this.sound);
    }

    eatFood() {
        console.log('Food energy ', this.food);
    }

    goToSleep() {
        console.log('Sleep energy ', this.sleep);
    }

    levelUp() {
        this.sound -= 3;
        this.food += 5;
        this.sleeping += 10;
    }

    get stats(){
        return 'Sound energy ' + this.sound + ',Food Energy ' + this.food + ',Sleep Energy ' + this.sleeping;
    }
}

class Tiger extends Animal {

    foodChoice = ['Fish', 'Grain', 'Meat'];

    constructor(sound, food, sleeping) {
        super(sound, food, sleeping);
    }

    goToSleep() {
        super.goToSleep();
        this.sleeping += 5;
    }

    makeSound() {
        console.log('Roarr ');
    }

    eatFood(foodReceived){
        if(this.foodChoice.indexOf !== -1){
            if(foodReceived === 'Grain'){
                return "I can't eat that";
            } else {
                return 'Tasty';
            }
        } else {
            return "What's that?";
        }

    }
}

class Monkey extends Animal {
    
    constructor(sound, food, sleeping) {
        super(sound, food, sleeping);
    }

    eatFood() {
        super.eatFood();
        this.food += 2;
    }

    makeSound() {
        super.makeSound();
        this.sound -= 4;
        console.log('Uh ga ga ');
    }

    play() {
        this.food -= 8;
        this.sound -= 8;
        this.sleeping -= 8;

        if (this.food > 0 && this.sound > 0 && this.sleeping > 0) {
            return 'Oooo Oooo';
        } else {
            return "I'm too tired";
        }
    }
}

class Snake extends Animal {
    constructor(sound, food, sleeping) {
        super(sound, food, sleeping);
    }

    makeSound() {
        super.makeSound();
        console.log('Tssss ');
    }
}

// Objects

const changuito = new Monkey(100, 100, 100);
const changuitoCansado = new Monkey(0, 0, 0);
const tigre = new Tiger(100, 100, 100);
const vibora = new Snake(100, 100, 100);

// Jungle Sound

function jungleSound() {
    changuito.makeSound();
    changuitoCansado.makeSound();
    tigre.makeSound();
    vibora.makeSound();
}

// Get Stats

function getStats() {
    console.log(changuito);
    console.log(changuitoCansado);
    console.log(tigre);
    console.log(vibora);

    const chango01 = document.getElementById('chango');
    chango01.innerHTML = changuito.stats;

    const tigre01 = document.getElementById('tigre');
    tigre01.innerHTML = tigre.stats;

    const changocansado01 = document.getElementById('changocansado');
    changocansado01.innerHTML = changuitoCansado.stats;

    const vibora01 = document.getElementById('vibora');
    vibora01.innerHTML = vibora.stats;
}

function changoPlay() {
    if(changuito){
        const changuitoPlay = document.getElementById('changoPlay');
        changuitoPlay.innerHTML = changuito.play();
    }
}

function changitoCansadoPlay() {
    if(changuitoCansado){
        const changuitoPlay = document.getElementById('changoCansadoPlay');
        changuitoPlay.innerHTML = changuitoCansado.play();
    }
}

function tigreEatGrain() {
    if(tigre){
        const tigreCome = document.getElementById('tigreEat');
        tigreCome.innerHTML = tigre.eatFood('Grain');
    }
}


