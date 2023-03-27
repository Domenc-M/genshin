function getRandomCharacter() {
    var result = randomIntFromInterval(0, characterArray.length-1);
    
    return(characterArray[result]);
}

function getRandomFiveStar() {
    var result = randomIntFromInterval(0, fiveStarArray.length-1);
    
    return(fiveStarArray[result]);
}

function getTenPull() {
    var resultArray = [];

    resultArray.push(getRandomFiveStar());

    for (let i = 0; i < 9; i++) {
        resultArray.push(getRandomCharacter());
    }

    return(resultArray);
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}