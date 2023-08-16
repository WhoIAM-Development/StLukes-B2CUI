const querySelector = '[id$=_year]'

$(document).ready(function() {
  waitForElm(querySelector).then((elm) => applyRules());
});

function applyRules() {
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

  // Store the select elements in variables
  $daySelect = $('#external_DateOfBirth_day');
  $monthSelect = $('#external_DateOfBirth_month');

  // Detach and re-append the elements in the desired order
  $monthSelect.detach().insertBefore($daySelect);
}

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelectorAll(selector)) {
      return resolve(document.querySelectorAll(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelectorAll(selector)) {
        resolve(document.querySelectorAll(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
