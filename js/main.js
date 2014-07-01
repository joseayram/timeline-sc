$(function() {

  var configYML = YAML.load('estimate.yml');
  var flag = true;
        
  configYML.forEach(loopElements);

  /**
   * Loop all Elements in Yaml File
   */
  function loopElements(element, index, array) {
    strSide = side();

    $firstContainer = createFirstContainer(strSide);
    $secondContainer = createSecondContainer(strSide);
    $title = createTitle(index+1, configYML[index].iteration.hours);
    $tasks = createTasks(index);
    
    $secondContainer.append($title);
    $secondContainer.append($tasks);
    $firstContainer.append($secondContainer);

    $(".timeline").append($firstContainer);
  }

  /**
   * Return the side of the boxes
   * @return String
   */
  function side() {
    if (flag == true) {
      flag = false;
      return 'Right';
    } else {
      flag = true;
      return 'Left'
    }

  }

  /**
   * @return <li class="month">MONTH</li>
   */
  function addMonth(monthName) {
    return $("<li>", {text: monthName.toUpperCase(), class: "month"});
  }

  /**
   * @return String <li class="animated visible fadeInLeft fadeInRight" data-animation="fadeInLeft"></li>
   */
  function createFirstContainer(side) {
    var fadeIn = "fadeIn"+side;
    return $("<li class='animated visible "+fadeIn+"' data-animation='"+fadeIn+"'>");  
  }

  /**
   * @return String <div class="timeline-panel right left"></div>
   */
  function createSecondContainer(side) {
    return $("<div>", {class: "timeline-panel "+side.toLowerCase()});
  }

  /**
   * @return String <h4>Iteration #1 - 40 hours</h4> 
   */
  function createTitle(number, hours) {
    return $("<h4>", {text: "Iteration #"+number+" - "+hours+" hours"});
  }
  
  /**
   * @return String <li>Task Description</li>
   */ 
  function createTasks(index) {
    count = configYML[index].iteration.tasks.length;
    tasks = configYML[index].iteration.tasks;
    $p = $("<p>");
    $ul = $("<ul>");
     
    for(i=0; i<count; i++) {
      $ul.append($("<li>", {text: tasks[i].task}));
    }

    return $p.append($ul);

  }
    
});