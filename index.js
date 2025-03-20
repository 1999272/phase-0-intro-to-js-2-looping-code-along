// Function to return an array of thank-you messages
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

// Function to log numbers from the provided number down to 0
function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}


