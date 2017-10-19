import React from "react"

function PersonForm(props){
  return(
    <form className="ui form">
  <div className="equal width fields">
    <div className="field">
      <label>First name</label>
      <div className="ui input">
        <input type="text" value={props.selectedPerson.name.first} />
      </div>
    </div>
    <div className="field">
      <label>Last name</label>
      <div className="ui input">
        <input type="text" value={props.selectedPerson.name.last} />
      </div>
    </div>
    <div className="field">
      <label>Email</label>
      <div className="ui input">
        <input type="text" value={props.selectedPerson.email} />
      </div>
    </div>
    {/* <div className="field">

    </div> */}
  </div>
</form>
  )
}

export default PersonForm
