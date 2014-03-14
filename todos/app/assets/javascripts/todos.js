// todos.js
var counter = 0;

$("<ul id='todos'></ul>").appendTo("body");


function addTodo(todoText) {
  var todo = $("<li id='" + counter+ "'>" + todoText + "</li>")
  $('ul').append(todo);
  $('li#'+counter).append("<input type='checkbox' id='complete'></input>")
  $('li#'+ counter).append("<button id='delete'>x</button>");
  counter++

  $('input#complete').on("click", function(e) {
  e.preventDefault(); 
  $(this).parent().toggleClass("complete")
})

}

$("form").on('submit', function(e) {
  e.preventDefault();
  var toDoText = $("input").val()
  addTodo(toDoText);
})


