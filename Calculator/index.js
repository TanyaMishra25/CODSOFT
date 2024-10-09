function Solve(num) {
    var inp = document.getElementById('res');
    inp.value += num;
}

function Result() {
    try {
        var inp = document.getElementById('res');
        var num1 = inp.value;
        var num2 = eval(num1.replace('x', '*'));
        document.getElementById('res').value = num2;
    } catch {
        document.getElementById('res').value = 'Error';
    }
}

function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
}

function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
        Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});