"use strict";

var todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];
renderTodoList();

function renderTodoList() {
  var todoListHTML = '';

  for (var i = 0; i < todoList.length; i++) {
    var todoObject = todoList[i]; // const name = todoObject.name;
    //const dueDate = todoObject.dueDate;

    var name = todoObject.name,
        dueDate = todoObject.dueDate;
    var html = "<div>".concat(name, "</div>\n       <div>").concat(dueDate, "</div> \n          <button onclick=\"\n          todoList.splice(").concat(i, ", 1);\n          renderTodoList();\n        \"class=\"delete-todo-button\">Delete</button>\n        ");
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  var inputElement = document.querySelector('.js-name-input');
  var name = inputElement.value;
  var dateInputElement = document.querySelector('.js-due-date-input');
  var dueDate = dateInputElement.value;
  todoList.push({
    name: name,
    dueDate: dueDate
  });
  inputElement.value = '';
  renderTodoList();
}
//# sourceMappingURL=11-todo-list.dev.js.map
