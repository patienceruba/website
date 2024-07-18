const screen = document.querySelector('#screen');

function addnum(input) {
    screen.value += input;
}

function clearScreen() {
   screen.value = screen.value.slice(0, -1);
}

function clearAll() {
    screen.value = '';
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Error';
    }
}
/*document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons
    const buttons = document.querySelectorAll('button');
    
    // Loop through each button and add event listeners
    buttons.forEach(function(button) {
        // If button has class 'num', add event listener for adding numbers
        if (button.classList.contains('num')) {
            button.addEventListener('click', function() {
                addnum(button.textContent);
            });
        }
        // If button has class 'clear', add event listener for clearing screen
        if (button.classList.contains('clear')) {
            button.addEventListener('click', clearScreen);
        }
        // If button has class 'clear-all', add event listener for clearing all
        if (button.classList.contains('clear-all')) {
            button.addEventListener('click', clearAll);
        }
        // If button has class 'equals', add event listener for calculating
        if (button.classList.contains('equals')) {
            button.addEventListener('click', calculate);
        }
        // If button has id 'ops', change background color
        if (button.id === 'ops') {
            button.style.backgroundColor = 'red';
        }
    });
});*/