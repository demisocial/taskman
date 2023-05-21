$(document).ready(function() {
  // Task Manager
  var taskList = [];

  function renderTasks() {
    var taskListElement = $('#task-list');
    taskListElement.empty();

    for (var i = 0; i < taskList.length; i++) {
      var task = taskList[i];

      var taskItem = $('<li>')
        .addClass('list-group-item task-item')

      var taskTitle = $('<span>')
        .addClass('task-title')
        .text(task.title);
      
      var expandButton = $('<button>')
        .addClass('btn btn-primary expand-button')
        .text('Expand');

      expandButton.click(function() {
        $(this).siblings('.task-container').toggleClass('active');
      });

      taskItem.append(taskTitle, expandButton);

      var subtaskList = $('<ul>').addClass('subtask-list'); // Container for subtasks
      taskItem.append(subtaskList);

      var taskContainer = $('<div>').addClass('task-container');

      var hideButton = $('<button>').text('Hide').addClass('btn btn-primary btn-lg hide-button').css('position', 'absolute').css('bottom', '0').css('left', '0');
      
      hideButton.click(function() {
        $(this).parent().removeClass('active');
      });
      
      taskContainer.append(hideButton);
      
      taskItem.one('click', function() {
        $(this).find('.task-container').addClass('active');
      });

      var leftSection = $('<div>').addClass('left-section');
      var subtaskForm = $('<form>').addClass('subtask-form');
      var subtaskInput = $('<input>')
        .attr('type', 'text')
        .addClass('form-control subtask-input')
        .attr('placeholder', 'Enter a subtask');
      var subtaskButton = $('<button>')
        .attr('type', 'submit')
        .addClass('btn btn-secondary subtask-button')
        .text('Add Subtask');

      // Handle form submission for adding a new subtask
      subtaskForm.on('submit', function(e) {
        e.preventDefault();
        var subtaskTitle = subtaskInput.val();
        if (subtaskTitle.trim() !== '') {
          var subtaskItem = $('<li>')
            .addClass('subtask-item')
            .append(
              $('<input>')
                .attr('type', 'checkbox')
                .addClass('subtask-checkbox'),  // Add a checkbox for the subtask
              $('<span>').text(subtaskTitle)
            );
          subtaskList.append(subtaskItem).addClass('subtask-list');  // Add the new subtask to the subtask list
          subtaskInput.val('');  // Clear the input field
        }
      });

      subtaskForm.append(subtaskInput, subtaskButton);
      leftSection.append(subtaskForm);

      var rightSection = $('<div>').addClass('right-section');
      var prioritySelect = $('<select>')
        .addClass('form-control priority-select')
        .append(
          $('<option>').text('High').val('high'),
          $('<option>').text('Medium').val('medium'),
          $('<option>').text('Low').val('low')
        );
      var dueDateInput = $('<input>').addClass('form-control due-date-input').attr('type', 'date');
      var statusSelect = $('<select>')
        .addClass('form-control status-select')
        .append(
          $('<option>').text('Completed').val('completed'),
          $('<option>').text('In Progress').val('in-progress'),
          $('<option>').text('Not Started').val('not-started')
        );
      var collaboratorsInput = $('<input>').addClass('form-control collaborators-input');

      rightSection
        .append(
          $('<div>').addClass('field-container').append($('<label>').text('Priority'), prioritySelect),
          $('<div>').addClass('field-container').append($('<label>').text('Due Date'), dueDateInput),
          $('<div>').addClass('field-container').append($('<label>').text('Status'), statusSelect),
          $('<div>').addClass('field-container').append($('<label>').text('Collaborators'), collaboratorsInput)
        )
        .append($('<button>').addClass('btn btn-primary expand-button').text('Pin/Unpin'));

      taskContainer.append(leftSection, rightSection);
      taskItem.append(taskContainer);
      taskListElement.append(taskItem);
    }
  }

    $('#task-form').submit(function(event) {
     event.preventDefault();
    var taskInput = $('#task-input');
    var taskTitle = taskInput.val();

      if (taskTitle.trim() !== '') {
       var task = { title: taskTitle };
      taskList.push(task);
      taskInput.val('');
      renderTasks();
    }
  });
})