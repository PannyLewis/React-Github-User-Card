import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  background-color: lightblue;
  font-size: 1.8rem;
  width: 50%;
  margin: 2.5% auto;
`;

const Users = (props) => {
  console.log(props.users);
  return (
    <div>
      <StyledDiv key={props.users.id}>
        hello
        <h2>{props.users.name}</h2>
      </StyledDiv>
    </div>
  );

  // <StyledDiv /*key={props.user.login}*/>
  //   {/* <h2>{props.user.name}</h2>
  //   <p>{props.user.email}</p>
  //   <img src={props.user.avatar_url} alt="user" /> */}
  // </StyledDiv>
};

export default Users;
