// todos.js
var counter = 0;

// var todos = $.getJSON("/todos");


$("<div id='container'><ul id='todos'></ul></div>").appendTo("body");


function addToDo(todoText, completeness, id) {

  var todo = $("<li id='" + id + "'>" + todoText + "</li>")
  $('ul').append(todo);
  $('li#'+id).append("<input class='checkbox' type='checkbox' id='complete"+id+"'></input>");
  
  if(completeness == true) {
    $('li#'+id).addClass("complete");
    $('input#complete'+id).prop('checked', true)
  }

  $('li#'+ id).append("<button class='delete'>x</button>");

  $("button.delete").on("click", function(response) {
    // $(this).parent().remove();

    var id = $(this).parent().attr('id');

    $.ajax({
      url: '/todos/'+id,
      type: 'DELETE'
    })
    $(this).parent().remove();
  })

  var checkBox = $("input#complete"+id);
  
  checkBox.on("click", function(e) {

    $(this).parent().toggleClass("complete");

    var id = $(this).parent().attr('id');
    
    $.ajax({
      url: '/todos/'+id,
      type: 'PUT',
      data: {complete: !completeness}
    });
  })
}

function listToDos() {
  // counter = 1;
  $.getJSON('/todos', function(response) {
    for(var i = 0; i < response.length; i++) {
      addToDo(response[i].task, response[i].complete, response[i].id);
      console.log(response[i].id);
    }
  })
}
 
$("form").on('submit', function(e) {
  e.preventDefault();
  var toDoText = $("input").val()
  // var newToDo = addToDo(toDoText, false);
  $.post('/todos', {task: toDoText, complete: false, })
  $("li").remove();
  listToDos();
  $("input").val("");
})

listToDos();
