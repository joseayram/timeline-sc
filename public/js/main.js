$(function() {

  var flag = true;
  var number = 0;
  var file = setFile();
  var configYML = YAML.load('estimates/'+file+'.yml');
        
  configYML.forEach(loopElements);

  /**
   * Set filename for yaml config
   */
  function setFile() {
    hash = (location.hash).substr(1);
    
    if (hash === "") {
      return 'me.co';
    }else{
      return hash;
    }
    
  }

  /**
   * Loop all Elements in Yaml File
   */
  function loopElements(element, index, array) {
    if (configYML[index].month != undefined) {
      $element = createMonth(configYML[index].month);
      $(".timeline").append($element);
    } else if (configYML[index].iteration != undefined) {
      $element = createIteration(index);
      $(".timeline").append($element);
    }else if (configYML[index].title!= undefined){
      createHeader(element);
    }

  }


  /** 
   * This function puts info on the page.
   * returns nothings.
   * modifies a lot of stuff on the website
  */
  function createHeader(o){
    console.log(o);
    $(".title h1:first").html(o.title);
    $(".subtitle p:first").html(o.subtitle);
    $(".subtitle:nth-child(2) p").html(o.descrition);
    $(".velocity").html(o.velocity);
    $(".delivery-date").html(o.delivery);
    $(".budget").html(o.budget);
    $(".team").html("");
    o.team.forEach(function(m,i,a){
      $(".team").append("<p>" + m  + "</p>")
      console.log(m);
    })
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
  function createMonth(monthName) {
    return $("<li>", {text: monthName.toUpperCase(), class: "month"});
  }


  /**
   * @return String
   */
  function createIteration(index) {
    strSide = side();

    $firstContainer = createFirstContainer(strSide);
    $secondContainer = createSecondContainer(strSide);
    $title = createTitle(configYML[index].iteration.hours);
    $tasks = createTasks(index);
    
    $secondContainer.append($title);
    $secondContainer.append($tasks);
    
    return $firstContainer.append($secondContainer);
    
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
  function createTitle(hours) {
    number = number + 1;
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
