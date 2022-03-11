/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore,activePlayer,gamePlay;
//var userInput=prompt('Enter the Winning Score:');

init();
//dice=Math.floor(Math.random()*6)+1;

//      DOM manipulation

//document.querySelector('#current-'+activePlayer).textContent=dice;//selects value

//document.querySelector('#current-'+ activePlayer).innerHTML='<em>'+dice+'</em>'

//var x = document.querySelector('#score-0').textContent;

//console.log(x);

document.querySelector('.dice-0').style.display='none';
document.querySelector('.dice-1').style.display='none';




document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlay)
    
    {
        //Random No
    var dice=Math.floor(Math.random()*6)+1;
    
    // 2 display the no
document.querySelector('.dice-'+activePlayer).style.display='block';
    
document.querySelector('.dice-'+activePlayer).src='dice-'+dice+'.png';

//document.querySelector('.dice'+activePlayer).classList.add('diceShadow');
    //3 update the roundScore if currentNo is not 1
        if(dice!==1){
            roundScore=roundScore+dice;
            document.querySelector('#current-'+ activePlayer).textContent=roundScore;
        }
        
        else{
            
            nextPlayer();
            if(activePlayer===1)
        document.querySelector('.dice-1').style.display='none';
    else
        document.querySelector('.dice-0').style.display='none';         
        }
    }
});


// to add roundscore in main score

document.querySelector('.btn-hold').addEventListener('click',function(){
    
   /* if(activePlayer===0)
    {
        scores[0]+=roundScore;
    
        document.querySelector('#score-'+ activePlayer).textContent= scores[0];
    }
    else
    {
        scores[1]+=roundScore;
    
        document.querySelector('#score-'+ activePlayer).textContent= scores[1];
    }
     */
    if(gamePlay)
        {
    scores[activePlayer]+=roundScore;
   
    document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
    
            diceInterchange();
    
    if(scores[activePlayer]>=/*userInput*/30)
    {
        document.querySelector('#name-'+activePlayer).textContent='WINNER!';
        
        document.querySelector('.dice-0').style.display='none';

        document.querySelector('.dice-1').style.display='none';

        
        document.querySelector('.player-' +activePlayer+'-panel').classList.add('winner');
        
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlay=false;
        
    }
    
else    
    nextPlayer();
        }
});

document.querySelector('.btn-new').addEventListener('click',function(){
   
    init();
    
    
    //document.querySelector('player-'+activePlayer+'-panel').classList.remove('winner');
    //document.querySelector('.palyer-0-panel').classList.add('active');
    
});



function nextPlayer(){
    
    

    
    activePlayer===0? activePlayer=1:activePlayer=0;         roundScore=0;
    
    
            
            document.getElementById('current-0').textContent='0';
            document.getElementById('current-1').textContent='0';
    
    
     //active class: only active in palyer-0-panel class then we can change class when necessary or giving property to another class
    document.querySelector('.player-0-panel').classList.toggle('active');
    
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    document.querySelector('.dice'+ activePlayer).style.display='none';
    }


function init(){
    scores=[0,0];
roundScore=0;
activePlayer=0;
    gamePlay=true;
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    //var name-0=prompt("Enter Name of 1st Player: ");
    //var name-2=prompt("Enter Name of 2nd Player: ");
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');   
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function diceInterchange()
{
    if(activePlayer===1)
        document.querySelector('.dice-1').style.display='none';
    else
        document.querySelector('.dice-0').style.display='none';

}



















