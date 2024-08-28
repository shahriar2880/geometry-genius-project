function calculateParallelogramArea(){
    const base = getInputvalueById('parallelogram-base')
    const height = getInputvalueById('parallelogram-height')
    const area = base * height ;
    setInnerTextById('parallelogram-area', area) ;
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