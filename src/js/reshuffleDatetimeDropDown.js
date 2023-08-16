$(document).ready(function() {
  // Store the select elements in variables
  var $daySelect = $('#dateOfBirth_day');
  var $monthSelect = $('#dateOfBirth_month');
  var $yearSelect = $('#dateOfBirth_year');

  // Detach and re-append the elements in the desired order
  $monthSelect.detach().insertBefore($daySelect);
});
