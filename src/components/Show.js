import React from "react"

function Show(props){
  return(
  <div className="ui card">
  <img className="ui image" src={props.selectedPerson.picture.large} />
  <div className="content">
    <div className="header">{props.selectedPerson.name.first} {props.selectedPerson.name.last}</div>
    <div className="meta">Friend</div>
    <div className="description">{props.selectedPerson.email}</div>
  </div>
  <div className="extra content">
    <a>
<i aria-hidden="true" className="user icon"></i>Number: {props.selectedPerson.phone}</a>
  </div>
</div>
)
}

export default Show
