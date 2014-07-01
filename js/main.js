$(function() {
  
  $(".timeline").append(addliBox('Right'));
  $(".timeline").append(addMonth('july'));


  function addMonth(monthName) {
    return $("<li>", {text: monthName.toUpperCase(), class: "month"});
  }

  function addIteration() {
    
  }

  function addliBox(side) {
    var fadeIn = "fadeIn"+side;
    var $li = $("<li class='animated visible "+fadeIn+"' data-animation='"+fadeIn+"'>");

    $li.append(addDivBox(side));

    return $li;
  }

  function addDivBox(side) {
    $div = $("<div>", {class: "timeline-panel "+side.toLowerCase()});
    $div.append(addTitle('Iteration #3 - 40 hours'));
    $div.append(addTask(4));
    
    return $div;
  }

  function addTitle(title) {
    return $("<h4>", {text: title});
  }

  function addTask(tasks) {
    $p = $("<p>");
    $ul = $("<ul>");

    for (i=1; i<= tasks; i++) {
      $li = $("<li>", {text: "Task "+i})
      $ul.append($li);
    }
    
    return $p.append($ul);
  }

  
});