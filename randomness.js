//////////////////////
// GLOBAL VARIABLES //
//////////////////////
function randomnumber(){
    const decimal = Math.random();
    const times21 = decimal * 21;
    const final = Math.floor(times21);
    console.log(final);
}
randomnumber();

const alphabet = "abcdefghijklmnopqrstuvwxyz";
function randomletter(){
    const letters = Math.random();
    const times26 = letters * 26;
    const last = Math.floor(times26)
    const letter = alphabet.charAt(last);
    console.log(letter);
}
randomletter();

const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
function randomfoods(){
    const food = Math.random();
    const times6 = food * foods.length;
    const past = Math.floor(times6);
    const food2 = foods[past];
    console.log(food2);
}
randomfoods();

const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
function randomstudents(){
    const kid = Math.random();
    const times7 = kid * students.length;
    const cast = Math.floor(times7);
    const kid2 = students[cast];
    console.log(kid2);
}
randomstudents();

const groups = ["trashmen","bussers","dishwashers","cooks"]
 function randomgroups(){
     const worker = Math.random();
     const times4 = worker * groups.length;
     const blast = Math.floor(times4);
     const worker2 = groups[blast]
     console.log(worker2)
 }
 randomgroups();
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////