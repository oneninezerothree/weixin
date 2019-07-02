import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  p {
    color: #58bc58;
  }
`;

class ComponentName extends WeElement {
  constructor(...args) {
    super(...args);
    this.state = {
      name: "yao"
    };
  }

  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        null,
        h("p", null, this.state.name),
        h(
          "button",
          {
            onClick: () => {
              this.setState({
                name: "Jing"
              });
            }
          },
          "Ok"
        )
      )
    );
  }
}

ComponentName.css = `p{color:#58bc58}`;
export default ComponentName;
