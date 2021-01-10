import { Todo } from "./index";
import { countTodo } from "../js/componentes";

export class TodoList {

    constructor() {
        //this.todos = []; //ya lo inicializo en cargarLocalStorage()
        this.cargarLocalStorage();
        this.countTodo();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
        this.countTodo();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
        this.countTodo();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {

            //console.log(id, todo.id); //id=string <> todo.id=number

            if (todo.id == id) { //comparar (==) y no por tipo/clase (===)
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                this.countTodo();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    //LocalStorage:

    guardarLocalStorage() {
        //Mi Array de todos (this.todos) convertir en JSON Perfecto o JSON string (JSON.stringify())
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        this.todos = (localStorage.getItem('todo'))
            ? JSON.parse(localStorage.getItem('todo'))
            : [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj));
        //? EQUIVALE: this.todos = this.todos.map(Todo.fromJson); //SOLO si recibe UN argumento-parametro

        // if (localStorage.getItem('todo')) {
        //     //Devolver this.todos a un Array de Objetos
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log('cargarLocal:', this.todos);
        //     console.log(typeof this.todos); //string
        // } else {
        //     this.todos = [];
        // }
    }

    countTodo() {
        let pendientes = 0;
        let countBox = countTodo.firstElementChild;
        for (let todo of this.todos) {
            (!todo.completado === true) ? pendientes++ : null;
        }
        countBox.innerHTML = pendientes;
    }

}