import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NewMemberForm from "./NewMemberForm";

function App() {
  const [members, setMembers] = useState([{
    name: "",
    email: "",
    role: ""
  }]);

  const addMember = member => {
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <NewMemberForm addMember={addMember}/>
    </div>
  );
}

export default App;
