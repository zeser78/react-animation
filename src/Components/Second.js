import React, { Component } from "react";

import { CSSTransition } from "react-transition-group";

export const FADE_TIMEOUT = 3000;

export default class Second extends Component {
  //   defaultProps = {
  //     in: false,
  //     timeout: FADE_TIMEOUT
  //   };
  render() {
    return <CSSTransition {...this.props} classNames={styles} />;
  }
}
