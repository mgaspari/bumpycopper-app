import React from "react"
import Show from "./Show"
import PersonForm from "./PersonForm"

export default class PeopleController extends React.Component{
  state = {
    showForm: false
  }
  render(){
    let retVal = () => {
      if(this.props.selectedPerson){
        if(this.state.showForm === false){
          return <Show selectedPerson={this.props.selectedPerson} />
        }else{
        return  <PersonForm selectedPerson={this.props.selectedPerson} />
        }
      }
    }
    return(
      <div>
        {/* {this.props.selectedPerson ? <Show selectedPerson={this.props.selectedPerson} /> : null } */}
        {retVal()}
        {/* {this.props.selectedPerson ? this.state.showForm ? <Show selectedPerson={this.props.selectedPerson} /> : <PersonForm selectedPerson={this.props.selectedPerson} /> : null } */}
      </div>
    )
  }
}
