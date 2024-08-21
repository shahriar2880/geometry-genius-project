function calculateRhombusArea(){
    // console.log('Rhombus')
    const rhombusBaseInput = document.getElementById('rhombus-distance1');
    const rhombusBaseText = rhombusBaseInput.value;
    const Base = parseFloat(rhombusBaseText);
    const rhombusheightInput = document.getElementById('rhombus-distance2');
    const rhombusheightText = rhombusheightInput.value;
    const height = parseFloat(rhombusheightText)
    
    const area = Base*height ;
    console.log('Area of rhombus is:', area);

    //display triangle area
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}