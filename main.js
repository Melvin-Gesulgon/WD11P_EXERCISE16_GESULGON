// variables - mass
let kgbtn = document.getElementById('kg');
let lbsbtn = document.getElementById('pound');
let ozbtn = document.getElementById('oz')
let stonebtn = document.getElementById('stone')
let tonnebtn = document.getElementById('tonne')
let tonbtn = document.getElementById('ton')

// variables - time
let decadebtn = document.getElementById('decade');
let yearbtn = document.getElementById('year');
let monthbtn = document.getElementById('month')
let weekbtn = document.getElementById('weeks')
let daybtn = document.getElementById('days')
let hourbtn = document.getElementById('hours')

                // Mass

// function expression for lbs to Kg conversion
kgbtn.addEventListener('click', function(){
    // 
    let input = document.getElementById('input').value;
    // gets 'input' value by recording input from user
    document.getElementById('output').value = input / 2.205 + " Kg";
    // 'output' value is computed using the value from 'input' and substituted to the respective formula of function
})

// function expression for Kg to lbs conversion
lbsbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 2.205 + " lbs";
})

// function expression for lbs to oz conversion
ozbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 16 + " oz";
})

// function expression for tonne to stone conversion
stonebtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 157.5 + " stone(s)";
})

// function expression for Kg to tonne conversion
tonnebtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 0.001 + " tonne(s)";
})

// function expression for tonne to US ton conversion
tonbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 1.102 + " ton(s)";
})

                    // TIME

// function expression for century to decades conversion
decadebtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 10 + " decades(s)";
})

// function expression for decade to year conversion
yearbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 10 + " year(s)";
})

// function expression for year to month conversion
monthbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 12 + " month(s)";
})
// function expression for months to weeks conversion
weekbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 4 + " weeks(s)";
})

// function expression for months to week conversion
daybtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 4.345 + " day(s)";
})

// function expression for days to hours ton conversion
hourbtn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    document.getElementById('output').value = input * 24 + "hours(s)";
})