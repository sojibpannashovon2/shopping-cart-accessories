
function getInputFieldById(inputId, isIncrease) {

    const inputFieldPreviousElement = document.getElementById(inputId);

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















function getTextElementByIdTotalPrice(elementId) {

    const elmentSubTotalPrice = document.getElementById(elementId);

    const elmentSubTotalPriceString = elmentSubTotalPrice.innerText;

    const elementSubPrice = parseInt(elmentSubTotalPriceString);
    return elementSubPrice;
}

function setSubTaxTotalPriceByElement(elementId, value) {

    const presentNowSubTotalPrice = document.getElementById(elementId);

    presentNowSubTotalPrice.innerText = value;
}

function getTheSubTotalelementById() {

    const currentPhoneTotal12 = getTextElementByIdTotalPrice("phone-price");

    const currentCaseTotal12 = getTextElementByIdTotalPrice("case-price");

    const totalSubTotalPrice = currentPhoneTotal12 + currentCaseTotal12;

    // Calculate The Sub Total 

    setSubTaxTotalPriceByElement('sub-total', totalSubTotalPrice);

    // Calculate The Tax total

    const totalTaxtString = (totalSubTotalPrice * 0.1).toFixed(2);

    const totalTaxt = parseFloat(totalTaxtString);
    setSubTaxTotalPriceByElement('tax-total', totalTaxt);

    // Calculate The Final Amount

    const finalAmount = totalSubTotalPrice + totalTaxt;

    setSubTaxTotalPriceByElement('total-of-total', finalAmount);

}