import React from "react"

function PersonForm(props){
  return(

    <form className="ui form">
  <div className="equal width fields">
    <div className="field">
      <label>First name</label>
      <div className="ui input">
        <input type="text" defaultValue={props.selectedPerson.name.first} />
      </div>
    </div>
    <div className="field">
      <label>Last name</label>
      <div className="ui input">
        <input type="text" defaultValue={props.selectedPerson.name.last} />
      </div>
    </div>
    <div className="field">
      <label>Email</label>
      <div className="ui input">
        <input type="text" defaultValue={props.selectedPerson.email} />
      </div>
    </div>
    <div class="field">
      <br/>

     <button className="ui icon button" role="submit" onClick={props.changeName}><i aria-hidden="true" class="save large icon"></i></button>
     <button className="ui icon button" role="button" onClick={props.formHandler}><i aria-hidden="true" class="window close large icon"></i></button>
    </div>


    {/* <div className="field">

    </div> */}
  </div>
</form>

  )
}

export default PersonForm
