import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NewMemberForm from "./NewMemberForm";
import MemberList from "./MemberList";

function App() {
  const [members, setMembers] = useState([]);

  const addMember = member => {
    setMembers([...members, member]);
  }

  return (
    <div className="App">
      <NewMemberForm addMember={addMember}/>
      <MemberList members={members}/>
    </div>
  );
}

export default App;
