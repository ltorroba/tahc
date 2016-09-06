import * as React from "react";

import { AsideButtonContainer } from "../containers/aside-button-container.tsx";

export class Aside extends React.Component<{}, {}> {
  render() {
    return (
      <aside className="primary-aside">
        <header>
          <h2>YOUR &lt;3</h2>
        </header>

        <ul>
          <AsideButtonContainer name="noname" />
          <AsideButtonContainer name="huehue" />
        </ul>
      </aside>
    );
  }
}
