
function getElementPrice(newCaseAmount) {

    const newCaseTotalPrice = newCaseAmount * 59;

    const caseInputField = document.getElementById('case-price');

    caseInputField.innerText = newCaseTotalPrice;
}

// set add event lisener to btn-case

document.getElementById('btn-case-plus').addEventListener('click', function () {

    const newCaseAmount = getInputFieldById('case-input-field', true);

    getElementPrice(newCaseAmount);
    getTheSubTotalelementById();


})

// set add event lisener to btn-case

document.getElementById('btn-case-minus').addEventListener('click', function () {

    const newCaseAmount = getInputFieldById('case-input-field', false);

    getElementPrice(newCaseAmount);
    getTheSubTotalelementById();
})