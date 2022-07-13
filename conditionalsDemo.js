let blaziken = "Kelvin"
let gengar = "Lukas"

if(blaziken === "Lukas"){
    console.log("This is Lukas' Pokemon")
} else {
    console.log("This is Kelvin's Pokemon")
}

let blazikenAtk = 30
let gengarAtk = 35

let blazikenHp = 200
let gengarHp = 260

if(blazikenAtk > gengarAtk) {
    gengarHp -= blazikenAtk
    console.log(`Gengar's new HP is ${gengarHp}`)
} else if (gengarAtk > blazikenAtk) {
    blazikenHp -= gengarAtk
    console.log(`Blaziken's new HP is ${blazikenHp}`)
} else {
    console.log("They both missed!")
}

let furySwipes = 35

for(i=0; i<3; i++){
    console.log(i);
    console.log("Blaziken used fury swipes!")
    gengarHp -= furySwipes
    console.log(`Gengar's HP is now ${gengarHp}!`)
};

let lowKick = 60;

for(i=2; i>0; i--){
    console.log(i);
    console.log("Gengar used low kick!");
    blazikenHp -= lowKick;
    console.log("Blaziken's HP is now " + blazikenHp)
}

for (i = 0; i <= 10; i += 2){
    console.log("Even numbers are " + i)
}

let gengarFainted = false;


while(gengarHp > 0) {
    console.log("Blaziken used fury swipes")
    gengarHp -= furySwipes
    if(gengarHp < 0){
        gengarHp = 0;
        gengarFainted = true
    }
    console.log("Gengar's HP is now " + gengarHp)
    if(gengarFainted){
        console.log("Gengar has fainted.")
    }

}

let boolean = false;

let falseNum = 0

let falseStr = "";

if(boolean){
    console.log("True")
} else {
    console.log("False")
}