const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const {model} = require ('./model')
const prompt = require('prompt-sync')({sigint: true})
const {printTable} = require('./model')

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
    const {BillAmount} = model
    return [
        {'Left Value': model.LeftValue, 'Left Unit': model.LeftUnit, 'Right Value': model.RightValue, 'Right Unit': model.RightUnit}
    ]
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

function inputForm(model){
    //const {input} = model
    return inquirer.prompt([
        { name: '?', type: 'input', message: 'Left Temperature is source?', default: model.LeftTempSource },
        { name: '?', type: 'input', message: 'Temperature value to convert?', default: model.TempValue },
        { name: '?', type: 'input', message: 'From?', default: model.From },
        { name: '?', type: 'input', message: 'To?', default: model.To }
    ])
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
    inputForm
    //getTitle
}

