/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const days = Array.from(document.getElementById("days").children);
const full = document.getElementById("full");
const half = document.getElementById("half");
const clear = document.getElementById("clear-button");
const cost_display = document.getElementById("calculated-cost");
let daily_rate = 35;
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
for (var day of days) {
    day.addEventListener("click", function() {
        this.classList.toggle("clicked");
        calculate();
    });
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clear.addEventListener("click", function() {
    for (day of days) {
        day.classList.remove("clicked");
    }
    calculate();
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half.addEventListener("click", function() {
    daily_rate = 20;
    if (!(half.classList.contains("clicked"))) {
        half.classList.add("clicked");
    }
    full.classList.remove("clicked");
    calculate();
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full.addEventListener("click", function() {
    daily_rate = 35;
    if (!(full.classList.contains("clicked"))) {
        full.classList.add("clicked");
    }
    half.classList.remove("clicked");
    calculate();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    let day_count = 0;
    for (let day of days) {
        if (day.classList.contains("clicked")) {
            day_count += 1;
        }
    }
    let cost = day_count * daily_rate;
    cost_display.innerText = cost;
}