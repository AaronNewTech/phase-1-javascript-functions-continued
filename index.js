// code your solution here

function saturdayFun(text) {

    if (text === undefined){
        text = 'roller-skate'
    }
    return `This Saturday, I want to ${text}!`
}

function mondayWork(text) {

    if (text === undefined) {
        text = 'go to the office'
    }
    return `This Monday, I will ${text}.`
}

function wrapAdjective(dec) {
    console.log(dec)
    

    const innerFunction = function(string) {
            console.log(string)

        if (string === undefined) {
            string = "special"
        }
        console.log(string)
        return `You are ${dec}${string}${dec}!`

    }
    return innerFunction


}
