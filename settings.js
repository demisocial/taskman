$(document).ready(function() {
  // Get saved settings from local storage
  var savedTheme = localStorage.getItem('taskManagerTheme');
  var savedNotificationEnabled = localStorage.getItem('taskManagerNotificationEnabled');
  var savedNotificationTime = localStorage.getItem('taskManagerNotificationTime');

  // Set initial values for settings
  var themeSelect = $('#theme-select');
  var notificationCheckbox = $('#notification-checkbox');
  var notificationTimeInput = $('#notification-time');

  // Set saved values if available
  if (savedTheme) {
    themeSelect.val(savedTheme);
    applyTheme(savedTheme);
  }

  if (savedNotificationEnabled) {
    notificationCheckbox.prop('checked', savedNotificationEnabled === 'true');
  }

  if (savedNotificationTime) {
    notificationTimeInput.val(savedNotificationTime);
  }

  // Handle theme selection change
  themeSelect.change(function() {
    var selectedTheme = $(this).val();
    applyTheme(selectedTheme);
    localStorage.setItem('taskManagerTheme', selectedTheme);
  });

  // Handle notification checkbox change
  notificationCheckbox.change(function() {
    var notificationEnabled = $(this).prop('checked');
    localStorage.setItem('taskManagerNotificationEnabled', notificationEnabled);
  });

  // Handle notification time change
  notificationTimeInput.change(function() {
    var notificationTime = $(this).val();
    localStorage.setItem('taskManagerNotificationTime', notificationTime);
  });

  // Apply selected theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      $('body').addClass('dark-theme');
    } else {
      $('body').removeClass('dark-theme');
    }
  }
});
