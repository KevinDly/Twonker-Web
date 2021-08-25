import React from "react";

//The most basic component, displays post texts as well as other metadata.
class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <body>{this.props.text}</body>;
  }
}

export default Post;
