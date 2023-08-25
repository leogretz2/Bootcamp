function sing(){
    console.log("DO")
    console.log("RE")
    console.log("MI")
}

sing()
sing()
sing()

function greet(firstName, lastName){
    console.log(`Hi, ${firstName} ${lastName[0]}.`)
}

function repeat(str, num){
    let printer = ''
    for (let i = 0; i < num; i++){
        printer += str   
    }
    console.log(printer)
}

function add(x,y){
    return x+y
}

function NULL(arr){
    if (arr){
        return 'NOT NULL'
    } else {
        console.log(arr == false)
        return null
    }
}