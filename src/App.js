import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 10 },
      { id: 3, value: 15 },
      { id: 4, value: 20 },
    ],
    inputValue: 0,
  };
  constructor() {
    super();
    console.log("app-render");
  }

  componentDidMount() {
    console.log("mounte render");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value += parseInt(this.state.inputValue);
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    // if (counters[index].value < this.state.inputValue)
    //   return alert("counter cant be negative");
    counters[index].value -= parseInt(this.state.inputValue);
    if (counters[index].value < 0) counters[index].value = 0;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleChange = (evt) => {
    console.log("skddufkja", evt.target.value);
    this.setState({ inputValue: evt.target.value });
  };
  render() {
    console.log("3 render");
    return (
      <React.Fragment>
        <NavBar
          totalCount={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
            inputValue={this.state.inputValue}
            handleChange={this.handleChange}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
// function App() {
//   return (
//     <React.Fragment>

//     </React.Fragment>
//   );
// }

// export default App;
