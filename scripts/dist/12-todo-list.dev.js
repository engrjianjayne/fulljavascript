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
  todoList.forEach(function (todoObject, index) {
    var name = todoObject.name,
        dueDate = todoObject.dueDate;
    var html = "<div>".concat(name, "</div>\n       <div>").concat(dueDate, "</div> \n          <button class=\"delete-todo-button js-delete-todo-button\">Delete</button>\n        ");
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  document.querySelectorAll('.js-delete-todo-button').forEach(function (deleteButton, index) {
    deleteButton.addEventListener('click', function () {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click', function () {
  addTodo();
});

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
//# sourceMappingURL=12-todo-list.dev.js.map
