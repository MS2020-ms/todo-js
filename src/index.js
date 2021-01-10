
import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

//console.log(todoList.todos);

//Recargar y mostar todos mis todos desde LocalStorage en HTML:
todoList.todos.forEach(todo => crearTodoHtml(todo));
//? EQUIVALE: todoList.todos.forEach(crearTodoHtml); //SOLO si recibe UN argumento-parametro

// const newTodo = new Todo('Aprender Javascript');
//- todoList.nuevoTodo(newTodo);
//? todoList.todos[0].imprimirClase(); //Ahora puedo utilizar metodos de la Class Todo

//? console.log('todos:', todoList.todos); //Array de Objetos

// const tarea = new Todo('Aprender Javascript');
// console.log(tarea);
//- todoList.nuevoTodo(tarea);
// tarea.completado = true;
// console.log(todoList);
// crearTodoHtml(tarea);

//LocalStorage:

// localStorage.setItem('mi-key', '12345');
// sessionStorage.setItem('mi-key', '12345');
// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);
