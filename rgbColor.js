/*
    The rgb function is incomplete. Complete it so that passing in RGB decimal 
    values will result in a hexadecimal representation being returned. 
    Valid decimal values for RGB are 0 - 255. Any values that fall out of that 
    range must be rounded to the closest valid value.

    Note: Your answer should always be 6 characters long, 
    the shorthand with 3 will not work here.

    Examples (input --> output):
    255, 255, 255 --> "FFFFFF"
    255, 255, 300 --> "FFFFFF"
    0, 0, 0       --> "000000"
    148, 0, 211   --> "9400D3"
*/

function rgb(r, g, b) {

    function convertValues(num){
        // Round to nearest integer
        const roundValue = Math.round(num);
        // Change number to 0 if < 0 and 255 if > 255
        const max = Math.max(0, Math.min(255, roundValue));
        return max;
    }
    
    // test the r,g,b values by passing them as arguments to convertValues
    let R = convertValues(r);
    let G = convertValues(g);
    let B = convertValues(b);

    function hexDecimal(values){

        // Change to hexaDecimals using toString() and convert to uppercase if letters are included
        // Note HexaDecimals includes letters 
        const hex = values.toString(16).toUpperCase();

        // check if hex returns only a single character, then you add a zero(0) infront of it
        const HexValue = hex.length === 1 ? "0" + hex : hex ;
        return HexValue;
    }

    // Pass the values of R, G and B as arguments to convert to Hexadecimals
    const red = hexDecimal(R);
    const green = hexDecimal(G);
    const blue = hexDecimal(B);

    return `${red}${green}${blue}`
}

// console.log(rgb(148, 0, 211))
console.log(rgb(255, 255, 300))


