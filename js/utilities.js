
const inputFieldValueById = (inputId) => {
    const inputFieldElement = document.getElementById(inputId);
    const inputFieldString = inputFieldElement.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputFieldElement.value = '';
    return inputFieldValue;
}

const setInputValue = (inputSetValue, currentValue) => {
    const setElementValue = document.getElementById(inputSetValue);
          setElementValue.innerText = currentValue;  
}