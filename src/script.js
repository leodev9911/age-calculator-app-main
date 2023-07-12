const inputs = document.querySelectorAll("input[type='number']");
const calcButton = document.querySelector('button');
const form = document.querySelector('form');
const years = document.querySelector('.year');
const months = document.querySelector('.months');
const days = document.querySelector('.days');
const invalidForm = document.querySelector('.invalid-form');
const errorEmpty = document.querySelectorAll('.error-empty');
const invalidData = document.querySelectorAll('.invalid');
const labels = document.querySelectorAll('.input-label')


let actualDate = new Date();
let actualDay = actualDate.getDate();
let actualMonth = actualDate.getMonth() + 1;
let actualYear = actualDate.getFullYear();


function handleDateCalc(event) {
    event.preventDefault();
    let userDate = new Date(inputs[2].value, inputs[1].value, inputs[0].value);
    let userYear = userDate.getFullYear();
    let userMonth = userDate.getMonth();
    let userDay = userDate.getDate();
    let yearsBetween = actualYear - userYear;
    let monthBetween = actualMonth - userMonth;
    let daysBetween = actualDay - userDay;

    let isValid = userDay > 0 && userDay <= new Date(userYear, userMonth, 0).getDate();
    let isValidDay = inputs[0].value >= 0 && inputs[0].value <= 31;


    if (inputs[0].value === '' && inputs[1].value === '' && inputs[2].value === '') {
        errorEmpty.forEach(message => {
            message.classList.remove('hide');
        }) 
        labels.forEach(label => {
            label.classList.add('error');
        })
        return;
    } else if (inputs[0].value === '' && inputs[1].value === '') {
        errorEmpty[0].classList.remove('hide');
        labels[0].classList.add('error');
        errorEmpty[1].classList.remove('hide');
        labels[1].classList.add('error');
        return;
    } else if (inputs[0].value === '' && inputs[2].value === '') {
        errorEmpty[0].classList.remove('hide');
        labels[0].classList.add('error');
        errorEmpty[2].classList.remove('hide');
        labels[2].classList.add('error');
        return;
    } else if (inputs[1].value === '' && inputs[2].value === '') {
        errorEmpty[1].classList.remove('hide');
        labels[1].classList.add('error');
        errorEmpty[2].classList.remove('hide');
        labels[2].classList.add('error');
        return;
    } else if (inputs[0].value === '') {
        errorEmpty[0].classList.remove('hide');
        labels[0].classList.add('error');
        return;
    } else if (inputs[1].value === '') {
        errorEmpty[1].classList.remove('hide');
        labels[1].classList.add('error');
        return;
    } else if (inputs[2].value === '') {
        errorEmpty[2].classList.remove('hide');
        labels[2].classList.add('error');
        return;
    } 
  
    if (!isValid) {
        inputs.forEach(input => {
            input.classList.add('error');
        })
        labels.forEach(label => {
            label.classList.add('error');
        })
        invalidForm.classList.remove('hide');
        return;
        
    } else {
        inputs.forEach(input => {
            input.classList.remove('error');
        })
        labels.forEach(label => {
            label.classList.remove('error');
        })
        invalidForm.classList.remove('add');
    }

    if (!isValidDay) {
        inputs[0].classList.add('error');
        invalidData[0].classList.remove('hide');
        labels[0].classList.add('error');
        return;
    } else {
        inputs[0].classList.remove('error');
        invalidData[0].classList.add('hide');
        labels[0].classList.remove('error');
    }

    if (monthBetween < 0) {
        yearsBetween--;
        monthBetween += 12;
    }
    if (daysBetween < 0) {
        monthBetween--;
        const lastMonthLastDay = new Date(actualYear, actualMonth, 0).getDate();
        daysBetween += lastMonthLastDay;
    } 

    years.innerText = yearsBetween;
    months.innerText = monthBetween;
    days.innerText = daysBetween;
} 

calcButton.addEventListener('click', handleDateCalc);

inputs[0].addEventListener('input', () => {  
    inputs.forEach(input => {
        input.classList.remove('error');
    })
    labels.forEach(label => {
        label.classList.remove('error');
    })
    invalidForm.classList.add('hide');
    errorEmpty.forEach(message => {
        message.classList.add('hide');
    }) 
})

inputs[1].addEventListener('input', () => {
    let isValid = inputs[1].value >= 0 && inputs[1].value <= 12;

    if (!isValid) {
        inputs[1].classList.add('error');
        invalidData[1].classList.remove('hide');
        labels[1].classList.add('error');
    } else {
        inputs[1].classList.remove('error');
        invalidData[1].classList.add('hide');
        labels[1].classList.remove('error');
    }
})

inputs[2].addEventListener('input', () => {
    let isValid = inputs[2].value >= 0 && inputs[2].value <= 2023;

    if (!isValid) {
        inputs[2].classList.add('error');
        invalidData[2].classList.remove('hide');
        labels[2].classList.add('error');
    } else {
        inputs[2].classList.remove('error');
        invalidData[2].classList.add('hide');
        labels[2].classList.remove('error');
    }
})
