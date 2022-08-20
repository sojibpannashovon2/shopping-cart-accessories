


function getInputFieldById(isIncrease) {

    const inputFieldPreviousElement = document.getElementById('case-input-field');

    const inputFieldPreviousAmountString = inputFieldPreviousElement.value;

    const inputFieldPreviousAmount = parseInt(inputFieldPreviousAmountString);


    let newInputNumber;

    if (isIncrease === true) {
        newInputNumber = inputFieldPreviousAmount + 1;
    }

    else {
        newInputNumber = inputFieldPreviousAmount - 1;
    }

    inputFieldPreviousElement.value = newInputNumber;

    return newInputNumber;
}

function getElementPrice(newCaseAmount) {

    const newCaseTotalPrice = newCaseAmount * 59;

    const caseInputField = document.getElementById('case-price');

    caseInputField.innerText = newCaseTotalPrice;
}

// set add event lisener to btn-case

document.getElementById('btn-case-plus').addEventListener('click', function () {

    const newCaseAmount = getInputFieldById(true);

    getElementPrice(newCaseAmount);


})

// set add event lisener to btn-case

document.getElementById('btn-case-minus').addEventListener('click', function () {

    const newCaseAmount = getInputFieldById(false);

    getElementPrice(newCaseAmount);
})