// viewing aspect for the app

const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {LeftValue, LeftUnit, RightValue, RightUnit} = model
    return [
        {
            'Left Value': LeftValue,
            'Left Unit': LeftUnit,
            'Right Value': RightValue,
            'Right Unit': RightUnit
        }
    ]
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

function listForm1(model){
    const {input} = model
    const message = 'Left Temperature is source? (yes/no)'
    const choices = ['yes', 'no']
    return inquirer.prompt({
        name: 'first_input',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    })
}

function listForm2(model){
    const {input} = model
    const message = 'Temperature value to convert? (enter a number)'
    return inquirer.prompt({
        name: 'second_input',
        type: 'input',
        message: message,
        defualt: input,
    })
}

function listForm3(model){
    const {input} = model
    const message = 'From?'
    const choices = ['Celcius', 'Farenheit', 'Kelvin']
    return inquirer.prompt({
        name: 'third_input',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    })
}

function listForm4(model){
    const {input} = model
    const message = 'To?'
    const choices = ['Celcius', 'Farenheit', 'Kelvin']
    return inquirer.prompt({
        name: 'fourth_input',
        type: 'list',
        message: message,
        default: input,
        choices: choices
    })
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    //inputForm,
    listForm1,
    listForm2,
    listForm3,
    listForm4
    //getTitle
}

