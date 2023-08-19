function convertLength() {
    const lengthInput = document.getElementById('length').value;
    const selectedUnit = document.getElementById('unit').value;
    let convertedLength;
  
    switch (selectedUnit) {
      case 'centimeters':
        convertedLength = lengthInput * 100;
        break;
      case 'kilometers':
        convertedLength = lengthInput / 1000;
        break;
      case 'millimeters':
        convertedLength = lengthInput * 1000;
        break;
      default:
        convertedLength = lengthInput;
    }
  
    document.getElementById('result').textContent = `Converted Length: ${convertedLength} ${selectedUnit}`;
  }