
  $( function() {
    $( "#table1, #table2, #table3").sortable({
      connectWith: ".123"
    }).disableSelection();
  } );

function addTask1(){
    let task = document.createElement("li");
    task.classList.add("boks");
    document.getElementById("table1").appendChild(task);

    
    
}

function addTask2(){
    let task = document.createElement("li");
    task.classList.add("boks2");
    document.getElementById("table2").appendChild(task);
    
}
function addTask3(){
    let task = document.createElement("li");
    task.classList.add("boks3");
    document.getElementById("table3").appendChild(task);
    
}

