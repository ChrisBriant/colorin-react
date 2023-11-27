function rgbToHex(rgb) {
  // Separate the RGB values
  const rgbArray = rgb.match(/\d+/g).map(Number);

  // Convert each RGB component to hexadecimal and concatenate
  const hexValue = rgbArray.reduce((acc, val) => {
    const hex = val.toString(16).padStart(2, '0');
    return acc + hex;
  }, '#');

  return hexValue.toUpperCase(); // Convert to uppercase for consistency
}

export {rgbToHex};