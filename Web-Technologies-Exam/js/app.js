window.addEventListener("DOMContentLoaded", () => {

    function getOperands() {
        const op1 = parseFloat(document.getElementById("op1").value);
        const op2 = parseFloat(document.getElementById("op2").value);
        return { op1, op2 };
    }

    function displayResult(result) {
        const resultElement = document.getElementById("res");
        resultElement.textContent = "Result: " + result;
    }

    function displayError(message) {
        const resultElement = document.getElementById("res");
        resultElement.textContent = "Error: " + message;
    }

    function loadHelp(fileName) {
        $ajaxUtils.sendGetRequest(fileName, (response) => {
            const helpContent = document.getElementById("help-content");
            helpContent.innerHTML = `
                <h4>${response.name}</h4>
                <p>${response.description}</p>
                <img src="images/${response.image_name}" alt="${response.name}">
            `;
        });
    }


    document.getElementById("add-button").addEventListener("click", () => {
        const { op1, op2 } = getOperands();
        if (!isNaN(op1) && !isNaN(op2)) {
            displayResult(op1 + op2);
        } else {
            displayError("Invalid input");
        }
    });

    document.getElementById("sub-button").addEventListener("click", () => {
        const { op1, op2 } = getOperands();
        if (!isNaN(op1) && !isNaN(op2)) {
            displayResult(op1 - op2);
        } else {
            displayError("Invalid input");
        }
    });

    document.getElementById("mul-button").addEventListener("click", () => {
        const { op1, op2 } = getOperands();
        if (!isNaN(op1) && !isNaN(op2)) {
            displayResult(op1 * op2);
        } else {
            displayError("Invalid input");
        }
    });

    document.getElementById("div-button").addEventListener("click", () => {
        const { op1, op2 } = getOperands();
        if (!isNaN(op1) && !isNaN(op2)) {
            if (op2 !== 0) {
                displayResult(op1 / op2);
            } else {
                displayError("Division by zero");
            }
        } else {
            displayError("Invalid input");
        }
    });

    document.getElementById("log-button").addEventListener("click", () => {
        const { op1 } = getOperands();
        if (!isNaN(op1)) {
            if (op1 > 0) {
                displayResult(Math.log(op1));
                loadHelp("data/log.json");
            } else {
                displayError("Logarithm of a non-positive number");
            }
        } else {
            displayError("Invalid input");
        }
    });

    document.getElementById("sin-button").addEventListener("click", () => {
        const { op1 } = getOperands();
        if (!isNaN(op1)) {
            const radians = (op1 * Math.PI) / 180;
            displayResult(Math.sin(radians));
            loadHelp("data/sin.json");
        } else {
            displayError("Invalid input");
        }
    });

    document.getElementById("tan-button").addEventListener("click", () => {
        const { op1 } = getOperands();
        if (!isNaN(op1)) {
            const radians = (op1 * Math.PI) / 180;
            displayResult(Math.tan(radians));
            loadHelp("data/tan.json");
        } else {
            displayError("Invalid input");
        }
    });
});
