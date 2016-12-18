import * as React from "react";
import { Link } from "react-router";

import "../../stylesheets/aside";
import { sock } from "../../index";

export interface AsideButtonProps { name: string; url: string; }

export class AsideButton extends React.Component<AsideButtonProps, {}> {
  render() {
    return (
      <Link to={this.props.url}>
        <li onClick={() => this.handleClick(this.props.name)} >
          /{this.props.name}
        </li>
      </Link>
    );
  }

  handleClick(room:string) {
    sock.joinRoom(room);
  }
}
