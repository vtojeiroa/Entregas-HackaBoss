const minimist = require("minimist");
const fs = require("fs-extra");
const { es, gl, en } = require("date-fns/locale");
const path = require("path");
const chalk = require("chalk");
const os = require("os");
const { formatDistance } = require("date-fns");

require("dotenv").config();

//node todo.js add Comprar pan //Añadiria "comprar pan" al principio de la lista de tareas
//node todo.js priority 1 //Añadiria prioridad alta a la tarea 1
//node todo.js list //Listaría todas las tareas
//node todo.js done  1 //Marcaría la tarea 1 como hecha
//node todo.js undone  1 //Desmarcaría la tarea 1 como hecha
//node todo.js clean //Borraria las tareas marcadas como ya hechas

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

const file = path.join(os.homedir(), process.env.TASKS_FILE);

let dateLocaleConfig;

switch (process.env.LINGUAXE) {
  case "es":
    dateLocaleConfig = { locale: es };
    break;
  case "en":
    dateLocaleConfig = { locale: en };
    break;
  default:
    dateLocaleConfig = { locale: gl };
}

const listTitle = {
  en: "Todo list",
  es: "Lista de tareas",
  gl: "Lista de tarefas",
};

let listTodos = [];

if (fs.existsSync(file)) {
  listTodos = JSON.parse(fs.readFileSync(file, { encoding: "utf8" }));
}

const todo = {
  //Añadimos un Todo nuevo.
  add: function (text, priority) {
    listTodos.unshift({
      text: text,
      added: new Date(),
      priority: false,
      done: false,
    });
  },
  //Asignamos prioridad al todo
  priority: function (index) {
    if (listTodos[index - 1]) {
      listTodos[index - 1].priority = true;
    }
  },

  //Borramos los Todos marcados como done.
  clean: function () {
    listTodos = listTodos.filter(function (todo) {
      return todo.done === false;
    });
  },
  // Marcamos el estado de la tarea  como done
  done: function (index) {
    if (listTodos[index - 1]) {
      listTodos[index - 1].done = true;
    }
  },
  // Marcamos el estado de la tarea  como undone
  undone: function (index) {
    if (listTodos[index - 1]) {
      listTodos[index - 1].done = false;
    }
  },

  // Guardamos la lista en el archivo
  save: function () {
    fs.writeFileSync(file, JSON.stringify(listTodos));
  },

  // Listamos los Todos.
  list: function () {
    console.log();
    console.log(chalk.blue(listTitle[process.env.LINGUAXE]));
    console.log();
    listTodos.forEach(function (todo, index) {
      const todoStatus = todo.done ? "☑️" : "☐";
      const todoHumanDate = formatDistance(
        new Date(todo.added),
        new Date(),
        dateLocaleConfig
      );
      const todoText = todo.done ? chalk.strikethrough(todo.text) : todo.text;

      const todoDisplay = chalk`   ${
        index + 1
      } - ${todoStatus} ${todoText} (añadida hace ${todoHumanDate})`;

      if (todo.priority === true) {
        console.log(chalk.red(todoDisplay));
      } else {
        console.log(chalk.green(todoDisplay));
      }
    }),
      console.log();
  },
};

const argv = process.argv.slice(2);
const command = argv.shift();

if (typeof todo[command] === "function") {
  todo[command].call(todo, argv.join(" "));
  todo.save();
}
