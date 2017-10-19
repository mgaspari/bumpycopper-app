import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu"
import Slide from "./components/Slide"
import PeopleController from "./components/PeopleController"


class App extends Component {
  state = {
    people: [],
    selectedPerson: null,
    showForm: false
  }
  selectHandle = (person) => {
    let personObj = this.state.people.filter((pers) =>  {
      if(pers.name.first === person[0] && pers.name.last === person[1]){
        return pers
      }
    })
    this.setState({
      selectedPerson: personObj[0]
    })
  }

  formHandler = (event) => {
    this.setState({
      showForm: !this.state.showForm
    })
  }
  setFormFalse = () => {
    this.setState({
      showForm: false
    })
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=10").then(res => res.json()).then(json => {
      this.setState({
        people: json.results
      }, () => console.log(this.state.people))
    })
  }

  setDefault = () => {
    this.setState({
      selectedPerson: null
    })
  }

  changeName = (event) => {
    event.preventDefault()
    console.log(event)
  }

  render() {
    return (
      <div className={["App", "ui grid"].join(' ')}>
        <Menu setDefault={this.setDefault} />
        {this.state.people.length != 0 ? <div className="ui centered grid"> <Slide selectHandle={this.selectHandle} people={this.state.people} setFormFalse={this.setFormFalse} />
         </div> : null }
        {this.state.people.length != 0 ? <div> <PeopleController selectedPerson={this.state.selectedPerson} formHandler={this.formHandler} showForm={this.state.showForm} changeName={this.changeName} />
         </div> : null }


      </div>
    );
  }
}

export default App;
