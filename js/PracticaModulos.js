//Ejemplos para guardar y aceder informacion en el local storage
// localStorage.setItem('sandia', "🍉");
// localStorage.setItem('platano', "🍌");

// // console.log(localStorage.getItem('platano'))
// if (localStorage.getItem('platano')){
//     const platano = localStorage.getItem('platano')
//     console.log(platano)
// }
// // localStorage.removeItem('platano')
// // localStorage.clear();


//Trabajando el localStorage con Array

// const frutas = [
//     {
//         nombre: "🍌",
//         color: "amarillo",
//     },
//     {
//         nombre: "🍒",
//         color: "rojo",
//     },
//     {
//         nombre: "🍏",
//         color: "verde",
//     },
// ];
// localStorage.setItem("frutas", JSON.stringify(frutas));
// const frutasDesdeLocal = JSON.parse(localStorage.getItem('frutas'))
// console.log(frutasDesdeLocal)

const alert = document.querySelector('.alert')
const formulario = document.querySelector('#formulario');
const pintarTodo = document.querySelector('#pintarTodo');
const templateTodo = document.querySelector('#templateTodo').content

let todos = [];



const agregarTodo = todo => {
    const objetoTodo = {
        nombre: todo,
        id: `${Date.now()}`
    }
    todos.push(objetoTodo)
}

const pintarTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
    pintarTodo.textContent = "";
    const fragment = document.createDocumentFragment();

    todos.forEach((item) => {
        const clone = templateTodo.cloneNode(true);

        clone.querySelector('.lead').textContent = item.nombre;
        clone.querySelector(".btn-danger").dataset.id = item.id;

        fragment.appendChild(clone);
    });
    pintarTodo.appendChild(fragment);
};

document.addEventListener('click', e => {
    // console.log(e.target.dataset.id)
    //  console.log(e.target.matches('.btn-danger'))
     
     if(e.target.matches('.btn-danger')){
        // console.log('diste click al boton eliminar')
        todos = todos.filter(item => item.id !== e.target.dataset.id)
        pintarTodos()
     }
})

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    alert.classList.add('d-none')

    const data = new FormData(formulario)
    const [todo] = [...data.values()];

    // console.log(todo)
    if (!todo.trim()){
        console.log('te equivocaste mandaste vacio')
        alert.classList.remove('d-none')
        return
    }

    agregarTodo(todo);
    pintarTodos();
});

document.addEventListener('DOMContentLoaded', (e) => {
    
    if(localStorage.getItem('todos')){
        todos = JSON.parse(localStorage.getItem('todos'))
        pintarTodos();
    }
});