#!/usr/bin/env node

const minimist = require("minimist");
const fs = require("fs-extra");
const { format } = require("date-fns");
const { es } = require("date-fns/locale");
const path = require("path");
const chalk = require("chalk");

//node todo.js Comprar pan //Añadiria "comprar pan" al principio de la lista de tareas
//node todo.js Ir al dentista--priority //Añadiria con prioridad alta
//node todo.js--list //Listaría todas las tareas
//node todo.js--done = 1 //Marcaría la tarea 1 como hecha
//node todo.js--undone = 1 //Desmarcaría la tarea 1 como hecha
//node todo.js--clean //Borraria las tareas ya hechas

//Cada tarea debe guardar el texto de la tarea, el estado y fecha añadida
//Cuando se listen debe mostrar toda esa información

//La lista de tareas debe guardarse en un archivo .tasks.json en el directorio personal del usuario.

//Modules:
//minimist
//fs-extra
//date-fns

//PARA NOTA:
//La aplicación debería leer un archivo .env que tuviera una variable de entorno LANG=es/gl
//en base a esa variable mostrar los textos de la aplicación

const file = path.join(process.cwd(), "task.json");

let listTodos = [];

if (fs.existsSync(file)) {
  listTodos = JSON.parse(fs.readFileSync(file, { encoding: "utf8" }));
}

const todo = {
  //Añadimos un Todo nuevo.
  add: function (text) {
    listTodos.unshift({
      text: text,
      added: format(new Date(), `d 'de' MMMM 'de' yyyy, HH':'mm`, {
        locale: es,
      }),
      priority: "normal",
      done: false,
    });
  },

  //Borramos los Todos marcados como done.
  clean: function () {
    listTodos = listTodos.filter(function (todo) {
      return todo.done === false;
    });
  },
  // Alterna el estado de la tarea (done o undone)
  done: function (index) {
    if (listTodos[index]) {
      listTodos[index].done = !listTodos[index].done;
    }
  },

  // Guardamos la lista en el archivo
  save: function () {
    fs.writeFileSync(file, JSON.stringify(listTodos));
  },

  // Listamos los Todos.
  list: function () {
    listTodos.forEach(function (todo, index) {
      process.stdout.write(
        "\n" +
          index +
          "\t" +
          todo.text +
          "\t" +
          todo.added +
          "\t" +
          (todo.done ? " \u2713" : "pendiente") +
          "\n"
      );
    });
  },
};

const argv = process.argv.slice(2);
const command = argv.shift();

if (typeof todo[command] == "function") {
  todo[command].call(todo, argv.join(" "));
  todo.save();
}
