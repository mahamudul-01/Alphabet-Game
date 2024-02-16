function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden')
}
function unHideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz'
    const alphabetArray=alphabetString.split('')

    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    const alphabet=alphabetArray[index];

    return alphabet;

}

function addBackGroundColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}



function setTextValueById(elementId,value){
    const element=document.getElementById(elementId);
    const elementText=parseInt(element);
    element.innerText=value;
}
function playAgain(){
    hideElementById('score-screen');
    unHideElementById('playground-screen');
    setTextValueById('life-line',5)
    setTextValueById('current-score',0)
}