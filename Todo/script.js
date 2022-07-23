const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');


form.addEventListener('submit', (e) => {
   e.preventDefault();
   const text = input.value;

   if(text){
    const todoel = document.createElement('li');
    todoel.innerText=text;

    todoel.addEventListener('click', () => {
        todoel.classList.toggle('completed');
    });
    todos.appendChild(todoel);
    input.value = '';
   }
   console.log(input.value);
});