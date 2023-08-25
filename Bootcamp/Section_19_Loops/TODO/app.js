alert("WELCOME TO THE TODO APP")
const todo = []
const deleted = []
let input = prompt("What would you like to do?")
// input = ''
while (input !== "quit" && input !== 'q'){
    if (input === "new"){
        let newguy = prompt("What would you like to add?")
        todo.push(newguy)
        alert(`${newguy} added`)
        // alert(todo)
    }
    else if (input === "list") {
        // alert(todo)
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[i]}`)
        }
        console.log("**************")
        alert("Your list is in the console")
    }
    else if (input === "delete"){
        let index = prompt("What is the index of the item you want to delete?")
        if (parseInt(index)){
            while (parseInt(index) >= todo.length){
                index = prompt("Too high bud, enter a valid index.")
                if (!parseInt(index)){
                    index = prompt("Dude just enter a valid number.")
                }
            }
            deleted.push(todo.splice(index,1))
            alert(`Cool, deleted ${deleted[deleted.length-1]}`)
        }
    } else if (input === "list deleted"){
        alert(deleted)
    } else if (input === "quit"){
        break;
    }
    else {
        alert("Not a valid action - you can add, list, delete, list deleted or quit")
    }
    input = prompt("What would you like to do now?")
}
alert("You quit. See you later. Bis spater.")