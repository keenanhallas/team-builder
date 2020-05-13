import React from "react";

const MemberList = ({members}) => {
    return (
        members.map((member, i) => {
            return (
                <div key={i} className="memberCard">
                    <p>Name: {member.name}</p>
                    <p>Email: {member.email}</p>
                    <p>Role: {member.role}</p>
                </div>
            );
        })
    );
}

export default MemberList;