let num1 = prompt('Enter a number')
let num2 = prompt('Enter other number')

num1 = parseFloat(num1)
num2 = parseFloat(num2)

const result = num1 + num2
window.alert(`The result is: ${result}`) // Forma 1
window.alert(`The result is: ${num1 + num2}`) // Forma 2
