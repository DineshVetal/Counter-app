import React, { Component } from "react";

class Counter extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  // }
  render() {
    // console.log("counterRender");
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="badge badge-ternery badge-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="badge badge-ternery badge-sm m-2"
            disabled={this.props.counter.value <= 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  // getBtnClasses() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.props.counter.value === 0 ? "warning" : "primary";
  //   return classes;
  // }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}
export default Counter;
// handleIncrement = (product) => {
//   console.log(product);
//   this.setState({ count: this.state.count + 1 });
// };
// state = {
//   count: this.props.counter.value,
//   // tags: [],
// };
// doHandleIncrement = () => {
//   this.handleIncrement({ id: 1 });
// };
// constructor() {
//   super();
//   this.handleIncrement = this.handleIncrement.bind(this);
// }
/* {this.state.tags.length === 0 && "please create a new tag"}
  {this.renderTags()} */
// renderTags() {
//   if (this.state.tags.length === 0) return <p>There Are No Tags</p>;
//   return (
//     <ul>
//       {this.state.tags.map((tag) => (
//         <li key={tag}>{tag}</li>
//       ))}
//     </ul>
//   );
// }
