document.addEventListener('DOMContentLoaded', function () {
    let inputString = '';
    const display = document.querySelector('input');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonText = e.target.innerText;

            if (isValidInput(buttonText)) {
                if (buttonText === '=') {
                    evaluateExpression();
                } else if (buttonText === 'C') {
                    clearInput();
                } else {
                    inputString += buttonText;
                }

                display.value = inputString;
            }
        });
    });

    function isValidInput(text) {
        const validInputs = /^[0-9.+\-*/=C]$/; // Regular expression for valid characters
        return validInputs.test(text);
    }

    function evaluateExpression() {
        try {
            inputString = eval(inputString).toString();
        } catch (error) {
            inputString = 'Error';
        }
    }

    function clearInput() {
        inputString = '';
    }
});
