const {view} = require('./view')
const {printTable} = require('console-table-printer')
const {update} = require('./update')
const {model} = require('./model')
const {inputForm} = require('./view') 
const prompt = require('prompt-sync')({sigint: true})


//impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // Input - Output
        console.clear()
        console.log(title)
        printTable(table)
        // Form (Ask user input)
        // const {input} = await listForm(model)
        const input = await inputForm(model)
        const updatedModel = update(input, model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
        console.clear()
    }
}
module.exports = {
    app
}
