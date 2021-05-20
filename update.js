function update(input, model){
    const {BillAmount} = input
    const {TipPercentage} = input
    const Tip = BillAmount * (TipPercentage / 100)
    Total = parseInt(BillAmount) + parseInt(Tip)
    
    return {
        ...model,
        BillAmount: BillAmount,
        TipPercentage: TipPercentage,
        total: Total,
        tipValue: Tip,
    }
}

function update(input, model){
    const {LeftTempSource} = input
    const {TempValue} = input
    const {From} = input
    const {To} = input
    const {LeftValue} = 0
    const {LeftUnit} = 0
    const {RightValue} = 0
    const {RightUnit} = 0
}

module.exports = {
    update
}