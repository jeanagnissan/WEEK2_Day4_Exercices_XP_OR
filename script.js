
/* ******************* Exercice 1 ***************** */

function isBlank(character){

    if(character.toString().length == "") {

        return false;

    }
    return true;
}

isBlank('');


/* *************** Exercice 2 ******************* */

function abbrevName(character) {
    let abbrevTab = character.toString().split(" ");

    if(abbrevTab.length > 1) {

        return `${abbrevTab[0]} ${abbrevTab[1].charAt(0)}.`;

    }

    return character;
}

abbrevName("Robin Singh");


/* *************** Exercice 3 ************** */
function swapCase(character) {

    let wordTable = character.split(" ");
    let neWordTableFormated = [];

    for(let word of wordTable) {
        if(word.charAt(0) == word.charAt(0).toUpperCase()) {

            word = word.charAt(0).toLowerCase() + word.substring(1).toUpperCase();
            neWordTableFormated.push(word);

        }
        else {

            word = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
            neWordTableFormated.push(word);

        }
    }

    console.log(neWordTableFormated.join(" "));

}

/* ************** End Exercice 3 ***************** */

/* ************** Exercice 4 ***************** */

function isOmnipresent(array, number) {
    let found = 0;

    for(let item of array) {
        
        for(let i of item) {
            
            if(i == number) {
                found++;
            }
        }
    }

    if(found >= array.length) {
        return true;
    }
    return false;

}

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6);

/* ******************* Exercice 1 ***************** */

function isBlank(character){

    if(character.toString().length == "") {

        return false;

    }
    return true;
}

isBlank('');

/* *************** Exercice 2 ******************* */

function abbrevName(character) {

    let abbrevTab = character.toString().split(" ");

    if(abbrevTab.length > 1) {

        return `${abbrevTab[0]} ${abbrevTab[1].charAt(0)}.`;

    }

    return character;
}

abbrevName("Robin Singh");


/* *************** Exercice 3 ************** */

function swapCase(character) {
    let wordTable = character.split(" ");
    let neWordTableFormated = [];

    for(let word of wordTable) {
        if(word.charAt(0) == word.charAt(0).toUpperCase()) {

            word = word.charAt(0).toLowerCase() + word.substring(1).toUpperCase();
            neWordTableFormated.push(word);

        }
        else {

            word = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
            neWordTableFormated.push(word);

        }
    }

    console.log(neWordTableFormated.join(" "));

}


/* ************** Exercice 4 ***************** */

function isOmnipresent(array, number) {
    let found = 0;

    for(let item of array) {
        
        for(let i of item) {
            
            if(i == number) {
                found++;
            }
        }
    }

    if(found >= array.length) {
        return true;
    }
    return false;

}

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6);
