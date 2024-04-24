/*Usually when you buy something, you're asked whether your credit card number,
 phone number or answer to your most secret question is still correct. 
 However, since someone could look over your shoulder, you don't want that shown 
 on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the
 last four characters into '#'.

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""
*/

// return masked string
function maskify(cc) {
    if (cc.length <= 4){
        return cc
    }
    cc = cc.split("");
    const lastFour = cc.splice(cc.length-4);
    for (let i=0; i<cc.length; i++){
        cc[i] = "#"
    }
    const masked = cc.join("") + lastFour.join("");

    console.log(masked)
     
}
  
maskify("4556364607935616")

// USING MAP instead of for loop

function maskedMap(cc) {
    if (cc.length <= 4){
        return cc;
    }
    let values = cc.split("");
    let lastFour = values.splice(values.length-4);
    const maskedValues = values.map(item => "#");
    const masked = maskedValues.join("") + lastFour.join("");
    console.log(masked)
}

maskedMap("4556364607935616")