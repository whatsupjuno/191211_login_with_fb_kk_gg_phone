import React from "react";

import SideNavSchema from "../../constants/SideNavSchema";
import SideNavPresenter from "./SideNavPresenter";

export default () => {
  return <SideNavPresenter items={SideNavSchema} />;
};
