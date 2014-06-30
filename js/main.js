$(function() {
  
  $(".timeline").append(addMonth('july'));
  $(".timeline").append(addliBox('Right'));

  function addMonth(monthName) {
    return $("<li>", {text: monthName.toUpperCase(), class: "month"});
  }

  function addliBox(side) {
    var fadeIn = "fadeIn"+side;
    var $li = $("<li class='animated visible "+fadeIn+"' data-animation='"+fadeIn+"'>");

    $li.append(addDivBox(side));

    return $li;
  }

  function addDivBox(side) {
    return $("<div>", {class: "timeline-panel "+side.toLowerCase()});
  }

  function addTitle(title) {
    return $("<h4>", {text: title});
  }

  
});