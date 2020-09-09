import * as React from "react";

export interface ICounterProps {}

type ICounterState = {
  count: number;
};

export default class Counter extends React.Component<
  ICounterProps,
  ICounterState
> {
  constructor(props: ICounterProps) {
    super(props);

    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  public render() {
    return (
      <div>
        <h1>5.class 変数</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.incrementCount}>class count+1</button>
      </div>
    );
  }
}
