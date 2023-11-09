



let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']; 
console.log(arr.length); 




console.log(arr.pop()); 


// arr.push = add to the end of the array and return the new length of the array
console.log(arr.push('j')); 



console.log("Remove index 5 og index 7");
console.log(arr.splice(7,1));
console.log(arr.length);
console.log(arr.splice(5,1));
console.log(arr.length);


console.log(`Fjernet index 5 og 7: ${arr}`); 
console.assert(arr.length === 8); 



// --------------- Oppgave 1.1 ---------------
console.log('dette er index 5: ' + arr[5]); 


// --------------- Oppgave 2 ---------------

arr_obj = [
    {key: 'value1',
        key2: 'value2',
        key3: 'value3'}, 

    {lastKey: 'lastValue1',
        lastKey2: 'lastValue2',
        lastKey3: 'lastValue3',
        hobby: ['fotball', 'basketball', 'volleyball']
    }
]; 

console.log('Printing object to console');
console.log(arr_obj[0]);
console.log(arr_obj[1]);

// --------------- Oppgave 3 ---------------




let valid=['student', 'voksen', 'barn']; 
let randomChoice = valid[Math.floor(Math.random() * valid.length)]; 

let priser = {student: 100, voksen: 150, barn: 50}; 

console.log(randomChoice)

if ( randomChoice == 'student' ) {
    console.log(`Hei, du er student og må betale ${priser.student}kr`);
} else if ( randomChoice == 'voksen' ) {
    console.log(`Voksen bilett koster: ${priser.voksen}kr`);
} else if ( randomChoice == 'barn' ) {
    console.log(`Du er et barn og må betale: ${priser.barn}kr`);
} else {
    console.log('Du er ikke et menneske'); 
}


// --------------- Oppgave 4 ---------------
// Factorial function 
function factorial(int) {
    if ( int >= 1 ) {
        return int*factorial(int-1); 
    } else {
        return 1; 
    }
}
    
n = 5
console.log(`Factorial of ${n} = ${factorial(n)}`);












