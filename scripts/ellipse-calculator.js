function calculateEllipseArea(){
    const distance1 = getInputvalueById('ellipse-distance1')
    const distance2 = getInputvalueById('ellipse-distance2')
    const area = 3.1416 * distance1 * distance2 ;
    setInnerTextById('ellipse-area', area) ;
}

function getInputvalueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}