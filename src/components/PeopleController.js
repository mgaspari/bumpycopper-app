import React from "react"
import Show from "./Show"
import PersonForm from "./PersonForm"

export default class PeopleController extends React.Component{


  render(){
    let retVal = () => {

      if(this.props.selectedPerson){

        if(this.props.showForm === false){
          return <Show selectedPerson={this.props.selectedPerson} formHandler={this.props.formHandler}  />
        }else{
        return  <PersonForm selectedPerson={this.props.selectedPerson} formHandler={this.props.formHandler} changeName={this.props.changeName}  />
        }
      }
    }
    return(
      <div>
        {retVal()}
      </div>

    )
  }
}
