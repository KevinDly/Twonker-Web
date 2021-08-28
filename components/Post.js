import React from "react";

//The most basic component, displays post texts as well as other metadata.
class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.text}</div>;
  }
}

export default Post;
