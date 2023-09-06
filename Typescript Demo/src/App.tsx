import React from 'react';
import './App.css';
import { Message } from './Component/Message';
import { Person } from './Component/Person';
import { PersonList } from './Component/PersonList';
import { Status } from './Component/Status';

function App() {
  const person = {
    first : "Patty",
    last : "Bateman"
  }

  const personList =[
    {
      first : "Bruce",
      last : "Wayne"
    },
    {
      first : "Joe",
      last : "Ken"
    },
    {
      first : "Christopher",
      last : "Nolan"
    }
  ] 
  return (
    <div className="App">
      <Message name="Shamura" count={20} logged={true}/>
      <Person name = {person}/> 
      <PersonList names = {personList}/>
      <Status status='success'/>
    </div>
  );
}

export default App;
