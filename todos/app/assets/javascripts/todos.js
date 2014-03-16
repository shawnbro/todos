// todos.js
var counter = 1;

$("<ul id='todos'></ul>").appendTo("body");


function addToDo(todoText, completeness) {
  var todo = $("<li id='" + counter+ "'>" + todoText + "</li>")
  $('ul').append(todo);
  $('li#'+counter).append("<input type='checkbox' id='complete"+counter+"'></input>");
  if(completeness == true) {
    $('li#'+counter).addClass("complete");
  }

  $('li#'+ counter).append("<button id='delete'>x</button>");
  var checkBox = $("input#complete"+counter.toString());
  
  checkBox.on("click", function(e) {
    $(this).parent().toggleClass("complete");
    var id = $(this).parent().attr('id');
    console.log(id)
    $.ajax({
      url: '/todos/'+id,
      type: 'PUT',
      data: {complete: true}
    });
  })
  counter++
}

function listToDos() {
  $.getJSON('/todos', function(response) {
    for(var i = 0; i < response.length; i++) {
      addToDo(response[i].task, response[i].complete);
    }
  })
}
 



$("form").on('submit', function(e) {
  e.preventDefault();
  var toDoText = $("input").val()
  addToDo(toDoText, false);
  $.post('/todos', {task: toDoText, complete: false})
  $("input").val("");
})

listToDos();
