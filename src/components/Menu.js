import React from "react"

function Menu(props){
  return(
    <div class="row">
      <div class="column">
        <div class="ui inverted menu">
          <a class="active item" onClick={props.setDefault}>Home</a>
          <a class="item" onClick={props.setDefault}>Messages</a>
          <a class="item" onClick={props.setDefault}>Friends</a>
        </div>
      </div>
    </div>
  )
}

export default Menu
