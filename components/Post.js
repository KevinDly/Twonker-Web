import React from "react";
import { InView } from "react-intersection-observer";
import socket from "./socket";
//The most basic component, displays post texts as well as other metadata.
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.socket = socket;
    this.inView = false;
    this.emitClientListEnd.bind(this);
  }

  emitClientListEnd() {
    if (!this.props.time) return;
    if (this.props.load == false)
      console.log("Something went wrong, function shouldn't update");
    else {
      /*console.log("this.props.text " + this.props.text);
      console.log("this.props.time " + this.props.time);
      console.log("Emit successfully");*/
      this.socket.emit("clientListEnd", this.props.time);
    }
  }

  /*componentDidMount() {
    if (this.inView) this.emitClientListEnd();
  }*/

  render() {
    /*if (this.props.load == false)
      return <div>{this.props.text}</div>;*/
    if (this.props.load != false) {
      console.log("Loaded");
      return (
        <InView
          as="div"
          onChange={(inView) => {
            console.log("inview in component: " + inView);
            this.inView = inView;
            if (inView == true) {
              this.emitClientListEnd();
            }
            console.log("socket in component: " + this.socket);
          }}
        >
          <div>{this.props.text}</div>
        </InView>
      );
    }
    return <div>{this.props.text}</div>;
  }
}

export default Post;
