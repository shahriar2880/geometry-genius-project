function calculatePentagonArea(){
    const base = getInputvalueById('pentagon-perimeter')
    const height = getInputvalueById('pentagon-base')
    const area = base * height ;
    setInnerTextById('pentagon-area', area) ;
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