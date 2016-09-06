import * as React from "react";
import { Link } from "react-router";

import "../../stylesheets/aside";

export interface AsideButtonProps { name: string; url: string; }

export class AsideButton extends React.Component<AsideButtonProps, {}> {
  render() {
    return (
      <Link to={this.props.url}>
        <li>
          /{this.props.name}
        </li>
      </Link>
    );
  }
}
