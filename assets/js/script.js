$(function () {
  // Display the current date in the header
  var currentDate = dayjs().format("dddd MMMM D");
  $("#currentDay").text(currentDate);

  // Function to update time-block classes based on current time
  function updateBlockClasses() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }

  // Update time-block classes initially
  updateBlockClasses();

  // Save user input to local storage when the save button is clicked
  $(document).on("click", ".saveBtn", function () {
    var blockId = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings("textarea").val();
    localStorage.setItem(blockId, userInput);
  });

  // Load user input from local storage
  $(".time-block").each(function () {
    var blockId = $(this).attr("id");
    var storedInput = localStorage.getItem(blockId);
    if (storedInput) {
      $(this).find("textarea").val(storedInput);
    }
  });
});
