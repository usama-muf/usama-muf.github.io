'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner:'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Mohammed Usama',
  movements: [5000, 1000, 10000, -5050, -990],
  interestRate: .1,
  pin: 5555
};

const accounts = [account1, account2, account3, account4,account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePassword = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
const displayWelcome = function (owner) {
  labelWelcome.textContent=`Welcome ${(currentAccount.owner).split(' ')[0]}`;
  inputLoginUsername.value= inputLoginPin.value= '';
  inputLoginPin.blur();
}

const displayMovements =function(account, sort=false) {
  containerMovements.innerHTML='';

  const move = sort ? account.movements.slice().sort((a,b) =>a-b) : account.movements;
  move.forEach(function (mov, i) {

    const type = mov>0?'deposit':'withdrawal'
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__date">24/01/2037</div>
      <div class="movements__value">${(mov).toFixed(2)} ₹</div>
    </div>`;
      containerMovements.insertAdjacentHTML('afterbegin',html);
  });
}

const calcDisplayDate = function () {
  const date = new Date();
  const day=date.getDate();
  const month= date.getMonth();
  const year = date.getFullYear();

  console.log(String((month).padStart(2,'0')));
}
calcDisplayDate();
const calcDisplayBalance = function(acc) {
  //let total=0;
  acc.balance = acc.movements.reduce((pval, currval) =>pval+currval,0);
  labelBalance.textContent=`${(acc.balance).toFixed(2)} ₹`;

}

const calcSummary = function (account) {

account.inSummary =  account.movements.filter(mov =>mov>0).reduce((pval, currval) => pval+currval,0);
labelSumIn.textContent=`${(account.inSummary).toFixed(2)} ₹`;

account.outSummary =  account.movements.filter(mov =>mov<0).reduce((pval, currval) => pval+currval,0);
labelSumOut.textContent=`${(Math.abs(account.outSummary)).toFixed(2)} ₹`;

account.interest = account.movements.filter(mov => mov>0)
.map(mov=>mov*account.interestRate/100).reduce((pval,currval)=> pval+currval,0);
labelSumInterest.textContent= `${(account.interest).toFixed(2)} 
₹`;

}

const reloadPage = function(currentAccount) {
  
  displayWelcome(currentAccount);
  
  displayMovements(currentAccount);

  calcDisplayBalance(currentAccount);

  calcSummary(currentAccount);
}

const sortButton = function (currentAccount) {

}

//////////////////////////////////////////
//addding username in account objects
for (const acc of accounts) {
  acc.username=
  acc.owner
  .toLowerCase()
  .split(' ')
  .map(function(t) { return t[0] })
  .join('');

}
/////////////////////

//login button working
let currentAccount;

//LOGIN BUTTON
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount=accounts.find(acc => acc.username===inputLoginUsername.value);
  if(currentAccount?.pin===Number(inputLoginPin.value)) {
    containerApp.style.opacity=100;
  }
  reloadPage(currentAccount);
});


//TRANSFER BUTTON
btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  //const accountTransferTo = inputTransferTo.value; 
  const amount = Number(inputTransferAmount.value);

  let accountTransfer=accounts.find(acc =>acc.username ===inputTransferTo.value);
  if (accountTransfer && accountTransfer.username !== currentAccount.username && 
    amount<currentAccount.balance && amount>0)  {
      currentAccount.movements.push(-amount);
      accountTransfer.movements.push(amount);
      reloadPage(currentAccount);
      inputTransferAmount.value = inputTransferTo.value='';
    }
});


//CLOSE ACCOUNT
btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if(Number(inputClosePassword.value)===currentAccount.pin &&
     inputCloseUsername.value=== currentAccount.username ) {

    const index =accounts.findIndex(account => account.username
       === currentAccount.username);
    
    accounts.splice(index,1);
    containerApp.style.opacity=0;

      }
    labelWelcome.textContent ='Log in to get started';

});

//Sort Button

let sorted = false;
btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted= !sorted;



})







//////////////////
