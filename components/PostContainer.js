import React from "react";
import Post from "./Post";

//Component that organizes all Post components.
class PostContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  createTable(props) {
    //props.texts
    var posts = new Array(this.props.texts.length);
    for (var i = 0; i < posts.length; i++) {
      posts[i] = <Post text={props.texts[i].content}/>
    }
    return posts;
  }

  //Need function in flex-box that returns a list of divs that are posts.
  render() {
    return <div className="flex-box">{this.createTable(this.props)}</div>;
  }
}

export default PostContainer;
