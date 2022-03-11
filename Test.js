
/*function describeIndia(country, population, capital) {
    return `${country} has ${population} peoples and the capital is ${capital}`;
}
describeIndia= describeIndia('India', '2 Billion', 'Delhi');
console.log(describeIndia);

function percentOfWorld1 (country) {
    const totalPopulation=600;
    return `Percentage of population is ${country*100/totalPopulation}%`
}
const perInd= percentOfWorld1(4);
console.log(perInd);
const population1=[10, 20, 30, 40];
console.log(population1.length===5);
const percent =[percentOfWorld1(population1[0]), percentOfWorld1(population1[1]), percentOfWorld1(population1[2]), percentOfWorld1(population1[3]),]
console.log(percent)

const neighbours =['Russia', 'India', 'Indonesia'];
if(neighbours.includes('India')) {
    console.log('Probably Asia ');
}

neighbours[neighbours.indexOf('Indonesia')]='Republic of Indonesia';
console.log(neighbours);
*/
/*
const myCountry = {
    country: 'India',
    capital: 'Delhi',
    population: 1400,
    language: 'Hindi' ,
    
    rando: function() {
        document.write(`${this.country} is my country `);
    }
};
myCountry.rando();
/*console.log(this.language);

const listOfNeighbours = [
    ['Bangle','sri'],['china'],['nepal','tibet']
];
console.log(listOfNeighbours[0][1]);
*/
/*
function submitfn () {
    setTimeout(alert("Thank you, Your form is submitted 👍 "), 300);
    
    
}
/*var DOMstrings= {
    fieldname1 :'entry.775039777'
}*/
/*function checkform(form) {
    //fieldname1 =    document.getElementById('entry.775039777');
    val = document.getElementById('entry.775039777').value;
    if(val==""){
        alert("Error: Input field empty");
        document.getElementById('entry.775039777').focus();
        return false;
    }
    alert("Thank you, Your form is submitted 👍 ");
    return true;
}

//document.querySelector('.heading').textContent=10;

document.querySelector('.entbut').addEventListener('click',function newf() {
    var numb= Number(document.querySelector('.inpclass').textContent=10);
//     document.querySelector('.heading').textContent=numb;
});

console.log(newf);
/*
document.querySelector('.entbut').addEventListener('click',function () {
    document.querySelector('.heading').textContent= prompt("What's your name ? ");
});*/
/*var buttonSplit = document.querySelectorAll('.splitBtn');
var split = document.querySelectorAll('.split');


const splitStart = function () {

    for (let i=0; i<split.length; i++){
    let left= true;
    console.log(split[i].classList);
    if(split[i].classList.contains('p1'))
        {
            split[i].classList.remove('p1');
            split[i].classList.add('p2');
            console.log(split[i].classList);
        }
    else if ( left===true )
        split[i].classList.add('p1');
        split[i].classList.remove('p2');
}
}

for( let i=0; i<buttonSplit.length; i++) {
    buttonSplit[i].addEventListener('click' , splitStart );
}*/
/*
var splitBtn= document.querySelector('.splitBtn');
var split = document.querySelector('.split');

var activeSide=0;
const toggleColor = function () {
    document.querySelector(`.split--${activeSide}`).classList.toggle('active');

    activeSide = (activeSide===0? 1:0);
    document.querySelector(`.split--${activeSide}`).classList.toggle('active');

}
splitBtn.addEventListener('click', function() {
    toggleColor();       
})

document.querySelector('.split').addEventListener('click', function() {
    toggleColor();
})
*/

/*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
    scores: {
        Ganrby :1,
        Hummels:1,
        Lewandowski: 2
    },

    printGoals(...arbPlayer) {
        console.log(...arbPlayer);
    }
  };

  const players1 = [...game.players[0]];
  const players2 = [...game.players[1]];
  const [gk1, ...restPlayer1]=players1;
  const [gk2, ...restPlayer2]=players2;
  const allplayers = [...game.players[0],...game.players[1]];
  const playersFinal = [...players1,'Thiango' , 'Coutinho', 'Perisic'];
  
  //const [team1 , draw, team2]=[...game.odds];
const arbPlayer=['hi', 'hello', 'byr','neon'];
game.printGoals(...arbPlayer);
*/
/*
const [players1, players2]= game.players;
const [gk1, ...restPlayer1]=players1;
const allplayers = [...players1, ...players2];
const playersFinal = [...players1,'Thiango' , 'Coutinho', 'Perisic'];
const {odds : {team1, x:draw, team2}}= game;

  console.log(players1);
  console.log(players2);
  console.log(gk1, restPlayer1);
  //console.log(gk2, restPlayer2);
  console.log(allplayers);
  console.log(playersFinal);
  console.log(team1, draw, team2);
  team1 > team2 && console.log('Team1 likely to win');

  for (const [i,player] of game.scored.entries()){
      console.log(`${player} goaled ${i+1} times` );
  }


  const entries = Object.entries(game.odds);
  let sum=0
  for (const num of Object.values(game.odds)){
      sum=sum+num;
    }

  console.log(sum/entries.length);

  for(const [key, value] of Object.entries(game.odds)){
      ( key ==='x' )?console.log('tie'):console.log(`${game[key]}, ${value}`);
  }

console.log(`${game[team1]}`);
*/

/*
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
    ])

    //for (const value of gameEvents.values())
      //  events.
        //console.log(events);

    const events =[...new Set(gameEvents.keys()) ];
    console.log(events);
    
    gameEvents.delete(64);
    console.log(gameEvents);

    for(let i=0; i<=90;i+=9) {
        for( const keyss of gameEvents.keys())
            if (keyss>=i && keyss<i+8)
                console.log(gameEvents.get(keyss));
    }


    console.log(
        `An event happened, on average, every ${90 / gameEvents.size} minutes`
      );
      const time = [...gameEvents.keys()].pop();
      console.log(time);
      console.log(
        `An event happened, on average, every ${time / gameEvents.size} minutes`
      );
      

    //console.log(gameEvents.values())

    for(const [time, event] of gameEvents.entries()){
        time<45?console.log(`first half: ${gameEvents.get(time)}`):console.log(`second half: ${gameEvents.get(time)}`);
        //console.log(time,event);
    }
    for(const [time, event] of gameEvents.entries()){
        const term= time<45?'First':'Second';
        console.log(`${term}Half  Event ${time}:${event}`);
    }
let cc=[];
    const camelCase = function(name) {
       let newName= name.trim().toLowerCase().split('_');
        for( let n of newName)
            cc.push(n.replace(n[0], n[0].toUpperCase()));
       return cc.join("");
    }
    console.log(camelCase('  Hi_hih_hih   '));
    */

    dogsJulia =[12,3,1,6,2];
    dogsKate = [14,2,1,1,6];
    //console.log(dogsJulia);

    const agedog=dogsJulia.reduce((acc,val,i) => acc+acc+val,0);
    agedog=agedog/
    console.log(agedog);

   const checkDogs = function (dogsJulia, dogsKate) {
      const dogsJuliaCorrected = dogsJulia.slice(1,3);
        const allDogsAge =[...dogsJuliaCorrected,...dogsKate];

         allDogsAge
        .map(function(val,i){
        if (val<5)
         console.log(`Dog number ${i+1} is still a puppy`);
        else
         console.log(`Dog number ${i+1} is an adult, and is 5 years old`);
        });

    }
    
    const clacAverageHumanAge = function (allDogsAge) {
       const ageInHuman=[];

    }
checkDogs(dogsJulia,dogsKate);
