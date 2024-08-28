function calculateTriangleArea(){
    const base = getInputvalueById('triangle-base');
    const height = getInputvalueById('triangle-height');
    const area = 0.5*base*height ;
    setInnerTextById('triangle-area', area);
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