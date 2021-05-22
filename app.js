const {printTable} = require('console-table-printer')
const {update} = require('./update')
const {listForm1, listForm2, listForm3, listForm4} = require('./view') 
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
        const first_input = await listForm1(model)
        const second_input = await listForm2(model)
        const third_input = await listForm3(model)
        const fourth_input = await listForm4(model)
        const updatedModel = update(first_input['first_input'], second_input['second_input'], third_input['third_input'], fourth_input['fourth_input'], model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}
