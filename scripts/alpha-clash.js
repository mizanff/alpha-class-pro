// function play(){
//     // console.log('play start now')
//     // step -1: hide the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
//     // console.log(playgroundSection.classList);
// }

function continueGame(){
    // step -1:generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    //  set rendomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    // set bacground color
    setBackgroundCollerById(alphabet);

}

function play(){
    // hide everything show only the playground 
    // console.log('hello')
    hiddenElementById('home-screen')
    hiddenElementById('final-score')
    showElementById('play-ground')
    continueGame()
    // recet score and life 
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)

}
function gameOver(){
    console.log('hello')
    hiddenElementById('play-ground')
    showElementById('final-score')
    // update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score')
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore)
    // clear the last seclected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet')
    console.log(currentAlphabet);
    removeBacgroundCollerById(currentAlphabet)
}

// capture keybord key press
function handleKeybordButtonPrees(event){
    const playerPressed = event.key;
    console.log('player Pressed', playerPressed)

    // stop the game if pressd 'Esc'
    if( playerPressed === 'Escaped'){
        gameOver()
    }

    // get the expected the press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, currentAlphabet);

    // check mached or not 
    if(playerPressed === expectedAlphabet){
        console.log('you get a point!');

    //  same neom
    const currentScore = getTextElementValueById('current-score');
    console.log(currentScore);
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore)








// --------------------------------------------------------------
        // update score
        // // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText)
        // console.log(currentScoreText)
        // // 2. incrase the score by 1
        const newScore = currentScore + 1;
        // // 3. show the update score
        // currentScoreElement.innerText = newScore;
        // start a new round
        console.log('you have pressed correctly', expectedAlphabet);
        removeBacgroundCollerById(expectedAlphabet);
        continueGame();
}
    else{
        // same neom
        const currentLife = getTextElementValueById('current-life')
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if(updateLife === 0){
            // console.log('game over');
            gameOver()
            
        }


        // --------------------------------------------
        console.log('you missed. you lost a life');
         // update score
        // // 1. get the current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLifeText);
        // // 2. incrase the score by 1
        // const newLife = currentLife - 1;
        // // 3. show the update score
        // currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup',handleKeybordButtonPrees );


