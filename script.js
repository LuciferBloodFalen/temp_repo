let display = document.getElementById('display');
let buttons = document.querySelectorAll('.button');

let calculator = new Calculator();

buttons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.handleInput(button.id);
	});
});

class Calculator {
	constructor() {
		this.displayValue = '';
		this.firstOperand = '';
		this.operator = '';
	}

	handleInput(input) {
		switch (input) {
			case 'clear':
				this.displayValue = '';
				this.firstOperand = '';
				this.operator = '';
				break;
			case 'backspace':
				this.displayValue = this.displayValue.slice(0, -1);
				break;
			case 'divide':
			case 'multiply':
			case 'subtract':
			case 'add':
				this.operator = input;
				this.firstOperand = this.displayValue;
				this.displayValue = '';
				break;
			case 'equals':
				this.calculate();
				break;
			default:
				this.displayValue += input;
		}
		display.value = this.displayValue;
	}

	calculate() {
		let result = 0;
		switch (this.operator) {
			case 'divide':
				result = parseFloat(this.firstOperand) / parseFloat(this.displayValue);
				break;
			case 'multiply':
				result = parseFloat(this.firstOperand) * parseFloat(this.displayValue);
				break;
			case 'subtract':
				result = parseFloat(this.firstOperand) - parseFloat(this.displayValue);
				break;
			case 'add':
				result = parseFloat(this.firstOperand) + parseFloat(this.displayValue);
				break;
		}
		this.displayValue = result.toString();
	}
}