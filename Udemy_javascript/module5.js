//First method for creating instance or prototype 
/*
var Person= function(name,yearOfBirth,job,lastName){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    this.lastName=lastName;
    
    

}
Person.prototype.calculateAge=
    function(){
    console.log( 2020-this.yearOfBirth);

};

lastName='Farooqui'
var usama=new Person('usama',1998,'teacher',this.lastName);
var ahmed=new Person('ahmed',1995,'retired',this.lastName);
   
usama.calculateAge();
console.log(usama);
ahmed.calculateAge();
console.log(ahmed);

*/

//Second method for creating instance or prototype  using object.create

/*var personProto={
    calculateAge:function(){
    console.log(2020-this.yearOfBirth)
}
};

var usama= Object.create(personProto);
usama.name='usama';
usama.yearOfBirth=1998;
usama.job='teacher';
usama.calculateAge();

var ahmed =Object.create(personProto,{
   name: {value: 'Ahmed'},
    yearOfBirth:{value: 1995},
    job:{value: 'designer'},
    
});
console.log(ahmed);
*/

//*--*-********************************
//*-*-*-*-*-*--*-*-*-*-**-*--*-***-*

//Passing Functions as argunents

/*
var years=[1998,2008,1992,1930,2001];

function calcAge(arr, fn){
    var ageRes=[];
    
    for(var i=0;i<arr.length;i++){
        ageRes.push(fn(arr[i]));
    }
    return ageRes;
}
function ageCalculate(yearOfBirth){
    currAge=2020-yearOfBirth;
    return currAge;
}

function isFull(currAge){
    return currAge>=18;
}

function heartRate(currAge){
    if(currAge>18&& currAge<81)
    return Math.round(206.9-(.67*currAge));
    else
        return '18<Age<81 ';
}


var ages=calcAge(years, ageCalculate);

var adult=calcAge(ages, isFull);

var heart=calcAge(ages, heartRate);



console.log(ages);

console.log(adult);

console.log(heart);

*/
//************************************
//*-*-*-*-**-*-*-**-*-*-*-*-*-*-*-*-*-*-

//Function Returning Function
/*
function interviewQuestion(job)
{
    return function(name){
        if (job==='teacher')
            console.log(name+ ', What is your favourite subject ?');
       
        else if (job==='designer'){
            console.log('On Which IDE do you prefer to work '+name+'?');
        }
        else{
            console.log('What do you do '+name+" ?");
        }
}
 }
var teacherQuestion=interviewQuestion('teacher');

teacherQuestion('usama');
teacherQuestion('ahmed');

interviewQuestion('designer')('Usama');
interviewQuestion()('ahmed');

*/
//***************************************
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-


//Immediately Invoked Function Expression
//              IIFE

/*
(function (){
    var score=Math.random()*10;
    console.log(score>=5);
    
} )();
//var usama=function ageCalc();
//usama(1998)
console.log(score);

*/

//*****************************************
//-**-*-*-*-*-*-*-*-*-*-*-*--*-**-*-*-*-*-*

//      CLOSURES
/*
function retireTime(retirementAge){
    var a= ' years left untill retierment ';
    return function (yearOfBirth){
        console.log((2020-yearOfBirth)+a);
    }
}

var retireUS=retireTime(60);
retireUS(1998);



function interview(job){
    var a=('Which Subject you like most ?');
    var b='which IDE you Prefer ?';
    var c= 'what do you do ? ';
    return function (name){
        if(job==='teacher')
            console.log(a+name);
        else if(job==='designer')
            console.log(name+b);
        else
            console.log(c+name);
    }
}
interview('teeacher')('ugtrfgsama');


*/


//****************************************
//*-*-***-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*

//     Bind, Call and Apply
/*
var usama={
  name: 'Usama',
    age: 22,
    job:'programmer',
    presentation: function(convType,time){
        if(convType==='formal')
            {
                console.log('Good '+time+' ladies and GentleMen. My name is '+this.name+'I\'m a '+this.job+' and my age is '+this.age);
            }
        else if(convType==='informal')
            console.log('Hi everyone  My name is '+this.name+'I\'m a '+this.job+' and my age is '+this.age+' good '+time);
        else
            console.log('Nither Formal nor Informal  My name is '+this.name+'I\'m searching for a job . my age is '+this.age+' good '+time);
    }
};

var ahmed={
    name:'ahmed',
    age: 26,
    job:'CSA'
}
usama.presentation('informal','night');
usama.presentation.call(ahmed,'formal', 'morning');


var QueInfo= usama.presentation.bind(ahmed);
QueInfo('formal','morning');
*/
/*
var years=[1998,2008,1992,1930,2001];

function calcAge(arr, fn){
    var ageRes=[];
    
    for(var i=0;i<arr.length;i++){
        ageRes.push(fn(arr[i]));
    }
    return ageRes;
}
function ageCalculate(yearOfBirth){
    currAge=2020-yearOfBirth;
    return currAge;
}

function isFull(limit,currAge){
    return currAge>=limit;
}
*/
/*function heartRate(currAge){
    if(currAge>18&& currAge<81)
    return Math.round(206.9-(.67*currAge));
    else
        return '18<Age<81 ';
}*/

/*var ages= calcAge(years,ageCalculate);
var fullJapan= calcAge(ages,isFull.bind(this, 20));
console.log(ages,fullJapan);

*/

//*************************************
//*-*-*-*-*-*-*-*-**-*-*-*-*-*-**-*-*-*

//coding Challenge where you have to give the correct answer of questions using prompt command
/*

var queNum=Math.floor(Math.random()*3);

var questions={
    this.question=quesNum;
    this.ans=ansNum;   
        
}
*/
/*
function questions(queNum){
    return function(ansNum){
        if(queNum===0)
            console.log('What is the capital of India ?/n' )
    }
}
*/
/*
var arrAns=[];
for(var i=0;i<5;i++){
    arrAns[i]=i;
}
var arrQue=[];

function questions(queNum){
if(queNum===0)
{    arrQue[0]='What is the Capital of India ?\n'+arrAns[0]+'  Sydney\n'+arrAns[1]+'  India\n'+arrAns[2]+'  Lisbon\n'+arrAns[3]+'  Berlin\n';
 console.log(arrQue[0]);
 var res=prompt('Type the Answer Number ');

 if(res==1)
     {
         console.log('------------------------\n Correct Answer');
     }
 else
     
 console.log('------------------------\n Wrong Answer');
}
    
    
    
    
    
    
    
    
    
    
if(queNum===1)
{    arrQue[1]='What is the Capital of Germany ?\n'+arrAns[0]+'  Sydney\n'+arrAns[1]+'  India\n'+arrAns[2]+'  Lisbon\n'+arrAns[3]+'  Berlin\n';
 console.log(arrQue[1]);
 var res=prompt('Type the Answer Number ');

 if(res==3)
     {
         console.log('------------------------\n Correct Answer');
     }
 else
     
 console.log('------------------------\n Wrong Answer');
}

/*

if(queNum===2)
{    arrQue[2]='What is the Capital of Australia ?\n'+arrAns[0]+'  Sydney\n'+arrAns[1]+'  India\n'+arrAns[2]+'  Lisbon\n'+arrAns[3]+'  Berlin\n';
 console.log(arrQue[2]);
 var res=prompt('Type the Answer Number ');

 if(res==0)
     {
         console.log('------------------------\n Correct Answer');
     }
 else
     
 console.log('------------------------\n Wrong Answer');
}

}

console.log(questions(queNum));
 */



//----------------------------------------
//****************************************
/*
(function(){
function Question(question,answers,correct){
    this.question=question;
    this.answer=answers;
    this.correct=correct;
}

Question.prototype.QuestionResult=function(){
    console.log(this.question);
    
    for(var i=0;i<this.answer.length;i++){
        console.log(i+' : '+this.answer[i]);
    }
    
}
var input= parseInt(prompt('Enter your answer :'));
Question.prototype.correctAnswer=function(input){  
    //while(input!=='Quit'||input!=='quit')
    {if(input===this.correct||input==='Quit')
    {console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\nCorrect Answer\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-');
    
    }
    
    else 
       { console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-\nWrong Answer\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
            
       }
    }
    
}
//Question.prototype.queRepeat=function(){
  //  callQue();

var q1=new Question('Is javaScript the coolest language in the world ?',        ['Yes','No','Probably'], 0);

var q2= new Question('What is the capital of India ? ',   ["Agra", 'Cheenai','Delhi', 'Goa'], 2 );

/*var q3=new Question('What does best describe Coding',['Fun', 'Hard', 'Time Waste'], 0);
    
      
   //function callQue(){ 
       var ques=[q1,q2,q3];
    var queNum=Math.floor(Math.random()*ques.length);
    

    
ques[queNum].QuestionResult();
    
ques[queNum].correctAnswer();
    //ques[queNum].repeatQue();
     //              }
}) ();*/
(function () {
    var ansScore = 0;

    function Questions(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }

    Questions.prototype.QueOpnDisp = function () {
        console.log(this.question);

        for (var i = 0; i < this.options.length; i++) {
            console.log(i + ' : ' + this.options[i]);
        }
    }
    Questions.prototype.checkAns = function () {
        var input = prompt('Enter your Answer Number OR \'Quit\' to EIXT');


        if (input != 'Quit' && input == this.answer) {
            console.log("---------------------------\nyour Answer is Correct\n---------------------------");
            ansScore += 1;
            repeatQue();

        } else if (input != 'Quit') {
            console.log('----------------------------------\nWrong Answer\n------------------------------');
            repeatQue();
        } else
            console.log("-----------------------------------\nYou Entered QUIT\n----------------------------\n Your score is :" + ansScore + '\n-------------------------------');
    }


    var q1 = new Questions('Is javaScript the coolest language in the world ?', ['Yes', 'No', 'Probably'], 0);

    var q2 = new Questions('What is the capital of India ? ', ["Agra", 'Cheenai', 'Delhi', 'Goa'], 2);

    var q3 = new Questions('What does best describe Coding', ['Fun', 'Hard', 'Time Waste'], 0);

    repeatQue();

    function repeatQue() {
        var queCount = [q1, q2, q3];
        var randomNo = Math.floor(Math.random() * 3);



        queCount[randomNo].QueOpnDisp();
        queCount[randomNo].checkAns();
    }
})();
