var input1 = prompt("Enter the first number");
var operator = prompt("Enter the operation you would like to perform: \n \
                       \t+\tfor addition\n \
                       \t-\tfor subtraction \n \
                       \t*\tfor multiplication \n \
                       \t/\tfor division");
var input2 = prompt("Enter the second number");

operand1 = parseFloat(input1, 10);
operand2 = parseFloat(input2, 10);

console.log(operand1);
console.log(operand2);

switch (operator) {
  case '+':
    document.write('<p>' + operand1 + ' ' + operator + ' ' + operand2 + ' = ' + (operand1 + operand2));
    break;
  case '-':
    document.write('<p>' + operand1 + ' ' + operator + ' ' + operand2 + ' = ' + (operand1 - operand2));
    break;
  case '*':
    document.write('<p>' + operand1 + ' ' + operator + ' ' + operand2 + ' = ' + (operand1 * operand2));
    break;
  case '/':
    document.write('<p>' + operand1 + ' ' + operator + ' ' + operand2 + ' = ' + (operand1 / operand2));
    break;
  default:
    document.write('<p>I can\'t do that Dave</p>');
}