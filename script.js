

//generating a random rumber between 1 and 3
let choice = Math.floor(Math.random() * 3) + 1;
console.log(choice);

function getComputerChoice() {
    if(choice === 1) {
        console.log("Rock")
    } else if(choice === 2) {
        console.log("Paper")
    } else if(choice === 3) {
        console.log("Scissors")
    }
}

getComputerChoice();