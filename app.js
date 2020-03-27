
const myButton = document.getElementById('btn');

function change() {

    console.log('name change');
    const myName = document.getElementById('name');
    const myInput = document.getElementById('myInput');

    myName.textContent = myInput.value;

    // myName.style.color = "red";
    // myName.textContent = 'Surprise!';
}

myButton.addEventListener('click', change);