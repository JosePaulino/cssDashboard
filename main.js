/* flex-direction: */
function row(){
  const column = document.querySelector("#items")
  column.style.flexDirection = "row"
}

function column(){
  const column = document.querySelector("#items")
  column.style.flexDirection = "column"
}

function rowReverse(){
  const column = document.querySelector("#items")
  column.style.flexDirection = "row-reverse"
}

function columnReverse(){
  const column = document.querySelector("#items")
  column.style.flexDirection = "column-reverse"
}

/* justify-content: */
function flexStart(){
  const column = document.querySelector("#items")
  column.style.justifyContent = "flex-start"
}

function jcCenter(){
  const column = document.querySelector("#items")
  column.style.justifyContent = "center"
}

function flexEnd(){
  const column = document.querySelector("#items")
  column.style.justifyContent = "flex-end"
}




/* align-items: */