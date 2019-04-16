import React from "react";

import User, { IUser } from "./User";
import Title from "./Title";

export interface IUserBoardState {
  users: IUser[];
}

class UserBoard extends React.Component<{}, IUserBoardState> {
  public state: IUserBoardState = {
    users: [
      { name: "Alice", present: true },
      { name: "Gerrit", present: true },
      { name: 'Joe', present: true },
    ]
  };

  render() {
    const totalCount = this.state.users.length;
    const presentCount = this.state.users.filter(u => u.present).length;

    return (
      <div>
        <Title>User Board</Title>
        <p>
          {presentCount} present | {totalCount - presentCount} not present
        </p>
        {this.state.users.map(user => (
          <User
            key={user.name}
            togglePresence={this.toggleUserPresence(user.name)}
            { ...user }
          />
        ))}
      </div>
    );
  }

  public toggleUserPresence = (name: string) => () => {
    this.setState({
      users: this.state.users.map(user => {
        if (user.name === name) {
          return { ...user, present: !user.present };
        }

        return user;
      }),
    });
  }
}

export default UserBoard;
