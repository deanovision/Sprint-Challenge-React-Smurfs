import React from "react";
import { SmurfCard } from "./StyledComponents";

const Smurf = props => {
  const update = () => {
    props.history.push(`/update/${props.id}`);
  };
  return (
    <SmurfCard>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={update}>Update Smurf</button>
      <button onClick={() => props.removeSmurf(props.id)}>Delete Smurf</button>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
