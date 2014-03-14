// todos.js
var counter = 0;

$("<ul id='todos'></ul>").appendTo("body");


function addTodo(todoText) {
  var todo = $("<li class='todo' id='" + counter+ "'>" + todoText + "</li>")
  $('ul').append(todo);
  $('li#'+counter).append("<input type='checkbox' id='complete'></input>")
  $('li#'+ counter).append("<button>x</button>");
  counter++
}

$("form").on('submit', function(e) {
  console.log(e);
  e.preventDefault();
  var toDoText = $("input").val()
  addTodo(toDoText);
})