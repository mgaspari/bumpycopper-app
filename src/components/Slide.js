import React from "react"

function Slide(props){
  let handleClick = (event) => {

    props.selectHandle(event.target.innerText.split(' '))
    props.setFormFalse()
  }
  return(
    <div className="ui pointing secondary vertical menu">
      {props.people.map((person)=> {
      return  <a className="item" value={person} onClick={handleClick}>{person.name.first} {person.name.last}</a>
      })}

    </div>
  )
}

export default Slide
