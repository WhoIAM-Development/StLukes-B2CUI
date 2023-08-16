$(document).ready(function() {
  // Store the select elements in variables
  var $daySelect = $('#dateOfBirth_day');
  var $monthSelect = $('#dateOfBirth_month');

  // Detach and re-append the elements in the desired order
  $monthSelect.detach().insertBefore($daySelect);

    // Store the select elements in variables
    $daySelect = $('#readonly_DateOfBirth_day');
    $monthSelect = $('#readonly_DateOfBirth_month');

    // Detach and re-append the elements in the desired order
    $monthSelect.detach().insertBefore($daySelect);
});
