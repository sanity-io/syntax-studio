import React, { Component, Fragment } from "react";
import Winamp from "./winamp/Winamp";

import styles from "./ImgLogo.css";
// While we recommend SVGs, an alternative is to use a regular image (png, jpg)
// Notice how we're "importing" the path from a local image - when building the
// studio, this image will automatically be part of the output bundle, with a
// hash that will make it easy to invalidate on changes.
import syntaxfmLogo from "./logo.png";

class ImgLogo extends Component {
  state = {
    playerActivated: false
  };

  togglePlayer = () =>
    this.setState({ playerActivated: !this.state.playerActivated });

  render() {
    const { playerActivated } = this.state || {};
    return (
      <Fragment>
        <img
          onClick={this.togglePlayer}
          className={styles.logo}
          src={syntaxfmLogo}
        />
        {playerActivated && <Winamp />}
      </Fragment>
    );
  }
}

export default ImgLogo;
