(()=>{"use strict";var t={606:(t,e,n)=>{function r(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,{L:()=>L});var a=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}return o(t,null,[{key:"fromJson",value:function(e){var n=e.id,r=e.tarea,o=e.completado,a=e.creado,i=new t(r);return i.id=n,i.completado=o,i.creado=a,i}}]),o(t,[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}]),t}();function i(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){i=!0,t},f:function t(){try{a||null==n.return||n.return()}finally{if(i)throw t}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){for(var n,r=0;r<e.length;r++)(n=e[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}var u=function(){function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.cargarLocalStorage()}return function(t,e,n){e&&c(t.prototype,e),n&&c(t,n)}(t,[{key:"nuevoTodo",value:function(t){this.todos.push(t),this.guardarLocalStorage()}},{key:"eliminarTodo",value:function(t){this.todos=this.todos.filter((function(e){return e.id!=t})),this.guardarLocalStorage()}},{key:"marcarCompletado",value:function(t){var e,n=i(this.todos);try{for(n.s();!(e=n.n()).done;){var r=e.value;if(r.id==t){r.completado=!r.completado,this.guardarLocalStorage();break}}}catch(t){n.e(t)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(t){return!t.completado})),this.guardarLocalStorage()}},{key:"guardarLocalStorage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map((function(t){return a.fromJson(t)}))}}]),t}();function s(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){i=!0,t},f:function t(){try{a||null==n.return||n.return()}finally{if(i)throw t}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var f=document.querySelector(".todo-list"),m=document.querySelector(".new-todo"),p=document.querySelector(".clear-completed"),v=document.querySelector(".filters"),y=document.querySelectorAll(".filtro"),h=(document.querySelector(".todo-count"),document.querySelector(".footer")),g=function(t){var e='<li class="'.concat(t.completado?"completed":"",'" data-id="').concat(t.id,'"> \n    <div class="view">\n        <input class="toggle" type="checkbox" ').concat(t.completado?"checked":"",">\n        <label>").concat(t.tarea,'</label>\n        <button class="destroy"></button>\n    </div>\n    <input class="edit" value="Create a TodoMVC template">\n    </li>'),n=document.createElement("div");return n.innerHTML=e,f.append(n.firstElementChild),n.firstElementChild};m.addEventListener("keyup",(function(t){if(13===t.keyCode&&0<t.target.value.length){var e=new a(t.target.value);L.nuevoTodo(e),g(e),t.target.value=""}})),f.addEventListener("click",(function(t){var e=t.target.localName,n=t.target.parentElement.parentElement,r=n.getAttribute("data-id");e.includes("input")?(L.marcarCompletado(r),n.classList.toggle("completed")):e.includes("button")&&(L.eliminarTodo(r),f.removeChild(n))})),p.addEventListener("click",(function(){L.eliminarCompletados();for(var t,e=f.children.length-1;0<=e;e--)(t=f.children[e]).classList.contains("completed")&&f.removeChild(t)})),v.addEventListener("click",(function(t){var e=t.target.text;if(e){y.forEach((function(t){return t.classList.remove("selected")})),t.target.classList.add("selected");var n,r=s(f.children);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.classList.remove("hidden");var a=o.classList.contains("completed");"Pendientes"===e?a&&o.classList.add("hidden"):"Completados"===e&&(a||o.classList.add("hidden"))}}catch(t){r.e(t)}finally{r.f()}}}));var b,S,w,L=new u;L.todos.forEach((function(t){return g(t)})),b=L.todos,S='<span class="todo-count"><strong>'.concat(b.length,"</strong> pendiente(s)</span>"),(w=document.createElement("div")).innerHTML=S,h.append(w.firstElementChild),w.firstElementChild}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(606)})();