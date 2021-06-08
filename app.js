// It always has the year after the current one
const nextYear = new Date().getFullYear() + 1;

// Limit date that changes constantly
const newYear = new Date(nextYear, 0, 1);

// Set next year's text in meta title and body title
document.querySelector('title').innerText += ` ${nextYear}`;
document.getElementById('year').textContent = nextYear;

// Set change of language
const secContent = document.querySelector('.sec-content');
const changeLangBtn = document.querySelector('.external-span');
const slider = changeLangBtn.querySelector('.internal-span');

changeLangBtn.addEventListener('click', function () {
    // Set the slider button
    slider.classList.toggle('internal-slide');
   
   if (slider.classList.contains('internal-slide')) {
       location.href = 'index.html';
   } else {
       location.href = 'english.html';
   }
});


// Select the spaces where numbers are displayed
const countdownNums = document.querySelectorAll('.number');

// New year in miliseconds
const msNewYear = newYear.getTime();

function getRemainingTime() {
    const currentDate = new Date();
    const d = msNewYear - currentDate;
    
    // Constants
    let oneDay = 24 * 60 * 60 * 1000;
    let oneHour = 60 * 60 * 1000;
    let oneMinute = 60000;

    // Calculates the values
    let days = Math.floor(d / oneDay);
    let hours = Math.floor((d % oneDay) / oneHour);
    let minutes = Math.floor((d % oneHour) / oneMinute);
    let seconds = Math.floor((d % oneMinute) / 1000);
    
    // Change the default format to add Zero
    function addZero(item) {
        if (item < 10) {
            return `0${item}`;
        }
        
        return item;
    }
    
    // Values of time array
    const values = [days, hours, minutes, seconds];
    
    // Assign the values of the array to their corresponding spaces
    countdownNums.forEach((num, index) => {
        num.textContent = addZero(values[index]);
    });
    
    if (d <= 0) {
        clearInterval(interval);
        while(secContent.firstChild) {
            secContent.removeChild(secContent.firstChild);
        }
        secContent.style.display = 'grid';
        const image = document.querySelector('#image');
        
        if (slider.classList.contains('internal-slide')) {
            secContent.innerHTML = '<h1 class="fest">¡Feliz año nuevo!</h1>';
            image.alt = 'Fuegos artificiales';
        } else {
            secContent.innerHTML = '<h1 class="fest">Happy New Year!</h1>';
            image.alt = 'Fireworks';
        }
        
        image.src = 'https://images.unsplash.com/photo-1530196606945-81ab3df90d91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80';
    }
}


const interval = setInterval(getRemainingTime, 1000);
getRemainingTime();