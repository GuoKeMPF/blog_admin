import { UserNav } from ".";

import React, { Fragment, type FC } from "react";



type HeaderProps = {

};

export const Header: FC<HeaderProps> = ({ }) => {
  return <Fragment>
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </div>
  </Fragment>;
};
export default Header
