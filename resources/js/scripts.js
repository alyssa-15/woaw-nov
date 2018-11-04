cssVars();

// open nav

$(".nav-prompt").click(function() {
  // if nav inner attribute aria is false, do something
  if ($(".nav-inner").attr("aria-expanded") == "false") {
    $(".nav-inner").attr("aria-expanded", "true");
  } else {
    $(".nav-inner").attr("aria-expanded", "false");
  }

  if ($(".nav-prompt").text() == "Open Navigation") {
    $(".nav-prompt").text("Close Navigation");
  } else {
    $(".nav-prompt").text("Open Navigation");
  }
});

// nav active class

function activeMenu() {
  var url = window.location.href;

  $(".nav-inner a")
    .filter(function() {
      return this.href == url;
    })
    .addClass("active");
}

activeMenu();