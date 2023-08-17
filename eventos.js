const div = document.querySelector('div');
const button = document.querySelector('button');

div.addEventListener('click', () => {
    alert("Hola! Soy el div");
});
button.addEventListener('click', () => {
    alert("Hola!");
});