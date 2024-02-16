// function play (){
//     const homeScreen=document.getElementById('home-screen')
//     homeScreen.classList.add('hidden')

//     const playGround=document.getElementById('playground-screen')
//     playGround.classList.remove('hidden')
// }

function handleKeyboardButtonPress(){
    const playerPressd= event.key;
    console.log('player pressed', playerPressd);

    if (playerPressd === 'Escape'){
        hideElementById('playground-screen');
        unHideElementById('score-screen')
        const currentScore=document.getElementById('current-score').innerText;
            const finalScore=document.getElementById('final-score');
            finalScore.innerText=currentScore
    }

    const currentAlphabetElemet =document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElemet.innerText;
    const currentLatteer=currentAlphabet.toLowerCase();
    console.log(currentLatteer,playerPressd)


    if (currentLatteer === playerPressd){
        console.log('you got a point');

        const currentScoreElement=document.getElementById('current-score');

        const currentScoreText=currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);
        const newScore=currentScore+1;
        currentScoreElement.innerText=newScore;

        continueGame();
        // currentAlphabet.toUpperCase();
        const rmvltr=currentLatteer.toUpperCase();
        removeBackgroundColorById(rmvltr);

    }
    else{
        const life=document.getElementById('life-line');
        const lifeText=life.innerText;
        const lifeValue=parseInt(lifeText);
        life.innerText=lifeValue -1;
        if(lifeValue === 0){
            hideElementById('playground-screen')
            unHideElementById('score-screen')
            const currentScore=document.getElementById('current-score').innerText;
            const finalScore=document.getElementById('final-score');
            finalScore.innerText=currentScore
        }

    }
}
document.addEventListener('keyup',handleKeyboardButtonPress);
 
function continueGame(){
    const alphabet=getRandomAlphabet().toUpperCase();
    

    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet
    addBackGroundColor(alphabet);
}

function play(){
    hideElementById('home-screen');
    unHideElementById('playground-screen');
    continueGame();
}
