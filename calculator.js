let formPaymentGenerate = document.querySelector('#calc-form'); //dont need to check for blanks/chrome does
let loanAmount = document.querySelector('input[name="loanAmountName"]');
console.log("this is a bigTest " + loanAmount)
let loanYears = document.querySelector('input[name="loanYearsName"]');
console.log("this is a bigTest2 " + loanYears)
let loanRate = document.querySelector('input[name="loanRateName"]');;
console.log("this is a bigTest3 " + loanRate)

let paymentInDiv = document.querySelector('#monthly-payment');



formPaymentGenerate.addEventListener('submit', function(evt) {
 evt.preventDefault();
 console.log("This is test after event " + loanAmount.value, loanYears.value, loanRate.value)
  let newPayment = generatePayment(loanAmount.value, loanYears.value, loanRate.value);
  alert('Your Payment Is Generating...');
  console.log(newPayment)
  paymentInDiv.innerHTML = ("$"+newPayment.toFixed(2))
  console.log("this is a test of adding paymentCalc to innerHTML of div " + paymentInDiv.innerHTML)
  
});

function generatePayment(loanAmount, loanYears, loanRate) {
  

let amount = loanAmount;
console.log("this is loan amount in function " + amount)
let rate = loanRate
  console.log("this is rate amount in function " + rate)
let years = loanYears;
  console.log("this is loan years in function " + years)
 

 // calc Monthly Payment
  let principal = parseFloat(amount);
  console.log("this is test of string to number for principal " + principal)

  let interest = parseFloat(rate) / 100 / 12;
  console.log("this is a test of string to number for interest " + interest);

  let payments = parseFloat(years) * 12;
  console.log("this is a test of sting to number for payments " + payments)


  let x = Math.pow(1 + interest, payments); //Math.pow computes powers
  console.log("this is 'x' or using powers method " + x)

  let paymentCalc = (principal*x*interest)/(x-1);
  console.log("this is monthly " + paymentCalc)

  console.log(paymentCalc)


  return paymentCalc
}
  
//above is my solution
//below is class solution

//window.addEventListener('DOMContentLoaded', function() {
  //const form = document.getElementById("calc-form");
  //if (form) {
    //setupIntialValues();
    //form.addEventListener("submit", function(e) {
      //e.preventDefault();
      //update();
    //});
  //}
//});

//function getCurrentUIValues() {
  //return {
    //amount: +(document.getElementById("loan-amount").value),
    //years: +(document.getElementById("loan-years").value),
    //rate: +(document.getElementById("loan-rate").value),
 // }
///}

//function setupIntialValues() {
  ///const values  = { amount: 10000, years: 10, rate: 4.5 };
  //const amountUI = document.getElementById("loan-amount");
 // amountUI.value = values.amount;
 // const yearsUI = document.getElementById("loan-years");
 // yearsUI.value = values.years;
 // const rateUI = document.getElementById("loan-rate");
//  rateUI.value = values.rate;
//  update();
//}

//function update() {
 // const currentUIValues = getCurrentUIValues();
 // updateMonthly(calculateMonthlyPayment(currentUIValues));
//}

//function calculateMonthlyPayment(values) {
  //const monthlyRate = (values.rate / 100) / 12;
  //const n = Math.floor(values.years * 12);
  //return (
   // (monthlyRate * values.amount) /
   // (1 - Math.pow((1 + monthlyRate), -n))
 // ).toFixed(2);
//}

//function updateMonthly(monthly) {
 // const monthlyUI = document.getElementById("monthly-payment");
 // monthlyUI.innerText = "$" + monthly;
//}