////////////////context/////////////////////////////////
import React from "react";
import { useState } from "react";
export const NameOfContext = React.createContext("");

const ComponentProvider = ({ children }) => {
  return <NameOfContext.Provider value={{}}>{children}</NameOfContext.Provider>;
};

export default ComponentProvider;

////// On app.js or were ever you want to wrap//////////
import ComponentProvider from "./bubbleContext";
<BubbleProvider>////components to wrap</BubbleProvider>;
/////////////////////////////////

//////////inside your file were you want to use context//////
import { useContext } from "react";
import { NameOfContext } from "../bubbleContext";
const { display, start } = useContext(NameOfContext);
//////////////////////////////////////////////////
