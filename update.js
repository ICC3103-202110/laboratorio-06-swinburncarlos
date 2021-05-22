// updating function of the app

function celcius_farenheit(input){
    return (parseFloat(input) * (9/5)) + 32
}

function celcius_kelvin(input){
    return parseFloat(input) + 273.15
}

function farenheit_celcius(input){
    return (parseFloat(input) - 32) * (5/9)
}

function farenheit_kelvin(input){
    return ((parseFloat(input) - 32) * (5/9)) + 273.15 
}

function kelvin_celcius(input){
    return parseFloat(input) - 273.15
}

function kelvin_farenheit(input){
    return ((parseFloat(input) - 273.15) * (9/5)) + 32
}

function update(first_input, second_input, third_input, fourth_input, model){

    if (first_input === 'yes' && third_input === 'Celcius'){
        if (fourth_input === 'Celcius')
            output = second_input
        if (fourth_input === 'Farenheit')
            output = celcius_farenheit(second_input)
        if (fourth_input === 'Kelvin')
            output = celcius_kelvin(second_input)
        return{
            LeftValue: second_input,
            LeftUnit: third_input,
            RightValue: output,
            RightUnit: fourth_input
        }
    }

    if (first_input === 'yes' && third_input === 'Farenheit'){
        if (fourth_input === 'Celcius')
            output = farenheit_celcius(second_input)
        if (fourth_input === 'Farenheit')
            output = second_input
        if (fourth_input === 'Kelvin')
            output = farenheit_kelvin(second_input)
        return{
            LeftValue: second_input,
            LeftUnit: third_input,
            RightValue: output,
            RightUnit: fourth_input
        }
    }

    if (first_input === 'yes' && third_input === 'Kelvin'){
        if (fourth_input === 'Celcius')
            output = kelvin_celcius(second_input)
        if (fourth_input === 'Farenheit')
            output = kelvin_farenheit(second_input)
        if (fourth_input === 'Kelvin')
            output = second_input
        return{
            LeftValue: second_input,
            LeftUnit: third_input,
            RightValue: output,
            RightUnit: fourth_input
        }
    }

    if (first_input === 'no' && third_input === 'Celcius'){
        if (fourth_input === 'Celcius')
            output = second_input
        if (fourth_input === 'Farenheit')
            output = celcius_farenheit(second_input)
        if (fourth_input === 'Kelvin')
            output = celcius_kelvin(second_input)
        return{
            LeftValue: output,
            LeftUnit: fourth_input,
            RightValue: second_input,
            RightUnit: third_input
        }
    }

    if (first_input === 'no' && third_input === 'Farenheit'){
        if (fourth_input === 'Celcius')
            output = farenheit_celcius(second_input)
        if (fourth_input === 'Farenheit')
            output = second_input
        if (fourth_input === 'Kelvin')
            output = farenheit_kelvin(second_input)
        return{
            LeftValue: output,
            LeftUnit: fourth_input,
            RightValue: second_input,
            RightUnit: third_input
        }
    }

    if (first_input === 'no' && third_input === 'Kelvin'){
        if (fourth_input === 'Celcius')
            output = kelvin_celcius(second_input)
        if (fourth_input === 'Farenheit')
            output = kelvin_farenheit(second_input)
        if (fourth_input === 'Kelvin')
            output = second_input
        return{
            LeftValue: output,
            LeftUnit: fourth_input,
            RightValue: second_input,
            RightUnit: third_input
        }
    }
}


module.exports = {
    update
}
