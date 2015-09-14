$().ready(function() {
  $("#add-note").click(function() {
    $("#new-notes").append('<div class="new-note">' +
                            '<div class="form-group">' +
                              '<label for="new-note">Note</label>' +
                              '<input type="text" class="form-control new-text">' +
                              '</div>' +
                            '</div>');
  });

  $("#add-landmark").click(function() {
    $("#new-landmarks").append('<div class="new-landmark">' +
                            '<div class="form-group">' +
                              '<label for="new-landmark">Landmark</label>' +
                              '<input type="text" class="form-control new-markland">' +
                              '</div>' +
                            '</div>');
  });

  $("#add-date").click(function() {
    $("#new-dates").append('<div class="new-date">' +
                            '<div class="form-group">' +
                              '<label for="new-from-date">from</label>' +
                              '<input type="date" class="form-control new-from-date">' +
                            '</div>' +
                            '<div class="form-group">' +
                              '<label for="new-to-date">to</label>' +
                              '<input type="date" class="form-control new-to-date">' +
                            '</div>' +
                          '</div>');
  });

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#new-place-name").val();
    var newPlace = { placeName: inputtedPlaceName, notes: [], landmarks: [], dates: [] };

    $(".new-note").each(function() {
      var inputtedNote = $(this).find("input.new-text").val();
      newPlace.notes.push(inputtedNote);
      debugger;
    });

    $(".new-landmark").each(function() {
      var inputtedLandmark = $(this).find("input.new-markland").val();
      newPlace.landmarks.push(inputtedLandmark);
    });

    $(".new-date").each(function() {
      var inputtedFromDate = $(this).find("input.new-from-date").val();
      var inputtedToDate = $(this).find("input.new-to-date").val();
      var newDate = { fromDate: inputtedFromDate, toDate: inputtedToDate };
      newPlace.dates.push(newDate);
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName);

      $("ul#notes").text("");
      newPlace.notes.forEach(function(note) {
        $("ul#notes").append("<li>" + note + "</li>");
      });

      $("ul#landmarks").text("");
      newPlace.landmarks.forEach(function(landmark) {
        $("ul#landmarks").append("<li>" + landmark + "</li>");
      });

      $("ul#dates").text("");
      newPlace.dates.forEach(function(date) {
        $("ul#dates").append("<li>" + "from: " + date.fromDate + " to: " +  date.toDate + "</li>");
      });

    });

    $("input#new-place-name").val("");
    $("input.new-markland").val("");
    $("input.new-text").val("");
    $("input.new-from-date").val("");
    $("input.new-to-date").val("");
  });

});
