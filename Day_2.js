// var details = prompt("What is your detail?");
// const FullDetails = details.split(" ");
// var address = prompt("Enter your address");
// var Firstname = FullDetails[0];
// var lastname = FullDetails[1];
// var Address = FullDetails[2];
// console.log("FirstName :  " + Firstname + " lastname :  " + lastname + " Address : " + address);

// let a = "1234"
// let b = parcetInt(a)
// let c = parcetFloat(a)
// console.log(typeof a)
// console.log(typeof b)

// let a = 1234
// console.log(typeof a) ----> nunber
// let b = a.tostring()
// console.log(typeof b)

// write a Javascript program to ask an input from the user and capitalize all the inputs from the user and display in HTML inside html tag1

// let a = prompt("Enter any input")
// a = a.toUpperCase()
// console.log(a)
// document.querySelector("#header").innerHTML = a

// let randomstring = "                                                                   There is a whitespace in this string."
// let lol = randomstring.trim();
// console.log(lol)
// document.querySelector("#header").innerHTML = lol

function count(sentence, countInput){
    let sentenceArray = sentence.split(" ");
    for (i = 0; i<sentence.length; i++){
        if (sentenceArray[i] = countInput){
            count = count + 1;
        }
    }
    return count;
    
}

let a = count("My name is Subham my surname if subham the","the");
console.log(a);

// // selector{
//     property:value;
//     property:value;
// }