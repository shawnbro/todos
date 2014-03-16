// todos.js
var counter = 0;

$("<ul id='todos'></ul>").appendTo("body");


function addToDo(todoText) {
  var todo = $("<li id='" + counter+ "'>" + todoText + "</li>")
  $('ul').append(todo);
  $('li#'+counter).append("<input type='checkbox' id='complete"+counter+"'></input>")
  $('li#'+ counter).append("<button id='delete'>x</button>");
  var checkBox = $("input#complete"+counter.toString());
  
  checkBox.on("click", function(e) {
    $(this).parent().toggleClass("complete")
  })
  counter++
}

// $( document ).ready( function() {
function listToDos() {
  $.getJSON('/todos', function(response) {
    for(var i = 0; i < response.length; i++) {
      addToDo(response[i].task);
    }
  })
}
 



$("form").on('submit', function(e) {
  e.preventDefault();
  var toDoText = $("input").val()
  addToDo(toDoText);
  $.post('/todos', {task: toDoText})
  $("input").val("");
})

listToDos();
