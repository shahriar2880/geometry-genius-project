function calculateTriangleArea(){
    console.log('inside function');
    const trianglrBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = trianglrBaseInput.value;
    const base = parseFloat(triangleBaseText);
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    
    const area = 0.5*base*height ;
    console.log('Area of triangle is:', area);

    //display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}