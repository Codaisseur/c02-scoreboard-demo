import React from "react";

export interface IUser {
  name: string;
  present: boolean;
}

export interface IUserComponent extends IUser {
  togglePresence: () => void;
}

const User = (props: IUserComponent) => (
  <div>
    User: <strong>{props.name}</strong>
    <p>
      {props.name} is{` `}
      {props.present ? null : <strong>not</strong>}{` `}
      present
    </p>
    <button onClick={props.togglePresence}>
      Toggle presence
    </button>
  </div>
);

export default User;
