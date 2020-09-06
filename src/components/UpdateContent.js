import React, { Component } from "react";

class UpdateComtent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    this._inputFormHandler = this._inputFormHandler.bind(this);
  }

  render() {
    console.log(this.props.data);
    console.log("UpdateComtent render");

    return (
      <article>
        <h2>Update</h2>
        <form
          action={"/create_process"}
          method="post"
          onSubmit={function (e) {
            e.preventDefault();

            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this._inputFormHandler}
            />
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this._inputFormHandler}
            />
          </p>
          <p>
            <input type="submit" value="submit" />
          </p>
        </form>
      </article>
    );
  }

  _inputFormHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
}

export default UpdateComtent;
