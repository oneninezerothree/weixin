import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  p {
    color: red;
  }
`;

class Test extends WeElement {
  constructor(...args) {
    super(...args);
    this.state = {
      title: "hello world123"
    };
  }

  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        null,
        h(
          "p",
          {
            onClick: this.testClick.bind(this)
          },
          this.state.title
        )
      )
    );
  }

  componentDidMount() {
    console.log("生命周期");
  }

  testClick() {
    this.setState({
      title: "Yao"
    });
  }
}

Test.css = `p{color:red}`;
export default Test;
