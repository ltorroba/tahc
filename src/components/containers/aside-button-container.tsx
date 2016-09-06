import * as React from "react";

import { AsideButton } from "../views/aside-button-view";

export interface AsideButtonContainerProps { name: string; }

export class AsideButtonContainer extends React.Component<AsideButtonContainerProps, {}> {
  render() {
    return <AsideButton name={ this.props.name } url={ "/" + this.props.name } />
  }
}
