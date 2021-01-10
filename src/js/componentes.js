import { Todo } from "../classes";
import { todoList } from "../index";

//Referencias en el HTML
const divTodoList = document.querySelector('.todo-list'); //ul
const txtImput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

const cuentaPendientes = document.querySelector('.todo-count');
const footer = document.querySelector('.footer');

export const crearTodoHtml = (todo) => {

    //-todo.completado es boolean (true-false)
    const htmlTodo = `<li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}"> 
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div'); //creo un div para contener todo
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild); //solo retorno el li

    return div.firstElementChild; //solo retorno el li

}

export const crearCuentaTodos = (todos) => {
    const htmlContarPendientes = `<span class="todo-count"><strong>${todos.length}</strong> pendiente(s)</span>`;

    const div2 = document.createElement('div');
    div2.innerHTML = htmlContarPendientes;

    footer.append(div2.firstElementChild);
    return div2.firstElementChild;
}

//Eventos:

txtImput.addEventListener('keyup', (event) => {

    //console.log(event); //event devuelve info de cada tecla presionada en consola -> target.value

    if (event.keyCode === 13 && event.target.value.length > 0) { //al presionar enter = 13
        //console.log(event.target.value);
        const nuevoTodo = new Todo(event.target.value);
        todoList.nuevoTodo(nuevoTodo);

        //console.log(todoList);

        crearTodoHtml(nuevoTodo);
        event.target.value = ''; //borrar el input al presionar enter
    }
});

divTodoList.addEventListener('click', (event) => {
    //console.log('click');
    //console.log(event.target.localName);

    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento = event.target.parentElement.parentElement; //referencia a li
    const todoId = todoElemento.getAttribute('data-id');

    if (nombreElemento.includes('input')) { //se hizo click en el check

        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed'); //List items should get the class `editing` when editing and `completed` when marked as completed

    } else if (nombreElemento.includes('button')) { //hay que borrar el todo

        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }

    // console.log(nombreElemento);
    // console.log(todoElemento);
    // console.log(todoId);
    // console.log(todoList);
});

btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();

    //eliminar por index de abajo hacia arriba -> for inverso
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {

        const elemento = divTodoList.children[i];
        //console.log(elemento);
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(elemento);
        }
    }
});

ulFiltros.addEventListener('click', (event) => {
    //console.log(event.target.text);
    const filtro = event.target.text;
    if (!filtro) { return; };

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for (let elemento of divTodoList.children) {
        //console.log(elemento);
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch (filtro) {
            case 'Pendientes':
                if (completado) {
                    elemento.classList.add('hidden')
                }
                break;
            case 'Completados':
                if (!completado) {
                    elemento.classList.add('hidden')
                }
                break;
        }
    }
});