
export class Todo {

    //Los todos en LocalStorge son objetos y no instancias de la class Todo = No puedo utilizar metodos-funciones de su clase
    //fromJson -> me va a permitir recuperar los metodos-funciones que tiene mi Class despues da guardarlo en LocalStorage
    static fromJson({ id, tarea, completado, creado }) {
        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor(tarea) {

        this.tarea = tarea;

        this.id = new Date().getTime(); //123478990
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase() {
        console.log(`${this.tarea} - ${this.id}`);
    }
}