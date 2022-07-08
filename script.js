const dob = document.querySelector('#dob');
const luckyNumber = document.querySelector('#lucky-number');
const buttonCheck = document.querySelector('#btn-check');

buttonCheck.addEventListener('click', function checkYourBirthdate(){
    console.log(dob.value);
    console.log(luckyNumber.value);
})
