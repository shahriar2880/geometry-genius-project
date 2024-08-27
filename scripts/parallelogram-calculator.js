function calculateParallelogramArea(){
    const base = getInputvalueById('parallelogram-base')
    // console.log(base);

    const height = getInputvalueById('parallelogram-height')
    // console.log(height);
    const area = base * height ;
    //console.log("Area of Parallelogram is", area)

    setInnerTextById('parallelogram-area', area) ;

}

function getInputvalueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);

    return inputValue;
}


function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}