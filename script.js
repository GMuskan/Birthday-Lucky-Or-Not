const dateOfBirth = document.querySelector('#dob');
const luckyNumber = document.querySelector('#lucky-number');
const buttonCheck = document.querySelector('#btn-check');
const outputBox = document.querySelector('#output-box');
const noteBox = document.querySelector('#note-box');

function checkYourBirthdate(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    const luckyNumberValue = luckyNumber.value;
    if(dob && sum && luckyNumberValue){
        if(sum % luckyNumberValue === 0){
            outputBox.innerText = "Your Birthday is Lucky🥳";
            noteBox.innerText = "This is just for fun. We are not storing your data anywhere.";
        }else{
            outputBox.innerText = "Your Birthday is not that Lucky😞";
            noteBox.innerText = "This is just for fun. We are not storing your data anywhere.";     
        }   
    }else{
        outputBox.innerText = "Please enter both the fields!!";
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum=0;
    for(let i=0; i<dob.length;i++){
        sum+=Number(dob.charAt(i));
    }
    return sum;
}
buttonCheck.addEventListener('click', checkYourBirthdate);

