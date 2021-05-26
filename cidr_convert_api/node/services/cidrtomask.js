export const cidrToMaskFunction = (value) => {
  //console.log(value);
  var mask = [], i, n; // Mask Array
  for(i=0; i<4; i++) {
    n = Math.min(value, 8); // Returns the Minimum value between 8 and the value
    mask.push(256 - Math.pow(2, 8-n)); //Gives part of the mask depending on the exponent
    value -= n; // the value is changed
  }
  return mask.join('.'); //Returns the mask array with a dot separation between each element
}
