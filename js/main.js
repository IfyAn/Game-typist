window.addEventListener('load', init);

//Global Variable

//Available Levels
const levels = {
    easy: 5,
    medium: 4,
    Hard: 3
}  

//To Change Current Level
var currentLevel = levels.Hard;

var time=currentLevel ;
var score=0;
var isPlaying;

//DOM Elements
const wordInput=document.querySelector('#word-input');
const currentWord=document.querySelector('#current-word');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');

const words = ['Nigeria', 'Ghana', 'France', 'Mali', 'Zambia', 'Australia', 'Germany', 'Britain', 'Brazil', 
'Swizaland', 'Norway', 'Austra', 'Sweden', 'Hungary', 'Senegal', 'Teacher', 'Russia', 'Ireland', 
'Denmarki', 'Zimbabwe', 'Japan', 'Youth', 'Obi', 'Dad', 'Mauritus', 'Mauritania', 'Madagasta', 
'Guinea', 'Papue Guinea', 'China'];

//Initialize game
function init(){
    //Show Current Level in the UI
    seconds.innerHTML=currentLevel;
    //Load Words From Arraay
    showWord (words);
    //Start Marching Word Inut
    wordInput.addEventListener('input', startMatch)
    //Call Countdown Every seconds
    setInterval(countdown, 1000)
     //Call Countdown Every seconds
     setInterval(checkStatus, 50)
}

//Start Match word
function startMatch(){
    if(matchWords()){
        isPlaying=true;
        time= currentLevel +1;
        showWord(words);
        wordInput.value='';
        score++
        //If Score -1, display 0
    } if(score ===-1){
        scoreDisplay.innerHTML= 0;
    } else {
        scoreDisplay.innerHTML=score;
    }
};

//Match currentWord to wordInput
function matchWords(){
    if(wordInput.value===currentWord.innerHTML){
        message.innerHTML='Correct!!';
        return true;
    } else {
        message='';
        return false
    }
};

//Pick & Show Random Word
function showWord(words){
     //Generate random Array index
     const randIndex= Math.floor(Math.random() * words.length);
     //Output Random Word
     currentWord.innerHTML = words[randIndex];
}

//Countdown Timer
function countdown(){
    if(time > 0){
        //Decreement
        time--;
    } else if(time===0){
        //Game is Over
        isPlaying=false;
    }
    timeDisplay.innerHTML=time;
}

//Check Game Status
function checkStatus(){
    if(!isPlaying && time ===0){
        message.innerHTML='Game Over';
        score= -1;
    }
}