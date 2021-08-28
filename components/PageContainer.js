import React, { Component } from "react";
import PostContainer from "./PostContainer";
import InputContainer from "./InputContainer";
import io from "socket.io-client";

//Component that connects all top level components together.
const defaultText = "";
class PageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: defaultText, texts: ["Hello", "Let's go"] };
    this.handleInputAreaClick = this.handleInputAreaClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.socket = undefined;
  }

  handleInputChange(input) {
    this.setState({ inputText: input });
  }

  componentDidMount() {
    this.socket = io("ws://localhost:2999");

    this.socket.on("initData", (data) => {
      /*var initialArray = [];
      //console.log(data);
      data.forEach((doc) => {
        initialArray.push(doc.content);
      });*/
      //console.log(initialArray);
      this.setState({ texts: data });
    });

    //Update text posts with new post.
    this.socket.on("newPost", (data) => {
      var newList = this.state.texts.slice();
      newList.unshift(data);
      this.setState({ texts: newList });
    });

    //TODO: Create new listener that listens for a single post rather than multiple.
  }

  handleInputAreaClick() {
    //Need to replace this with connection to API

    if (this.socket != undefined && this.socket.connected) {
      //If websocket is available
      this.socket.emit("recievedPost", this.state.inputText);
      this.setState({ inputText: defaultText });
    } else {
      //Update default posts if websocket isn't available.
      //TODO: Make posts local via cache?
      var prevArray = this.state.texts.slice();
      prevArray.push(this.state.inputText);
      this.setState({ texts: prevArray });
      this.setState({ inputText: defaultText });
    }
  }

  //TODO: pass in the time in miliseconds as a key.
  render() {
    //var textsReversed = this.state.texts.slice().reverse();
    return (
      <div>
        <InputContainer
          input={this.state.inputText}
          onChange={this.handleInputChange}
          onClick={this.handleInputAreaClick}
        />
        <PostContainer texts={this.state.texts} />
      </div>
    );
  }
}

export default PageContainer;
