/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/



/************ FAILED ATTEMPT ***********/
// function humanReadable (seconds) {
//     if (seconds < 60){
//         console.log(`00:00:${seconds}`);
//     }

//     else if (seconds >= 60 && seconds < 3600){
//         const minute = Math.floor(seconds / 60)
//         const sec = seconds % 60;
//         console.log(`00:${minute}:${sec}`);
//     }

//     else if (seconds >= 3600){
//         const hour = Math.floor(seconds / 3600);
//         const min = Math.floor((seconds%3600)/ 60);
//         const sec = seconds % 60;
//         console.log(`${hour}:${min}:${sec}`);
//     }
// }

// humanReadable(359999)


function humanReadable(seconds) {
    // Convert to hours, minutes, seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600)/60);
    const second = seconds % 60;

    // Use padStart to make sure if secs, hrs, or mins is 1 digit it adds a zero infront
    let hrs  = String(hours).padStart(2, '0');
    let mins = String(minutes).padStart(2, "0");
    let secs = String(second).padStart(2, "0");

    return `${hrs}:${mins}:${secs}`
}

