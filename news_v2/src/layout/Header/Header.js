import React from "react";
import { TopNav } from "./TopNav";
import { MidNav } from "./MidNav";
import { BotNav } from "./BotNav";

const Header = () => {
  return (
    <div className="header-wrapper">
      <TopNav />
      <MidNav />
      <BotNav />
    </div>
  );
};

export { Header };
