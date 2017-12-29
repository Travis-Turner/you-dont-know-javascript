// I originally made this so that the function would cut off so that
// you couldn't overspend your bank balance, but apparently
// we were not supposed to do that.  This version allows overdrafting.


console.log('-----CHALLENGES-------');

const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const MENTAL_THRESHOLD = 200;

var bankBalance = prompt('Please enter your bank balance');
var accessories = 0;
var phones = 0;


function calculateTax (amount){
    return amount + (amount * TAX_RATE);
}
function printResult (amount){
    amount = String(amount);
    amount = parseFloat(amount).toFixed(2);
    console.log('You purchased ' + phones + ' phones and ' + accessories + ' accessories.');
    console.log('Your total is $' + amount + ' after tax.');
}
function challenge1 (){
    var total = 0;
    while (total < bankBalance){
        total = total + PHONE_PRICE;
        if (total < MENTAL_THRESHOLD){
            total = total + ACCESSORY_PRICE;
        }
    }

    total = calculateTax(total);
    printResult(total);

    if (total > bankBalance){
        console.log('You cannot afford this purchase.');
    }
}

challenge1();