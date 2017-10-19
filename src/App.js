import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./components/Menu"
import Slide from "./components/Slide"
import PeopleController from "./components/PeopleController"


class App extends Component {
  state = {
    people: [],
    selectedPerson: null
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

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=10").then(res => res.json()).then(json => {
      this.setState({
        people: json.results
      }, () => console.log(this.state.people))
    })
  }
  render() {
    return (
      <div className={["App", "ui grid"].join(' ')}>
        <Menu />
        {this.state.people.length != 0 ? <div> <Slide selectHandle={this.selectHandle} people={this.state.people}/>
        <PeopleController selectedPerson={this.state.selectedPerson} /> </div> : null }

      </div>
    );
  }
}

export default App;
