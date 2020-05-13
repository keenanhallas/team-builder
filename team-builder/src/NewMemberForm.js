import React, { useState } from "react";
import ReactDom from "react-dom";

const NewMemberForm = ({addMember}) => {
    const [newMember, setNewMember] = useState({
        name: "",
        email: "",
        role: ""
    });
    
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            addMember(newMember);
            setNewMember({name: "", email: "", role: ""});
        }}>
            <h1>Add a new member:</h1>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                name="name"
                value={newMember.name}
                onChange={event => {
                    setNewMember({
                        ...newMember,
                        [event.target.name]: event.target.value
                    });
                }}
            />

            <label htmlFor="email">Email:</label>
            <input
                id="email"
                name="email"
                value={newMember.email}
                onChange={(event) => {
                    setNewMember({
                        ...newMember,
                        [event.target.name]: event.target.value
                    });
                }}
            />

            <label htmlFor="role">Role:</label>
            <input
                id="role"
                name="role"
                value={newMember.role}
                onChange={(event) => {
                    setNewMember({
                        ...newMember,
                        [event.target.name]: event.target.value
                    });
                }}
            />
            <button>Save member</button>
        </form>
    );
}

export default NewMemberForm;