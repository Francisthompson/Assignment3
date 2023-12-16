/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

/********* create variables *********/

// Cost per day
const costPerDay = 50;

// Number of days selected
let numberOfDays = 0;

// Elements on the screen
const daySelectors = document.querySelectorAll('.day-selector');
const clearDaysButton = document.querySelector('.clear-days');
const halfDayButton = document.querySelector('.half-day');
const fullDayButton = document.querySelector('.full-day');
const calculatedCostElement = document.getElementById('calculated-cost');

// Additional variables for functionality
let clickedDays = [];
let dailyRate = costPerDay;

/********* colour change days of week *********/

// Event listener for day selectors
daySelectors.forEach(selector => {
    selector.addEventListener('click', () => {
        const selectedDay = selector.value;

        // Check if the day is already clicked
        if (!clickedDays.includes(selectedDay)) {
            // Add the "clicked" class to the selected day
            selector.classList.add('clicked');

            // Add the selected day to the clickedDays array
            clickedDays.push(selectedDay);

            // Recalculate the total cost
            calculateCost();
        }
    });
});

/********* clear days *********/

// Event listener for clear days button
clearDaysButton.addEventListener('click', () => {
    // Remove the "clicked" class from all day selectors
    daySelectors.forEach(selector => {
        selector.classList.remove('clicked');
    });

    // Reset clickedDays array
    clickedDays = [];

    // Reset the number of days to 0
    numberOfDays = 0;

    // Recalculate the total cost
    calculateCost();
});

/********* change rate *********/

// Event listener for half-day button
halfDayButton.addEventListener('click', () => {
    // Set the daily rate to $20 for half day
    dailyRate = 20;

    // Add the "clicked" class to "half" and remove it from "full"
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');

    // Recalculate the total cost
    calculateCost();
});

// Event listener for full-day button
fullDayButton.addEventListener('click', () => {
    // Set the daily rate back to $35 for full day
    dailyRate = costPerDay;

    // Add the "clicked" class to "full" and remove it from "half"
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');

    // Recalculate the total cost
    calculateCost();
});

/********* calculate *********/

// Calculate and update the total cost
function calculateCost() {
    const totalCost = numberOfDays * dailyRate;
    calculatedCostElement.innerHTML = `$${totalCost}`;
}


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


