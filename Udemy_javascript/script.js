/*-------VARIABLE AND DATA TYPES----------*/

/*var firstName='Usama';
console.log(firstName);

var age;
age=28;
console.log(age);
var undcefl;

console.log(undcefl);*/
//---------------------------------------
//---------------------------------------

/*VARIABLE MUTATION AND TYPE CONVERSION*/

/*var firstName='usama';
var age=28;

console.log(firstName+' '+ age);//type coercion

var job, isMarried;
job='teacher';
isMarried=false;

console.log(job+' '+ isMarried);

job='Engineer'
console.log(job); 

//variable mutation
job='Driver';
age='Twenty Eight';


alert(firstName+ ' age is '+ age+ ' he is a '+ job);


var lastName=prompt(' What is his last Name?');
console.log(firstName+' '+ lastName);*/


//---------------------------------------
//---------------------------------------

/*var  now,ageUsama, ageAhmed;
now=2020;
ageAhmed=24;
ageUsama=22;

console.log(now+ ageAhmed);
var older= ageAhmed > ageUsama;
console.log(' is Ahmed older? '+older);

//typeof operator
console.log(typeof older);
console.log(typeof ageUsama);
console.log(typeof now );*/

//---------------------------------------
//---------------------------------------


/*var int1 , int2;
int1=20;
int2=21;
console.log(int1, int2);*/
//************************************
//------------------------------------

//CODING CHALLENGE

//var markWt, markHeight,johnWt, johnHeight;

//**************************************
//**************************************
/*
var markWt = prompt('What is mark mass in KG?');
var markHeight = prompt('What is mark Height in meter?');
var johnWt = prompt('What is John mass in KG?');
var johnHeight = prompt('What is John Height in meter?');

console.log('Wt & Height of Mark ' + markWt + ', ' + markHeight);


console.log('Wt & Height of John ' + johnWt + ', ' + johnHeight);
var markBMI = markWt / (markHeight * markHeight);
var johnBMI = johnWt / (johnHeight * johnHeight);

console.log('BMI of Mark & John is ' + markBMI + '  ' + johnBMI);

if (markBMI > johnBMI) {
    //var comp=markBMI>johnBMI;
    console.log(' Mark\'s BMI is Higher than John\'s BMI ' );
} else {
    console.log('John\'s BMI is Higher than Mark\'s BMI ' );

}*/
//***************************************
//**************************************

/*
//       IF/ELSE STATEMENT
var firstName='Usama';
var civilStatus= 'single';

if(civilStatus==='married')
    {
        console.log(firstName+' is Married');
    }
else
    {
        console.log('its '+ firstName+ '\'s choice ;)');
    }


var isMarried=true;
if(isMarried)
    {
        console.log(firstName+' is Married');
    }
else
    {
        console.log('its '+ firstName+ '\'s choice ;)');
    }
    
*/
//***************************************
//--------------------------------------

//          ternary Operator

/*var firstName='usama';
var age=2;
age>=18? console.log(firstName+' Can  vote'): console.log(firstName+' can\'t vote');

var vote= age>=18? 'Can vote': 'can not vote';console.log(vote);*/
//**********************************
//--------------------------------------

//              Switch Statement

/*
var job='driver';
switch (job)
    {
        case 'teacher':
            console.log('i00');
            break;
            
        case 'driver':
            console.log('gddcg');
    }*/
//**************************************
//--------------------------------------

//Truthy and Falsy values


//falsy values: values which are undefined, null, 0, NaN;
//Truthy values: all values which  are not falsy;
//***************************************

//          Coding Challenge
/*
var johnScr1,johnScr2, johnScr3,MikeScr1,MikeScr2,MikeScr3;
johnScr1=189;
johnScr2=120;
johnScr3=103;
MikeScr1=116;
MikeScr2=90;
MikeScr3=123;

var avgJohn=(johnScr1+johnScr2+johnScr3)/3;
var avgMike=(MikeScr1+MikeScr2+MikeScr3)/3;

if(avgJohn>avgMike){
    console.log(' John\'s  team is the winner with Average score of:'+avgJohn );
}
else
    {
        console.log(' Mike\'s  team is the winner with Average score of:'+avgMike );
        
    }

*/

//****************************************
//----------------------------------------
//          Funnction 
/*
function calculateAge(birthYear)
{
    return 2020-birthYear;
}

var ageUsama= calculateAge(1998);
console.log(ageUsama);

function yearsUntillRetirement(firstName, birthYear)
{
    var age= calculateAge(birthYear);
    var retirement= 65-age;
    if(retirement>=0){
        console.log(firstName+ ' will retire in ' +retirement+ ' years. ');
    
}
    else
        {
            console.log(firstName+ ' is Already Retired');
        }
}
yearsUntillRetirement('Usama' ,1998);
yearsUntillRetirement('Uzair' ,1948);
yearsUntillRetirement('ahmed' ,1968);*/
//******************************************
//-----------------------------------------


//              ARRays

/*
var names=['john','Usama', 'Ahmed'];
var year=new Array(1990,1998,1996);

console.log(names[2]);
console.log(names);
*/


// Mutate array data

/*names[0]='Uzair';
//names[5]='Anas';
names[names.length]='Anas';
console.log(names);

//Different Data Types

var usama=['Mohammed', 'Usama', 1998, 'MCA', false];
usama.push('blue');
usama.unshift('Mr');
console.log(usama);

usama.pop();
usama.pop();
usama.shift();
console.log(usama);


console.log(usama.indexOf('Usama'));
console.log(usama.indexOf(1998));

var isDesigner=usama.indexOf('MCA')===-1?'USAMA is not a Designer': 'Usama is a Software Designer'
console.log(isDesigner);

*/

//*****************************************
//----------------------------------------

//          Coding Challenge
/*amt1=124;
    amt2=48;
    amt3=268;
 tip1=15*amt1/100;
    tip2=20*amt2/100;
    tip3=10*amt3/100;*/





/*function tip(bill)
{
    var percent;
    if(bill>0&&bill<=50)
        percent=.20*bill;
    else if(bill<50&&bill<=200)
        percent=.15*bill;
    else
        percent=.10*bill;
    
    return percent;
      
}
var Ctip=[(tip(124)),(tip(48)),(tip(268))];

var totAmt=[Ctip[0]+124,Ctip[1]+48, Ctip[2]+268];
console.log(Ctip);
console.log(totAmt);*/
//******************************************
//*-*-*-*--*--*-*-*-*-*-*-*-*--*-*--*-*-*-*-


//              Objects and properties
/*
var Usama={
    firstName: 'Mohammed',
    lastName:'Usama',
    birthYear:1998,
    familyProperty:['Ahmed','Anas','Lucknow'],
    job: 'Student',
    isMArried:false
};
console.log(Usama);
console.log(Usama.birthYear);
var x='isMArried';
console.log(Usama['job']);
console.log(Usama[x]);


Usama.job='Teacher';
Usama['isMArried']=true;
console.log(Usama);


var usamaNew=new Object();
usamaNew.name='mohammed usama';
usamaNew.age=22;
usamaNew['lastName']='farooqui';

console.log(usamaNew);

*/

//***************************************
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

//Objects and Methods

/*
var Usama={
    firstName: 'Mohammed',
    lastName:'Usama',
    birthYear:birthYear=prompt('ENTER YOUR BIRTH YEAR: '),
    familyProperty:['Ahmed','Anas','Lucknow'],
    job: 'Student',
    isMArried:false,
    calAge: function(){
        this.currentAge= 2020-birthYear;
    }
};
//var age=(Usama.calAge());

Usama.calAge();
console.log(Usama);
*/


//***************************************
//**-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

//      Coding Challenge 4a
/*
var mark=new Object;
    mark.fullName= prompt('Enter Full Name of Mark: ');
    mark.mass= prompt('Enter Your Mass: ');
    mark.height=prompt('Enter your Hight');
    mark.BmiMark=function(){
        this.BmiMark=this.mass/(this.height*this.height);
    }  
    mark.BmiMark();
 

 var john={
    fullName: prompt('Enter Full Name of John: '),
     mass: prompt('Enter Your Mass: ') ,
     height:prompt('Enter your Hight'),
    BmiJohn:function(){
         this.BmiJohn=this.mass/(this.height*this.height);
    }
     
     
};  
john.BmiJohn();


console.log(mark);
console.log(john );

if(mark.BmiMark>john.BmiJohn){
    console.log('Mark\'s BMI is Higher than John\'s BMI');
    console.log(mark);
    

}else if(mark.BmiMark<john.BmiJohn)
    {   console.log('John\'s BMI is Higher than Mark\'s BMI' );
        console.log(john);
    }
else
    console.log("BOTH John\'s & Mark\'s BMI are Same");


*/
//****************************************
//*-*-*--*-*-*****-***********-*-*--------

// Looping Statements

/*
var data = ['Mohammed', 'Usama', 1998, 'Teacher', 'Blue', 'Lucknow'];
var i;
for (i=data.length-1;i>=0; i-- ){
    if ( typeof data[i] !== 'string' )
      break;//continue;
    console.log( data[i] );
}

*/
//***************************************
//**-*-**-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*

//          Coding Challenge
/*

var johnBill=
{
    bill:[124,48,268,180,42],
   
    
    tipCalc: function()
    {
        this.tips=[];
        this.finalValues=[];
        for(var i=0; i<this.bill.length; i++)
            {       var percent
                if(this.bill[i]>0&&this.bill[i]<=50)
                    percent=.2;
                    
                    // this.tipCalc[i]=.2*this.bill[i];
                
                else if(this.bill[i]>50&&this.bill[i]<=200)
                   percent=.15; //this.tipCalc[i]=.15*this.bill[i];
                
                else
                   percent=.1; //this.tipCalc[i]=.1*this.bill[i];
                
              //this.tips=this.tipCalc[i];
                
            
            this.tips[i]=this.bill[i]*percent;
             this.finalValues[i]=this.tips[i]+this.bill[i];
            }
        
        
        
        
    }
};

johnBill.tipCalc();
*/
/*        console.log(johnBill.bill[i]+' was Initial  BIll  '+johnBill.tipCalc[i]+' Tot Amt is  '+ (johnBill.bill[i]+johnBill.tipCalc[i]));
    }

console.log(johnBill.tips[0]);*/
            
        
/*        
        console.log(johnBill);
var sum=0;
for(var i=0; i<johnBill.bill.length; i++){
    
    sum=sum+johnBill.tips[i];
    
    

}
console.log(sum);

*/


//****************************************
//*-**-*-*-*-**-*-*-*-*-*-*-*-*-*-*-*-*-*-

//          This Keyword
//console.log(this);
/*calcAge(2000);
 function calcAge(birthYear)
{
    console.log (2020-birthYear);
    console.log(this);
}
*/

var usama={
    fullName:'Mohammed Usama',
    yob: 1998,
    calcAge: function(){
        console.log(2020-this.yob);
        console.log(this);
    }
};
usama.calcAge();


var ahmed={
    name:'Ahmed',
    yob:1993
};

ahmed.calcAge= usama.calcAge;

ahmed.calcAge();