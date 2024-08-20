function calculateRectangleArea(){
    //console.log('inside function');
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText)
    
    const area = width*length ;
    console.log('Area of Rectangle is:', area);

    //display triangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}