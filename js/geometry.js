document.getElementById('triangle-btn').addEventListener('click', function(){
    const inputFieldTriangle1 = inputFieldValueById('triangle-felid-1');
    const inputFieldTriangle2 = inputFieldValueById('triangle-felid-2');
    const totalTriangleValue = 0.5 * inputFieldTriangle1 * inputFieldTriangle2;
    const convertToFixed = totalTriangleValue.toFixed(2)
   
    // set
    setInputValue('triangle',convertToFixed)
});

document.getElementById('Rectangle-btn').addEventListener('click', function(){
    const inputFieldRectangle1 = inputFieldValueById('Rectangle-field-1');
    const inputFieldRectangle2 = inputFieldValueById('Rectangle-field-2');
    const totalRectangleValue = (inputFieldRectangle1 * inputFieldRectangle2).toFixed(2);
   
    // set
    setInputValue('Rectangle',totalRectangleValue);
})

document.getElementById('Parallelogram-btn').addEventListener('click', function(){
    const inputFieldParallelogram1 = inputFieldValueById('Parallelogram-field-1');
    const inputFieldParallelogram2 = inputFieldValueById('Parallelogram-field-2');
    const totalInputValue = (inputFieldParallelogram1 * inputFieldParallelogram2).toFixed(2);

    // set
    setInputValue('Parallelogram', totalInputValue)
});

document.getElementById('Rhombus-btn').addEventListener('click', function(){
    const inputFieldRhombus1 = inputFieldValueById('Rhombus-field-1');
    const inputFieldRhombus2 = inputFieldValueById('Rhombus-field-2');
    const totalInputValue = (inputFieldRhombus1 * inputFieldRhombus2 * 0.5).toFixed(2);

    // set
    setInputValue('Rhombus', totalInputValue)
});

document.getElementById('Pentagon-btn').addEventListener('click', function(){
    const inputFieldPentagon1 = inputFieldValueById('Pentagon-field-1');
    const inputFieldPentagon2 = inputFieldValueById('Pentagon-field-2');
    const totalInputValue = (0.5 * inputFieldPentagon1 * inputFieldPentagon2);

    // set
    setInputValue('Pentagon', totalInputValue)
});

document.getElementById('Ellipse-btn').addEventListener('click', function(){
    const inputFieldEllipse1 = inputFieldValueById('Ellipse-field-1');
    const inputFieldEllipse2 = inputFieldValueById('Ellipse-field-2');
    const totalInputValue = (3.1416 * inputFieldEllipse1 * inputFieldEllipse2).toFixed(2);

    // set
    setInputValue('Ellipse', totalInputValue)
});