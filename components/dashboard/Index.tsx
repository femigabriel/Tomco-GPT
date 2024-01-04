import React, { useState } from "react";
import { Login } from "../auth/login/Login";
import { ChatBoxPage } from "./chatbox/ChatBoxPage";

export const Index = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const gotoNextPage = () => {
    setCurrentStepIndex((x) => x + 1);
  };

  const gotoPreviousPage = () => {
    setCurrentStepIndex((x) => x - 1);
  };

  const renderCurrentSelection = () => {
    switch (currentStepIndex) {
      case 0:
        return <Login onNextClick={gotoNextPage} />;
      case 1:
        return <ChatBoxPage onNextClick={gotoNextPage} />;
    }
  };

  return <div>{renderCurrentSelection()}</div>;
};
