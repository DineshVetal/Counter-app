import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("countersRrender");
    const {
      onReset,
      onIncrement,
      counters,
      onDelete,
      onDecrement,
      inputValue,
      handleChange,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-warning btn-sm m-2">
          Reset
        </button>
        <input
          onChange={(evt) => handleChange(evt)}
          className="btn btn-primary btn-sm m-2"
          type="number"
        />
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

// const counters = this.state.counters.map((i) => {
//   if (i.id == counterId) i.value++;
//   return i;
// });
// this.setState({ counters });
