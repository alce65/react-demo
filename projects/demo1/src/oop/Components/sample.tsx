import { Component, type JSX } from "react";

type Props = {
    name: string;
}

type State = {
    count: number;
}


export class SampleComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  override render(): JSX.Element {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}