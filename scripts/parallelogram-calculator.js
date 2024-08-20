function calculateParallelogramArea(){
    // console.log('Parallelogram')
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const Base = parseFloat(parallelogramBaseText);
    const parallelogramheightInput = document.getElementById('parallelogram-height');
    const parallelogramheightText = parallelogramheightInput.value;
    const height = parseFloat(parallelogramheightText)
    
    const area = Base*height ;
    console.log('Area of Parallelogram is:', area);

    //display triangle area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}