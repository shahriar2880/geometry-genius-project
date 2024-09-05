function calculateRhombusArea(){
    const distance1 = getInputvalueById('rhombus-distance1')
    const distance2 = getInputvalueById('rhombus-distance2')
    const area = 0.5 * distance1 * distance2 ;
    setInnerTextById('rhombus-area', area) ;
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