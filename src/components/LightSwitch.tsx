import * as React from "react";

export interface ILightSwitchState {
  active: boolean;
}

export interface ILightSwitch {
  off?: boolean;
}

export default class LightSwitch extends React.Component<
  ILightSwitch,
  ILightSwitchState
> {
  public state: ILightSwitchState;

  public constructor(props: ILightSwitch) {
    super(props);
    this.state = { active: props.off ? false : true }
  }

  public render() {
    return (
      <div>
        <p>
          The light switch is{" "}
          <strong>{this.state.active ? "on" : "off"}</strong>
        </p>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }

  private toggle = () => this.setState({ active: !this.state.active });
}
