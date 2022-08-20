

function getElementPhonePrice2(newPhoneAmount) {

    const newPhoneTotalPrice = newPhoneAmount * 1219;

    const elementPriceField25 = document.getElementById('phone-price');

    elementPriceField25.innerText = newPhoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function () {

    const newPhoneAmount = getInputFieldById('phone-input-field', true);

    getElementPhonePrice2(newPhoneAmount);

    getTheSubTotalelementById();
})

document.getElementById("btn-phone-minus").addEventListener('click', function () {

    const newPhoneAmount = getInputFieldById('phone-input-field', false);

    getElementPhonePrice2(newPhoneAmount);

    getTheSubTotalelementById()
})






//////// Extra part


// function getInputFieldById2(isIncrease) {

//     const inputFieldAmount = document.getElementById('phone-input-field');

//     //get the input field value

//     const inputFieldPreviousAmountString = inputFieldAmount.value;

//     const inputFieldPreviousAmount = parseInt(inputFieldPreviousAmountString);

//     let phoneInputField;

//     if (isIncrease === true) {
//         // Increase the value of input field by 1
//         phoneInputField = inputFieldPreviousAmount + 1;
//     }
//     else {
//         // Decrease the value of input field by 1
//         phoneInputField = inputFieldPreviousAmount - 1;
//     }

//     //set the input field value
//     inputFieldAmount.value = phoneInputField;

//     return phoneInputField;

// }



