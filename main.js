/* flex-direction: */
function row(){
  const row = document.querySelector("#items")
  row.style.flexDirection = "row"
}


function column(){
  const column = document.querySelector("#items")
  column.style.flexDirection = "column"
}

function rowReverse(){
  const rowReverse = document.querySelector("#items")
  rowReverse.style.flexDirection = "row-reverse"
}

function columnReverse(){
  const columnReverse = document.querySelector("#items")
  columnReverse.style.flexDirection = "column-reverse"
}

/* justify-content: */
function flexStart(){
  const flexStart = document.querySelector("#items")
  flexStart.style.justifyContent = "flex-start"
}

function jcCenter(){
  const jcCenter = document.querySelector("#items")
  jcCenter.style.justifyContent = "center"
}

function flexEnd(){
  const flexEnd = document.querySelector("#items")
  flexEnd.style.justifyContent = "flex-end"
}

/* align-items: */
function AiFlexStart(){
  const AiFlexStart = document.querySelector("#items")
  AiFlexStart.style.alignItems = "flex-start"
}

function AiCenter(){
  const AiCenter = document.querySelector("#items")
  AiCenter.style.alignItems = "center"
}

function AiFlexEnd(){
  const AiFlexEnd = document.querySelector("#items") 
  AiFlexEnd.style.alignItems = "flex-end"    
}