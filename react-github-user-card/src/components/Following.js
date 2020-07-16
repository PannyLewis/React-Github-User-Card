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

const Following = (props) => {
  console.log(props.following);
  return (
    <StyledDiv /*key={props.follow.id}*/>
      Hello
      {/* <h2>{props.follow.name}</h2>
      <p>{props.follow.email}</p>
      <img src={props.follow.avatar_url} alt="follow" /> */}
    </StyledDiv>
  );
};

export default Following;
