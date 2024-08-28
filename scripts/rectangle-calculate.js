function calculateRectangleArea(){
    const width = getInputvalueById('rectangle-width')
    const length = getInputvalueById('rectangle-length')
    const area = width*length ;
    setInnerTextById('rectangle-area', area) ;
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