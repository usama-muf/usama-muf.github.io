/*var inputDescription, inputValue;


document.querySelector('.add__btn').addEventListener('click',function()
{   
     
    if(value=='inc'){
        AddIncome();
    }
    if(value=='exp'){
        SubExpenses();
    }

    
    
    
});

function AddIncome(){
    var inputDescription=document.querySelector('.add__description').value;

var inputValue=document.querySelector('.add__value').value;
 console.log(inputDescription, inputValue);   
var updateIncome=document.querySelector('.budget__income--value').textContent=inputValue;
    
    document.querySelector('.income__list').textContent=inputDescription+' :price $ '+inputValue;
}

function SubExpenses(){
var inputDescription=document.querySelector('.add__description').value;

var inputValue=document.querySelector('.add__value').value;
 console.log(inputDescription, inputValue);   
var updateIncome=document.querySelector('.budget__expenses--value').textContent=inputValue;
 document.querySelector('.expenses__list').textContent=inputDescription+' :price $ '+inputValue;
    
}*/

///**************************************
//*-*-*-*-*-*-*-*-*-*-**-*-*--*-*-*-*-*-*-
//          BUDGET CONTROLLER
var budgetControl = (function () {

    var Expenses=function(id, description, value){
        this.id=id;
        this.description=description;
        this.value=value;
        this.percentage=-1;
    };
    
Expenses.prototype.calcPercentage=function(totalIncome){
    
   if(totalIncome>0) {
       this.percentage=Math.round((this.value/totalIncome)*100);

   }    else
        this.percentage=-1;
    
    
};
    Expenses.prototype.getPercentage=function(){
        
        return this.percentage;
    };
   
    
    var Income=function(id, description, value){
        this.id=id;
        this.description=description;
        this.value=value;
    };
    
    var calculateTotal=function(type){
       var sum=0;
        data.allItems[type].forEach(function(current){
          sum += current.value; 
        });
        data.totals[type]=sum;
    };
    
    var data={
      allItems:{
        exp:[],
        inc:[]
      },
        totals:{
            exp:0,
            inc:0
        },
        budget:0,
        percentage:-1
    };
    return{
        addItem:function(type,desc,val){
            var newItem, ID;
            
            //ID=0;
            //create New Id
            
            if(data.allItems[type].length>0)
            ID=data.allItems[type][data.allItems[type].length-1].id+1;
            
            else
                ID=0;
            
            //Create new Item based on 'inc' OR 'exp'
            if(type==='exp'){
            newItem= new Expenses(ID,desc,val);
            }
            else if(type==='inc'){
                newItem=new Income(ID,desc,val);
            }
            
            //Push it into data structure
            data.allItems[type].push(newItem);
            
            //Return the New Element
            return newItem;
    }, 
        
         deleteItem:function(type, id){
            var ids=data.allItems[type].map(function(current){
                return current.id;
            });
             var index= ids.indexOf(id);
             
             if(index!== -1){
                 data.allItems[type].splice(index,1);
             }
            
            
        },
        
        calculateBudget: function(){
        // 1. calculate income & expenses
            calculateTotal('exp');
            calculateTotal('inc');
        
        //2. calculate the total budget: income-Expenses
        data.budget=data.totals.inc-data.totals.exp;
        
        //3. calculate %of expenses
            if(data.totals.inc>0){
               data.percentage=Math.round((data.totals.exp*100)/data.totals.inc);

            }
        },
        
        getBudget:function(){
            return{
                budget: data.budget,
                totIncome: data.totals.inc,
                totExpenses:data.totals.exp,
                percentage:data.percentage
            };
        },
        
        calculatePercentage: function(){
            data.allItems.exp.forEach(function(curr){
                curr.calcPercentage(data.totals.inc);
            });    
              
        },
        
        
       getPercentage:function(){
           var allPercent=data.allItems.exp.map(function(curr){
               
               return curr.getPercentage();
               
           });       
           return allPercent;
       },
        
        
         testing:function(){
        console.log(data);
    }
       
        
        
    };
    
    


})();
var uiControl = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputvalue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer:'.income__list',
        expensesContainer:'.expenses__list',
        lableExp:'.budget__expenses--value',
        lableInc:'.budget__income--value',
        lablePercent:'.budget__expenses--percentage',
        lableBudget:'.budget__value',
        container:'.container',
        expensePercentage:'.item__percentage',
        dateLable:'.budget__title--month'
    };

    var formatNumber= function(num , type){
            
            num=Math.abs(num);
            num= num.toFixed(2);
            
            var numSplit= num.split('.');
            var int=numSplit[0];
            
          if(int.length>3){
               // len=int.length;
    // int= int.substr(3,int.length-3)+' ,'+int.substr(int.length-6,3)+' ,'+int.substr(int.length-9,3); 
                int=int.substr(0,int.length-3)+' ,' +int.substr(int.length-3,3);
          }
                
         
        
        
            var dec=(numSplit[1]);
         //   type==='exp'? sign='-': sign='+';
           // return type + ' '+ int + dec;
             return (type=== 'exp' ? '-':'+')+' '+int +' . ' + dec;
            
            
        };
    
     var nodeListForEach= function(list, callback){
                for(var i=0;i<list.length;i++){
                    callback(list[i], i);
                }
            };
           
        


    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value:parseFloat (document.querySelector(DOMstrings.inputvalue).value)
            };
        },
        
        addListItem:function(obj, type){
            // HTML string with PlaceHolder Text 
            
            if(type==='inc'){
                var element=DOMstrings.incomeContainer;
                var html= '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete">  <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            
            }
            
            else if(type==='exp'){
                element=DOMstrings.expensesContainer;
                html=' <div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">%percentage%</div><div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //Replace placeHoleder text 
            newHTML=html.replace('%id%',obj.id);
            newHTML=newHTML.replace('%description%',obj.description);
            newHTML=newHTML.replace('%value%',formatNumber(obj.value, type));
           
            
            // Insert HTML into DOM
            document.querySelector(element).insertAdjacentHTML('afterbegin', newHTML);
            
        },
        
        deleteListItem: function(selectorId){
            var el=document.getElementById(selectorId);
            el.parentNode.removeChild(el);
            
            
            
            
        },
        
        
        
        
        clearaFields: function(){
            var field= document.querySelectorAll(DOMstrings.inputDescription+','+DOMstrings.inputvalue);
            
            var fieldArr = Array.prototype.slice.call(field);
            
            fieldArr.forEach(function(current,id, array ){
                current.value="";
                
            });
            
            fieldArr[0].focus();
        
        },
        
        displayBudget:function(obj){
            
            if (obj.budget>=0? type= 'inc': type='exp');
            
            document.querySelector(DOMstrings.lableExp).textContent=(formatNumber(obj.totExpenses, 'exp'));
            document.querySelector(DOMstrings.lableInc).textContent=formatNumber(obj.totIncome, 'inc');   
            document.querySelector(DOMstrings.lableBudget).textContent=formatNumber(obj.budget, type);
            
           if(obj.percentage!==-1&& obj.budget>=0)
               document.querySelector(DOMstrings.lablePercent).textContent=Math.round(obj.percentage)+'%';
            else
                document.querySelector(DOMstrings.lablePercent).textContent="-*-";
            
            
    },
        displayPercentage: function(percentages){
            
            var fields=document.querySelectorAll(DOMstrings.expensePercentage);
            
            nodeListForEach(fields, function(current, index){
                
                if(percentages[index]>0){
                   current.textContent=percentages[index]+'%';
                   }
                else
                    current.textContent='-*-';
                
            });
        },
        
        
        displayMonth: function(){
            
            var now= new Date();
            var year =now.getFullYear();
            
            
            var months=[];
            months=['January','Feburary','March','April','May','June','July','August','September','October','November','December'];
            var month=now.getMonth();
            
            document.querySelector(DOMstrings.dateLable).textContent= months[month+1]+' , '+year;
        },
        
        
        changedContainer: function(){
            var fields= document.querySelectorAll(DOMstrings.inputType+','+
                                                          DOMstrings.inputDescription+','+
                                                          DOMstrings.inputvalue);
              nodeListForEach(fields, function(current){
                current.classList.toggle('red-focus');
            });
           
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
            
            },
            
        getDOMstrings: function () {
            return DOMstrings;
        }
        

        

    };




})();
var control = (function (bgtCtrl, uiCtrl) {

    var setUpEventListener = function(){
        
         var DOM = uiCtrl.getDOMstrings();    
             document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13)
            ctrlAddItem();
           
    });
        
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        document.querySelector(DOM.inputType).addEventListener('change',uiCtrl.changedContainer);

    
                   
    };
    var updateBudget=function(){
        
         //1. Calculate the budget
        bgtCtrl.calculateBudget();
        
        // 2. Return the Budget
        var dataBudget=bgtCtrl.getBudget();
        
        //3. Display the budget
        uiCtrl.displayBudget(dataBudget);
        
        //bgtCtrl.calculatePercentage();
      
        

    };
    
     var updatePercentage= function(totalIncome){
        
        //1 To calculate Percentage
         bgtCtrl.calculatePercentage();
         
        //2 readpercentage from Budget Controller
         var percentages=bgtCtrl.getPercentage();
         
        // 3 to update in control
        uiCtrl.displayPercentage(percentages);
        
    };
    
   

    var ctrlAddItem = function () {
        //1. Get the Field input Data
        var input = uiControl.getInput();
        
        //Proceed further only when the boxes are NOT empty
        
        if(input.description!==""&& !isNaN(input.value) && input.value>0)
        
        {
        //2. Add the Item to budget control
            var dataAddInBudget= bgtCtrl.addItem(input.type,input.description,input.value);
            console.log(dataAddInBudget);
        
        //3. Add the Item to UI
            uiCtrl.addListItem(dataAddInBudget,input.type);
        
        //3.1 Clear input Fields
            uiCtrl.clearaFields();
    
       //5. Calculate and update budget
            updateBudget();
            
            //6 update Percentage
            updatePercentage();
            
        }
        else
            alert(' ADD DESCRIPTION AND VALUE ');
    }
    
    

    var ctrlDeleteItem= function(event){
        var itemId= event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if(itemId){
            
            var splitId= itemId.split('-');
            var type=splitId[0];
            var ID=parseFloat(splitId[1]);
            //console.log(event);
            
            //delete item from data structure
            bgtCtrl.deleteItem(type, ID);
            //console.log('hi  delete item from ds');
            
            //delete item from UI
            uiCtrl.deleteListItem(itemId);
            
            
            //update and show the new budget
            updateBudget();
            //update Percentage
            updatePercentage();            
        }
        
    }
    
   
    
    return{
            init: function(){
                console.log('PROGRAM HAS STARTED');
                uiControl.displayMonth();
                
                uiCtrl.displayBudget({
                budget: 0.00,
                totIncome: 0.00,
                totExpenses:0.00,
                percentage:-1
                    
                });
                setUpEventListener();
         }
        
        };
    

})(budgetControl, uiControl);
control.init();
